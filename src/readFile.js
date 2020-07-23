const parse = require("csv-parse");
const fs = require("fs");
const path = require("path");
const exportData = require("./exportCSV");
const parseData = require("./parseData");

module.exports = (fileName) => {
    let inputDir = path.join(__dirname, "../inputCSV");

    let csvData = [];

    fs.createReadStream(`${inputDir}/${fileName}`)
        .pipe(parse({ delimiter: "," }))
        .on("data", (dataRow) => {
            csvData.push(dataRow);
        })
        .on("end", () => {
            const parsedData = parseData(csvData);
            (async () => {
                try {
                    await exportData(parsedData, fileName);
                } catch (error) {
                    console.log(`Error while exporting csv - ${error}`);
                }
            })();
        });
};
