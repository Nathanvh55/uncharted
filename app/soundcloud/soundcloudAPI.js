const request = require('request');

async function getSoundcloudEmbedLink(link) {
    let url = `https://soundcloud.com/oembed?format=json&url=${link}`;
    // request from oembed 
    request(url, function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        // create JSON object
        body = JSON.parse(body);
        let html = body.html;
        console.log('statusCode:', response && response.statusCode); 
        console.log('html:', html); 
    });
}


getSoundcloudEmbedLink('https://soundcloud.com/nickraymondg/sango-x-goldlink-wassup-free-download');