'use strict';
module.exports = function(app) {
    var jesonku = require('./controller');
    app.route('/').get(jesonku.index);
    app.route('/getall').get(jesonku.getAll);
}