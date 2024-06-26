<script>
  /** @type {import('./$types').PageData} */
  export let data;
  const { posts } = data;
</script>

<h1>राज नारायण सिंह</h1>
{#each posts as post}
  <h2>{post.title}</h2>
  <div>{post.publish_at}</div>
  <p style="white-space: pre-line">{post.body}</p>
{/each}
<br />
<a href="/about">लेखक के बारे में</a>
