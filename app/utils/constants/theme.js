// Use http://mcg.mbitson.com/ to generate palette colors

import { extendTheme } from 'native-base';

const theme = extendTheme({
	colors: {
		primary: {
			50: '#e8eaf6',
			100: '#c5cbe9',
			200: '#9fa8da',
			300: '#7985cb',
			400: '#5c6bc0',
			500: '#3f51b5',
			600: '#394aae',
			700: '#3140a5',
			800: '#29379d',
			900: '#1b278d',
		},
		secondary: {
			50: '#e5f4f3',
			100: '#bee4e1',
			200: '#93d3cd',
			300: '#67c1b8',
			400: '#47b3a9',
			500: '#26a69a',
			600: '#229e92',
			700: '#1c9588',
			800: '#178b7e',
			900: '#0d7b6c',
		},
	}
});

export default theme;