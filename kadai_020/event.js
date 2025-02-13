const botanBtn = document.getElementById('btn');
const textElement = document.getElementById('text');

botanBtn.addEventListener('click', () => {
    textElement.textContent = 'ボタンをクリックしました';
});