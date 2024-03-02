<!-- <script>
  import { fly, draw } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { cubicOut, cubicInOut } from 'svelte/easing';
  import { cities } from '../data/olympic.csv';

  const CITY_COLUMN_INDEX = 0;

  export let index, projection; // width, height,

  const tweenOptions = {
    delay: 0,
    duration: 1000,
    easing: cubicOut,
  };

  const tweenedX = tweened(
    cities.features.map((city) => projection(city.geometry.coordinates)[0]),
    tweenOptions
  );

  const tweenedY = tweened(
    cities.features.map((city) => projection(city.geometry.coordinates)[1]),
    tweenOptions
  );

  $: tweenedData = cities.features.map((city, i) => ({
    x: $tweenedX[i],
    y: $tweenedY[i],
    city: city.properties[CITY_COLUMN_INDEX],
  }));

  $: uniqueCities = Array.from(new Set(tweenedData.map((data) => data.city)));

  // Mark up only unique city values
  $: markedUpCities = uniqueCities.map((city) => ({
    city,
    // Assuming you want to retain the first occurrence of the city's coordinates
    x: tweenedData.find((data) => data.city === city).x,
    y: tweenedData.find((data) => data.city === city).y,
  }));

  $: {
    if (index === 1) {
      tweenedX.set(
        cities.features.map((city) => projection(city.geometry.coordinates)[0])
      );
      tweenedY.set(
        cities.features.map((city) => projection(city.geometry.coordinates)[1])
      );
    }
  }
</script>

<style>
</style> -->
