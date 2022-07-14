<script lang="ts">
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import MobileHeader from '$lib/components/sidebar/MobileHeader.svelte';
</script>

<div id="site-wrapper">
	<div class="sidebar-wrapper">
		<MobileHeader />
		<Sidebar />
	</div>

	<main>
		<div>
			<slot />
		</div>
		<Footer />
	</main>
</div>

<style>
	#site-wrapper {
		display: grid;
		grid-template-columns: var(--sidebar-width) 1fr;
	}

	.sidebar-wrapper {
		height: 100%;
		width: 100%;
	}

	main {
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-between;
		overflow-y: scroll;
	}

	@media (max-width: 900px) {
		#site-wrapper {
			display: block;
		}
	}
</style>
