const path = require('path');
const webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',

  entry: [
    './src/main.js'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin()
  ],
  module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: path.join(__dirname, 'src'),
				loader: 'babel',
				query:
				{
					presets:['es2015', 'react', 'stage-0', 'react-hmre']
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