# LA Museum & Aquarium Explorer

Yuyin Lin | SSCI 591 | Project 3

**Live website:** [Open LA Museum & Aquarium Explorer](https://linyuyin03.github.io/LA-Museum-Explorer/)

## What this map shows

This map helps residents and visitors explore museums and aquariums listed in Los Angeles County's public GIS service. Users can click a purple marker to view a venue's name, street address, city, and category. Users should confirm current details with each venue before visiting.

## Starting sample (name and link)

The app adapts Esri's [Intro to FeatureLayer](https://developers.arcgis.com/javascript/latest/sample-code/intro-featurelayer/) sample. It uses ArcGIS Maps SDK for JavaScript 5.1 through a CDN. The project separates the page structure, styles, and map behavior into `index.html`, `styles.css`, and `app.js`.

## What I changed

I changed the initial center to Los Angeles and set the zoom to 9. I replaced the hybrid basemap with `gray-vector` and changed the symbols to purple circles with white outlines. I also updated the page title and added an About paragraph.

The county layer replaces the sample's tree dataset. I removed the tree-specific field settings and extent constraints. The popup displays four source fields. A category filter selects records labeled "Museums and Aquariums."

## Data source (name, URL, layer type, and reason)

The data source is Los Angeles County's **Museums and Aquariums**, layer 6:

https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/LMS_Data_Public/MapServer/6

The app uses `FeatureLayer` to load this public, queryable point layer. ArcGIS supports individual layers within map services, including URLs ending in `MapServer/6`. The browser requests data from the service when the page loads. The project does not store a downloaded copy. I chose this dataset because its locations and descriptive fields support cultural exploration.

## Component I added

I added the Home component to return users to the initial Los Angeles view after panning or zooming. The app also includes zoom controls and a legend.

## Problems and what I'd improve next

Some records lack addresses or cities. The popup labels missing values "Not provided by source." The service reports a broad extent, so the app uses a fixed starting view. Future work would check coordinates against venue websites and add a city filter.

I tested the published GitHub Pages site. The map and museum markers load correctly. Clicking a marker displays the venue details. The zoom controls work, and the Home component returns the map to its initial view. The legend also displays correctly.

## Credits (data, sample, and AI tools)

Los Angeles County provides the data. Esri provides the SDK, basemap, components, and starting sample.

I used ChatGPT mainly for debugging when the museum points did not appear on the map. It helped me understand how `FeatureLayer` loads data from the county's ArcGIS REST API. The debugging focused on the service URL, attribute fields, and the sequence for adding the layer after the map was ready. The final code requests the museum records, applies a category filter, and displays them with a custom renderer. ChatGPT also helped polish this README.