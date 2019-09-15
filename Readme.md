# Gist Fetch

## Usage

### Import or require the lib
```js
import gistFetchFn from 'gist-fetch';
```

Or

```js
const gistFetchFn = require('gist-fetch').default;
```

### Pass your fetch function
```js
let fetchGist;

if (window.fetch) {
  fetchGist = gistFetchFn(window.fetch);
} else {
  import fetch from 'node-fetch';
  fetchGist = gistFetchFn(fetch);
}

```

### Pass in the Gist Id and an optional file name
```js
fetchGist('e7f44f1f1d6f6734607ea0fb172f46a5', 'sumSequence.js')
  // Do something with the outputted gist data
  .then(console.log)
  .catch(console.error);
```

If you pass the optional file name, you'll get the data for that specific file as described in [Github's docs](https://developer.github.com/v3/gists/#get-a-single-gist). Otherwise, you'll get the entire `files` object (as described in that same section of Github's docs).
