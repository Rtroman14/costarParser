module.exports = (csvData) => {
    let newData = [];
    let contact = {};
    let record = false;
    let interval;

    csvData.forEach((row) => {
        let email;

        if (row.length >= 3) {
            if (
                row[0] === "Contact Name" ||
                row[0].includes("Page") ||
                row[0].includes("/2020") ||
                row[0].includes("Airwaves") ||
                row[1].includes("/2020") ||
                row[1].includes("Airwaves") ||
                row[1].includes("Page") ||
                row[2].includes("Page")
            ) {
                record = false;
            } else if (row[1].includes("(")) {
                interval = 1;
            }
            if (record && interval == 1) {
                contact.name = row[0];
                contact["Phone Number"] = row[1];
                contact.practice = row[2];
            } else if (record && interval == 2) {
                contact.title = row[0];
                contact.Address = row[1];
                contact.email = row[2];
                email = row[2];
            } else if (record && interval == 3) {
                contact["Company Name"] = row[0];
                contact.state = row[1];
                contact.email = `${contact.email}${row[2]}`;
            }
            if (record) {
                interval += 1;
            }
            if (interval === 4) {
                newData.push(contact);
                contact = {};
                interval = 1;
            }
            if (row[0] === "Company Name") {
                record = true;
                interval = 1;
            }
        }
    });

    return newData;
};
