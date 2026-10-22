const serviceUrl = "https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/LMS_Data_Public/MapServer/6";
const fields = ["name", "addrln1", "city", "cat2"];
const statusElement = document.getElementById("status");
function buildPopup(feature) {
  const attributes = feature.graphic.attributes;
  const details = document.createElement("dl");
  details.className = "venue-details";
  const rows = [
    ["Name", attributes.name],
    ["Street address", attributes.addrln1],
    ["City", attributes.city],
    ["County category", attributes.cat2]
  ];
  for (const [label, value] of rows) {
    const term = document.createElement("dt");
    term.textContent = label;
    const description = document.createElement("dd");
    description.textContent = value == null || String(value).trim() === ""
      ? "Not provided by source" : String(value);
    details.append(term, description);
  }
  return details;
}

try {
  const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
  const viewElement = document.querySelector("arcgis-map");
  await viewElement.viewOnReady();
  const museums = new FeatureLayer({
    url: serviceUrl,
    title: "Museums and aquariums",
    outFields: fields,
    visible: true,
    minScale: 0,
    maxScale: 0,
    definitionExpression: "cat2 = 'Museums and Aquariums'",
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        style: "circle",
        color: "#7545eb",
        size: 10,
        outline: { color: "#ffffff", width: 1.25 }
      }
    },
    popupTemplate: {
      title: "{name}",
      outFields: fields,
      content: buildPopup
    }
  });



  viewElement.map.add(museums);
  await viewElement.whenLayerView(museums);
  const count = await museums.queryFeatureCount();
  statusElement.textContent = `${count} source records | Connected to LA County`;
} catch (error) {
  statusElement.dataset.state = "error";
  statusElement.textContent = "The map could not load. Refresh this page or check the data source link.";
  console.error("Museum map loading error:", error);
}
