import { LightningElement, api } from 'lwc';
import { formatCount } from './utils';

export default class LwcSample extends LightningElement {
	@api title = 'Hello';
	clickCount = 0;

	get label() {
		return formatCount(this.clickCount);
	}

	handleClick() {
		this.clickCount += 1;
this.dispatchEvent(new CustomEvent('sampleclick', { detail: { count: this.clickCount } }));
	}
}
