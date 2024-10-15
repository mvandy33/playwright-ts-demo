# playwright-ts-demo
A basic automated test project to demonstrate Playwright/Typescript/Node capabilities

This project executes simple end-to-end test scenarios against the website https://qaplayground.dev, showcasing capabilities of automated testing such as tab switching, iframe management, and fil uploads. The purpose is to demonstrate an elegant, scalable implementation of the Page Object design pattern for use in automated testing.

### Run Instructions
1. Download Node.js: https://nodejs.org/
2. Clone or fork the repository
3. In a terminal, navigate to the project directory, and run the command `npm install`
5. To run the tests, execute the terminal command `npm run start`
    - Tests are run across headless (non-visual) Chromium, Firefox, and Webkit browsers, in parallel fashion

### View the Report
- To view the report, simply run the command `npm run report`
- The report will be served to port 9323 and will open a browser window at the report directory
- _Note that you only need to run the report command once - the report will update automatically after subsequent test runs._

### Debug Mode
- A debug definition is included for VSCode debugging in launch.json
- In VSCode, simply view the desired spec file - `<spec-name>.spec.ts` - and start the debugger

### Feedback is Greatly Appreciated!
This project is still under construction, and I plan to add more test scenarios and quality-of-like features as I have time. However, in the meantime, feel free to create an issue in this repo with any bugs, questions, or suggestions - I am always looking for new ways to learn and improve!