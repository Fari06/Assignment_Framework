# Assignment Framework

## 📌 Overview
This repository contains the **Assignment Framework** built for end-to-end automation testing using **Playwright**.  
It is designed to be simple, modular, and assignment-ready for QA engineers and learners.

---

## 🚀 Features
- ✅ Playwright-based UI automation
- ✅ Page Object Model (POM) structure
- ✅ Test sequencing for stable regression runs
- ✅ Allure Reporting integration for professional dashboards
- ✅ Environment configuration via `.env` and `test.runsettings`
- ✅ Support for multiple browsers (Chromium, Firefox, WebKit)


## 📂 Project Structure
Assignment_Framework/
│── allure-results/        # Test execution reports
│── e2e/                   # End-to-end test cases
│── pages/                 # Page Object classes
│── utils/                 # Utility functions
│── playwright.config.js   # Playwright configuration
│── package.json           # Node dependencies
│── README.md              # Project documentation
---

## ⚙️ Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Fari06/Assignment_Framework.git
   cd Assignment_Framework
To Install dependencies: npm install
Run tests: npx playwright test
Generate Allure report:npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

📊Reporting
Integrated with Allure Reports for detailed test execution insights.
Screenshots and attachments are automatically captured for failed tests.

👩‍💻 Author
Farheen Saba Siddiqua  
Experienced QA Engineer | Actively exploring SDET roles | Passionate about automation & AI-driven testing.

⭐ Contribution
Feel free to fork this repo, raise issues, or submit pull requests to improve the framework.

📜 License
This project is licensed under the MIT License.
