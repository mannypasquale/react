var path = require('path'); //utilities for working with file directory no need for npm
//dirname resolves to github battle
var HtmlWebpackPlugin = require('html-webpack-plugin');
//creates a index.html file for us and puts it in the dist folder
//it also includes the index_bluncle.js script into index.html file for us
module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	module: {
		//rules are transfomrations we want to make
		// babel loader used on any file with a .js extension
		//same with a css extension
		// to support es5 is transpile Class syntax to older js syntax
		rules: [
      		{ test: /\.(js)$/, use: 'babel-loader' },
      		{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
	plugins: [new HtmlWebpackPlugin({
		template: 'app/index.html'
		})
	],
	mode: "development"
};
