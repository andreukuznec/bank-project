import { Field } from '@/components/ui/field/field.component';
import { UserItem } from '@/components/ui/user-item/user-item.component';
import renderService from '@/core/services/render.service';
import { BaseScreen } from '../../../core/component/base-screen-component';
import styles from './home.module.css';
import template from './home.template.html';

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' });
	}
	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new Field({
					name: 'test',
					placeholder: 'enter Email',
					variant: 'green',
				}),
				new UserItem({
					avatarPath:
						'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/380x240',
					name: 'Andrei',
				}),
			],
			styles,
		);

		return element;
	}
}
