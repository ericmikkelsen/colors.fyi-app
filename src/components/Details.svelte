<script>
    export let c1
    export let c2
    export let modifier
    export let summaryText
    export let open = false
    let summary
    const esc = event => {
        console.log(event)
        console.log(open)
        if(event.keyCode === 27){
           open = false
           summary.focus()
        }
    }
</script>
<details 
    class={`Details ${modifier}`}
    on:keyup={esc} 
    bind:open={open}
    style={`--c1:${c1}; --c2:${c2};`}
>
    <summary
        bind:this={summary}
    >
        {summaryText}
    </summary>
	<slot>Details</slot>
</details>
<style>
    .Details {
        background-color: var(--c1);
        position: relative;
    }
    .Details summary {
        background-image: linear-gradient(0.25turn, var(--c1), var(--c2));
		display: block;
		padding: var(--s4);
		font: var(--f600);
		color: var(--neutral0);
        width: 100%;
    }
    :global(.Details[open] > summary) {
        position: sticky;
        top: 0;
        border-bottom: var(--s1) solid var(--neutral100);
    }
</style>