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
            console.log(error);
        } else {
            response.ok(rows,res);
        }
    });
};

// Menampilkan data by id

exports.getById = function (req,res) {
    let id = req.params.id;
    connection.query ('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows,res);
        }
    });
};

// Menambahkan data mahasiswa
exports.postData = function (req,res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES (?,?,?)', [nim,nama,jurusan], 
    function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok('Berhasil menambahkan data', res);
        }
    });
}

// Mengubah data berdasarkan id

exports.ubdateById = function (req,res) {
    let id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim,nama,jurusan,id], 
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Data diubah", res);
        }
    });

}

// Hapus data by id

exports.delData = function (req,res) {
    let id = req.body.id_mahasiswa;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Data dihapus", res);
        }
    });
}

