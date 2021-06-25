const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');


const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
   const spotifyApi = new SpotifyWebApi ({
       redirectUri: 'http://localhost:3000',
       clientId: '8a4cab09e31446d39bd0b590bf4db5f6',
       clientSecret: '8bdab9351d1f4fce82335e77f3cf600a'
   }) 

   spotifyApi.authorizationCodeGrant(code).then(data => {
       res.json({
           accessToken: data.body.access_token,
           refreshToken: data.body.refresh_token,
           expiresIn: data.body.expires_in
       })
   }).catch(() => {
       res.sendStatus(400)
   })
})

app.listen(3001)