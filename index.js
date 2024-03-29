module.exports = {
	apexInsertFinalNewline: false,
	bracketSameLine: true,
	bracketSpacing: true,
	endOfLine: 'lf',
	experimentalTernaries: true,
	printWidth: 180,
	singleAttributePerLine: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	xmlSelfClosingSpace: true,
	overrides: [
		{
			files: '**/lwc/**/*.html',
			options: { parser: 'lwc', printWidth: 80 }
		},
		{
			files: '*.{cmp,page,component}',
			options: {
				parser: 'html'
			}
		},
		{
			files: '*.{cls,trigger}',
			options: {
				parser: 'apex'
			}
		},
		{
			files: '*.apex,soql',
			options: { parser: 'anonymous-apex' }
		},
		{
			files: '*.{yml,yaml}',
			options: { useTabs: false }
		},
		{
			files: '.prettierrc',
			options: { parser: 'json', printWidth: 80 }
		},
		{
			files: '**/pmd/*.xml',
			options: {
				parser: 'xml',
				xmlWhitespaceSensitivity: 'preserve'
			}
		},
		{
			files: 'doc*/**/*.html',
			options: {
				parser: 'html',
				printWidth: 150,
				htmlWhitespaceSensitivity: 'ignore',
				singleQuote: false
			}
		}
	],
	plugins: [
		'prettier-plugin-apex',
		'@prettier/plugin-xml',
		'prettier-plugin-organize-attributes'
	],
	$schema: 'https://json.schemastore.org/prettierrc'
};
