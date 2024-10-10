```markdown
# Tree Foliar Local Testing Guide

This guide will help you set up and run the `tree-foliar` package locally. We will use a demo Angular application to test the functionality of the package. Follow the steps below to ensure everything is configured correctly.

## Prerequisites
Ensure that you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (v12 or above)
- [Angular CLI](https://angular.io/guide/setup-local) (8.3.25 or above)

## Git Clone
Start by cloning the repository:
```bash
git clone https://github.com/ajinkyakhandar/tree-foliar.git
```

## Directory Structure
After cloning the repository, make sure your directory structure looks like this:
```
tree-foliar/
├── package/
│   ├── index.js
│   ├── <other files>
│   └── package.json
└── test/
    └── tree-foliar-test/
```
In the `package` folder, you have the `index.js` and `package.json` files, while the `tree-foliar-test` folder contains the demo Angular application for testing.

## Install Dependencies
Navigate to your `package` directory and install the dependencies:
```bash
cd C:\personal\final\tree-foliar\package
npm install
```

## Run the Local Package
After installing the dependencies, you can run the `tree-foliar` package by executing:
```bash
node index.js
```
This command runs the package and prepares it for use.

## Usage
Run the command using Node.js:
```bash
node index.js <directory-path> [-i <ignore-list>] [-w <output-file>] [--watch]
```

## Features
- Generate a tree-like structure of directories and files.
- Ignore specific files and directories based on user-defined criteria.
- Output the tree structure to a file or print it to the console.
- Monitor the specified directory for changes in real-time using watch mode.

## Options
- `-i, --ignore <comma-separated list>`: Ignore specific files or folders (e.g., `node_modules,src`).
- `-w, --write <output-file>`: Write the directory structure to the specified output file (e.g., `output.txt`).
- `--watch`: Enable watch mode to monitor changes and regenerate the tree automatically.

## Examples

1. **Generate Tree Structure for a Directory**
   ```bash
   node index.js ../test/tree-foliar-test/
   ```

2. **Generate Tree Structure, Ignoring Specific Folders**
   ```bash
   node index.js ../test/tree-foliar-test/ -i src
   ```

3. **Generate Tree Structure and Write to an Output File**
   ```bash
   node index.js ../test/tree-foliar-test/ -w ../test/tree-foliar-test/assets/output.txt
   ```

4. **Generate Tree Structure, Ignoring Specific Folders and Write to an Output File**
   ```bash
   node index.js ../test/tree-foliar-test/ -i src -w ../test/tree-foliar-test/assets/output.txt
   ```

5. **Enable Watch Mode for Live Updates**
   ```bash
   node index.js ../test/tree-foliar-test/ --watch
   ```

## License
This project is licensed under the ISC License.

---

Follow these steps, and you'll be able to run your `tree-foliar` package locally without any issues. If you encounter any problems, feel free to reach out for assistance!
```
