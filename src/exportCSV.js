const ObjectsToCsv = require("objects-to-csv");

module.exports = async (data, csvName) => {
    // push data to CSV and export
    const csv = new ObjectsToCsv(data);
    // Save to file
    await csv.toDisk(`./outputCSV/${csvName}`);
    console.log(`Exported ${csvName}`);
};
