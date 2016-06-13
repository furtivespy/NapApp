var path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		main: [
			'./src/main.js',
		]
	},
	output: {
		filename: './public/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: path.join(__dirname, 'src'),
				loader: 'babel',
				query:
				{
					plugins: ["transform-decorators-legacy"],
					presets:['es2015', 'react', 'stage-0']
				}
			},
			{
				test: /\.scss$/,
				include: path.join(__dirname, 'src'),
				loaders: ['style', 'css', 'sass']
			},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      		{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
		]
	}
}