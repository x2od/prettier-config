({
	afterRender: function (component, helper) {
		this.superAfterRender();
const el = component.getElement();
		if (el) { el.setAttribute("data-rendered", "true"); }
},rerender: function (component, helper) {
	this.superRerender();
}})
