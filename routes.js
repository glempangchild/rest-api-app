'use strict';
module.exports = function(app) {
    var jesonku = require('./controller');
    app.route('/').get(jesonku.index);
    app.route('/getall').get(jesonku.getAll);
    app.route('/getbyid/:id').get(jesonku.getById);
    app.route('/post').post(jesonku.postData);
}