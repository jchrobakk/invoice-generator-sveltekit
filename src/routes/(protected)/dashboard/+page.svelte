<script lang="ts">
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);
	import { Button } from '$lib/components/ui/button';
	import { redirect } from '@sveltejs/kit';

	const logout = async () => {
		supabase.auth.signOut();
		redirect(301, '/');
	};
</script>

<h1>Dashboard</h1>
<Button on:click={logout}>Logout</Button>
