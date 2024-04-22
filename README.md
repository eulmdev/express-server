# Simple Express.JS Server

A simple server using the lightweight Express.JS framework. This is an example which merely shows a HTML page that checks for a password, showing a video if valid. However, this very much can be used as a starting point for new, largely unrelated projects.

## Features

- A GET request handler on the root path to return a HTML document.

- A GET request handler on /password which returns a YouTube video embed link if the provided password is valid.

- A password field which sends a GET API request to /password, saying that the password is incorrect if it returns no video, or otherwise shows a YouTube video iframe embed.

- A well-commented code base, acting as an overall good Express.JS server example.

## Usage

### Getting the Code

You can [make a new repository](https://github.com/new?template_name=express-server&template_owner=eulmdev) for a new (public or private) repository or [download the ZIP archive](https://github.com/eulmdev/express-server/archive/refs/heads/main.zip) to download it to your device. You can also clone it using HTTPS, SSH or the GitHub CLI, but that's somewhat advanced and unnecessary for this simple example.

### Configuration

Once you have this, you can modify some of the configuration with the CSS variables in [index.html](/index.html) to your liking, but most importantly, you have to modify the configuration in [index.cjs](/index.cjs) (the constant `config` variable), by changing the `path`, `password` and `video` properties to match your environment and to your general liking.

### Hosting

To run this locally, you have to make sure you have [Node.JS](https://nodejs.org/en/) installed with [NPM](https://www.npmjs.com/) too (by default, they're bundled together for most versions). Then just run `npm install` in the console and `npm run start` to start the server (or `npm run dev` to start it with Nodemon, meaning any file changes will instantly update the server, but it'll be slower than `npm run start`).

There are various hosting providers you could use to have this online more permanently, but I will only link official guides on hosting Express.JS servers for the 3 most popular options: [Vercel](https://vercel.com/guides/using-express-with-vercel), [Netlify](https://docs.netlify.com/frameworks/express/) and [Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) (a more complicated, loosely documented option).

## License

- [License File](/LICENSE)
- [MIT License](https://choosealicense.com/licenses/mit)
