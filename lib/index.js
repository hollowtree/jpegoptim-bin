'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url_prefix = process.env.RAW_GITHUBUSERCONTENT_LOCAL_URL ||
	process.env.npm_config_imagemin_local_url ||
	process.env.IMAGEMIN_LOCAL_URL ||
	'https://raw.githubusercontent.com/imagemin';

const url = `${url_prefix}/jpegoptim-bin/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
	.src(`${url}osx/jpegoptim`, 'darwin')
	.src(`${url}linux/jpegoptim`, 'linux')
	.src(`${url}win32/jpegoptim.exe`, 'win32')
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'jpegoptim.exe' : 'jpegoptim');
