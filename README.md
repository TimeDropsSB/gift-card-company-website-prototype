# Gift Card Company Website Prototype
This is a small prototype website for a client of mine who wants to start a company in selling gift cards.  It is a prototype and not a full implementation.

Built with React and Redux.

## Local viewing
To see the page locally, there are two ways to do it:

#### Through webpack-dev-server
For best results, the page should be loaded using `webpack-dev-server`.  To do that, you must have `npm` first.  Then:

1. In the CLI, run `npm install` or if Yarn is available, `yarn`.
2. Run `npm run dev-server` to run the server.
3. In your browser, go to `127.0.0.1:8080`.

Running `npm run dev-server` loads the page in development mode.  To run it in production mode, add `:prod` to the end of the command.

#### Through a local server
If you have a server installed, clone this repo to the root of your server and check out the `src` directory which has the build files already that can be loaded in the browser.

## Page notes
* Only two pages are actally implemented: "Home" and "Purchase". 
* Any links that lead to nowhere displays an alert.
* In production mode, the images are not minified.
* Since HTML5 history is used, refreshing a page outside of the home page will cause an error.  This is corrected through an `.htaccess` file and so only Apache servers can have this work.

## Browser support
* Chrome
* Firefox
* IE10+, Edge

