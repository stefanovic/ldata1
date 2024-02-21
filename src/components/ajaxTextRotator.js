       // Dati di esempio (data.json)
       const newsData = [
        {
            "text": "Benvenuti all'Hotel Splendido!",
            "link": "https://www.hotelsplendido.com/"
        },
        {
            "text": "Scoprite le nostre offerte speciali.",
            "link": "https://www.hotelsplendido.com/offerte"
        },
        {
            "text": "Prenotate ora per una vacanza indimenticabile.",
            "link": "https://www.hotelsplendido.com/prenota"
        }
    ];

    // Funzione per ruotare il testo
    function rotateText() {
        const textRotator = document.getElementById('text-rotator');
        const currentIndex = Math.floor(Math.random() * newsData.length);
        const currentNews = newsData[currentIndex];

        textRotator.innerHTML = `
            <a href="${currentNews.link}" target="_blank">${currentNews.text}</a>
        `;
    }

    // Avvia il text rotator
    setInterval(rotateText, 3000); // Cambia ogni 3 secondi
    rotateText(); // Mostra il primo testo all'avvio