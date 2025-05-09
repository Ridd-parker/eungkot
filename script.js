let produkDipilih = '';

function konfirmasiPesan(produk) {
  if (confirm('Anda yakin ingin memesan ' + produk + '?')) {
    document.getElementById('produkSelect').value = produk;
    document.getElementById('produkSelect').scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById('formPemesanan').addEventListener('submit', function(e) {
  e.preventDefault();
  produkDipilih = this;
  document.getElementById('popup').style.display = 'flex';
});

function lanjutkanWhatsApp() {
  document.getElementById('popup').style.display = 'none';

  var form = produkDipilih;
  var nama = form.nama.value;
  var produk = form.produk.value;
  var jumlah = form.jumlah.value;
  var alamat = form.alamat.value;
  var pesan = form.pesan.value;

  var url = 'https://wa.me/6282214109201?text=' + encodeURIComponent(
    'Halo, saya ingin memesan:\n' +
    'Nama: ' + nama + '\n' +
    'Produk: ' + produk + '\n' +
    'Jumlah: ' + jumlah + ' kg\n' +
    'Alamat Pengiriman: ' + alamat + '\n' +
    'Pesan: ' + pesan
  );

  window.open(url, '_blank');
}
