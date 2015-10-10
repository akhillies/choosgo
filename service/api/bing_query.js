var Bing = require('node-bing-api')({ accKey: " FsFdL5st/P9Mbtm5M22Jy6z3wb3AAFr/xjpy431mpxI" });

exports.get = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    //   var tables = request.service.tables;
    //   var push = request.service.push;
    Bing.composite("xbox", {
        top: 10,  // Number of results (max 15 for news, max 50 if other) 
        skip: 3,   // Skip first 3 results 
        sources: "web+news", //Choises are web+image+video+news+spell 
        newsSortBy: "Date" //Choices are Date, Relevance 
    }, function(error, res, body){
        response.send(statusCodes.OK, { message : body });
    });
};

exports.post = function(request, response) {
    response.send(statusCodes.OK, { message : Bing });
};
