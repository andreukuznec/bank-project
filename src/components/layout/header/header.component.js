import ChildComponent from '@/core/component/child.component';
import renderService from '@/core/services/render.service';

import { UserItem } from '@/components/ui/user-item/user-item.component';
import { Logo } from '../logo/logo.component';
import styles from './header.module.scss';
import template from './header.template.html';
import { LogoutButton } from './logout-button/logout-button.component';
import { Search } from './search/search.component';

export class Header extends ChildComponent {
	constructor({ router }) {
		super();
		this.router = router;
	}
	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				Logo,
				new LogoutButton({
					router: this.router,
				}),
				Search,
				new UserItem({
					avatarPath:
						'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/380x240',
					name: 'Andrei',
				}),
			],
			styles,
		);
		return this.element;
	}
}
