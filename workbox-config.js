module.exports = {
	maximumFileSizeToCacheInBytes: 5000000000,
	globDirectory: 'Idle-Breakout-PWA/',
	globPatterns: [
		'**/*.{html,css,js,json,ico,png,mp3,ogg,yy,ini}'
	],
	swDest: 'Idle-Breakout-PWA/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};