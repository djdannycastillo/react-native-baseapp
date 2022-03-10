module.exports = {
	presets: ['module:metro-react-native-babel-preset'], 
	plugins: [
		[
			'module-resolver',
			{
				root: ['./app'],
				alias: {
					'@components': './app/components',
					'@screens': './app/screens',
					'@navigation': './app/navigation',
					'@utils': './app/utils',
					'@services': './app/services',
					'@store': './app/store',
					'@assets': './app/assets/',
					'@hooks': './app/hooks',
				},
			},
		],
		'react-native-reanimated/plugin'
	],
};
