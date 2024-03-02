import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
import mapboxgl from "mapbox-gl";
import { geoMercator } from "d3-geo";
import "d3";
import "papaparse";
const Scroller_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "svelte-scroller-outer.svelte-xdbafy{display:block;position:relative}svelte-scroller-background.svelte-xdbafy{display:block;position:relative;width:100%}svelte-scroller-foreground.svelte-xdbafy{display:block;position:relative;z-index:2}svelte-scroller-foreground.svelte-xdbafy::after{content:' ';display:block;clear:both}svelte-scroller-background-container.svelte-xdbafy{display:block;position:absolute;width:100%;max-width:100%;pointer-events:none;will-change:transform}",
  map: null
};
const handlers = [];
if (typeof window !== "undefined") {
  const run_all = () => handlers.forEach((fn) => fn());
  window.addEventListener("scroll", run_all);
  window.addEventListener("resize", run_all);
}
if (typeof IntersectionObserver !== "undefined") {
  const map = /* @__PURE__ */ new Map();
  new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const update = map.get(entry.target);
        const index = handlers.indexOf(update);
        if (entry.isIntersecting) {
          if (index === -1)
            handlers.push(update);
        } else {
          update();
          if (index !== -1)
            handlers.splice(index, 1);
        }
      });
    },
    {
      rootMargin: "400px 0px"
      // TODO why 400?
    }
  );
}
const Scroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let widthStyle;
  let { top = 0 } = $$props;
  let { bottom = 1 } = $$props;
  let { threshold = 0.5 } = $$props;
  let { query = "section" } = $$props;
  let { parallax = false } = $$props;
  let { index = 0 } = $$props;
  let { count = 0 } = $$props;
  let { offset = 0 } = $$props;
  let { progress = 0 } = $$props;
  let { visible = false } = $$props;
  let outer;
  let foreground;
  let background;
  let offset_top = 0;
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  if ($$props.parallax === void 0 && $$bindings.parallax && parallax !== void 0)
    $$bindings.parallax(parallax);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  $$result.css.add(css$3);
  style = `
		position: ${"absolute"};
		top: 0;
		transform: translate(0, ${offset_top}px);
		z-index: ${1};
	`;
  widthStyle = "";
  return `

<svelte-scroller-outer class="svelte-xdbafy"${add_attribute("this", outer, 0)}><svelte-scroller-background-container class="background-container svelte-xdbafy" style="${escape(style, true) + escape(widthStyle, true)}"><svelte-scroller-background class="svelte-xdbafy"${add_attribute("this", background, 0)}>${slots.background ? slots.background({}) : ``}</svelte-scroller-background></svelte-scroller-background-container>

	<svelte-scroller-foreground class="svelte-xdbafy"${add_attribute("this", foreground, 0)}>${slots.foreground ? slots.foreground({}) : ``}</svelte-scroller-foreground>
</svelte-scroller-outer>`;
});
const Map_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".map.svelte-1qtsm4i{width:60%;height:80vh;position:absolute;opacity:0;visibility:hidden;transition:opacity 2s,\n      visibility 2s;outline:rgba(34, 33, 33, 0.053) solid 3px;padding:1em;margin:2em 2em 2em 2em}.map.visible.svelte-1qtsm4i{opacity:1;visibility:visible}",
  map: null
};
const Map$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { geoJsonToFit } = $$props;
  mapboxgl.accessToken = "pk.eyJ1Ijoia3lsYXBwYXJrIiwiYSI6ImNsc21mNWwxNzBsc3oycXJ5NTAyMzZtamQifQ.FH00Q1Y2ARsOleB7tPzh0A";
  let container;
  let isVisible = false;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.geoJsonToFit === void 0 && $$bindings.geoJsonToFit && geoJsonToFit !== void 0)
    $$bindings.geoJsonToFit(geoJsonToFit);
  $$result.css.add(css$2);
  {
    if (index === 2) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-1s9kg0l_START --><link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v2.14.0/mapbox-gl.css"><!-- HEAD_svelte-1s9kg0l_END -->`, ""}

<div class="${["map svelte-1qtsm4i", isVisible ? "visible" : ""].join(" ").trim()}"${add_attribute("this", container, 0)}></div>`;
});
const Graph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const proj3_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tooltip.svelte-1chv7kg.svelte-1chv7kg{position:absolute;background-color:white;border:1px solid #aaa;padding:10px;pointer-events:none;z-index:999}#chart-container.svelte-1chv7kg.svelte-1chv7kg{background-image:url('https://1000logos.net/wp-content/uploads/2021/03/Olympics-logo.png');background-size:20%;background-color:white;background-repeat:no-repeat;background-position:95% 90%;width:100%;max-width:1200px;height:100%;position:relative;border:2px solid black;box-sizing:border-box;margin:0 auto}#chart-container.svelte-1chv7kg.svelte-1chv7kg::before{content:'';position:absolute;top:-4px;left:-2px;right:-2px;bottom:-2px;border:5px solid;border-image:linear-gradient(\n      to bottom right,\n      #0081c8,\n      #fcb131,\n      #00a651,\n      #ee334e\n    );border-image-slice:1;z-index:-1}.gold-label.svelte-1chv7kg.svelte-1chv7kg{background-color:gold;padding:5px 5px;border-radius:5px}.silver-label.svelte-1chv7kg.svelte-1chv7kg{background-color:silver;padding:5px 5px;border-radius:5px}.bronze-label.svelte-1chv7kg.svelte-1chv7kg{background-color:#cd7f32;padding:5px 5px;border-radius:5px}#chart-container.svelte-1chv7kg div.svelte-1chv7kg{margin-top:20px;margin-left:10px}",
  map: null
};
const Proj3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let gold = true;
  let silver = true;
  let bronze = true;
  let isVisible = false;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$1);
  {
    if (index === 1) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  }
  return `<div class="${["data", isVisible ? "visible" : ""].join(" ").trim()}"></div>

<main><script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"><\/script>
  <div id="chart-container" style="width: 100%; height: 85vh;" class="svelte-1chv7kg"><div class="tooltip svelte-1chv7kg" style="opacity: 0;"></div>
    <div class="svelte-1chv7kg"><label class="gold-label svelte-1chv7kg"><input type="checkbox"${add_attribute("checked", gold, 1)}> Gold
        🥇
      </label>
      <label class="silver-label svelte-1chv7kg"><input type="checkbox"${add_attribute("checked", silver, 1)}> Silver
        🥈
      </label>
      <label class="bronze-label svelte-1chv7kg"><input type="checkbox"${add_attribute("checked", bronze, 1)}> Bronze
        🥉
      </label></div></div>
</main>`;
});
const ScrollyTeller_svelte_svelte_type_style_lang = "";
const css = {
  code: ".background.svelte-ahelru{width:100%;height:100vh;position:relative;outline:green solid 3px}.foreground.svelte-ahelru{width:100%;margin:0 auto;height:auto;position:relative;outline:red solid 3px}h1.svelte-ahelru{font-size:43px;font-weight:500, 'bold';text-transform:uppercase;line-height:1;text-align:center;font-family:'verdana'}h3.svelte-ahelru{font-family:'verdana';text-align:center;font-size:20px;line-height:28px}p.svelte-ahelru{font-family:'verdana';text-align:left;font-size:15px;line-height:20px}.banner.svelte-ahelru{background-image:linear-gradient(\n      to bottom right,\n      rgba(0, 129, 200, 0.5),\n      rgba(252, 177, 49, 0.5),\n      rgba(0, 166, 81, 0.5),\n      rgba(238, 51, 78, 0.5)\n    );padding:20px;margin-bottom:20px;border-radius:10px;color:black}section.svelte-ahelru{height:90vh;background-color:rgba(0, 0, 0, 0.2);outline:magenta solid 3px;text-align:center;max-width:100%;color:black;padding:1em;margin:0 0 2em 0;font-family:'verdana';text-align:center;font-size:20px;line-height:28px;font-weight:bold}",
  map: null
};
const ScrollyTeller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projection;
  let count, index, offset, progress;
  let width, height;
  let geoJsonToFit = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [1, 0] }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [0, 1] }
      }
    ]
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    projection = geoMercator().fitSize([width, height], geoJsonToFit);
    $$rendered = `${validate_component(Scroller, "Scroller").$$render(
      $$result,
      {
        top: 0,
        bottom: 1,
        threshold: 0.5,
        count,
        index,
        offset,
        progress
      },
      {
        count: ($$value) => {
          count = $$value;
          $$settled = false;
        },
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        },
        offset: ($$value) => {
          offset = $$value;
          $$settled = false;
        },
        progress: ($$value) => {
          progress = $$value;
          $$settled = false;
        }
      },
      {
        foreground: () => {
          return `<div class="foreground svelte-ahelru" slot="foreground"><section class="svelte-ahelru"><div class="banner svelte-ahelru"><h1 class="svelte-ahelru">United States Olympic Journey</h1>
        <h3 class="svelte-ahelru">The Olympics data contains information about medals won for each
          sport, year, country, gender, and event between the period of
          1976-2008 in the Summer Olympics.
        </h3>
        <p class="svelte-ahelru">Write Up: We plan to explore the U.S’s Olympics journey throughout the
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
        </p></div></section>
    <section class="svelte-ahelru">Data Exploration
      ${validate_component(Proj3, "Project3").$$render($$result, { index }, {}, {})}</section>
    <section class="svelte-ahelru">Where were olympics held?
      ${validate_component(Map$1, "Map").$$render(
            $$result,
            { index, geoJsonToFit },
            {
              geoJsonToFit: ($$value) => {
                geoJsonToFit = $$value;
                $$settled = false;
              }
            },
            {}
          )}</section>
    <section class="svelte-ahelru">U.S. Best Performing Sports</section>
    <section class="svelte-ahelru">U.S. Best Performing Athletes</section>
    <section class="svelte-ahelru">U.S. Gender Based Performance</section>
    <section class="svelte-ahelru">Is there a home field advantage?</section>
    <section class="svelte-ahelru">Closing Thoughts</section></div>`;
        },
        background: () => {
          return `<div class="background svelte-ahelru" slot="background">${validate_component(Graph, "Graph").$$render($$result, { index, width, height, projection }, {}, {})}
    </div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(ScrollyTeller, "ScrollyTeller").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
