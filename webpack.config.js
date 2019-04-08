const path = require('path')
const webpack = require('webpack')


module.exports = function (env) {
	return {
		target: 'node',

		context: __dirname,

		entry: {
			'main': path.join(__dirname, 'main.js')
		},

		output: {
			filename: '[name].bundle.js',
			path: __dirname,
			publicPath: './',
			sourceMapFilename: '[name].map'
		},

		node: {
			__dirname: true
		},

		module: {
			rules: [
			{
				test: /\.(js|jsx)?$/,
				loader: 'babel-loader'
			}
			]
		},

		plugins: [
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require(path.join(__dirname, 'libexemple.json'))
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

