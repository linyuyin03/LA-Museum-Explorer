# LA Museum & Aquarium Explorer

Yuyin Lin | SSCI 591 | Project 3

## What this map shows

This map helps residents and visitors explore museums and aquariums listed in Los Angeles County's public GIS service. Users can click a purple marker to read a place's name, street address, city, and category. The map provides a starting point for exploration. Users should confirm current details with each venue before visiting.

## Starting sample (name and link)

The app adapts Esri's [Intro to FeatureLayer](https://developers.arcgis.com/javascript/latest/sample-code/intro-featurelayer/) sample. It keeps the sample's CDN loading method, map component, FeatureLayer, and layer-addition workflow. The SDK version is 5.1. Page structure is in `index.html`, styles are in `styles.css`, and map behavior is in `app.js`.

## What I changed

I changed the initial center to Los Angeles and set the zoom to 9. I replaced the hybrid basemap with `gray-vector`. I replaced the tree symbols with purple circles and white outlines. I also changed the browser title and added a visible heading and an About paragraph.

The county layer replaces the sample's tree dataset. Its popup displays four source fields. The code removes the tree-specific renderer, field settings, ordering, and extent constraints. A category filter keeps records labeled "Museums and Aquariums." The layout adapts to smaller screens, and a status message reports loading success or failure.

## Data source (name, URL, layer type, and reason)

The data source is Los Angeles County's **Museums and Aquariums**, layer 6:

https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/LMS_Data_Public/MapServer/6

The app uses `FeatureLayer` because this is a public, queryable point layer. ArcGIS supports individual feature layers within map services, including URLs ending in `MapServer/6`. The browser reads features from the service when the page loads. The project does not contain a downloaded data copy. I chose this source because the locations and descriptive fields support a focused cultural exploration map.

## Component I added

I added the Home component. It returns the map to its initial Los Angeles view after users pan or zoom. The app also retains zoom controls and a legend to explain the purple markers.

## Problems and what I'd improve next

Some records lack addresses or cities. The popup labels these values "Not provided by source." The service also reports a very broad extent, so the app uses a fixed starting view. County classifications and coordinates may contain errors. Future work would check locations against venue websites and add a city filter. API requests and JavaScript syntax were checked. The automated preview browser lacked WebGL2, so map rendering and interactions still need testing on GitHub Pages in normal and incognito windows.

## Credits (data and sample)

Los Angeles County provides the data. Esri provides the SDK, basemap, components, and starting sample.

## Run locally

Run `npm start` in the project folder, then open http://127.0.0.1:3000 in your browser. Node.js is required; no dependency installation is needed. Keep the terminal running and press Ctrl+C to stop the server.

Do not open index.html directly with a file:// URL: browsers block loading the local JavaScript module. An internet connection is required for the ArcGIS SDK, basemap, and county data. Click a purple marker to view venue details.
