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
        color: params.slug,
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

  export let color;
  export let colors;
  export let chosen = palette[color] ? true : false
  const toggleColor = () => {
    let p = palette
    if (p[color] ){
      delete p[color]
      chosen = false
    } else {
      p[color] = colors
      chosen = true
    }
    palette.set(p)
  }
</script>

<style>
  ol,
  li {
    padding: 0;
    margin: 0;
  }

  ol {
    list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");
    counter-reset: item;
	counter-reset:item -10;
  }
  ol > li {
	counter-increment:item 10;
	padding: 1.25% 2.5%;
	color: #000;
  }
  ol > li:nth-child(5) ~ * {
	  color: #fff;
  }
  ol > li:nth-child(6)::after {
	display: inline;
    content: var(--c);
	color: #000;
  }
  ol > li:before {
	display: inline;
    content: counter(item) " ";
  }
  button {
    background: #fff;
    font-size: 2rem;
    line-height: 1;
    padding: .5rem;
    border: 1px solid;
    border-radius: 99em;
    margin-bottom: 1rem;
  }
</style>


<div class="content">
  <button 
    style="color: #{color}"
    on:click={toggleColor} 
  >
    {color} {chosen ? '-' : '+'}
  </button>
  <ol>
    {#each colors as color}
      <li style="background-color: {color.hex};--c: {color.hex}">
        <details>
          <summary>
            {color.hex}
          </summary>
            luminance: {color.luminance.toFixed(4)}<br>
            contrast: {color.current.contrast.toFixed(4)}<br>
            aa: {color.current.aa}<br>
            aaa: {color.current.aaa}<br>
            aaa: {color.current.aaLg}<br>
            aaa: {color.current.aaaLg}<br>
        </details>
      </li>
    {/each}
  </ol>
</div>
