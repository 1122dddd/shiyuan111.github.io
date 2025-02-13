// The value for 'accessToken' begins with 'pk...'  
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hpeXVhbjExMSIsImEiOiJjbTV3amQzbHMwMmZpMmtzYjJ6emViNWdtIn0.T5ke2J9DJf9w0E0EA6bKag";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/shiyuan111/cm73mr3ep004v01r86qgcg22p"
});

const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl,
  marker: false,
  placeholder: "Search for places in Aberdeen",
  proximity: { longitude: 57.1497, latitude: 2.0943 }
});
map.addControl(geocoder, "top-left");

map.on("mousemove", (event) => {
  const dzone = map.queryRenderedFeatures(event.point, { layers: ["2989650c"] });
  document.getElementById("pd").innerHTML = dzone.length
    ? `<h3 style='color:darkgreen;'>${dzone[0].properties.Prmry_S}</h3><p>Area: <strong>${dzone[0].properties.Shape__Area}</strong> ㎡</p>`
    : `<p>Hover Over A Data Zone!</p>`;
  map.getSource("hover").setData({
    type: "FeatureCollection",
    features: dzone.map(f => ({ type: "Feature", geometry: f.geometry }))
  });
});

map.on("load", () => {
  const layers = ["Housing_Land_Audit_2023"];
  const colors = ["hsla(245, 100%, 46%, 0.29)"];
  const draw = new MapboxDraw({ displayControlsDefault: false, controls: { polygon: true, trash: true } });
  map.addControl(draw, 'top-left');

  const legend = document.getElementById("legend");
  layers.forEach((layer, i) => {
    const color = colors[i];
    const key = document.createElement("div");
    if (i <= 1 || i >= 8) key.style.color = "white";
    key.className = "legend-key";
    key.style.backgroundColor = color;
    key.innerHTML = `${layer}`;
    legend.appendChild(key);
  });

  map.addSource("hover", { type: "geojson", data: { type: "FeatureCollection", features: [] }});
  map.addLayer({ id: "dz-hover", type: "line", source: "hover", layout: {}, paint: { "line-color": "black", "line-width": 4 }});
});

map.addControl(new mapboxgl.NavigationControl(), "top-left");
map.addControl(new mapboxgl.GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true, showUserHeading: true }), "top-left");