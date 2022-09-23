const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// experiments: {
	// 	asyncWebAssembly: true,
	// },
	entry: {
		main: "./src/index.js",
	},
	plugins: [
		// plugins section
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			chunks: ["main"], //agregarmos "vendor", antes de main cuando queremos cargar logica bootstrap
		}),
		new HtmlWebpackPlugin({
			filename: "buscador.html",
			template: "./src/buscador.html",
			chunks: ["main"], //agregarmos "vendor", antes de main cuando queremos cargar logica bootstrap
		}),
		new HtmlWebpackPlugin({
			filename: "aboutus.html",
			template: "./src/aboutus.html",
			chunks: ["main"], //agregarmos "vendor", antes de main cuando queremos cargar logica bootstrap
		}),
	],
	module: {
		rules: [
			// rules for modules (configure loaders, parser options, etc.)

			{
				// html loader
				test: /\.html$/,
				loader: "html-loader",
			},
			{
				// image loader
				test: /\.(svg|png|jpe?g|jpg|gif)$/,
				type: "asset/resource",
			},
		],
	},
};
