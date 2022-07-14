<script lang="ts">
	import Icon from '$lib/icons/Icon.svelte';
	import logoImg from '$lib/images/DDlogo.png';
	import { page } from '$app/stores';

	export let isMenuOpen = false;
	const closeMenu = () => (isMenuOpen = false);
</script>

<div class="header">
	<div class="logo">
		<a sveltekit:prefetch href="/">
			<img class="logo-img" src={logoImg} alt="Dyzee Diaries" />
		</a>
	</div>
	<div class="hamburger-menu">
		<button class="menu-icon" on:click={() => (isMenuOpen = !isMenuOpen)}>
			<Icon name="hamburger" color="white" />
		</button>
	</div>
</div>

<aside class="mobile-menu-wrapper" class:isMenuOpen>
	<div class="mobile-menu">
		<div class="hamburger-menu">
			<button class="menu-icon close" on:click={closeMenu}>
				<Icon name="close" color="white" />
			</button>
		</div>
		<nav class="mobile-nav">
			<ul>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">Home</a>
				</li>
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/about">About</a>
				</li>
				<li class:active={$page.url.pathname === '/diaries'}>
					<a sveltekit:prefetch href="/diaries">The Diaries</a>
				</li>
				<li class:active={$page.url.pathname === '/services'}>
					<a sveltekit:prefetch href="/services">Services</a>
				</li>
				<li class:active={$page.url.pathname === '/bboy-business'}>
					<a sveltekit:prefetch href="/bboy-business">Bboy Business</a>
				</li>
				<li>
					<a
						href="https://teespring.com/stores/dyzeediaries"
						target="_blank"
						rel="nofollow noopener">Store</a
					>
				</li>
				<li class:active={$page.url.pathname === '/contact'}>
					<a sveltekit:prefetch href="/contact">Contact</a>
				</li>
			</ul>
		</nav>
	</div>
</aside>

<style>
	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.hamburger-menu {
		padding: 0px 20px 0px 0px;
	}
	.header {
		background-color: var(--secondary-color);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.logo-img {
		width: 100px;
	}
	.logo {
		padding: 10px 0px 10px 70px;
		object-fit: contain;
		width: 30px;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.mobile-menu-wrapper {
		position: fixed;
		top: 0;
		left: -100%;
		transition: left 0.3s ease-in-out;
		align-items: center;
		height: 100vh;
		overflow-y: scroll;
		z-index: 100;
		width: 100%;
	}
	.menu-icon {
		border: none;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.close {
		margin: 20px 20px;
	}
	.mobile-menu {
		padding: var(--gap-largest);
		background-color: var(--secondary-color);
		height: 100vh;
		width: 100vw;
		overflow-y: scroll;
		margin-right: 1rem;
		z-index: 100;
	}

	li {
		list-style: none;
		display: block;
		margin: 30px 0;
		font-weight: 400;
		font-size: var(--h4);
	}
	.isMenuOpen {
		left: 0;
	}
</style>
