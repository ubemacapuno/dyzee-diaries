<script lang="ts">
	import { page } from '$app/stores';
	import logoImg from '$lib/images/DDlogo.png';
	import twitterIcon from '$lib/images/sidebar/sidebar-twitter-icon.svg'
	import instagramIcon from '$lib/images/sidebar/sidebar-instagram-icon.svg'
	import facebookIcon from '$lib/images/sidebar/sidebar-facebook-icon.svg'
	import youtubeIcon from '$lib/images/sidebar/sidebar-youtube-icon.svg'
</script>

<div class="sidebar">
	<div class="logo">
		<a sveltekit:prefetch href="/">
			<img src={logoImg} alt="Dyzee Diaries" />
		</a>
	</div>

	<nav>
		<ul>
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
			<li >
				<a  href="https://teespring.com/stores/dyzeediaries" target="_blank" rel="nofollow noopener">Store</a>
			</li>
			<li class:active={$page.url.pathname === '/contact'}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
		</ul>
	</nav>

	<div class="social-wrapper">
		<ul>
			<li>
				<a href="https://twitter.com/dyzeediaries" target="_blank" rel="nofollow noopener">
					<img
						src={twitterIcon}
						alt="Twitter Logo"
						class="twitter-icon"
					/></a
				>
			</li>
			<li>
				<a href="https://www.instagram.com/dyzeediaries/" target="_blank" rel="nofollow noopener">
					<img
						src={instagramIcon}
						alt="Instagram Logo"
						class="instagram-icon"
					/></a
				>
			</li>

			<li>
				<a href="https://www.facebook.com/dyzeediaries" target="_blank" rel="nofollow noopener">
					<img
						src={facebookIcon}
						alt="Facebook Logo"
						class="facebook-icon"
					/></a
				>
			</li>

			<li>
				<a href="https://www.youtube.com/dyzeediaries" target="_blank" rel="nofollow noopener">
					<img
						src={youtubeIcon}
						alt="Youtube Logo"
						class="youtube-icon"
					/></a
				>
			</li>
		</ul>
	</div>
	
</div>

<style>
	.sidebar {
		background-color: var(--secondary-color);
		height: 100%;
		width: var(--sidebar-width);
		overflow-y: auto; 
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
	}

	.logo {
		margin-top: 24px;
		object-fit: contain;
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	nav {
		padding: 30px 0px 20px 0px;
	}

	ul {
		list-style: none;
		text-align: left;
	}

	nav ul li {
		padding: 0px 0px 32px 10px;
	}

	nav a {
		color: var(--nav-text-color);
		text-decoration: none;
		font-size: 17px;
		transition: all 0.3s;
		font-weight: bold;
	}

	a:hover {
		color: var(--primary-color);
	}

	.active a {
		color: var(--primary-color);
	}

	/*Social Media Icons*/

	.social-wrapper ul li {
		padding: 0 10px;
		display: inline;
	}

	.twitter-icon,
	.facebook-icon,
	.instagram-icon,
	.youtube-icon {
		width: 10%;
		transition: all 0.3s;
	}

	.twitter-icon:hover,
	.facebook-icon:hover,
	.instagram-icon:hover,
	.youtube-icon:hover {
		transform:scale(1.2);
	}

	@media (max-width: 900px) {
		.sidebar {
			display: none;
		}
	}
</style>
