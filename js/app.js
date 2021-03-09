// import the data from data.js
const tableData = data;

// referecne the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {

    // clear any existing data from table
    tbody.html("");

    data.forEach((dataRow) => {
        // create variable to append a row to the table body
        // "tr" is HTML tag for dataRow
        let row = tbody.append("tr");

        // reference one Object from array
        // (dataRow) argument specifies that the values go into the dataRow
        // forEach((val) specifies 1 object per row
        Object.values(dataRow).forEach((val) => {

            // set up the action of appending data into a table data tag "td"
            let cell = row.append("td");
            cell.text(val)
        });
    });
};