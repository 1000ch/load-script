# load-script

Load a script file with script element.

## Install

```bash
$ npm install --save @1000ch/load-script
```

## Usage

```javascript
import loadScript from '@1000ch/load-script';

(async () => {
  await loadScript('./foo.js');

  await Promise.all([
    loadScript('./bar.js'),
    loadScript('./baz.js')
  ]);
})();
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
