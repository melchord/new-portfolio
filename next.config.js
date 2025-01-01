const isProd = process.env.NODE_ENV === 'production';
const path = require('path');

module.exports = {
	// Use the CDN in production and localhost for development.
  assetPrefix: '',
  sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		path: '',
	}
};