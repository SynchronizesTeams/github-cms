<script>
  import "../../../app.css";
  export let data;
  $: ({ discussion, error } = data);

  $: formattedDate = discussion?.createdAt
    ? new Date(discussion.createdAt).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : 'Tanggal tidak tersedia';

  let avatarError = false;
  function handleAvatarError() {
    avatarError = true;
  }

  $: if (discussion) {
    console.info("Discussion in component:", discussion);
  }
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
  <title>{discussion?.title || 'Article'} | Article SynchronizeTeams</title>
</svelte:head>

<div class="bg-[#f0f0f0] xs:p-1 sm:p-2 md:p-4 font-[Space Grotesk]">
  <div class="max-w-4xl mx-auto">
    {#if error}
      <div class="p-6 neo-brutal-border neo-brutal-shadow bg-red-100 text-red-800 mb-8">
        <h2 class="text-2xl font-bold mb-2">Error Loading Article</h2>
        <p>{error}</p>
      </div>
    {/if}

    <div class="neo-brutal-border neo-brutal-shadow bg-white p-6 md:p-8 mb-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        {discussion?.title?.toUpperCase() || 'No Title Available'}
      </h1>

      <div class="flex items-center gap-4 mb-8">
        <div class="w-12 h-12 neo-brutal-border rounded-full overflow-hidden">
          {#if discussion?.author && discussion.author.avatarUrl && !avatarError}
            <img
              src={discussion.author.avatarUrl}
              alt={discussion.author.login}
              class="w-full h-full object-cover"
              on:error={handleAvatarError}
            >
          {:else}
            <img
              src="favicon.png"
              alt="Default avatar"
              class="w-full h-full object-cover"
            >
          {/if}
        </div>
        <div>
          <p class="font-bold">{discussion?.author?.login || 'Anonymous'}</p>
          <p class="text-sm text-gray-600">{formattedDate}</p>
        </div>
      </div>

      <div class="space-y-6 text-lg">
        <div class="discussion-content neo-brutal-border p-6">
          {@html discussion?.bodyHTML || '<p>No content available</p>'}
        </div>
      </div>
    </div>

    <div class="neo-brutal-border neo-brutal-shadow bg-[#333] text-white p-4 text-center">
      <p>© 2025 SynchronizeTeams. All rights reserved.</p>
    </div>
  </div>
</div>

<style>
  .neo-brutal-shadow {
    box-shadow: 8px 8px 0px #000;
  }

  .neo-brutal-border {
    border: 3px solid #000;
  }

  :global(.discussion-content em) {
    font-style: italic !important;
  }

  :global(.discussion-content strong) {
    font-weight: bold !important;
  }

  :global(.discussion-content ul),
  :global(.discussion-content ol) {
    padding-left: 1.5rem !important;
    margin-bottom: 1rem !important;
    list-style-position: outside !important;
  }

  :global(.discussion-content ul) {
    list-style-type: disc !important;
  }

  :global(.discussion-content ol) {
    list-style-type: decimal !important;
  }

  :global(.discussion-content li) {
    margin-bottom: 0.5rem !important;
    display: list-item !important;
  }

  :global(.discussion-content blockquote) {
    border-left: 4px solid #ccc !important;
    padding-left: 1rem !important;
    color: #555 !important;
    margin: 1rem 0 !important;
    font-style: italic !important;
  }

  :global(.discussion-content code) {
    background-color: #f0f0f0 !important;
    padding: 0.2rem 0.4rem !important;
    border-radius: 3px !important;
    font-family: monospace !important;
  }

  :global(.discussion-content a) {
    color: #0066cc !important;
    text-decoration: underline !important;
  }

  :global(.discussion-content img) {
    max-width: 100% !important;
    height: auto !important;
    margin: 1rem 0 !important;
  }
</style>
