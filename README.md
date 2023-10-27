# Summary of repo #RedminePlaywrightTask:

Test core repo created to demonstrate the usage of Playwright in action along with TypeScript.

# System requirements:

Node.js 16+
Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
MacOS 12 Monterey or MacOS 13 Ventura.
Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04.

# Steps to install:

1. Clone the repo
HTTP: https://github.com/AndriiSavruk/RedminePlaywrightTask.git 
Github: ```git clone https://github.com/AndriiSavruk/RedminePlaywrightTask```
2. Install NodeJS and NPM
3. Do a ``` npm install ``` in the project root

# Steps to lunch:

for running the tests:
```npx playwright test```
running in ui model:
```npx playwright test --ui```
running in different browsers:
```npx playwright test --project chromium```
```npx playwright test --project firefox```
```npx playwright test --project webkit```

# Steps to creating the report:

In order to display the report after the local execution you may need to use ```npx playwright show-report``` command.