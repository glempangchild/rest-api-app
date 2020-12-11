'use strict';
exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data);
    res.end();
}

// response untuk nested matakuliah
exports.makulNested = function (values, res) {
    // Akumulasi

    const hasil = values.reduce((akumulasikan, item) => {
        // tentukan key group

        if (akumulasikan[item.nama]) {
            // Buat variable group nama mahasiswa
            const group = akumulasikan[item.nama];
            // Cek jika isi array adalah matakuliah
            if (Array.isArray(group.matakuliah)) {
                group.matakuliah.push(item.matakuliah);
            }else{
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        } else {
            akumulasikan[item.nama] = item;
        }

        return akumulasikan;
    }, {});

    var data = {
        'status' : 200,
        'values' : hasil
    };

    res.json(data);
    res.end();
}