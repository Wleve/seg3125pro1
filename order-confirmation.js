const countdownElement = document.getElementById('countdown');
let timeLeft = 20 * 60;

const updateCountdown = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownElement.innerHTML = `${minutes}m ${seconds}s`;

    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = 'Your order has arrived!';
    }
};

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();