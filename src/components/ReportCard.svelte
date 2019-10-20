<script>
    import {figureToGround}  from '../../modules/a11y.mjs';

    export let color1;
    export let color2;

    const report = figureToGround(color1, color2);
    const dark = figureToGround('#000', color2);

</script>
<style>
    s::before {
        content: 'Ⓧ '
    }
    dl {
        background-color: var(--c2);
        padding: var(--s2);
        margin: 0;
        color: var(--text);
    }
    dt {
        color: var(--c1);
        font: var(--f500);
    }
</style>

<dl style="--c1: {color1}; --c2: {color2}; --text: {dark.aaa ? 'var(--neutral100)' : 'var(--neutral0)'}">
    <dt>{color1} & {color2}</dt>
    <dd>
        {#if report.aa}
            AA
        {:else}
            <s>AA</s>
        {/if}
    </dd>
    <dd>
        {#if report.aaa}
            AAA
        {:else}
            <s>AAA</s>
        {/if}
    </dd>
    <dd>
        {#if report.aaLg}
            AA Large
        {:else}
            <s>AA Large</s>
        {/if}
    </dd>
    <dd>
        {#if report.aaaLg}
            AAA Large
        {:else}
            <s>AAA Large</s>
        {/if}
    </dd>
</dl>
