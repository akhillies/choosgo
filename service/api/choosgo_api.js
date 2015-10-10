var Bing = require('node-bing-api')({ accKey: " FsFdL5st/P9Mbtm5M22Jy6z3wb3AAFr/xjpy431mpxI" });

exports.post = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    //   var tables = request.service.tables;
    //   var push = request.service.push;

    response.send(statusCodes.OK, { message : 'Hello World!' });
};

exports.get = function(request, response) {
    response.send(statusCodes.OK, { message : 'Hello World!' });
};
