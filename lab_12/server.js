var express = require('express'); 
 var app = express(); 
app.use(express.static('public')) 
app.get('/', function(req, res){    
    res.send("Hello world! by express"); 
}); 

app.listen(8080);


var express = require ('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');
app.use(express.static('public'))

var spotifyApi = new SpotifyWebApi({
    clientId: '8c8c13729c3d443c87aea333d8911174',
    clientSecret: 'a4ee05ff0167435fb39fc1d931349828'
});

// Retrieve an access token 
spotifyApi.clientCredentialsGrant().then( 
    function (data) { 
        console.log('The access token expires in ' + data.body['expires_in']); 
        console.log('The access token is ' + data.body['access_token']); 

        // Save the access token so that it's used in future calls 
        spotifyApi.setAccessToken(data.body['access_token']); 
},
function (err){
    console.log(
        'Something went wrong when retrieving an access token',
        err.message 
        
    );
}
);


async function getTracks(searchterm, res)
 { spotifyApi.searchTracks(searchterm)
     .then(function (data) {
         res.send(JSON.stringify(data.body));
         }, function (err) {
             console.error(err); 
            }); 
        
}


//route for love in tracks, artists and albums 
app.get('/searchLove', function (req, res) {
     getTracks('love', res);
 }); 