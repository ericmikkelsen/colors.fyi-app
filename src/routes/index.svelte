<style>
	a {
		display: block;
		padding: 1rem 5%;
	}
</style>
<script>
	import { palette } from '../routes/store/index.js'
	const sketchColors = Object.values(palette).reduce( (accumulator, swatch) => {
		if(Array.isArray(swatch)){
			const colors = swatch.map( color => {
				return color.sketch
			} )
		}

	} ,[])
	const encode = str => {
		return 'data:text/plain;charset=utf-8,' + encodeURIComponent( str )
	}
	const sketch = {
		compatibleVersion: "1.4",
		pluginVersion: "1.4",
		colors: sketchColors,
	}
	const download = {
		json: encode( JSON.stringify(palette) ),
		sketch: encode( JSON.stringify(sketch) ),
	}

</script>

<svelte:head>
	<title>Colors.fyi</title>
</svelte:head>


<a 
	download="colors-fyi.json"
	href="{download.json}"
>
	JSON
</a>
<a 
	download="colors-fyi-sketch.json"
	href="{download.sketch}"
>
	Sketch
</a>