import ChildComponent from '@/core/component/child.component';
import renderService from '@/core/services/render.service';

import { $R } from '@/core/rquery/rquery.lib';
import styles from './user-item.module.scss';
import template from './user-item.template.html';

export class UserItem extends ChildComponent {
	constructor(user, isGray = false, onClick) {
		super();
		this.user = user;
		this.isGray = isGray;
		this.onClick = onClick;

		if (!user) throw new Error('User should be passed!');
		if (!user?.name) throw new Error('User must have a "name"!');
		if (!user?.avatarPath) throw new Error('User must have a "avatarPath"');
	}
	#preventDefault(event) {
		event.preventDefault();
	}
	update({ avatarPath, name }) {
		if (avatarPath && name) {
			$R(this.element).find('img').attr('src', avatarPath).attr('alt', name);

			$R(this.element).find('span').text(name);
		}
	}
	render() {
		this.element = renderService.htmlToElement(template, [], styles);

		this.update(this.user);

		$R(this.element).click(this.onClick || this.#preventDefault.bind(this));

		if (!this.onClick) $R(this.element).attr('disabled', '');
		if (this.isGray) $R(this.element).addClass(styles.gray);

		return this.element;
	}
}