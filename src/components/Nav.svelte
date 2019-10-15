<script>
	export let segment;
</script>

<style>
	nav {
		background-color: var(--neutral100);
		color: var(--neutral0);
		padding: 0;
		width: 95%;
		margin-left: auto;
	}
	a {
		display: block;
		padding: var(--s3);
		margin: 0;
		font: var(--f500);
		color: inherit;
	}
</style>

<nav>
	<a class='{segment === "" ? "selected" : ""}' href='/'>Home</a>
	<a class='{segment === "categories" ? "selected" : ""}' href='categories'>categories</a>
	<a class='{segment === "color-matrix" ? "selected" : ""}' href='color-matrix'>Color Matrix</a>
</nav>