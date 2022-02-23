const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const BASE_API_URL = '/api';
const BACKEND_SERVER_URL = 'http://localhost:5000';

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.(s*)css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader',
				],
			},
		],
	},

	devServer: {
		open: true,
		port: process.env.DEV_PORT,
		hot: true,
		historyApiFallback: true,
		proxy: {
			[BASE_API_URL]: {
				target: BACKEND_SERVER_URL,
			},
		},
	},

	plugins: [
		new Dotenv(),
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/[name].css',
		}),
	],
};
