import { projects, type Project } from '$lib/projects/projects';

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
	// `params.id` comes from [id].js
	const project: Project = await projects.find(({ id }) => id === params.id);

	if (project) {
		return {
			body: { project }
		};
	}

	return {
		status: 404
	};
}
