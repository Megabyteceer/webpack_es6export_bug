const webpack = require('webpack');
const path = require('path');

webpack({
	entry: {
		lib1: {
			import: path.join(__dirname, 'lib1.js')
		},
		lib2: {
			import: path.join(__dirname, 'lib2.js'),
			dependOn: 'lib1'
		}
	},
	mode: 'development',
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'output'),
		libraryTarget: 'module'
	},
	experiments: {
		outputModule: true
	}
}, () => {});
