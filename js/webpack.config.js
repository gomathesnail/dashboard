module.exports = {
    entry: './src/react-grid-layout.js',
	output: {
		path: './bin',
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets:['react']
			}
		}]
	}
}