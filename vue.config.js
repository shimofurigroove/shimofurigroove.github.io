const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
	configureWebpack: () => {
		return {
			plugins: [
				new PrerenderSPAPlugin({
					staticDir: path.join(__dirname, "docs"),
					routes: [
						"/",
						"/2019-12-08",
						"/2020-01-31",
						"/2020-07-22",
						"/2020-08-26",
						"/2020-09-11",
						"/2020-10-21",
						"/2020-11-06",
						"/2020-12-19",
						"/2020-12-25",
						"/2021-01-27",
						"/2021-02-20",
						"/2021-02-26",
						"/2021-03-25",
						"/2021-04-24",
					],
				}),
			],
		};
	},
	css: {
		loaderOptions: {
			scss: {
				prependData: '@import "./src/assets/sass/prepends.scss";',
			},
		},
	},
	publicPath: "./",
	outputDir: "docs",
};
