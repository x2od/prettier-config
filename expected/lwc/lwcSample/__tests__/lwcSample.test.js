import { createElement } from 'lwc';
import LwcSample from 'c/lwcSample';

describe('c-lwc-sample', () => {
	afterEach(() => {
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
	});

	it('shows the click count after a click', async () => {
		const element = createElement('c-lwc-sample', { is: LwcSample });
		document.body.appendChild(element);

		element.shadowRoot.querySelector('lightning-button').click();
		await Promise.resolve();

		expect(element.shadowRoot.querySelector('p').textContent).toBe('Clicked 1 times');
	});
});
