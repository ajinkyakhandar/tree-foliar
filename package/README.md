# Tree Foliar
`tree-foliar` is a command-line tool for generating a visual representation of your project's directory structure. It allows you to specify files and directories to ignore and can output the structure to the console or a specified file.

## Features
- Generate a tree-like structure of directories and files.
- Ignore specific files and directories based on user-defined criteria.
- Output the tree structure to a file or print it to the console.
- Monitor the specified directory for changes in real-time using watch mode.

## Installation
To install the package, you can use npm:

```bash
npm install -g tree-foliar
```

## Usage
Run the command using:

```bash
npx tree-foliar <directory-path> [-ignore or -i <ignore-list>] [-write or -w <output-file>] [--watch]
```

## Options
- `-i, --ignore <comma-separated list>`: Ignore specific files or folders (e.g., `node_modules,src`).
- `-w, --write <output-file>`: Write the directory structure to the specified output file (e.g., `output.txt`).
- `--watch`: Enable watch mode to monitor changes and regenerate the tree automatically.

### Examples

1. **Print Directory Structure:**
   To print the structure of the directory located at `..\test-app\`, simply run:

   ```bash
   npx tree-foliar ..\test-app\
   ```

2. **Print Directory Structure with Ignored Files:**
   You can also specify files to ignore:
   ```bash
   npx tree-foliar ..\test-app\ -i node_modules,src
   ```

3. **Write Directory Structure to a File**:  
   To write the structure to `.\asset\output.txt`, use the following command:

   ```bash
   npx tree-foliar ..\test-app\ -w .\asset\output.txt
   ```
   While ignoring node_modules, specify the ignored folder as follows:
   
   ```bash
   npx tree-foliar ..\test-app\ -i node_modules -w .\asset\output.txt
   ```

4. **Enable Watch Mode for Auto-Updates**:

   To watch for changes in the `src` directory and automatically update `output.txt`, <br>
   This command will regenerate the output whenever files or folders in the specified directory change.

   ```bash
   npx tree-foliar ..\test-app\ -w .\asset\output.txt --watch
   ```

   You can also use the following command to enable watch mode directly:

   ```bash
   npx tree-foliar ..\test-app\ --watch
   ```

### Sample Output
The output of tree-foliar provides a structured, tree-like view of your project's directory. For example, running tree-foliar on a sample project might yield the following:<br><br>
<img width="247" alt="sample_output" src="https://github.com/user-attachments/assets/f16dbeb0-9586-4376-8919-55e315670f0a">
