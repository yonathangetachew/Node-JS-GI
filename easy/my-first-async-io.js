const fs = require('fs');

// Get the file path from command-line arguments
const filePath = process.argv[2];

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err);
    return;
  }

  // Split the contents into an array of lines
  const lines = fileContents.split('\n');

  // Count the number of lines (excluding the last empty line)
  const lineCount = lines.length - 1;

  // Print the line count to the console
  console.log(lineCount);
});
