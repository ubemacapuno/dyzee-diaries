<script context="module">
	export const prerender = true;
	import { browser, dev } from '$app/env';
  	import Seo from '$lib/components/Seo.svelte';

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

</script>

<Seo title="Contact" description="Contact for more information" pathname="/contact" />

<div class="page-wrapper">
		<h1>Contact me</h1>
  		<p>For bookings, questions, inquiries, or even fan mail, please leave your info below!</p>
	<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
		<input type="hidden" name="form-name" value="test" />
		<div class="fields">
			<div class="field half">
				<p class="contact-form">Name (required)</p>
				<input type="text" name="name" id="name" required/>
			</div>
			<div class="field half">
				<p class="contact-form">Email (required)</p>
				<input type="email" name="email" id="email" required/>
			</div>
			<div class="field half">
				<p class="contact-form">Subject</p>
				<input type="text" name="subject" id="subject"/>
			</div>
			<div class="field">
				<p class="contact-form">Message</p>
				<textarea name="message" id="message" rows="4" required></textarea>
			</div>
			<div class="field">
				<div data-netlify-recaptcha="true"></div>
			</div>
			<button type="submit" class="button">Send</button>
		</div>
	</form>
</div>

<style>

form {
border-radius: 16px;
border: 1px solid var(--nav-text-color);
padding: 16px;
max-width: 600px;
} 

.fields {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
}

.field p {
	margin-bottom: 0;
}

.field input, .field, .field textarea {
	width: 100%;
}

textarea {
	min-height: 100px;
}

button {
	margin-top: 16px;
}

</style>