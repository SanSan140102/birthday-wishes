let currentMessageIndex = 0;
const messages = [
    "lihat betapa indah senyum nya.",
    "dia dengan segala kekurangan dan kelebihannya!",
    "gadis yang bisa bikin aku jatuh hati",
    "yang tulen membaca typo dari aku",
    "tahun kita udah jauh yah hihi",
    "dengan segala pelik dan bahagia",
    "dengan mood yang naik turun",
    "toh kita masih kuat bersama",
    "kamu tau?",
    "aku gini-gini sayang bangat sama kamu",
    "sayang sama toel ",
    "smelew smelew isan",
    "monyu dan kurnyil",
    "Every moment with you is a treasure. Happy Birthday, dear!",
    
];

const images = [
    "soya2.jpg",
    "soya1.jpg",
    "soya3.jpg",
    "soya4.jpg",
    "soya5.jpg",
    "soya6.jpg",
    "soya7.jpg",
    "soya8.jpg",
    "soya9.jpg",
    "soya10.jpg",
    "soya11.jpg",
    "soya12.jpg",
    "soya13.jpg",
    "soya14.jpg",
    
];

function changeMessageAndImage() {
    const messageElement = document.getElementById('message');
    const photoElement = document.getElementById('photo');
    
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;

    messageElement.style.opacity = 0;
    photoElement.style.opacity = 0;
    setTimeout(() => {
        messageElement.textContent = messages[currentMessageIndex];
        photoElement.src = images[currentMessageIndex % images.length];
        messageElement.style.opacity = 1;
        photoElement.style.opacity = 1;
    }, 500);
}

function toggleMusic() {
    const audioElement = document.getElementById('audio');
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
}
