# Tree Foliar Local Testing Guide
This guide will walk you through setting up and testing the `tree-foliar` package locally using a sample Angular application. Follow these steps to ensure everything is configured properly.

## Prerequisites
Before you begin, ensure that the following are installed:
- [Node.js](https://nodejs.org/en/download/) (version 12 or above)
- [Angular CLI](https://angular.io/guide/setup-local) (version 8.3.25 or above)

## Cloning the Repository
First, clone the `tree-foliar` repository:
```bash
git clone https://github.com/ajinkyakhandar/tree-foliar.git
```
## Directory Structure
Once cloned, your directory structure should resemble the following:
```bash
tree-foliar/
├── package/
│   ├── index.js
│   ├── <other files>
│   └── package.json
└── test/
    └── tree-foliar-test/
```

The package folder contains the main index.js and package.json files, while tree-foliar-test contains the demo Angular app for testing.

## Installing Dependencies
Navigate to the package directory and install the necessary dependencies:
```bash
cd C:\personal\final\tree-foliar\package
npm install
```
## Using Tree Foliar
To use tree-foliar, run:

```bash
node index.js <directory-path> [-ignore or -i <ignore-list>] [-write or -w <output-file>] [--watch]
```

## Key Features

- Generate a tree-like structure of directories and files.
- Ignore specific files and directories based on user-defined criteria.
- Output the tree structure to a file or print it to the console.
- Monitor the specified directory for changes in real-time using watch mode.
  
## Options
- `-i, --ignore <comma-separated list>`: Ignore specific files or folders (e.g., `node_modules,src`).
- `-w, --write <output-file>`: Write the directory structure to the specified output file (e.g., `output.txt`).
- `--watch`: Enable watch mode to monitor changes and regenerate the tree automatically.
  
## Usage Examples

1. **Generate Tree Structure for a Directory**
```bash
node index.js ../test/tree-foliar-test/
```

2. **Generate Tree Structure, Ignoring Specific Folders**
```bash
node index.js ../test/tree-foliar-test/ -i src
```

3. **Generate Tree Structure and Write to a File**
```bash
node index.js ../test/tree-foliar-test/ -w ../test/tree-foliar-test/assets/output.txt
```

4. **Generate Tree Structure, Ignore Folders, and Write to a File**
```bash
node index.js ../test/tree-foliar-test/ -i src -w ../test/tree-foliar-test/assets/output.txt
```
5. **Enable Watch Mode for Real-Time Updates**
   ```bash
   node index.js ../test/tree-foliar-test/ -i src -w ../test/tree-foliar-test/assets/output.txt --watch
   ```

   You can also use the following command to enable watch mode directly:

   ```bash
   node index.js ../test/tree-foliar-test/ --watch
   ```
