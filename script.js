document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua tombol tab dan konten tab
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Tambahkan event listener untuk setiap tombol
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas 'active' dari semua tombol dan konten
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Tambahkan kelas 'active' ke tombol yang diklik
            button.classList.add('active');

            // Ambil target konten dari atribut data-target
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            // Tampilkan konten yang sesuai
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});