const SUPABASE_URL = 'https://brulbkgurviccbjegwdn.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJydWxia2d1cnZpY2NiamVnd2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM4ODE1OTcsImV4cCI6MTk3OTQ1NzU5N30.Gj7MdCMXmHCK96smfmJ3As3mqB_QPLujl1hFDOgR2w8';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function createPost(post) {
    return await client.from('posts').insert(post).single();
}

export async function getPosts(title) {
    let query = client.from('posts').select('*').limit(20);

    if (title) {
        query.ilike('title', `%${title}%`);
    }

    return await query;
}
