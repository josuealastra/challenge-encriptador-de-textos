// script.js

const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const decryptionRules = Object.fromEntries(
    Object.entries(encryptionRules).map(([key, value]) => [value, key])
);

function encrypt(text) {
    return text.split('').map(char => encryptionRules[char] || char).join('');
}

function decrypt(text) {
    let result = text;
    Object.keys(decryptionRules).forEach(key => {
        const regex = new RegExp(key, 'g');
        result = result.replace(regex, decryptionRules[key]);
    });
    return result;
}

function processText() {
    const inputText = document.getElementById('inputText').value.trim();
    if (inputText === '') {
        alert('Por favor, introduce algún texto.');
        return;
    }
    const operation = document.querySelector('input[name="operation"]:checked').value;
    let outputText = '';

    if (operation === 'encrypt') {
        outputText = encrypt(inputText);
    } else {
        outputText = decrypt(inputText);
    }

    document.getElementById('outputText').value = outputText;
}

function copyToClipboard() {
    const outputTextArea = document.getElementById('outputText');
    outputTextArea.select();
    document.execCommand('copy');
}

document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
