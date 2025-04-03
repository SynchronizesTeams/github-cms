export async function load({ params: { slug }, fetch }) {
  const number = slug.split("-").pop();
  console.info(`Fetching article number: ${number}`);

  try {
    const res = await fetch(`/api/article/${number}.json`);

    if (!res.ok) {
      console.error(`API returned status: ${res.status}`);
      return { discussion: null, error: `Failed to fetch: ${res.statusText}` };
    }

    const discussion = await res.json();
    console.debug("API response:", discussion);

    if (!discussion || !discussion.bodyHTML) {
      console.error("Invalid discussion data:", discussion);
      return {
        discussion: discussion || null,
        error: "Discussion data is incomplete"
      };
    }

    return { discussion };
  } catch (error) {
    console.error('Error fetching discussion:', error);
    return {
      discussion: null,
      error: error.message
    };
  }
}
