<script>
  import 'reveal.js/dist/reveal.css';

    import Reveal            from 'reveal.js';
    import { onMount, tick } from 'svelte';
    import Presentation      from './Presentation.svelte';

    export let app;
    export let reveal;

    const isPrintPdf = window.location.search.includes('print-pdf');

    function exportPdf() {
        window.open(window.location.pathname + '?print-pdf', '_blank');
    }

    onMount(async () => {
        await tick();
        const deck = new Reveal(reveal);
        deck.initialize();
      });

</script>

<svelte:head>
    <title>{app.name}</title>
</svelte:head>

<div class="reveal">
    <div class="slides">
        <Presentation/>
    </div>
</div>

{#if !isPrintPdf}
<button on:click={exportPdf} style="
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 100;
  background: rgba(200,169,81,0.15);
  border: 1px solid #c8a951;
  color: #c8a951;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.75em;
  cursor: pointer;
  letter-spacing: 0.05em;
">Export PDF</button>
{/if}

