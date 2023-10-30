import { BaseScreen } from '../../../core/component/base-screen-component';

export class NotFound extends BaseScreen {
	constructor() {
		super();
		this.$title = 'Page not found';
	}
	render() {
		return super.render(this.$title);
	}
}
