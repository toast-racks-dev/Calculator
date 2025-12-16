# 🧮 Bootstrap Calculator

A simple, responsive, and secure calculator built with HTML, CSS, and JavaScript.

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple?logo=bootstrap)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- ➕ Basic arithmetic operations (addition, subtraction, multiplication, division)
- 📱 Fully responsive design (works on desktop, tablet, and mobile)
- 🔒 Secure input validation (prevents code injection attacks)
- 🎨 Modern UI with hover and click animations
- ⚡ Fast and lightweight

## 🚀 Demo

Simply open `calc.html` in your browser to use the calculator.

## 📁 Project Structure

```
Calc/
├── index.html   # Main HTML structure
├── calc.css     # Styling and responsive design
├── calc.js      # Calculator logic and event handling
└── README.md    # Documentation
```

## 🛠️ Technologies Used

| Technology      | Purpose                                |
| --------------- | -------------------------------------- |
| **HTML5**       | Page structure                         |
| **CSS3**        | Styling, animations, responsive design |
| **JavaScript**  | Calculator logic, event handling       |
| **Bootstrap 5** | Base styling                           |

## 📖 How It Works

### Button Classes

| Class         | Description                       | Color  |
| ------------- | --------------------------------- | ------ |
| `.number-btn` | Number buttons (0-9)              | Yellow |
| `.symbol`     | Operator buttons (+, -, \*, /, =) | Blue   |
| `.clear`      | Clear button (C)                  | Red    |

### Security

The calculator uses a secure `safeCalculate()` function that:

1. Only allows numbers, operators, parentheses, and decimal points
2. Blocks any attempt to inject malicious code
3. Validates results before displaying

```javascript
// Only these characters are allowed:
const safePattern = /^[0-9+\-*/().\s]+$/;
```

## 🎨 Responsive Breakpoints

| Device  | Max Width | Adjustments                |
| ------- | --------- | -------------------------- |
| Desktop | > 768px   | Full size                  |
| Tablet  | ≤ 768px   | Slightly smaller           |
| Mobile  | ≤ 480px   | Full width, larger buttons |

## 📝 Usage

1. Clone or download this repository
2. Open `calc.html` in any modern browser
3. Click buttons to perform calculations!

```bash
# Clone the repository
git clone https://github.com/yourusername/calculator.git

# Navigate to the folder
cd calculator

# Open in browser (or just double-click calc.html)
start calc.html
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit (`git commit -am 'Add new feature'`)
5. Push (`git push origin feature/improvement`)
6. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ using HTML, CSS, and JavaScript
