# UFO Finder Web App

## Overview of the Project

The UFOs webpage was created as a way to provide raw data regarding UFO sightings to the general public (via the internet). The page takes in a list of sightings in the form of a JavaScript `array` and displays the data as a table that can be filtered down based on the date and location of the sighting, as well as by shape description of the UFO. 

## Results

The UFO Finder webpage is designed to allow users to see all UFO sightings within a certain user-defined criteria. To filter the data, begin by entering any of the following desired filters:
* Date
* City
* State
* Country
* Shape

To the right of the table, which will be showing all data points by default when first visiting or refreshing the site, is an area to enter the filters.

<img src='https://github.com/bradydwilton/UFOs/blob/main/images/no_filters.png'>

Once a filter is entered, the table will automatically update without the need to press the 'Filter Table' button below the entry fields. 

<img src='https://github.com/bradydwilton/UFOs/blob/main/images/with_filters.png'>

To refresh the table to the full data set, either refresh the webpage or clear the filters and press the 'Filter Table' button.

## Summary

Before launching in a production environment, several issues need to be ironed out. The biggest issue stems from the data interpreting that the web app is able (or in this case, unable) to perform.

In the web app's current state, any user-input-data enterd into the filters must match the data in the table exactly (including cse-sensitivity). Extra steps should be written to make the data easier to match, including cleaning the data so that data within each column is uniform, and writing extra blocks on the back end that uses regular expressions to better understand user-entered filters.
