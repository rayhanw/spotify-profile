/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */
// https://github.com/spotify/web-api-auth-examples

const express = require("express"); // Express web server framework
const request = require("request"); // "Request" library
const cors = require("cors");
const querystring = require("querystring");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	REDIRECT_URI,
	FRONTEND_URI
} = process.env;

const client_id = SPOTIFY_CLIENT_ID; // Your client id
const client_secret = SPOTIFY_CLIENT_SECRET; // Your secret
const redirect_uri =
	process.env.NODE_ENV === "development"
		? "http://localhost:8888/auth/spotify/callback"
		: REDIRECT_URI; // Your redirect uri
const frontend_uri =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000/"
		: FRONTEND_URI;

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function(length) {
	let text = "";
	const possible =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
};

const stateKey = "spotify_auth_state";

const app = express();

app
	.use(express.static(__dirname + "/public"))
	.use(cors())
	.use(cookieParser());

app.get("/auth/spotify/login", function(req, res) {
	const state = generateRandomString(16);
	res.cookie(stateKey, state, { expires: new Date(Date.now() + 90000000) });

	// your application requests authorization (get all read scopes)
	const scopes = [
		"playlist-read-collaborative",
		"playlist-read-private",
		"user-read-currently-playing",
		"user-read-playback-state",
		"user-read-private",
		"user-library-read",
		"user-follow-read",
		"user-read-recently-played",
		"user-top-read"
	];
	const scope = scopes.join(" ");
	res.redirect(
		"https://accounts.spotify.com/authorize?" +
			querystring.stringify({
				response_type: "code",
				client_id,
				scope,
				redirect_uri,
				state
			})
	);
});

app.get("/auth/spotify/callback", function(req, res) {
	// your application requests refresh and access tokens
	// after checking the state parameter

	const code = req.query.code || null;
	const state = req.query.state || null;
	const storedState = req.cookies ? req.cookies[stateKey] : null;

	if (state === null) {
		res.redirect(
			"/#" +
				querystring.stringify({
					error: "state_mismatch"
				})
		);
	} else {
		res.clearCookie(stateKey);
		const authOptions = {
			url: "https://accounts.spotify.com/api/token",
			form: {
				code: code,
				redirect_uri: redirect_uri,
				grant_type: "authorization_code"
			},
			headers: {
				Authorization:
					"Basic " +
					Buffer.from(client_id + ":" + client_secret).toString("base64")
			},
			json: true
		};

		request.post(authOptions, function(error, response, body) {
			if (!error && response.statusCode === 200) {
				const { access_token, refresh_token } = body;
				const options = {
					url: "https://api.spotify.com/v1/me",
					headers: { Authorization: "Bearer " + access_token },
					json: true
				};

				// use the access token to access the Spotify Web API
				request.get(options, function(error, response, body) {
					// we can also pass the token to the browser to make requests from there
					const { uri } = body;
					res.redirect(
						frontend_uri +
							querystring.stringify({
								access_token,
								refresh_token,
								uri
							})
					);
				});
			} else {
				res.redirect(
					"/#" +
						querystring.stringify({
							error: "invalid_token"
						})
				);
			}
		});
	}
});

app.get("/refresh_token", function(req, res) {
	// requesting access token from refresh token
	const refresh_token = req.query.refresh_token;
	const authOptions = {
		url: "https://accounts.spotify.com/api/token",
		headers: {
			Authorization:
				"Basic " +
				Buffer.from(client_id + ":" + client_secret).toString("base64")
		},
		form: {
			grant_type: "refresh_token",
			refresh_token
		},
		json: true
	};

	request.post(authOptions, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			const access_token = body.access_token;
			res.send({
				access_token
			});
		}
	});
});

if (process.env.NODE_ENV === "production") {
	// Express will serve production assets (main.js, main.css, etc)
	app.use(express.static("client/build"));
	// Express will serve up the index.html file if it doesn't recognize the route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
	console.log("Listening on port:", PORT);
});
