const path = require('path')
const webpack = require('webpack')


module.exports = function (env) {
	return {
		target: 'node',

		entry: {
			libexemple: [
				'react',
				'react-dom',
				'styled-components',
				'babel-core',
				'babel-plugin-transform-decorators-legacy',
				'babel-plugin-transform-object-rest-spread',
				'babel-plugin-transform-react-constant-elements',
				'babel-plugin-transform-react-inline-elements',
				'babel-plugin-transform-react-remove-prop-types',
				'babel-plugin-transform-runtime',
				'babel-preset-latest',
				'babel-preset-react',
				'babel-preset-react-optimize',
				
				'./components/Email',
			]
		},

		output: {
			filename: '[name].dll.js',
			library: '[name]',
			path: __dirname,
		},

		node: {
			__dirname: true
		},

		module: {
			rules: [
				{
					test: /\.(js|jsx)?$/,
					exclude: [
						path.resolve(__dirname, './node_modules')
					],
					loader: 'babel-loader'
				},
				{
					test: /\.(js)?$/,
					exclude: [
						path.resolve(__dirname, './node_modules')
					],
					include: [
						path.resolve(__dirname, './src/libs')
					],
					loader: 'script-loader'
				},
				{
					test:   /\.css?$/,
					use: [
						'style-loader',
						'css-loader'
					]
				},
				{
					test:   /\.scss?$/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				},
				{
					test: /\.(png|jpg|jpeg|swoff|woff|woff2|eot|ttf|otf)?$/,
					use: { loader: 'url-loader', options: { limit: 100000 } }
				},
				{ 
					test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					use: { loader: 'url-loader', options: { limit: 100000, mimetype: 'application/font-woff' } }
				},
				{ 
					test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					loader: 'file-loader'
				},
				{ 
					test: /\.svg$/,
					loader: 'svg-inline-loader'
				}
			]
		},

		plugins: [
			new webpack.DllPlugin({
				name: '[name]',
				path: path.join(__dirname, '[name].json')
			}),

			new webpack.DefinePlugin({
				PRODUCTION: true,
			}),

			new webpack.EnvironmentPlugin({
				NODE_ENV: 'production'
			}),

			new webpack.optimize.UglifyJsPlugin({
				beautify: false,

				mangle: {
					screw_ie8: true,
					keep_fnames: true
				},

				compress: {
					screw_ie8: true
				},

				comments: false,
			}),
		]
	}
}

