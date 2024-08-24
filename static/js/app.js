// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;
    console.log(metadata);
    console.log(sample)
    // Filter the metadata for the object with the desired sample number
// TODO: SOMETHING IS GOING WRONG WITH THE FILTER HERE. RETURNS AN EMPTY LIST FOR indiv_metadata
    function findSample(x){
      let dropdown = d3.select('#selDataset');
      return x.id == sample;
    };
    let indiv_metadata = metadata.filter(findSample);

    console.log(indiv_metadata);

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata
    panel.html('');

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    for (var key in indiv_metadata[0]){
      panel.append('p').text(`${key.toUpperCase()}: ${indiv_metadata[0][key]}`)
    }
  });
}
// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    names = data.names

    // Use d3 to select the dropdown with id of `#selDataset`
    dropdown = document.getElementById('selDataset') // Thanks to Xpert for this line.

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (i=0;i<names.length;i++){
      // create an option object
      let newoption = document.createElement('option');
      newoption.value = names[i];
      newoption.text = names[i];
      // append the option object to the 'select' object
      dropdown.appendChild(newoption);
    };

    // Get the first sample from the list
    first = names[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(first);
    buildCharts(first);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();
