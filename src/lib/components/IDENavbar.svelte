<script lang="ts">
	const { fileMenu, runButton, showViewOnlyMessage = false, theme = 'dark' } = $props();

	let copied = $state(false);

	function handleShare() {
		navigator.clipboard.writeText(window.location.href).then(
			() => {
				copied = true;
				setTimeout(() => {
					copied = false;
				}, 3000);
			},
			() => {
				alert("Couldn't copy link to clipboard. Share the current URL manually.");
			}
		);
	}
</script>

<div class="flex items-center overflow-x-auto text-gray-800 dark:text-gray-200">
	<div class="flex items-center divide-x divide-[var(--color-bg-border-primary)]">
		<a
			href="/"
			class="relative inline-flex items-center px-4 py-2 text-sm font-medium shadow-sm hover:bg-[var(--color-bg-hover-primary)] focus:bg-[var(--color-bg-hover-primary)] focus:outline-none"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5"
			>
				<path
					fill-rule="evenodd"
					d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
		{@render fileMenu()}
	</div>

	{@render runButton()}

	<div class="flex items-center divide-x divide-[var(--color-bg-border-primary)]">
		{#if showViewOnlyMessage}
			<span class="px-4 py-2 text-sm font-medium whitespace-nowrap">View Only</span>
		{/if}
	</div>
</div>