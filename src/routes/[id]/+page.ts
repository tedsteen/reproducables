import type { PageLoad } from './$types';
import { loadData } from '../../lib/cms';
import { browser } from '$app/environment';
export const load: PageLoad = async (event) => {
    console.info(`+page.ts running ${browser ? 'in browser' : 'on server'}`);
	const cmsData = await loadData(event.params.id);
	return {
		cmsData
	};
}
