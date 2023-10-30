import { getTitle } from '@/config/seo.config';

export class BaseScreen {
	constructor({ title }) {
		document.title = getTitle(title);
	}
	render() {
		throw new Error('Render method must be implented in child class');
	}
}
