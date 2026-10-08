const checkBtn = document.getElementById('checkBtn');
const result = document.getElementById('result');
const inputStr = document.getElementById('inputStr');

function isPalindrome(str) {
    const originalStr = str;
    const reversedStr = str.split('').reverse().join('');
    return originalStr === reversedStr;
}


function showPalindrome() {
    const str = inputStr.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (str === '') {
        result.textContent = 'input required';
        result.classList = 'error'        
    } else if (isPalindrome(str)) {
        result.textContent = `${str} is palindrome`;
        result.classList = 'succes'
    } else {
        result.textContent = `${str} is not palindrome`;
        result.classList = 'wrong'
    }

    inputStr.value = '';
    inputStr.autofocus = true
}

checkBtn.addEventListener('click', showPalindrome);
