<script context="module">
  import { paletteHueShift } from "../../../modules/palette.mjs";
  import colorObject from "../../../modules/colorObject.mjs";
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`colors/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      const colors = paletteHueShift(params.slug);
      return {
        c: colorObject(params.slug),
        colors: colors.map( color => {
          const colorObj = colorObject(color)
          colorObj.current = colorObj.a11y.white || colorObj.a11y.black
          return colorObj
        } )
      };
    } else {
      this.error(res.status, data.message);
    }
  }

</script>

<script>
  import { palette } from '../store/index.js';

  export let c;
  export let colors;
  export let chosen = palette[c.hex] ? true : false
  const toggleColor = () => {
    let p = palette
    if (p[c.hex] ){
      delete p[c.hex]
      chosen = false
    } else {
      p[c.hex] = colors
      chosen = true
    }
    palette.set(p)
  }
</script>

<style>
  ol {
    margin: 0;
    padding: 0 0 0 5%;
  }
  li {
    padding: 0;
    margin: 0;
  }

  ol {
    list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");
  }
  ol > li {
    color: var(--neutral100);
  }
  ol > li:nth-child(5) ~ * {
	  color: var(--neutral0);
  }
  header {
   padding: 5% 0 10% 5%;
  }
  h1 {
    font: var(--f700);
    margin: 0 0 var(--s3);
  }
  button {
    background-color: var(--c);
    color: var(--neutral0);
    font: var(--f600);
    padding: var(--s1);
    border: none;
  }
  details {
    font: var(--f600);
  }
  details p {
    font: var(--f400);
    padding: var(--s1) var(--s4) var(--s4); 
    margin: 0;
  }
  summary {
    padding: var(--s4);
  }
</style>

<header>
  <h1>
    {c.name}
  </h1>
  <button 
    style="--c: #{c.hex}"
    on:click={toggleColor} 
  > 

    {chosen ? '- remove this swatch from your palette' : '+ add this swatch to your palette'}
  </button>
</header>
<ol>
  {#each colors as color, index}
    <li style="background-color: {color.hex};--c: {color.hex}">
      <details>
        <summary>
          {c.name}{(index * 10)}
        </summary>
        <p>
          luminance: {color.luminance.toFixed(4)}<br>
          contrast: {color.current.contrast.toFixed(4)}<br>
          aa: {color.current.aa}<br>
          aaa: {color.current.aaa}<br>
          aaa: {color.current.aaLg}<br>
          aaa: {color.current.aaaLg}<br>
        </p>
      </details>
    </li>
  {/each}
</ol>
