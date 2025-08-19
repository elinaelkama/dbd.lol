export default {
	singleQuote: true,
	printWidth: 160,
	useTabs: true,
	tabWidth: 4,
	semi: false,
	trailingComma: 'all',
	bracketSpacing: true,
	arrowParens: 'avoid',
	endOfLine: 'lf',

	bracketSameLine: false,
	jsxSingleQuote: true,
	quoteProps: 'as-needed',
	embeddedLanguageFormatting: 'auto',
	singleAttributePerLine: false,

	overrides: [
		{
			files: '*.json',
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
		{
			files: '*.md',
			options: {
				useTabs: false,
				tabWidth: 2,
				printWidth: 80,
				proseWrap: 'always',
			},
		},
		{
			files: '*.yaml',
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
		{
			files: '*.yml',
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
}
