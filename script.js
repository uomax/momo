const countdown = document.getElementById('countdown');
const message = document.getElementById('message');

let minutes = 30;
let seconds = 0;

const updateCountdown = () => {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(intervalId);
      message.textContent = '请重试';
      return;
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }

  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  countdown.textContent = formattedTime;
};

const intervalId = setInterval(updateCountdown, 1000);

// Copy button functionality
const copyButton = document.querySelector('.copy-button');
const qrCodeText = document.querySelector('.qr-code-text');

copyButton.addEventListener('click', () => {
  // Call Android interface to copy text to clipboard
  window.AndroidInterface.copyToClipboard(qrCodeText.textContent);
});
