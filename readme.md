# jpegoptim-bin ![GitHub Actions Status](https://github.com/imagemin/jpegoptim-bin/workflows/test/badge.svg?branch=master)


> [jpegoptim](https://github.com/tjko/jpegoptim) is a utility for optimizing JPEG files that provides lossless optimization (based on optimizing the Huffman tables) and "lossy" optimization based on setting a maximum quality factor

You probably want [`imagemin-jpegoptim`](https://github.com/imagemin/imagemin-jpegoptim) instead.


## Install

```
$ npm install jpegoptim-bin
```

### Downloading From a Custom Source
By default, this package will download jpegoptim-bin from GitHub. To use a custom source, set the npm config property `imagemin_local_url`. The downloader will append `/<name>/<version>/vendor/<dist>`.

```
$ npm install jpegoptim-bin --imagemin_local_url=https://mymirror.local/path
```

Or add property into your `.npmrc` file([https://docs.npmjs.com/files/npmrc](https://docs.npmjs.com/files/npmrc))

```
imagemin_local_url=https://mymirror.local/path
```

Another option is to use the environment variable `IMAGEMIN_LOCAL_URL`.

```
$ IMAGEMIN_LOCAL_URL=https://mymirror.local/path npm install jpegoptim-bin
```


Make sure you have the correct version of libjpeg. See [jpegoptim's README](https://github.com/tjko/jpegoptim#readme) for more information.


## Usage

```js
const {execFile} = require('child_process');
const jpegoptim = require('jpegoptim-bin');

const args = [
	'--overwrite',
	'--strip-all',
	'--strip-iptc',
	'--strip-icc',
	'--all-progressive',
	'--dest=build',
	'input.jpg'
];

execFile(jpegoptim, args, err => {
	console.log('Image minified');
});
```


## CLI

```
$ npm install --global jpegoptim-bin
```

```
$ jpegoptim --help
```


## License

MIT © [Imagemin](https://github.com/imagemin)
