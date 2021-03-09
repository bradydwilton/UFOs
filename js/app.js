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

function handleClick() {

    // .select == d3 element; selects first element matching selector string ("#datetime")
    // selector string is item we're telling D3.js to look for
    // .property("value"): tell D3.js to grab the information stored in the selector string (ID = datetime)
    let date = d3.select("#datetime").property("value");

    // create var for filtered data & set equal to tableData
    let filteredData = tableData;
    if (date) {
        // Filter the default data to show only the date entered
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // rebuild the table using the filtered data
    // @NOTE: If no date was entered, filteredData will be original tableData
    buildTable(filteredData);

};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);