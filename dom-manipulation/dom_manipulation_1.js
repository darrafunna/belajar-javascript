// DOM Manipulation (element)

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Darra Funna</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>paragraf1</p></div>'

const judul = document.querySelector('#judul');
judul.style.color = 'lightblue';

const a = document.querySelector('a');
// a.setAttribute('id', 'link'); // menambahkan atribut pada elemen
// let isiHref = a.getAttribute('href'); // mengambil isi dari atribut elemen

// a.removeAttribute('href'); // meng hilangkan atribut

// menambahkan atau memanipulasi class pada element
// element.classList.add() -> nambah class
// element.classList.remove() -> hapus class
// element.classList.toggle() -> kalo classnya gak ada, ditambahin tapi kalo ada, nanti classnya kehapus
// element.classList.item() -> untuk mengetahui nama class elemen itu dari indexnya
// element.classList.contains() -> untuk cek ada gak nama class itu di element (true/false)
// element.classList.replace() -> untuk mereplace class menjadi class yang lain

const p2 = document.querySelector('.p2');
// p2.classList.add('label');
// p2.classList.remove('label');
// p2.classList.toggle('biru-muda');
// p2.classList.item(2);
// p2.classList.contains('biru-muda');
// p2.classList.replace('biru-muda', 'biru-tua');

