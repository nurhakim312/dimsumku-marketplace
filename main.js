document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click',(e) => {
        let parent = e.target.parentNode.parentNode;
        
        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi')?parent.querySelector('.deskripsi').innerHTML : '<i>Tidak ada informasi deskripsi yang tersedia</i>';
        


        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image =document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = "";
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;


        const nohp = '6287858826267';
        let pesan = Halo, saya mau memesan 
        
        Menu: ${judul}'
        Harga: ${harga}

        Mohon diproses ya.';

        let url =
        'https://wa.me/${nohp}&text=${encodeURIComponent(pesan)}';
        document.querySelector('.btnBeli').href = pesan;
    
    });
});
