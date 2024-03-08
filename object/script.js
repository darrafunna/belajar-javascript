// Cara Membuat Object

// 1. Object Literal
var mhs1 = {
    nama : 'Darra Funna',
    umur : 23,
    pekerjaan : 'Programmer',
    lulus : true,
    ips : [3.40, 4.0, 4.0, 3.82],
    alamat : {
        jalan : 'Jl. Haji Soleh 1 No.13, Sukabumi Selatan',
        kecamatan : 'Kebon Jeruk',
        kota : 'Jakarta Barat',
    }
};

var mhs2 = {
    nama : 'Muhammad Rafly Ramadhan',
    umur : 23,
    pekerjaan : 'Cyber Security Engineer',
    lulus : true,
    ips : [3.40, 4.0, 4.0, 3.82],
    alamat : {
        jalan : 'Jl. Haji Soleh 1 No.13, Sukabumi Selatan',
        kecamatan : 'Kebon Jeruk',
        kota : 'Jakarta Barat',
    }
};

// 2. Function Declaration
function buatObjectMahasiswa (nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Udin Sedunia', '105219004', 'udin@mail.com', 'Teknik Industri');

// 3. Constructor
function Mahasiswa(nama, nim, email, jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
};

var mhs4 = new Mahasiswa('Aulia Putri', '105219004', 'aul@gmail.com', 'Kedokteran');