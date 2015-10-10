// 'use strict';


// module.exports = {
//     get: function (req, res) {
//         res.json(JSON.stringify(req));
//     }
// };

var Bing = require('node-bing-api')({ accKey: " FsFdL5st/P9Mbtm5M22Jy6z3wb3AAFr/xjpy431mpxI" });

Bing.web("Pizza", {
    top: 10,  // Number of results (max 50)
    skip: 3,   // Skip first 3 results
  }, function(error, res, body){

    // body has more useful information, but for this example we are just
    // printing the first two results
    console.log(body.d.results[0]);
    console.log(body.d.results[1]);
  });