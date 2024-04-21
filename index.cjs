const express = require('express'),
  app = express();

const config = {
  // project path and port to launch to
  path: 'ENTER YOUR PROJECT PATH HERE',
  port: 3000,

  // password to check for in /password route
  password: 'ENTER YOUR PASSWORD HERE',

  // video embed link for the iframe returned from the /password route
  video: 'ENTER YOUR YOUTUBE VIDEO EMBED LINK HERE',

  // run when the app starts
  onlisten() {
    console.log(`Listening to connections on port ${config.port}`);
  },
};

// handle GET requests to root path
app.get('/', (req, res) => res.sendFile(`${config.path}/index.html`));

// handle GET requests to /password
app.get('/password', (req, res) => {
  // get the password value
  const { value } = req.query;

  // early returns for an undefined or incorrect value
  if (!value)
    return res.send(
      JSON.stringify({ status: 400, message: 'No value provided' })
    );

  if (value !== config.password)
    return res.send(
      JSON.stringify({ status: 400, message: 'Incorrect value' })
    );

  // return the video embed link for the iframe
  res.send(
    JSON.stringify({
      status: 200,
      message: 'Correct value',
      video: config.video,
    })
  );
});

// listen to connections (start the app)
app.listen(config.port, config.onlisten);

// export the app (for usage in various hosting providers)
module.exports = app;
