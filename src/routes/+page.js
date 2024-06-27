import supabase from '$lib/supabaseClient';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const { data: posts } = await supabase
      .from('posts')
      .select('*')
      .order('publish_at', {ascending: false});

  return {
    posts,
  };
}
