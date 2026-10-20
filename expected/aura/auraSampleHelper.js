({
	loadTitle: function (component) {
		const title = component.get('v.title') || 'Hello';
		component.set('v.title', title.trim());
	},
	fireSampleEvent: function (component, count) {
		const evt = component.getEvent('sampleEvent');
		evt.setParams({ count: count, label: 'Clicked ' + count + ' times in the sample component' });
		evt.fire();
	}
});
