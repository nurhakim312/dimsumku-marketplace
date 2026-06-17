document.addEventListener('DOMContentLoaded', function () {
    // Ambil semua tombol detail di katalog
    const detailButtons = document.querySelectorAll('.btnDetail');
    // Ambil tombol rahasia pemicu modal
    const modalTrigger = document.querySelector('.btnModal');

    detailButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Cari kartu produk terdekat dari tombol yang diklik
            const card = this.closest('.card');
            
            // Ambil data dari elemen di dalam kartu tersebut
            const judul = card.querySelector('.card-text').innerText;
            const deskripsi = card.querySelector('.deskripsi').innerText;
            const harga = card.querySelector('.harga').innerText;
            const srcGambar = card.querySelector('.card-img-top').getAttribute('src');

            // Masukkan data ke dalam elemen Modal
            document.querySelector('.modalTitle').innerText = judul;
            document.querySelector('.modalDeskripsi').innerText = deskripsi;
            document.querySelector('.modalHarga').innerText = harga;
            document.querySelector('.modalImage').innerHTML = `<img src="${srcGambar}" class="img-fluid rounded-3 mb-3 w-100" alt="${judul}">`;

            // Atur link pesan otomatis ke WhatsApp (Sesuaikan nomor WA di sini)
            const btnBeli = document.querySelector('.btnBeli');
            const nomorWA = "628123456789"; // Ganti dengan nomor WhatsApp kamu
            const pesan = encodeURIComponent(`Halo DimsumKu! Saya mau pesan *${judul}* (${harga}). Bagaimana langkah selanjutnya?`);
            btnBeli.setAttribute('href', `https://wa.me/${nomorWA}?text=${pesan}`);

            // Klik otomatis tombol modal tersembunyi untuk memunculkan pop-up
            if (modalTrigger) {
                modalTrigger.click();
            }
        });
    });
});
