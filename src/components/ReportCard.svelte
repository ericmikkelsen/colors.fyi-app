<script>
    import {figureToGround}  from '../../modules/a11y.mjs';

    export let color1;
    export let color2;

    const report = figureToGround(color1, color2);

</script>
<style>

</style>

AA: {report.aa ? '✔':'Ⓧ '}
<br>AAA: {report.aaa ? '✔':'Ⓧ '}
<br>AA Large: {report.aaLg ? '✔':'Ⓧ '}
<br>AAA Large: {report.aaaLg ? '✔':'Ⓧ '}
