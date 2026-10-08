const checkBtn = document.getElementById('checkBtn');
const result = document.getElementById('result');
const inputStr = document.getElementById('inputStr');

function isPalindrome(cleanStr) {
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

function showPalindrome() {
    const rawValue = inputStr.value.trim();
    const cleanStr = rawValue.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reset previous states
    result.classList.remove('hidden', 'success', 'wrong', 'error');

    if (rawValue === '') {
        result.textContent = '⚠️ Please enter text to check.';
        result.classList.add('error');
    } else if (isPalindrome(cleanStr)) {
        result.textContent = `🎉 "${rawValue}" is a palindrome!`;
        result.classList.add('success');
    } else {
        result.textContent = `❌ "${rawValue}" is not a palindrome.`;
        result.classList.add('wrong');
    }

    inputStr.focus();
}

// Event Listeners
checkBtn.addEventListener('click', showPalindrome);

// Trigger check on "Enter" key press
inputStr.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        showPalindrome();
    }
});
