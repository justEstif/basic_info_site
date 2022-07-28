Steps:

1. URL
1. get the url
1. get the pathname
1. parse the target
1. FS
1. check if the file exists


    - if file exists:
      1. read file
      2. return data
    - if file doesn't exist
      1. read 404 file
      2. return data

3. HTTP
1. set content type to html
1. send proper response

<pre>
// I have to get the path name like so
const myURL = new URL('https://example.org/abc/xyz?123');
console.log(myURL.pathname);
// Prints /abc/xyz

myURL.pathname = '/abcdef';
console.log(myURL.href);
// Prints https://example.org/abcdef?123
</pre>

<pre>
// I have to read the file like so
const fs = require('fs/promises');

async function example() {
  try {
    const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();
</pre>

<pre>
fs.access(): check if the file exists and Node.js can access it with its permissions
path.join([...paths])
__dirname
</pre>
