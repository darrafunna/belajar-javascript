var nama = prompt('Masukkan nama:');
alert('Nama yang anda masukkan adalah: '+ nama);
confirm('Kamu yakin??'); //mengembalikan true atau false (boolean)

//Method pada Array
var arr = ['Darra', 'Funna'];

//1. join
console.log(arr.join(' - ')); //Darra - Funna

//2. push & pop
arr.push('Dinda'); //menambahkan elemen index terakhir pd array
console.log(arr.join(' - ')); //Darra - Funna - Dinda
arr.pop(); //menghapus elemen terakhir
console.log(arr.join(' - ')); //Darra - Funna

//3. unshift & shift
arr.unshift('Rafly'); //menambahkan ke elemen pertama 
console.log(arr.join(' - ')); //Rafly - Darra - Funna
arr.unshift('Muhammad'); //menambahkan ke elemen pertama
console.log(arr.join(' - ')); //Muhammad - Rafly - Darra - Funna
arr.shift(); //menghapus elemen pertama
console.log(arr.join(' - ')); //Rafly - Darra - Funna

//4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, elemenBaru3, ...)
arr.splice(1, 0, 'Ramadhan');
console.log(arr.join(' - ')); //Rafly - Ramadhan - Darra - Funna

//5. slice
//slice(awal,akhir) -> index akhir itu gak kebawa
var arr2 = arr.slice(1,3);
console.log(arr2.join(' - ')); //Ramadhan - Darra

//6. forEach
var angka = [1,2,3,4,5,6,7,8];
var nama = ['Darra', 'Rafly', 'Udin', 'Tapid'];

for(var i=0; i<angka.length; i++){
    console.log(angka[i]);
}

angka.forEach(function(e){
    console.log(e);
});

nama.forEach(function(e, i){
    console.log('Mahasiswa ke-' + (i+1) + ' adalah: ' + e);
});

//7. map
var angka = [1,3,4,5,2,3,9];
var angkaDikali2 = angka.map(function(e){
    return e * 2;
});
console.log(angkaDikali2.join(' - ')); //2 - 6 - 8 - 10 - 4 - 6 - 18

//8. sort
var angka = [1,10,2,20,2,3,30,4,5,2,3,9];
angka.sort(function(a,b){
    return a-b;
});
console.log(angka.join(' - '));

//9. filter & find
//find itu hanya mengembalikan 1 nilai
//filter dapat mengembalikan banyak nilai
var angka = [1,10,2,20,2,3,30,4,5,2,3,9];
var angkaTiga = angka.find(function(x){
    return x > 10;
});
console.log(angkaTiga); //20

var angka3 = angka.filter(function(x){
    return x > 3;
});
console.log(angka3.join(' - ')); //10 - 20 - 30 - 4 - 5 - 9


