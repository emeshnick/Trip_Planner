import mapboxgl from "mapbox-gl";

const newMarker = function (type, coordinate) {
  console.log(" new marker called !!");
  if (type === "hotel") {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

    return new mapboxgl.Marker(document.getElementById("marker")).setLngLat(
      coordinate
    );
  } else if (type === "activity") {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

    return new mapboxgl.Marker(document.getElementById("marker")).setLngLat(
      coordinate
    );
  } else if (type === "restaurant") {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

    return new mapboxgl.Marker(document.getElementById("marker")).setLngLat(
      coordinate
    );
  }
};

export default newMarker;
