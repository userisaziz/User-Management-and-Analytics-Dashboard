const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const dotenv = require('dotenv');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// this will update the process.env with environment variables in .env file
dotenv.config();

module.exports = (env, argv) => {
	const isDevelopment = argv.mode === 'development';
	return {
		entry: ['./src/index.js'],
		mode: isDevelopment ? 'development' : 'production',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: '[name].js',
			publicPath: '/',
			chunkFilename: '[name].js',
			crossOriginLoading: 'anonymous',
			clean: true,
		},
		module: {
			rules: [
				{
					test: /\.mjs$/,
					include: /node_modules/,
					type: 'javascript/auto',
				},
				{
					test: /\.(js|jsx)$/,
					use: 'babel-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(jpg|jpeg|png|woff|woff2|gif|eot|ttf|svg)$/,
					use: 'url-loader?limit=1024000',
				},
				{
					test: /\.(mp4|mov)$/,
					use: 'url-loader?limit=10000&mimetype=video/mp4',
				},
			],
		},
		devServer: {
			hot: true,
			open: true,
			port: 4003,
			historyApiFallback: true,
		},
		resolve: {
			extensions: ['.webpack.js', '.web.js', '.mjs', '.js', '.jsx', '.json'],
			alias: {
				components: path.resolve(__dirname, 'src/components'),
				asset: path.resolve(__dirname, 'src/Asset'),
			},
		},
		plugins: [
			new HtmlWebpackPlugin({
				favicon: './favicon.svg',
				template: './index.html',
				filename: 'index.html',
			}),
			new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
			isDevelopment && new ReactRefreshWebpackPlugin(),
			new BundleAnalyzerPlugin({
				analyzerMode: isDevelopment ? 'disabled' : 'static',
			}),
			new CopyPlugin({
				patterns: [
					{ from: './sitemap.xml', to: 'sitemap.xml' },
					{ from: './robots.txt', to: 'robots.txt' },

				],
			}),
			!isDevelopment && new CompressionPlugin({
				algorithm: 'gzip',
				test: /\.(js|css|html|svg)$/,
			}),
			new webpack.DefinePlugin({
				'process.env': JSON.stringify(process.env),
			}),
		],
		devtool: isDevelopment ? 'cheap-module-source-map' : 'source-map',
		optimization: {
			minimize: !isDevelopment,
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						compress: {
							drop_console: true,
						},
					},
				}),
			],
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
					assets: {
						test: /\.(jpg|jpeg|png|woff|woff2|gif|eot|ttf|svg)$/,
						name: 'assets',
						chunks: 'all',
					},
				},
			},
		},
	};

}
