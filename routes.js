'use strict';
module.exports = function(app) {
    var jesonku = require('./controller');
    app.route('/').get(jesonku.index);
}