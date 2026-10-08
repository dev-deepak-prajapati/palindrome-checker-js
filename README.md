# Palindrome Checker Js 🔄

A responsive web application that checks whether a given word, phrase, or sequence of characters is a palindrome.

## 🌟 Features

- **Sanitized Input Checking:** Automatically removes punctuation, special characters, and spaces before validation.
- **Case-Insensitive Matching:** Treats uppercase and lowercase letters as equal (e.g., `Racecar` is recognized as a palindrome).
- **Dynamic Feedback:** Displays color-coded feedback badges based on input validation:
  - 🔴 **Error:** Prompt when input field is empty.
  - 🔵 **Success:** Highlighted confirmation when the text is a palindrome.
  - 🟡 **Mismatch:** Indication when the text is not a palindrome.
- **Responsive UI:** Modern design with CSS linear gradients, hover animations, and Flexbox layout.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic markup and structure.
- **CSS3:** Custom styles, gradients, transitions, and layout centering.
- **JavaScript (ES6):** String manipulation, regular expression filtering, and DOM manipulation.

---

## 📁 Project Structure

```text
├── index.html   # Main HTML document structure
├── style.css    # Layout styling, colors, gradients, and feedback badges
└── script.js    # Logic for input sanitization, palindrome testing, and DOM interaction
