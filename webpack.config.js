const path = require('path');

module.exports = {
	context: __dirname,
	entry: './frontend/crossoff.jsx',
	output: {
		path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: [/\.jsx?$/, /\.js?$/],
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react']
				}
			},
			{
			  test: /\.(jpg|png)$/,
			  use: {
			    loader: "url-loader",
			    options: {
			      limit: 25000,
			    },
			  },
			},
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '*']
	}
};
