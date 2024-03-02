<script>
  import mapboxgl from 'mapbox-gl';
  import { onMount } from 'svelte';
  export let index;
  export let geoJsonToFit;

  mapboxgl.accessToken =
    'pk.eyJ1Ijoia3lsYXBwYXJrIiwiYSI6ImNsc21mNWwxNzBsc3oycXJ5NTAyMzZtamQifQ.FH00Q1Y2ARsOleB7tPzh0A';

  let container;
  let map;
  let citiesYears = {
    Montreal: { coordinates: [-73.5673, 45.5017], year: 1976 },
    Moscow: { coordinates: [37.6175, 55.7558], year: 1880 },
    'Los Angeles': { coordinates: [-118.2437, 34.0522], year: 1884 },
    Seoul: { coordinates: [126.978, 37.5665], year: 1988 },
    Barcelona: { coordinates: [2.1734, 41.3851], year: 1992 },
    Atlanta: { coordinates: [-84.388, 33.749], year: 1996 },
    Sydney: { coordinates: [151.2093, -33.8688], year: 2000 },
    Athens: { coordinates: [23.7275, 37.9838], year: 2004 },
    Beijing: { coordinates: [116.4074, 39.9042], year: 2008 },
  };
  let cityMarkers = [];

  onMount(() => {
    map = new mapboxgl.Map({
      container,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-50, 20],
      zoom: 1.8,
      bearing: 0,
    });

    map.on('load', () => {
      addMarkers();
      updateBounds();
      map.on('zoom', updateBounds);
      map.on('drag', updateBounds);
      map.on('move', updateBounds);
    });
  });

  function updateBounds() {
    const bounds = map.getBounds();
    geoJsonToFit.features[0].geometry.coordinates = [
      bounds._ne.lng,
      bounds._ne.lat,
    ];
    geoJsonToFit.features[1].geometry.coordinates = [
      bounds._sw.lng,
      bounds._sw.lat,
    ];

    cityMarkers.forEach((marker) => {
      const city = marker.cityData;
      marker.setLngLat(city.coordinates);
    });
  }

  function addMarkers() {
    Object.keys(citiesYears).forEach((cityName) => {
      const city = citiesYears[cityName];
      const marker = new mapboxgl.Marker()
        .setLngLat(city.coordinates)
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<h3>${cityName}</h3><p>Year: ${city.year}</p>`
          )
        )
        .addTo(map);

      marker.cityData = city;
      cityMarkers.push(marker);
    });
  }

  let isVisible = false;
  $: if (index === 2) {
    isVisible = true;
  } else {
    isVisible = false;
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://api.mapbox.com/mapbox-gl-js/v2.14.0/mapbox-gl.css"
  />
</svelte:head>

<div class="map" class:visible={isVisible} bind:this={container} />

<style>
  .map {
    width: 60%;
    height: 80vh; /* check problem when setting width */
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 2s,
      visibility 2s;
    outline: rgba(34, 33, 33, 0.053) solid 3px;
    padding: 1em;
    margin: 2em 2em 2em 2em;
  }

  .map.visible {
    opacity: 1;
    visibility: visible;
  }
</style>
