// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hpeXVhbjExMSIsImEiOiJjbTV3amQzbHMwMmZpMmtzYjJ6emViNWdtIn0.T5ke2J9DJf9w0E0EA6bKag";
//Before map
const beforeMap = new mapboxgl.Map({
  container: "before",
  style: "mapbox://styles/shiyuan111/cm6gjn34900cu01pbc2ilgibv",
  center: [-0.089932, 51.514441],
  zoom: 14
});
//After map
const afterMap = new mapboxgl.Map({
  container: "after",
  style: " mapbox://styles/shiyuan111/cm6gk1cjo00dl01sadz9652l8",
  center: [-0.089932, 51.514441],
  zoom: 14
});
const container = "#comparison-container";
const map = new mapboxgl.Compare(beforeMap, afterMap, container, {});