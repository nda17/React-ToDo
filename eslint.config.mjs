import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import _import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	{
		ignores: ['**/node_modules', '**/dist', '**/build']
	},
	...fixupConfigRules(
		compat.extends(
			'eslint:recommended',
			'plugin:react/recommended',
			'plugin:prettier/recommended',
			'plugin:import/errors',
			'plugin:import/warnings',
			'airbnb'
		)
	),
	{
		plugins: {
			react: fixupPluginRules(react),
			prettier: fixupPluginRules(prettier),
			import: fixupPluginRules(_import)
		},

		languageOptions: {
			globals: {
				...globals.browser
			},

			ecmaVersion: 12,
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},

		settings: {
			react: {
				version: '18.3.1'
			},
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
					moduleDirectory: ['node_modules', 'src/']
				}
			}
		},

		rules: {
			indent: ['error', 2],
			'prettier/prettier': 'error',
			'linebreak-style': [0, 'unix'],
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 0,

			'import/no-unresolved': [
				2,
				{
					caseSensitive: false
				}
			],

			'react/jsx-filename-extension': [
				1,
				{
					extensions: ['.js', '.jsx']
				}
			],

			'import/order': [
				2,
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index'
					],
					'newlines-between': 'always'
				}
			]
		}
	}
];
