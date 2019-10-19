<script>
	export let segment;
</script>

<style>
	nav {
		background-color: var(--neutral100);
	}
	a {
		display: inline-block;
		padding: var(--s3);
		margin: 0;
		font: var(--f500);
		color: var(--neutral0);
	}
</style>

<nav>
	<a class='{segment === "" ? "selected" : ""}' href='/'>Home</a>
	<a class='{segment === "color-matrix" ? "selected" : ""}' href='color-matrix'>Your colors</a>
	<!-- <a class='{segment === "categories" ? "selected" : ""}' href='categories'>categories</a> -->
</nav>