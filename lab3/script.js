// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hpeXVhbjExMSIsImEiOiJjbTV3amQzbHMwMmZpMmtzYjJ6emViNWdtIn0.T5ke2J9DJf9w0E0EA6bKag";
const style_2022 = "mapbox://styles/shiyuan111/cm6gjn34900cu01pbc2ilgibv";
const style_2024 = "mapbox://styles/shiyuan111/cm6gk1cjo00dl01sadz9652l8";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: style_2022,
  center: [-0.089932, 51.514441],
  zoom: 14
});
const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");
//On click the radio button, toggle the style of the map.
for (const input of inputs) {
  input.onclick = (layer) => {
    if (layer.target.id == "style_2022") {
      map.setStyle(style_2022);
    }
    if (layer.target.id == "style_2024") {
      map.setStyle(style_2024);
    }
  };
}