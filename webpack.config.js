var path = require("path");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.js",
		libraryTarget: "commonjs2" // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015']
				}
			}
		],
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, "src"),
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["react, es2015"]
					}
				}
			}
		]
	},
	externals: {  // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
		react: {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react',
			umd: 'react',
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom',
			umd: 'react-dom'
		}
	}
};
