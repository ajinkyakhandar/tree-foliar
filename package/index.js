#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import chokidar from 'chokidar';

// Function to generate tree structure
function generateTree(dirPath, ignoreList, outputFile, colorSchema) {
    let result = '';

    function traverseDirectory(dir, prefix = '', isLast) {
        const items = fs.readdirSync(dir).filter(item => !ignoreList.includes(item));

        items.forEach((item, index) => {
            const fullPath = path.join(dir, item);
            const isDirectory = fs.lstatSync(fullPath).isDirectory();
            const isLastItem = index === items.length - 1;
            const connector = isLastItem ? '└── ' : '|── ';

            // Use colorSchema to set the color based on whether the item is a folder or file
            const itemColor = isDirectory ? colorSchema.folderColor : colorSchema.fileColor;

            // Conditional coloring
            const outputItem = outputFile ? item : chalk[itemColor](item);
            result += `${prefix}${connector}${outputItem}\n`; // Applying color to the item only for console output

            if (isDirectory) {
                const newPrefix = prefix + (isLastItem ? '    ' : '|   ');
                traverseDirectory(fullPath, newPrefix, isLastItem);
            }
        });
    }

    // Start traversing the directory
    traverseDirectory(dirPath);

    // Output result either to file or console
    if (outputFile) {
        try {
            fs.writeFileSync(outputFile, result);
            console.log(`File generated: ${outputFile}`);
        } catch (err) {
            console.error('Error writing to output file:', err);
        }
    } else {
        console.log(result);
    }
}

// Handle CLI inputs
const args = process.argv.slice(2);
const dirPath = args[0]; // First argument is the directory path
let outputFile = null;
let ignoreList = [];

// Parse the command line arguments
args.forEach((arg, index) => {
    if (arg === '--ignore' || arg === '-i') {
        ignoreList = args[index + 1] ? args[index + 1].split(',') : [];
    } else if (arg === '--write' || arg === '-w') {
        outputFile = args[index + 1];
    } else if (arg === '--watch') {
        // Watch mode flag
        // Start watching the directory only if it is valid
        if (dirPath) {
            watchDirectory(dirPath, ignoreList, outputFile);
        }
    }
});

// Validate directory path
if (!fs.existsSync(dirPath)) {
    console.error('The specified directory does not exist:', dirPath);
    process.exit(1);
}

// Default color schema
let folderColor = 'white';
let fileColor = 'white';

// Generate tree with ignore list
generateTree(dirPath, ignoreList, outputFile, { folderColor, fileColor });

// Function to watch directory changes
function watchDirectory(dir, ignoreList, outputFile) {
    chokidar.watch(dir, { persistent: true })
        .on('all', (event, path) => {
            console.log(`Change detected: ${event} on ${path}`);
            generateTree(dir, ignoreList, outputFile, { folderColor, fileColor });
        });
    console.log(`Watching directory: ${dir}`);
}
