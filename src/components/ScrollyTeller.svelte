<script>
  import Scroller from '@sveltejs/svelte-scroller';
  import Map from './Map.svelte';
  import { geoMercator } from 'd3-geo';
  import Graph from './Graph.svelte';
  import Project3 from './proj3.svelte';

  let count, index, offset, progress;
  let width, height;

  let geoJsonToFit = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [1, 0],
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [0, 1],
        },
      },
    ],
  };

  $: projection = geoMercator().fitSize([width, height], geoJsonToFit);
</script>

<Scroller
  top={0.0}
  bottom={1}
  threshold={0.5}
  bind:count
  bind:index
  bind:offset
  bind:progress
>
  <div
    class="background"
    slot="background"
    bind:clientWidth={width}
    bind:clientHeight={height}
  >
    <Graph {index} {width} {height} {projection} />
    <!-- <div class="progress-bars">
      <p>current section: <strong>{index + 1}/{count}</strong></p>
      <progress value={count ? (index + 1) / count : 0} />

      <p>offset in current section</p>
      <progress value={offset || 0} />

      <p>total progress</p>
      <progress value={progress || 0} />
    </div> -->
  </div>
  <div class="foreground" slot="foreground">
    <section>
      <div class="banner">
        <h1>United States Olympic Journey</h1>
        <h3>
          The Olympics data contains information about medals won for each
          sport, year, country, gender, and event between the period of
          1976-2008 in the Summer Olympics.
        </h3>
        <p>
          Write Up: We plan to explore the U.S’s Olympics journey throughout the
          years. So far, we have visualizations communicating general overviews
          of Olympic medals concerning which medals earned for different
          countries, years, events, etc. We have a hierarchical bar chart with
          each hierarchy going into more detail regarding medaling information.
          This one is a continuation of project 3, so several additional
          interactions such as tooltips and querying are also implemented.
          There’s also an additional visualization of a world map showing an
          overview of location and year for different Olympics. There are 6
          different visualizations/questions we’d like to explore, so the most
          challenging part of the project to design will likely be creating all
          6 with equal quality and good flow between each one. Specifically, a
          visualization determining whether there’s a home advantage to hosting
          the Olympics in a country’s home could be more challenging. To do so,
          we need to determine percentage of medals earned for the home country
          against all medals earned during that Olympics. That would be the y
          axis, and each country would be the x axis. In addition to extra
          calculations of the data for they axis, we need to figure out a way to
          visualize that without overplotting since each country (each tick on
          the x axis) would have several points.
        </p>
      </div>
    </section>
    <section>
      Data Exploration
      <Project3 {index} />
    </section>
    <section>
      Where were olympics held?
      <Map bind:geoJsonToFit {index} />
    </section>
    <section>U.S. Best Performing Sports</section>
    <section>U.S. Best Performing Athletes</section>
    <section>U.S. Gender Based Performance</section>
    <section>Is there a home field advantage?</section>
    <section>Closing Thoughts</section>
  </div>
</Scroller>

<style>
  .background {
    width: 100%;
    height: 100vh;
    position: relative;
    outline: green solid 3px;
  }

  .foreground {
    width: 100%;
    margin: 0 auto;
    height: auto;
    position: relative;
    outline: red solid 3px;
  }
  h1 {
    font-size: 43px;
    font-weight: 500, 'bold';
    text-transform: uppercase;
    line-height: 1;
    text-align: center;
    font-family: 'verdana';
  }

  h3 {
    font-family: 'verdana';
    text-align: center;
    font-size: 20px;
    line-height: 28px;
  }

  p {
    font-family: 'verdana';
    text-align: left;
    font-size: 15px;
    line-height: 20px;
  }

  /* .progress-bars {
    position: absolute;
    background: rgba(170, 51, 120, 0.2) /*  40% opaque */
  /* visibility: visible; */
  /* }  */

  .banner {
    background-image: linear-gradient(
      to bottom right,
      rgba(0, 129, 200, 0.5),
      rgba(252, 177, 49, 0.5),
      rgba(0, 166, 81, 0.5),
      rgba(238, 51, 78, 0.5)
    );
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    color: black;
  }

  section {
    height: 90vh;
    background-color: rgba(0, 0, 0, 0.2); /* 20% opaque */
    /* color: white; */
    outline: magenta solid 3px;
    text-align: center;
    max-width: 100%; /* adjust at will */
    color: black;
    padding: 1em;
    margin: 0 0 2em 0;
    font-family: 'verdana';
    text-align: center;
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
  }
</style>
