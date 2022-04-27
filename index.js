let map;

function initMap() {

  const uluru = { lat: 22.499998, lng: 22.482888 }

  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 58.416665, lng: 22.499998 },
    zoom: 8,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}


window.initMap = initMap;
