<script>
    import {figureToGround} from '../../modules/a11y.mjs'
    export let c1
    export let c2
    export let modifier
    export let summaryText
    export let open = false
    let summary
    const esc = event => {
        if(event.keyCode === 27){
            summary.focus()
            open = false
        }
    }
    const a11y = figureToGround(c1, '#000')
</script>
<details 
    class={`Details ${a11y.aaa && 'Details--dark'} ${modifier}`}
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
        color: var(--neutral0);
    }
    .Details--dark {
        color: var(--neutral100);
    }
    .Details summary {
        background-image: linear-gradient(0.25turn, var(--c1), var(--c2));
		display: block;
		padding: var(--s4);
		font: var(--f600);
        width: 100%;
        position: sticky;
        top: 0;
    }
    :global(.Details[open] > summary) {
        border-bottom: var(--s1) solid var(--neutral100);
    }
</style>