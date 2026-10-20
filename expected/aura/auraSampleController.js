({
	doInit: function (component, event, helper) {
		helper.loadTitle(component);
	},
	handleClick: function (component, event, helper) {
		const count = component.get('v.count') + 1;
		component.set('v.count', count);
		helper.fireSampleEvent(component, count);
	}
});
