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
var filters = [];

// 3. Use this function to update the filters. 
function updateFilters() {

  // 4a. Save the element that was changed as a variable.
  let date_element = d3.select('#datetime');
  let city_element = d3.select('#city');
  let state_element = d3.select('#state');
  let country_element = d3.select('#country');
  let shape_element = d3.select('#shape');
  // 4b. Save the value that was changed as a variable.
  let date_value = date_element.property('value');
  let city_value = city_element.property('value');
  let state_value = state_element.property('value');
  let country_value = country_element.property('value');
  let shape_value = shape_element.property('value');
  // 4c. Save the id of the filter that was changed as a variable.
  let date_id = 'datetime';
  let city_id = 'city';
  let state_id = 'state';
  let country_id = 'country';
  let shape_id = 'shape';


  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  filters = [];
  if (date_value) { filters.push({ 'filterId': date_id, 'value': date_value }) };
  if (city_value) { filters.push({ 'filterId': city_id, 'value': city_value }) };
  if (state_value) { filters.push({ 'filterId': state_id, 'value': state_value }) };
  if (country_value) { filters.push({ 'filterId': country_id, 'value': country_value }) };
  if (shape_value) { filters.push({ 'filterId': shape_id, 'value': shape_value }) };



  // 6. Call function to apply all filters and rebuild the table
  filterTable(filters);

}

// 7. Use this function to filter the table when data is entered.
function filterTable(filters) {

  // 8. Set the filtered data to the tableData.
  let filteredData = tableData;

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  filters.forEach(function (entry) {
    filteredData = filteredData.filter(row => row[entry.filterId] === entry.value)
  });

  // filters.forEach((entry) => {
  //   if (entry.filterId) {
  //     id = entry.filterId;
  //     filteredData = filteredData.filter(row => row.id === entry.value);
  //   };
  // });

  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);

}

// 2. Attach an event to listen for changes to each filter
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);
