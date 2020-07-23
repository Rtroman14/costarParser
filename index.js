const fs = require("fs");
const path = require("path");
const readFile = require("./src/readFile");

let parseFiles = () => {
    let inputDir = path.join(__dirname, "\\inputCSV");

    fs.readdir(inputDir, (err, files) => {
        if (err) {
            console.log(`Error reading files = ${err}`);
        }

        files.forEach((file) => {
            readFile(file);
        });
    });
};

parseFiles();
