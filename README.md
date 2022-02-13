# Steps for setting up the dev environment
---
## _Prerequisites_:
- Node.js is installed
- An IDE is available (i.e. Visual Studio Code)
- Git is installed
---
In order to set up the environment from git, use the following:


1. Create a new folder 
2. Open a Terminal (or Command Prompt/PowerShell)
3. Go to the path of the newly created folder
4. If using Visual Studio Code as IDE, use the command 'code .', in order to open the executable (for other IDEs, open the IDE and open the newly created folder)
5. Open an IDE Terminal
6. Clone the repository with command
```bash
git clone https://github.com/eugenrof/cypress_kiwiapp.git 
```
7. Go to the repository folder 
```bash
cd cypress_kiwiapp
```
8. Install Cypress by using
```bash
npm install -g cypress
```
9. Install TypeScript
```bash 
npm install -g typescript
```
10. Make sure cypress is installed or install it with 
```bash
npm install cypress
```
11. Open the Cypress Runner with 
```bash
cypress open
```
