<script>
  export let data;
  $: ({ nodes } = data);
  import "../app.css";
</script>

<svelte:head>
  <title>Articles - SynchronizeTeams</title>
</svelte:head>

<div class="max-w-4xl mx-auto p-4 md:p-8">
  <div class="neo-brutal-border neo-brutal-shadow bg-white p-6 md:p-8 mb-8">
    <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight border-b-4 border-black pb-4">
      LATEST ARTICLES
    </h1>
    <p class="text-lg text-gray-600"><em>Sync</em> in <em>Tech</em> just with Us <u><i>Synchronizes</i></u></p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each nodes as { title, number, slug, createdAt }}
      <div class="neo-brutal-border neo-brutal-shadow bg-white p-6 hover:-translate-y-1 transition-transform">
        <div class="flex justify-between items-start mb-4">
          <span class="text-sm text-gray-600">
            {new Date(createdAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </span>
          <span class="bg-black text-white px-2 py-1 text-sm">#{number}</span>
        </div>

        <h2 class="text-2xl font-bold mb-4 leading-tight">{title}</h2>

        <a
          href="/article/{slug}-{number}"
          class="neo-brutal-border neo-brutal-shadow bg-yellow-300 px-4 py-2 font-bold inline-block hover:bg-yellow-400 transition-colors"
        >
          Read More →
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .neo-brutal-shadow {
    box-shadow: 8px 8px 0px #000;
  }

  .neo-brutal-border {
    border: 3px solid #000;
  }
</style>
