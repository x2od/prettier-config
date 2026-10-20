const greeting = 'hello world';
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
export function build(options = {}, callback = () => {}) {
	return options.enabled ? callback(options.name ?? 'default') : null;
}
const config = { name: 'x2od', version: '1.0.0', features: { lint: true, format: true, nested: { deep: 'value that is long enough to wrap the line' } } };
const label =
	options.isPrimary ? 'primary button label text'
	: options.isDanger ? 'danger label'
	: 'default';
export default config;
