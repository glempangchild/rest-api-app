'use strict'

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req,res) {
    response.ok("run well", res)
};

// Menampilkan semua data

exports.getAll= function(req,res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows,res)
        }
    });
};