# Palindrome Checker 🔄

A sleek, modern web application that checks whether a word, phrase, or sequence of characters reads the same backward as forward.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🌟 Features

- **Input Sanitization:** Strips non-alphanumeric characters (spaces, punctuation, and symbols) using Regular Expressions (`/[^a-z0-9]/g`).
- **Case-Insensitive Checking:** Evaluates phrases regardless of casing (e.g., `"Racecar"` or `"A man, a plan, a canal: Panama"`).
- **Dark Glassmorphism UI:** Modern dark theme featuring backdrop blur, radial glow effects, and responsive layout.
- **Keyboard Support:** Submit inputs seamlessly by pressing the `Enter` key or clicking the **Check** button.
- **Dynamic Feedback Badges:** Color-coded status updates:
  - 🟢 **Success:** Confirms a matching palindrome.
  - 🔴 **Mismatch:** Indicates the text is not a palindrome.
  - 🟡 **Warning:** Prompts the user when the input field is empty.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic structure and accessibility markup.
- **CSS3:** Glassmorphism (`backdrop-filter`), Flexbox, radial gradients, custom focus states, and badges.
- **JavaScript (ES6+):** Regex-based string manipulation, array operations, and DOM keyboard event listeners.

---

## 📁 Project Structure

```text
├── index.html   # Main layout and input structure
├── style.css    # Dark Glassmorphism theme, gradients, and badges
└── script.js    # Palindrome validation logic and event handling
