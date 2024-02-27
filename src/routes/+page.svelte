<script lang="ts">
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);
	import { Button } from '$lib/components/ui/button';

	const handleLoginClick = async () => {
		supabase.auth.signInWithOAuth({
			provider: 'github'
		});
	};
</script>

<h1>Login</h1>

<Button on:click={handleLoginClick}>Login with GitHub</Button>
