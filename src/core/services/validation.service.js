import { COLORS } from '@/config/colors.config';
import { $R } from '../rquery/rquery.lib';

class ValidationService {
	constructor() {
		this.errorBorderTimeout = {};
	}

	showError(element, timeout = 3500) {
		$R(element.element).css('border-color', COLORS.error);

		if (this.errorBorderTimeout[element]) {
			clearTimeout(this.errorBorderTimeout);
		}
		console.log(this.errorBorderTimeout[element]);
		this.errorBorderTimeout[element] = setTimeout(() => {
			element.css('border-color', '');
		}, timeout);
	}
}
export default new ValidationService();
