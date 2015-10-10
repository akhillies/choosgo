'use strict';


module.exports = {
    get: function (req, res) {
        res.json(JSON.stringify(req));
    }
};

