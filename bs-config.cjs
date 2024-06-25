module.exports = {
  proxy: "http://localhost:2088", // your Express server URL
  files: ["views/**/*.ejs", "public/**/*.*"], // paths to watch for changes
  reloadDelay: 50, // delay before reloading (in milliseconds)
  open: false // prevents BrowserSync from automatically opening a browser window
};
