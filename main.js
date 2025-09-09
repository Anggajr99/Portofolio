// Function untuk menampilkan waktu saat ini
function showTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    const time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("live-time").innerHTML = time;
}

setInterval(showTime, 1000);

// Logika Dark Mode
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Periksa preferensi dari localStorage saat halaman dimuat
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
    toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i>';
}

// Tambahkan event listener untuk toggle
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Ubah ikon tombol
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i>';
        localStorage.setItem('darkMode', 'true');
    } else {
        toggleButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
        localStorage.setItem('darkMode', 'false');
    }
});