import { diaries, type Diary } from '$lib/diaries/diaries';

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
	// `params.id` comes from [id].js
	const diary: Diary = await diaries.find(({ id }) => id === params.id);

	if (diary) {
		return {
			body: { diary }
		};
	}

	return {
		status: 404
	};
}
