<script>
	import Dashboard from './components/Dashboard.svelte';
	import { authState, getUserData } from '$lib/firebase/firebase.svelte';

	const userData = getUserData();
</script>

<svelte:head>
	<title>Abdurayim's Online IDE</title>
	<meta
		name="description"
		content="An online IDE designed for competitive programming, with code execution, intellisense, mobile support, realtime collaborative editing, and built-in USACO submissions."
	/>
</svelte:head>

<div class="flex min-h-full flex-col bg-[var(--color-bg-primary)]" data-theme={userData.theme}>
	<div class="flex-1">
		<div class="mx-auto max-w-6xl p-4 sm:p-6 md:p-8 lg:p-12">
			<h1 class="text-2xl font-black text-[var(--color-text-primary)] md:text-4xl">
				Abdurayim's Online IDE
			</h1>

			<div class="h-6"></div>

			{#if !authState.firebaseUser}
				<div class="text-[var(--color-text-secondary)]">Loading...</div>
			{:else}
				<Dashboard />
			{/if}
		</div>
	</div>
</div>