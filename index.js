document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audioPrueba");
    const btnPlay = document.getElementById("btnPlay");
    const btnPausa = document.getElementById("btnPausa");

    btnPlay.addEventListener("click", reproducirAudio);
    btnPausa.addEventListener("click", pausarAudio);

    function reproducirAudio() {
        audio.play();
        btnPlay.classList.add("hidden");
        btnPausa.classList.remove("hidden");
        audioBtn.classList.add("playing");
    }

    function pausarAudio() {
        audio.pause();
        btnPausa.classList.add("hidden");
        btnPlay.classList.remove("hidden");
        audioBtn.classList.remove("playing");
    }

    // Configura Fancybox en elementos con el atributo data-fancybox
    $('[data-fancybox]').fancybox({
        loop: true,
        buttons: ["slideShow", "fullScreen", "thumbs", "close"],
        afterLoad: mostrarCuentaRegresiva
    });

    function mostrarCuentaRegresiva() {
        const fechaFiesta = new Date(2023, 10, 25, 21, 0, 0); // Noviembre (0-11)
        const fechaActual = new Date();
        const diferencia = fechaFiesta - fechaActual;
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        const reloj = document.getElementById('reloj');
        reloj.textContent = `${dias} días, ${horas}hs, ${minutos}m, ${segundos}s`;
    }

    setInterval(mostrarCuentaRegresiva, 1000);
    mostrarCuentaRegresiva();
});
// Para reproducir el audio
btnPlay.addEventListener("click", function () {
    audio.play();
    btnPlay.classList.add("hidden");
    btnPausa.classList.remove("hidden");
    audio.classList.add("playing"); // Agrega la clase cuando se reproduce
});

// Para pausar el audio
btnPausa.addEventListener("click", function () {
    audio.pause();
    btnPausa.classList.add("hidden");
    btnPlay.classList.remove("hidden");
    audio.classList.remove("playing"); // Quita la clase cuando se pausa
});

