// from data.js
const tableData = data;

// get table references
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

// 1. Create a variable to keep track of all the filters as an object.
let filters = {};

function updateFilters() {
  let changedElement = d3.select(this);

  let elementValue = changedElement.property("value");
  console.log(elementValue);

  let filterId = changedElement.attr("id");
  console.log(filterId);

  if (elementValue) {
    filters[filterId] = elementValue;
  }

  else {
    delete filters[filterId];
  }

  filterTable(filters);
}

d3.selectAll("input").on("change", updateFilters);

// 3. Use this function to update the filters. 
function updateFilters_old() {

  // 4a. Save the element that was changed as a variable.
  let changedElement = d3.select(this);
  console.log(elementValue);

  // 4b. Save the value that was changed as a variable.
  let elementValue = changedElement.property("value");
  console.log(elementValue);

  // 4c. Save the id of the filter that was changed as a variable.
  let filterId = changedElement.attr("id");
  console.log(filterId);

  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  // 6. Call function to apply all filters and rebuild the table
  filterTable(filters);

}

// 7. Use this function to filter the table when data is entered.
function filterTable(filters) {

  // 8. Set the filtered data to the tableData.
  let filteredData = tableData;

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  for (id in filters) {
    filteredData = filteredData.filter(row => row[id] === filters[id]);
  }

  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
}

// 2. Attach an event to listen for changes to each filter
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);
