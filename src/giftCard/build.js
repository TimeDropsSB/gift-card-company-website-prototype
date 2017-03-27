webpackJsonp([0],{

/***/ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/lib/loader.js?sourceMap!./assets/scss/giftCard.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\r\n * Foundation for Sites by ZURB\r\n * Version 6.3.0\r\n * foundation.zurb.com\r\n * Licensed under MIT Open Source\r\n */\n/*! normalize-scss | MIT/GPLv2 License | bit.ly/normalize-scss */\n/* Document\r\n       ========================================================================== */\n/**\r\n     * 1. Change the default font family in all browsers (opinionated).\r\n     * 2. Correct the line height in all browsers.\r\n     * 3. Prevent adjustments of font size after orientation changes in\r\n     *    IE on Windows Phone and in iOS.\r\n     */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */ }\n\n/* Sections\r\n       ========================================================================== */\n/**\r\n     * Remove the margin in all browsers (opinionated).\r\n     */\nbody {\n  margin: 0; }\n\n/**\r\n     * Add the correct display in IE 9-.\r\n     */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\r\n     * Correct the font size and margin on `h1` elements within `section` and\r\n     * `article` contexts in Chrome, Firefox, and Safari.\r\n     */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\r\n       ========================================================================== */\n/**\r\n     * Add the correct display in IE 9-.\r\n     */\nfigcaption,\nfigure {\n  display: block; }\n\n/**\r\n     * Add the correct margin in IE 8.\r\n     */\nfigure {\n  margin: 1em 40px; }\n\n/**\r\n     * 1. Add the correct box sizing in Firefox.\r\n     * 2. Show the overflow in Edge and IE.\r\n     */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\r\n     * Add the correct display in IE.\r\n     */\nmain {\n  display: block; }\n\n/**\r\n     * 1. Correct the inheritance and scaling of font size in all browsers.\r\n     * 2. Correct the odd `em` font sizing in all browsers.\r\n     */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Links\r\n       ========================================================================== */\n/**\r\n     * 1. Remove the gray background on active links in IE 10.\r\n     * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n     */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\r\n     * Remove the outline on focused links when they are also active or hovered\r\n     * in all browsers (opinionated).\r\n     */\na:active,\na:hover {\n  outline-width: 0; }\n\n/* Text-level semantics\r\n       ========================================================================== */\n/**\r\n     * 1. Remove the bottom border in Firefox 39-.\r\n     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n     */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\r\n     * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n     */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\r\n     * Add the correct font weight in Chrome, Edge, and Safari.\r\n     */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\r\n     * 1. Correct the inheritance and scaling of font size in all browsers.\r\n     * 2. Correct the odd `em` font sizing in all browsers.\r\n     */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\r\n     * Add the correct font style in Android 4.3-.\r\n     */\ndfn {\n  font-style: italic; }\n\n/**\r\n     * Add the correct background and color in IE 9-.\r\n     */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\r\n     * Add the correct font size in all browsers.\r\n     */\nsmall {\n  font-size: 80%; }\n\n/**\r\n     * Prevent `sub` and `sup` elements from affecting the line height in\r\n     * all browsers.\r\n     */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\r\n       ========================================================================== */\n/**\r\n     * Add the correct display in IE 9-.\r\n     */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\r\n     * Add the correct display in iOS 4-7.\r\n     */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n     * Remove the border on images inside links in IE 10-.\r\n     */\nimg {\n  border-style: none; }\n\n/**\r\n     * Hide the overflow in IE.\r\n     */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\r\n       ========================================================================== */\n/**\r\n     * 1. Change the font styles in all browsers (opinionated).\r\n     * 2. Remove the margin in Firefox and Safari.\r\n     */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\r\n     * Show the overflow in IE.\r\n     */\nbutton {\n  overflow: visible; }\n\n/**\r\n     * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n     * 1. Remove the inheritance of text transform in Firefox.\r\n     */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\r\n     * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n     *    controls in Android 4.\r\n     * 2. Correct the inability to style clickable types in iOS and Safari.\r\n     */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  /**\r\n       * Remove the inner border and padding in Firefox.\r\n       */\n  /**\r\n       * Restore the focus styles unset by the previous rule.\r\n       */ }\n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0; }\n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText; }\n\n/**\r\n     * Show the overflow in Edge.\r\n     */\ninput {\n  overflow: visible; }\n\n/**\r\n     * 1. Add the correct box sizing in IE 10-.\r\n     * 2. Remove the padding in IE 10-.\r\n     */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n     * Correct the cursor style of increment and decrement buttons in Chrome.\r\n     */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n     * 1. Correct the odd appearance in Chrome and Safari.\r\n     * 2. Correct the outline style in Safari.\r\n     */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n  /**\r\n       * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\r\n       */ }\n  [type=\"search\"]::-webkit-search-cancel-button, [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none; }\n\n/**\r\n     * 1. Correct the inability to style clickable types in iOS and Safari.\r\n     * 2. Change font properties to `inherit` in Safari.\r\n     */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/**\r\n     * Change the border, margin, and padding in all browsers (opinionated).\r\n     */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n     * 1. Correct the text wrapping in Edge and IE.\r\n     * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n     * 3. Remove the padding so developers are not caught out when they zero out\r\n     *    `fieldset` elements in all browsers.\r\n     */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  color: inherit;\n  /* 2 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\r\n     * 1. Add the correct display in IE 9-.\r\n     * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n     */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\r\n     * Remove the default vertical scrollbar in IE.\r\n     */\ntextarea {\n  overflow: auto; }\n\n/* Interactive\r\n       ========================================================================== */\n/*\r\n     * Add the correct display in Edge, IE, and Firefox.\r\n     */\ndetails {\n  display: block; }\n\n/*\r\n     * Add the correct display in all browsers.\r\n     */\nsummary {\n  display: list-item; }\n\n/*\r\n     * Add the correct display in IE 9-.\r\n     */\nmenu {\n  display: block; }\n\n/* Scripting\r\n       ========================================================================== */\n/**\r\n     * Add the correct display in IE 9-.\r\n     */\ncanvas {\n  display: inline-block; }\n\n/**\r\n     * Add the correct display in IE.\r\n     */\ntemplate {\n  display: none; }\n\n/* Hidden\r\n       ========================================================================== */\n/**\r\n     * Add the correct display in IE 10-.\r\n     */\n[hidden] {\n  display: none; }\n\n.foundation-mq {\n  font-family: \"small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em\"; }\n\nhtml {\n  box-sizing: border-box;\n  font-size: 100%; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: #fefefe;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #0a0a0a;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nimg {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 100%;\n  height: auto;\n  -ms-interpolation-mode: bicubic; }\n\ntextarea {\n  height: auto;\n  min-height: 50px;\n  border-radius: 0; }\n\nselect {\n  width: 100%;\n  border-radius: 0; }\n\n.map_canvas img,\n.map_canvas embed,\n.map_canvas object,\n.mqa-display img,\n.mqa-display embed,\n.mqa-display object {\n  max-width: none !important; }\n\nbutton {\n  padding: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  line-height: 1; }\n  [data-whatinput='mouse'] button {\n    outline: 0; }\n\n.is-visible {\n  display: block !important; }\n\n.is-hidden {\n  display: none !important; }\n\n.row {\n  max-width: 75rem;\n  margin-right: auto;\n  margin-left: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap; }\n  .row .row {\n    margin-right: -0.625rem;\n    margin-left: -0.625rem; }\n    @media print, screen and (min-width: 40em) {\n      .row .row {\n        margin-right: -0.9375rem;\n        margin-left: -0.9375rem; } }\n    @media print, screen and (min-width: 64em) {\n      .row .row {\n        margin-right: -0.9375rem;\n        margin-left: -0.9375rem; } }\n  .row.expanded {\n    max-width: none; }\n  .row.collapse > .column, .row.collapse > .columns {\n    padding-right: 0;\n    padding-left: 0; }\n  .row.is-collapse-child,\n  .row.collapse > .column > .row,\n  .row.collapse > .columns > .row {\n    margin-right: 0;\n    margin-left: 0; }\n\n.column, .columns {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0px;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  min-width: initial; }\n  @media print, screen and (min-width: 40em) {\n    .column, .columns {\n      padding-right: 0.9375rem;\n      padding-left: 0.9375rem; } }\n\n.column.row.row, .row.row.columns {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.row .column.row.row, .row .row.row.columns {\n  margin-right: 0;\n  margin-left: 0;\n  padding-right: 0;\n  padding-left: 0; }\n\n.flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.flex-child-auto {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.flex-child-grow {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\n\n.flex-child-shrink {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n\n.flex-dir-row {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.flex-dir-row-reverse {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n\n.flex-dir-column {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.flex-dir-column-reverse {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse; }\n\n.small-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 8.33333%;\n          flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.small-offset-0 {\n  margin-left: 0%; }\n\n.small-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.small-offset-1 {\n  margin-left: 8.33333%; }\n\n.small-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n\n.small-offset-2 {\n  margin-left: 16.66667%; }\n\n.small-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.small-offset-3 {\n  margin-left: 25%; }\n\n.small-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.small-offset-4 {\n  margin-left: 33.33333%; }\n\n.small-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n\n.small-offset-5 {\n  margin-left: 41.66667%; }\n\n.small-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 58.33333%;\n          flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.small-offset-6 {\n  margin-left: 50%; }\n\n.small-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 66.66667%;\n          flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.small-offset-7 {\n  margin-left: 58.33333%; }\n\n.small-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n\n.small-offset-8 {\n  margin-left: 66.66667%; }\n\n.small-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 83.33333%;\n          flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.small-offset-9 {\n  margin-left: 75%; }\n\n.small-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 91.66667%;\n          flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.small-offset-10 {\n  margin-left: 83.33333%; }\n\n.small-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n\n.small-offset-11 {\n  margin-left: 91.66667%; }\n\n.small-order-1 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n\n.small-order-2 {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2; }\n\n.small-order-3 {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3; }\n\n.small-order-4 {\n  -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n          order: 4; }\n\n.small-order-5 {\n  -webkit-box-ordinal-group: 6;\n      -ms-flex-order: 5;\n          order: 5; }\n\n.small-order-6 {\n  -webkit-box-ordinal-group: 7;\n      -ms-flex-order: 6;\n          order: 6; }\n\n.small-up-1 {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .small-up-1 > .column, .small-up-1 > .columns {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n\n.small-up-2 {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .small-up-2 > .column, .small-up-2 > .columns {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n\n.small-up-3 {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .small-up-3 > .column, .small-up-3 > .columns {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n\n.small-up-4 {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .small-up-4 > .column, .small-up-4 > .columns {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n\n.small-up-5 {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .small-up-5 > .column, .small-up-5 > .columns {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%; }\n\n.small-up-6 {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .small-up-6 > .column, .small-up-6 > .columns {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n\n.small-up-7 {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .small-up-7 > .column, .small-up-7 > .columns {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 14.28571%;\n            flex: 0 0 14.28571%;\n    max-width: 14.28571%; }\n\n.small-up-8 {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .small-up-8 > .column, .small-up-8 > .columns {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 12.5%;\n            flex: 0 0 12.5%;\n    max-width: 12.5%; }\n\n.small-collapse > .column, .small-collapse > .columns {\n  padding-right: 0;\n  padding-left: 0; }\n\n.small-uncollapse > .column, .small-uncollapse > .columns {\n  padding-right: 0.625rem;\n  padding-left: 0.625rem; }\n\n@media print, screen and (min-width: 40em) {\n  .medium-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .medium-offset-0 {\n    margin-left: 0%; }\n  .medium-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .medium-offset-1 {\n    margin-left: 8.33333%; }\n  .medium-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .medium-offset-2 {\n    margin-left: 16.66667%; }\n  .medium-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .medium-offset-3 {\n    margin-left: 25%; }\n  .medium-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .medium-offset-4 {\n    margin-left: 33.33333%; }\n  .medium-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .medium-offset-5 {\n    margin-left: 41.66667%; }\n  .medium-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .medium-offset-6 {\n    margin-left: 50%; }\n  .medium-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .medium-offset-7 {\n    margin-left: 58.33333%; }\n  .medium-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .medium-offset-8 {\n    margin-left: 66.66667%; }\n  .medium-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .medium-offset-9 {\n    margin-left: 75%; }\n  .medium-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .medium-offset-10 {\n    margin-left: 83.33333%; }\n  .medium-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .medium-offset-11 {\n    margin-left: 91.66667%; }\n  .medium-order-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .medium-order-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .medium-order-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .medium-order-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .medium-order-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .medium-order-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .medium-up-1 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .medium-up-1 > .column, .medium-up-1 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 100%;\n              flex: 0 0 100%;\n      max-width: 100%; }\n  .medium-up-2 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .medium-up-2 > .column, .medium-up-2 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 50%;\n              flex: 0 0 50%;\n      max-width: 50%; }\n  .medium-up-3 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .medium-up-3 > .column, .medium-up-3 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 33.33333%;\n              flex: 0 0 33.33333%;\n      max-width: 33.33333%; }\n  .medium-up-4 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .medium-up-4 > .column, .medium-up-4 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 25%;\n              flex: 0 0 25%;\n      max-width: 25%; }\n  .medium-up-5 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .medium-up-5 > .column, .medium-up-5 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 20%;\n              flex: 0 0 20%;\n      max-width: 20%; }\n  .medium-up-6 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .medium-up-6 > .column, .medium-up-6 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 16.66667%;\n              flex: 0 0 16.66667%;\n      max-width: 16.66667%; }\n  .medium-up-7 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .medium-up-7 > .column, .medium-up-7 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 14.28571%;\n              flex: 0 0 14.28571%;\n      max-width: 14.28571%; }\n  .medium-up-8 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .medium-up-8 > .column, .medium-up-8 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 12.5%;\n              flex: 0 0 12.5%;\n      max-width: 12.5%; } }\n\n@media print, screen and (min-width: 40em) and (min-width: 40em) {\n  .medium-expand {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0px; } }\n\n@media print, screen and (min-width: 40em) {\n  .medium-flex-dir-row {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .medium-flex-dir-row-reverse {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  .medium-flex-dir-column {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .medium-flex-dir-column-reverse {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n  .medium-flex-child-auto {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n  .medium-flex-child-grow {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto; }\n  .medium-flex-child-shrink {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto; } }\n\n.row.medium-unstack > .column, .row.medium-unstack > .columns {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%; }\n  @media print, screen and (min-width: 40em) {\n    .row.medium-unstack > .column, .row.medium-unstack > .columns {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 0px;\n              flex: 1 1 0px; } }\n\n@media print, screen and (min-width: 40em) {\n  .medium-collapse > .column, .medium-collapse > .columns {\n    padding-right: 0;\n    padding-left: 0; }\n  .medium-uncollapse > .column, .medium-uncollapse > .columns {\n    padding-right: 0.9375rem;\n    padding-left: 0.9375rem; } }\n\n@media print, screen and (min-width: 64em) {\n  .large-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .large-offset-0 {\n    margin-left: 0%; }\n  .large-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .large-offset-1 {\n    margin-left: 8.33333%; }\n  .large-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .large-offset-2 {\n    margin-left: 16.66667%; }\n  .large-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .large-offset-3 {\n    margin-left: 25%; }\n  .large-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .large-offset-4 {\n    margin-left: 33.33333%; }\n  .large-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .large-offset-5 {\n    margin-left: 41.66667%; }\n  .large-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .large-offset-6 {\n    margin-left: 50%; }\n  .large-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .large-offset-7 {\n    margin-left: 58.33333%; }\n  .large-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .large-offset-8 {\n    margin-left: 66.66667%; }\n  .large-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .large-offset-9 {\n    margin-left: 75%; }\n  .large-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .large-offset-10 {\n    margin-left: 83.33333%; }\n  .large-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .large-offset-11 {\n    margin-left: 91.66667%; }\n  .large-order-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .large-order-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .large-order-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .large-order-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .large-order-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .large-order-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .large-up-1 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .large-up-1 > .column, .large-up-1 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 100%;\n              flex: 0 0 100%;\n      max-width: 100%; }\n  .large-up-2 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .large-up-2 > .column, .large-up-2 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 50%;\n              flex: 0 0 50%;\n      max-width: 50%; }\n  .large-up-3 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .large-up-3 > .column, .large-up-3 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 33.33333%;\n              flex: 0 0 33.33333%;\n      max-width: 33.33333%; }\n  .large-up-4 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .large-up-4 > .column, .large-up-4 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 25%;\n              flex: 0 0 25%;\n      max-width: 25%; }\n  .large-up-5 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .large-up-5 > .column, .large-up-5 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 20%;\n              flex: 0 0 20%;\n      max-width: 20%; }\n  .large-up-6 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .large-up-6 > .column, .large-up-6 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 16.66667%;\n              flex: 0 0 16.66667%;\n      max-width: 16.66667%; }\n  .large-up-7 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .large-up-7 > .column, .large-up-7 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 14.28571%;\n              flex: 0 0 14.28571%;\n      max-width: 14.28571%; }\n  .large-up-8 {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .large-up-8 > .column, .large-up-8 > .columns {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 12.5%;\n              flex: 0 0 12.5%;\n      max-width: 12.5%; } }\n\n@media print, screen and (min-width: 64em) and (min-width: 64em) {\n  .large-expand {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0px; } }\n\n@media print, screen and (min-width: 64em) {\n  .large-flex-dir-row {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .large-flex-dir-row-reverse {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  .large-flex-dir-column {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .large-flex-dir-column-reverse {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n  .large-flex-child-auto {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n  .large-flex-child-grow {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto; }\n  .large-flex-child-shrink {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto; } }\n\n.row.large-unstack > .column, .row.large-unstack > .columns {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%; }\n  @media print, screen and (min-width: 64em) {\n    .row.large-unstack > .column, .row.large-unstack > .columns {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 0px;\n              flex: 1 1 0px; } }\n\n@media print, screen and (min-width: 64em) {\n  .large-collapse > .column, .large-collapse > .columns {\n    padding-right: 0;\n    padding-left: 0; }\n  .large-uncollapse > .column, .large-uncollapse > .columns {\n    padding-right: 0.9375rem;\n    padding-left: 0.9375rem; } }\n\n.shrink {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  max-width: 100%; }\n\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\np,\nblockquote,\nth,\ntd {\n  margin: 0;\n  padding: 0; }\n\np {\n  margin-bottom: 1rem;\n  font-size: inherit;\n  line-height: 1.6;\n  text-rendering: optimizeLegibility; }\n\nem,\ni {\n  font-style: italic;\n  line-height: inherit; }\n\nstrong,\nb {\n  font-weight: bold;\n  line-height: inherit; }\n\nsmall {\n  font-size: 80%;\n  line-height: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: inherit;\n  text-rendering: optimizeLegibility; }\n  h1 small,\n  h2 small,\n  h3 small,\n  h4 small,\n  h5 small,\n  h6 small {\n    line-height: 0;\n    color: #cacaca; }\n\na {\n  line-height: inherit;\n  color: #1779ba;\n  text-decoration: none;\n  cursor: pointer; }\n  a:hover, a:focus {\n    color: #1468a0; }\n  a img {\n    border: 0; }\n\nhr {\n  clear: both;\n  max-width: 75rem;\n  height: 0;\n  margin: 1.25rem auto;\n  border-top: 0;\n  border-right: 0;\n  border-bottom: 1px solid #cacaca;\n  border-left: 0; }\n\nul,\nol,\ndl {\n  margin-bottom: 1rem;\n  list-style-position: outside;\n  line-height: 1.6; }\n\nli {\n  font-size: inherit; }\n\nul {\n  margin-left: 1.25rem;\n  list-style-type: disc; }\n\nol {\n  margin-left: 1.25rem; }\n\nul ul, ol ul, ul ol, ol ol {\n  margin-left: 1.25rem;\n  margin-bottom: 0; }\n\ndl {\n  margin-bottom: 1rem; }\n  dl dt {\n    margin-bottom: 0.3rem;\n    font-weight: bold; }\n\nblockquote {\n  margin: 0 0 1rem;\n  padding: 0.5625rem 1.25rem 0 1.1875rem;\n  border-left: 1px solid #cacaca; }\n  blockquote, blockquote p {\n    line-height: 1.6;\n    color: #8a8a8a; }\n\ncite {\n  display: block;\n  font-size: 0.8125rem;\n  color: #8a8a8a; }\n  cite:before {\n    content: \"\\2014   \"; }\n\nabbr {\n  border-bottom: 1px dotted #0a0a0a;\n  color: #0a0a0a;\n  cursor: help; }\n\nfigure {\n  margin: 0; }\n\ncode {\n  padding: 0.125rem 0.3125rem 0.0625rem;\n  border: 1px solid #cacaca;\n  background-color: #e6e6e6;\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\n  font-weight: normal;\n  color: #0a0a0a; }\n\nkbd {\n  margin: 0;\n  padding: 0.125rem 0.25rem 0;\n  background-color: #e6e6e6;\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\n  color: #0a0a0a; }\n\n.subheader {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n  line-height: 1.4;\n  color: #8a8a8a; }\n\n.lead {\n  font-size: 125%;\n  line-height: 1.6; }\n\n.stat {\n  font-size: 2.5rem;\n  line-height: 1; }\n  p + .stat {\n    margin-top: -1rem; }\n\n.no-bullet {\n  margin-left: 0;\n  list-style: none; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n@media print, screen and (min-width: 40em) {\n  .medium-text-left {\n    text-align: left; }\n  .medium-text-right {\n    text-align: right; }\n  .medium-text-center {\n    text-align: center; }\n  .medium-text-justify {\n    text-align: justify; } }\n\n@media print, screen and (min-width: 64em) {\n  .large-text-left {\n    text-align: left; }\n  .large-text-right {\n    text-align: right; }\n  .large-text-center {\n    text-align: center; }\n  .large-text-justify {\n    text-align: justify; } }\n\n.show-for-print {\n  display: none !important; }\n\n@media print {\n  * {\n    background: transparent !important;\n    box-shadow: none !important;\n    color: black !important;\n    text-shadow: none !important; }\n  .show-for-print {\n    display: block !important; }\n  .hide-for-print {\n    display: none !important; }\n  table.show-for-print {\n    display: table !important; }\n  thead.show-for-print {\n    display: table-header-group !important; }\n  tbody.show-for-print {\n    display: table-row-group !important; }\n  tr.show-for-print {\n    display: table-row !important; }\n  td.show-for-print {\n    display: table-cell !important; }\n  th.show-for-print {\n    display: table-cell !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  .ir a:after,\n  a[href^='javascript:']:after,\n  a[href^='#']:after {\n    content: ''; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  pre,\n  blockquote {\n    border: 1px solid #8a8a8a;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  @page {\n    margin: 0.5cm; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; } }\n\n[type='text'], [type='password'], [type='date'], [type='datetime'], [type='datetime-local'], [type='month'], [type='week'], [type='email'], [type='number'], [type='search'], [type='tel'], [type='time'], [type='url'], [type='color'],\ntextarea {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 2.4375rem;\n  margin: 0 0 1rem;\n  padding: 0.5rem;\n  border: 1px solid #cacaca;\n  border-radius: 0;\n  background-color: #fefefe;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: normal;\n  color: #0a0a0a;\n  -webkit-transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\n  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  [type='text']:focus, [type='password']:focus, [type='date']:focus, [type='datetime']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='week']:focus, [type='email']:focus, [type='number']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='url']:focus, [type='color']:focus,\n  textarea:focus {\n    outline: none;\n    border: 1px solid #CACACA;\n    background-color: #fefefe;\n    box-shadow: 0 0 5px #cacaca;\n    -webkit-transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\n    transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\n\ntextarea {\n  max-width: 100%; }\n  textarea[rows] {\n    height: auto; }\n\ninput::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n  color: #cacaca; }\n\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: #cacaca; }\n\ninput:-ms-input-placeholder,\ntextarea:-ms-input-placeholder {\n  color: #cacaca; }\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #cacaca; }\n\ninput:disabled, input[readonly],\ntextarea:disabled,\ntextarea[readonly] {\n  background-color: #e6e6e6;\n  cursor: not-allowed; }\n\n[type='submit'],\n[type='button'] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0; }\n\ninput[type='search'] {\n  box-sizing: border-box; }\n\n[type='file'],\n[type='checkbox'],\n[type='radio'] {\n  margin: 0 0 1rem; }\n\n[type='checkbox'] + label,\n[type='radio'] + label {\n  display: inline-block;\n  vertical-align: baseline;\n  margin-left: 0.5rem;\n  margin-right: 1rem;\n  margin-bottom: 0; }\n  [type='checkbox'] + label[for],\n  [type='radio'] + label[for] {\n    cursor: pointer; }\n\nlabel > [type='checkbox'],\nlabel > [type='radio'] {\n  margin-right: 0.5rem; }\n\n[type='file'] {\n  width: 100%; }\n\nlabel {\n  display: block;\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: normal;\n  line-height: 1.8;\n  color: #0a0a0a; }\n  label.middle {\n    margin: 0 0 1rem;\n    padding: 0.5625rem 0; }\n\n.help-text {\n  margin-top: -0.5rem;\n  font-size: 0.8125rem;\n  font-style: italic;\n  color: #0a0a0a; }\n\n.input-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  margin-bottom: 1rem;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n  .input-group > :first-child {\n    border-radius: 0 0 0 0; }\n  .input-group > :last-child > * {\n    border-radius: 0 0 0 0; }\n\n.input-group-label, .input-group-field, .input-group-button, .input-group-button a,\n.input-group-button input,\n.input-group-button button,\n.input-group-button label {\n  margin: 0;\n  white-space: nowrap; }\n\n.input-group-label {\n  padding: 0 1rem;\n  border: 1px solid #cacaca;\n  background: #e6e6e6;\n  color: #0a0a0a;\n  text-align: center;\n  white-space: nowrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .input-group-label:first-child {\n    border-right: 0; }\n  .input-group-label:last-child {\n    border-left: 0; }\n\n.input-group-field {\n  border-radius: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0px;\n  height: auto;\n  min-width: 0; }\n\n.input-group-button {\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto; }\n  .input-group-button a,\n  .input-group-button input,\n  .input-group-button button,\n  .input-group-button label {\n    height: 2.5rem;\n    padding-top: 0;\n    padding-bottom: 0;\n    font-size: 1rem; }\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0; }\n\nlegend {\n  max-width: 100%;\n  margin-bottom: 0.5rem; }\n\n.fieldset {\n  margin: 1.125rem 0;\n  padding: 1.25rem;\n  border: 1px solid #cacaca; }\n  .fieldset legend {\n    margin: 0;\n    margin-left: -0.1875rem;\n    padding: 0 0.1875rem;\n    background: #fefefe; }\n\nselect {\n  height: 2.4375rem;\n  margin: 0 0 1rem;\n  padding: 0.5rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 1px solid #cacaca;\n  border-radius: 0;\n  background-color: #fefefe;\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: normal;\n  color: #0a0a0a;\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>\");\n  background-origin: content-box;\n  background-position: right -1rem center;\n  background-repeat: no-repeat;\n  background-size: 9px 6px;\n  padding-right: 1.5rem;\n  -webkit-transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\n  transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\n  @media screen and (min-width: 0\\0) {\n    select {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIpJREFUeNrEkckNgDAMBBfRkEt0ObRBBdsGXUDgmQfK4XhH2m8czQAAy27R3tsw4Qfe2x8uOO6oYLb6GlOor3GF+swURAOmUJ+RwtEJs9WvTGEYxBXqI1MQAZhCfUQKRzDMVj+TwrAIV6jvSUEkYAr1LSkcyTBb/V+KYfX7xAeusq3sLDtGH3kEGACPWIflNZfhRQAAAABJRU5ErkJggg==\"); } }\n  select:focus {\n    outline: none;\n    border: 1px solid #CACACA;\n    background-color: #fefefe;\n    box-shadow: 0 0 5px #cacaca;\n    -webkit-transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\n    transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\n  select:disabled {\n    background-color: #e6e6e6;\n    cursor: not-allowed; }\n  select::-ms-expand {\n    display: none; }\n  select[multiple] {\n    height: auto;\n    background-image: none; }\n\n.is-invalid-input:not(:focus) {\n  border-color: #cc4b37;\n  background-color: #f9ecea; }\n  .is-invalid-input:not(:focus)::-webkit-input-placeholder {\n    color: #cc4b37; }\n  .is-invalid-input:not(:focus)::-moz-placeholder {\n    color: #cc4b37; }\n  .is-invalid-input:not(:focus):-ms-input-placeholder {\n    color: #cc4b37; }\n  .is-invalid-input:not(:focus)::placeholder {\n    color: #cc4b37; }\n\n.is-invalid-label {\n  color: #cc4b37; }\n\n.form-error {\n  display: none;\n  margin-top: -0.5rem;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: #cc4b37; }\n  .form-error.is-visible {\n    display: block; }\n\n.button {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 0 1rem 0;\n  padding: 0.85em 1em;\n  -webkit-appearance: none;\n  border: 1px solid transparent;\n  border-radius: 0;\n  -webkit-transition: background-color 0.25s ease-out, color 0.25s ease-out;\n  transition: background-color 0.25s ease-out, color 0.25s ease-out;\n  font-size: 0.9rem;\n  line-height: 1;\n  text-align: center;\n  cursor: pointer;\n  background-color: #1779ba;\n  color: #fefefe; }\n  [data-whatinput='mouse'] .button {\n    outline: 0; }\n  .button:hover, .button:focus {\n    background-color: #14679e;\n    color: #fefefe; }\n  .button.tiny {\n    font-size: 0.6rem; }\n  .button.small {\n    font-size: 0.75rem; }\n  .button.large {\n    font-size: 1.25rem; }\n  .button.expanded {\n    display: block;\n    width: 100%;\n    margin-right: 0;\n    margin-left: 0; }\n  .button.primary {\n    background-color: #1779ba;\n    color: #fefefe; }\n    .button.primary:hover, .button.primary:focus {\n      background-color: #126195;\n      color: #fefefe; }\n  .button.secondary {\n    background-color: #767676;\n    color: #fefefe; }\n    .button.secondary:hover, .button.secondary:focus {\n      background-color: #5e5e5e;\n      color: #fefefe; }\n  .button.success {\n    background-color: #3adb76;\n    color: #0a0a0a; }\n    .button.success:hover, .button.success:focus {\n      background-color: #22bb5b;\n      color: #0a0a0a; }\n  .button.warning {\n    background-color: #ffae00;\n    color: #0a0a0a; }\n    .button.warning:hover, .button.warning:focus {\n      background-color: #cc8b00;\n      color: #0a0a0a; }\n  .button.alert {\n    background-color: #cc4b37;\n    color: #fefefe; }\n    .button.alert:hover, .button.alert:focus {\n      background-color: #a53b2a;\n      color: #fefefe; }\n  .button.hollow {\n    border: 1px solid #1779ba;\n    color: #1779ba; }\n    .button.hollow, .button.hollow:hover, .button.hollow:focus {\n      background-color: transparent; }\n    .button.hollow:hover, .button.hollow:focus {\n      border-color: #0c3d5d;\n      color: #0c3d5d; }\n    .button.hollow.primary {\n      border: 1px solid #1779ba;\n      color: #1779ba; }\n      .button.hollow.primary:hover, .button.hollow.primary:focus {\n        border-color: #0c3d5d;\n        color: #0c3d5d; }\n    .button.hollow.secondary {\n      border: 1px solid #767676;\n      color: #767676; }\n      .button.hollow.secondary:hover, .button.hollow.secondary:focus {\n        border-color: #3b3b3b;\n        color: #3b3b3b; }\n    .button.hollow.success {\n      border: 1px solid #3adb76;\n      color: #3adb76; }\n      .button.hollow.success:hover, .button.hollow.success:focus {\n        border-color: #157539;\n        color: #157539; }\n    .button.hollow.warning {\n      border: 1px solid #ffae00;\n      color: #ffae00; }\n      .button.hollow.warning:hover, .button.hollow.warning:focus {\n        border-color: #805700;\n        color: #805700; }\n    .button.hollow.alert {\n      border: 1px solid #cc4b37;\n      color: #cc4b37; }\n      .button.hollow.alert:hover, .button.hollow.alert:focus {\n        border-color: #67251a;\n        color: #67251a; }\n  .button.disabled, .button[disabled] {\n    opacity: 0.25;\n    cursor: not-allowed; }\n    .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {\n      background-color: #1779ba;\n      color: #fefefe; }\n    .button.disabled.primary, .button[disabled].primary {\n      opacity: 0.25;\n      cursor: not-allowed; }\n      .button.disabled.primary:hover, .button.disabled.primary:focus, .button[disabled].primary:hover, .button[disabled].primary:focus {\n        background-color: #1779ba;\n        color: #fefefe; }\n    .button.disabled.secondary, .button[disabled].secondary {\n      opacity: 0.25;\n      cursor: not-allowed; }\n      .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {\n        background-color: #767676;\n        color: #fefefe; }\n    .button.disabled.success, .button[disabled].success {\n      opacity: 0.25;\n      cursor: not-allowed; }\n      .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {\n        background-color: #3adb76;\n        color: #fefefe; }\n    .button.disabled.warning, .button[disabled].warning {\n      opacity: 0.25;\n      cursor: not-allowed; }\n      .button.disabled.warning:hover, .button.disabled.warning:focus, .button[disabled].warning:hover, .button[disabled].warning:focus {\n        background-color: #ffae00;\n        color: #fefefe; }\n    .button.disabled.alert, .button[disabled].alert {\n      opacity: 0.25;\n      cursor: not-allowed; }\n      .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {\n        background-color: #cc4b37;\n        color: #fefefe; }\n  .button.dropdown::after {\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.4em;\n    content: '';\n    border-bottom-width: 0;\n    border-top-style: solid;\n    border-color: #fefefe transparent transparent;\n    position: relative;\n    top: 0.4em;\n    display: inline-block;\n    float: right;\n    margin-left: 1em; }\n  .button.arrow-only::after {\n    top: -0.1em;\n    float: none;\n    margin-left: 0; }\n\n.card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem;\n  border: 1px solid #e6e6e6;\n  border-radius: 0;\n  background: #fefefe;\n  box-shadow: none;\n  overflow: hidden;\n  color: #0a0a0a; }\n  .card > :last-child {\n    margin-bottom: 0; }\n\n.card-divider {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  padding: 1rem;\n  background: #e6e6e6; }\n  .card-divider > :last-child {\n    margin-bottom: 0; }\n\n.card-section {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  padding: 1rem; }\n  .card-section > :last-child {\n    margin-bottom: 0; }\n\n.close-button {\n  position: absolute;\n  color: #8a8a8a;\n  cursor: pointer; }\n  [data-whatinput='mouse'] .close-button {\n    outline: 0; }\n  .close-button:hover, .close-button:focus {\n    color: #0a0a0a; }\n  .close-button.small {\n    right: 0.66rem;\n    top: 0.33em;\n    font-size: 1.5em;\n    line-height: 1; }\n  .close-button, .close-button.medium {\n    right: 1rem;\n    top: 0.5rem;\n    font-size: 2em;\n    line-height: 1; }\n\n.label {\n  display: inline-block;\n  padding: 0.33333rem 0.5rem;\n  border-radius: 0;\n  font-size: 0.8rem;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: default;\n  background: #1779ba;\n  color: #fefefe; }\n  .label.primary {\n    background: #1779ba;\n    color: #fefefe; }\n  .label.secondary {\n    background: #767676;\n    color: #fefefe; }\n  .label.success {\n    background: #3adb76;\n    color: #0a0a0a; }\n  .label.warning {\n    background: #ffae00;\n    color: #0a0a0a; }\n  .label.alert {\n    background: #cc4b37;\n    color: #fefefe; }\n\n.hide {\n  display: none !important; }\n\n.invisible {\n  visibility: hidden; }\n\n@media screen and (max-width: 39.9375em) {\n  .hide-for-small-only {\n    display: none !important; } }\n\n@media screen and (max-width: 0em), screen and (min-width: 40em) {\n  .show-for-small-only {\n    display: none !important; } }\n\n@media print, screen and (min-width: 40em) {\n  .hide-for-medium {\n    display: none !important; } }\n\n@media screen and (max-width: 39.9375em) {\n  .show-for-medium {\n    display: none !important; } }\n\n@media screen and (min-width: 40em) and (max-width: 63.9375em) {\n  .hide-for-medium-only {\n    display: none !important; } }\n\n@media screen and (max-width: 39.9375em), screen and (min-width: 64em) {\n  .show-for-medium-only {\n    display: none !important; } }\n\n@media print, screen and (min-width: 64em) {\n  .hide-for-large {\n    display: none !important; } }\n\n@media screen and (max-width: 63.9375em) {\n  .show-for-large {\n    display: none !important; } }\n\n@media screen and (min-width: 64em) and (max-width: 74.9375em) {\n  .hide-for-large-only {\n    display: none !important; } }\n\n@media screen and (max-width: 63.9375em), screen and (min-width: 75em) {\n  .show-for-large-only {\n    display: none !important; } }\n\n.show-for-sr,\n.show-on-focus {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n\n.show-on-focus:active, .show-on-focus:focus {\n  position: static !important;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto; }\n\n.show-for-landscape,\n.hide-for-portrait {\n  display: block !important; }\n  @media screen and (orientation: landscape) {\n    .show-for-landscape,\n    .hide-for-portrait {\n      display: block !important; } }\n  @media screen and (orientation: portrait) {\n    .show-for-landscape,\n    .hide-for-portrait {\n      display: none !important; } }\n\n.hide-for-landscape,\n.show-for-portrait {\n  display: none !important; }\n  @media screen and (orientation: landscape) {\n    .hide-for-landscape,\n    .show-for-portrait {\n      display: none !important; } }\n  @media screen and (orientation: portrait) {\n    .hide-for-landscape,\n    .show-for-portrait {\n      display: block !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-center {\n  display: block;\n  margin-right: auto;\n  margin-left: auto; }\n\n.clearfix::before, .clearfix::after {\n  display: table;\n  content: ' ';\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n\n.clearfix::after {\n  clear: both; }\n\n.align-right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.align-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.align-justify {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.align-spaced {\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.align-top {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.align-self-top {\n  -ms-flex-item-align: start;\n      align-self: flex-start; }\n\n.align-bottom {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end; }\n\n.align-self-bottom {\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n\n.align-middle {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.align-self-middle {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n\n.align-stretch {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.align-self-stretch {\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch; }\n\n.small-order-1 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n\n.small-order-2 {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2; }\n\n.small-order-3 {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3; }\n\n.small-order-4 {\n  -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n          order: 4; }\n\n.small-order-5 {\n  -webkit-box-ordinal-group: 6;\n      -ms-flex-order: 5;\n          order: 5; }\n\n.small-order-6 {\n  -webkit-box-ordinal-group: 7;\n      -ms-flex-order: 6;\n          order: 6; }\n\n@media print, screen and (min-width: 40em) {\n  .medium-order-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .medium-order-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .medium-order-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .medium-order-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .medium-order-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .medium-order-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; } }\n\n@media print, screen and (min-width: 64em) {\n  .large-order-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .large-order-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .large-order-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .large-order-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .large-order-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .large-order-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; } }\n\n.block {\n  display: block; }\n\n.inline-block, .horizontal-list > li {\n  display: inline-block;\n  vertical-align: top; }\n\n.reset-list, .horizontal-list {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.giftCard-customize__design-option::before {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\nhtml {\n  font-size: 12px; }\n  @media (min-width: 480px) {\n    html {\n      font-size: 14px; } }\n  @media (min-width: 640px) {\n    html {\n      font-size: 16px; } }\n\nbody {\n  color: #333; }\n\nh1 {\n  margin-bottom: 10px;\n  font-weight: 600; }\n\nlegend {\n  display: block;\n  width: 100%; }\n\n.button {\n  width: 100%;\n  max-width: 250px;\n  padding: 20px;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, sans-serif;\n  font-weight: 600; }\n  .button--noMarginBottom {\n    margin-bottom: 0; }\n\n.header {\n  position: relative;\n  z-index: 50;\n  color: #FFFFFF;\n  background-color: #40A0C0; }\n  .header__nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 20px; }\n    .header__nav-logo {\n      color: inherit;\n      font-weight: bold;\n      -webkit-transition: color 0.25s ease-out;\n      transition: color 0.25s ease-out; }\n      .header__nav-logo:hover {\n        color: #266074; }\n    .header__nav-toggle {\n      color: inherit;\n      font-size: 1.5rem; }\n      .header__nav-toggle:hover {\n        color: #266074;\n        -webkit-transition: color 0.25s ease-out;\n        transition: color 0.25s ease-out;\n        cursor: pointer; }\n      @media (min-width: 800px) {\n        .header__nav-toggle {\n          display: none; } }\n    @media (max-width: 799px) {\n      .header__nav-menu {\n        position: absolute;\n        top: 100%;\n        right: 0;\n        display: none;\n        width: 100%;\n        max-width: 150px;\n        background-color: #8dc6d9; }\n        .header__nav-menu--show {\n          display: block; } }\n    @media (min-width: 800px) {\n      .header__nav-menu {\n        text-align: right; } }\n    .header__nav-menu-item {\n      padding: 0 15px; }\n      @media (max-width: 799px) {\n        .header__nav-menu-item.header__nav-menu-item {\n          display: block;\n          padding-top: 10px;\n          padding-bottom: 10px; } }\n    .header__nav-menu-link {\n      color: inherit;\n      -webkit-transition: color 0.25s ease-out;\n      transition: color 0.25s ease-out; }\n      .header__nav-menu-link--active {\n        font-weight: bold; }\n      .header__nav-menu-link:hover {\n        color: #266074; }\n\n/** \r\n * Footer\r\n */\n.footer {\n  padding-top: 40px;\n  color: #FFFFFF;\n  text-align: center;\n  background-color: #266074; }\n  .footer .row {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .footer__nav, .footer__info, .footer__copyright {\n    padding-left: 20px;\n    padding-right: 20px; }\n  .footer__nav {\n    margin-bottom: 20px; }\n    .footer__nav-menu {\n      -ms-flex-negative: 1;\n          flex-shrink: 1; }\n      .footer__nav-menu-item {\n        padding-left: 10px;\n        padding-right: 10px; }\n        .footer__nav--site .footer__nav-menu-item {\n          padding-left: 20px;\n          padding-right: 20px; }\n        @media (max-width: 639px) {\n          .footer__nav-menu-item {\n            margin-bottom: 10px; } }\n      .footer__nav-menu-link {\n        color: inherit;\n        -webkit-transition: color 0.25s ease-out;\n        transition: color 0.25s ease-out; }\n        .footer__nav-menu-link:hover {\n          color: #40A0C0; }\n        .footer__nav-menu-link-icon {\n          width: 40px;\n          height: 40px;\n          line-height: 40px;\n          border-radius: 50%;\n          background-color: #40A0C0;\n          -webkit-transition: background-color 0.25s ease-out;\n          transition: background-color 0.25s ease-out; }\n        .footer__nav-menu-link:hover .footer__nav-menu-link-icon {\n          background-color: #FFFFFF; }\n  .footer__info {\n    display: block;\n    font-size: 0.9rem;\n    color: #cccccc; }\n    .footer__info-details {\n      display: block;\n      color: inherit; }\n      .footer__info-details--email {\n        color: inherit;\n        -webkit-transition: color 0.25s ease-out;\n        transition: color 0.25s ease-out; }\n        .footer__info-details--email:hover {\n          color: #40A0C0; }\n  .footer__copyright {\n    margin-top: 20px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    background-color: #477686; }\n    @media (max-width: 639px) {\n      .footer__copyright-message, .footer__copyright-link {\n        display: block; } }\n    .footer__copyright-link {\n      color: #cccccc;\n      -webkit-transition: color 0.25s ease-out;\n      transition: color 0.25s ease-out; }\n      .footer__copyright-link:hover {\n        color: #40A0C0; }\n      @media (min-width: 640px) {\n        .footer__copyright-link::before {\n          content: \" \\2022   \"; } }\n\n.giftCard-home__hero {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  min-height: 100vh;\n  color: #FFFFFF;\n  text-align: center;\n  background-color: #8dc6d9;\n  background-image: -webkit-linear-gradient(top, rgba(38, 96, 116, 0.5), rgba(38, 96, 116, 0.5)), url(" + __webpack_require__("./assets/images/bg_gift.jpg") + ");\n  background-image: linear-gradient(to bottom, rgba(38, 96, 116, 0.5), rgba(38, 96, 116, 0.5)), url(" + __webpack_require__("./assets/images/bg_gift.jpg") + ");\n  background-size: 100% 100%, cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n  @media (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .giftCard-home__hero {\n      height: 100vh; } }\n  .giftCard-home__hero-title, .giftCard-home__hero-subtitle {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 100%;\n            flex: 0 1 100%;\n    width: 100%; }\n  .giftCard-home__hero-title {\n    margin-bottom: 10px;\n    font-weight: 700;\n    font-size: 3rem;\n    text-transform: uppercase; }\n  .giftCard-home__hero-subtitle {\n    margin-bottom: 30px;\n    font-size: 1.5rem; }\n\n.giftCard-home__section {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  padding-left: 20px;\n  padding-right: 20px; }\n  .giftCard-home__section--bgBlue {\n    color: #FFF;\n    background-color: #40A0C0; }\n  .giftCard-home__section > .row {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center; }\n    @media (min-width: 1024px) {\n      .giftCard-home__section > .row {\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        text-align: left; } }\n  @media (min-width: 1024px) {\n    .giftCard-home__section--rtl > .row {\n      text-align: right; } }\n  .giftCard-home__section-textWrap, .giftCard-home__section-imgWrap {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 100%;\n            flex: 0 1 100%; }\n  @media (min-width: 1024px) {\n    .giftCard-home__section--rtl .giftCard-home__section-textWrap {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; } }\n  .giftCard-home__section-imgWrap {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    max-width: 500px; }\n    @media (min-width: 1024px) {\n      .giftCard-home__section-imgWrap {\n        margin-left: 30px; } }\n    @media (min-width: 1024px) {\n      .giftCard-home__section--rtl .giftCard-home__section-imgWrap {\n        -webkit-box-ordinal-group: 1;\n            -ms-flex-order: 0;\n                order: 0;\n        margin-left: 0;\n        margin-right: 30px; } }\n  .giftCard-home__section-title {\n    margin-bottom: 15px;\n    font-size: 2.5rem;\n    font-weight: bold; }\n  .giftCard-home__section-img {\n    width: 100%; }\n\n.giftCard-home__about {\n  padding-top: 50px; }\n\n.giftCard-home__stats {\n  text-align: center; }\n  .giftCard-home__stats-info {\n    margin-bottom: 40px; }\n  @media (min-width: 480px) {\n    .giftCard-home__stats-box {\n      display: inline-block;\n      vertical-align: middle;\n      margin-left: 50px;\n      margin-right: 50px; } }\n  .giftCard-home__stats-box-number, .giftCard-home__stats-box-caption {\n    display: block; }\n  .giftCard-home__stats-box-number {\n    font-size: 5rem; }\n  .giftCard-home__stats-box-caption {\n    font-style: italic; }\n\n.giftCard-customize {\n  display: block; }\n  .giftCard-customize__title {\n    color: #FFFFFF;\n    background-color: #477686;\n    padding: 15px 20px;\n    font-weight: 600;\n    font-size: 1.618rem;\n    text-align: center; }\n\n.giftCard-customize__form {\n  display: block;\n  padding-left: 20px;\n  padding-right: 20px;\n  counter-reset: section; }\n\n.giftCard-customize__section {\n  padding-bottom: 50px;\n  border-bottom: 1px solid #e6e6e6; }\n  .giftCard-customize__section-flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .giftCard-customize__section-title {\n    padding-top: 50px;\n    padding-bottom: 10px;\n    margin-bottom: 5px;\n    color: #40A0C0;\n    font-size: 1.5rem; }\n    .giftCard-customize__section-title::before {\n      counter-increment: section;\n      content: counter(section);\n      position: relative;\n      top: -2px;\n      display: inline-block;\n      width: 40px;\n      height: 40px;\n      margin-right: 10px;\n      color: #FFFFFF;\n      font-size: 1.25rem;\n      font-weight: bold;\n      line-height: 39px;\n      text-align: center;\n      border-radius: 50%;\n      background-color: #40A0C0; }\n  .giftCard-customize__section-input {\n    height: 60px;\n    margin-bottom: 0;\n    font-size: 1.25rem; }\n    .giftCard-customize__section-input:required {\n      box-shadow: none; }\n  .giftCard-customize__section-error {\n    display: block;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    color: red; }\n\n.giftCard-customize__design-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  @media (max-width: 1023px) {\n    .giftCard-customize__design-options {\n      white-space: nowrap;\n      overflow-x: auto; } }\n  @media (min-width: 1024px) {\n    .giftCard-customize__design-options {\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; } }\n\n.giftCard-customize__design-option {\n  position: relative;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -ms-flex-preferred-size: 200px;\n      flex-basis: 200px;\n  margin-bottom: 5px;\n  margin-right: 5px;\n  border: 1px solid transparent;\n  cursor: pointer; }\n  @media (min-width: 640px) {\n    .giftCard-customize__design-option {\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; } }\n  @media (min-width: 1024px) {\n    .giftCard-customize__design-option {\n      -ms-flex-preferred-size: calc(25% - 5px);\n          flex-basis: calc(25% - 5px); } }\n  @media (min-width: 1024px) and (-ms-high-contrast: none), (min-width: 1024px) and (-ms-high-contrast: active) {\n    .giftCard-customize__design-option {\n      width: calc(25% - 5px); } }\n  .giftCard-customize__design-option::before {\n    content: \" \";\n    visibility: hidden;\n    -webkit-transition: background-color 0.25s, visibility 0.25s;\n    transition: background-color 0.25s, visibility 0.25s; }\n  .giftCard-customize__design-option:hover::before, .giftCard-customize__design-option--selected::before {\n    visibility: visible;\n    background-color: rgba(255, 255, 255, 0.65); }\n  .giftCard-customize__design-option-img {\n    width: 100%; }\n  .giftCard-customize__design-option-input {\n    position: absolute;\n    z-index: -1; }\n\n.giftCard-customize__amount-flex {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  @media (min-width: 800px) {\n    .giftCard-customize__amount-flex {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; } }\n\n.giftCard-customize__amount-main, .giftCard-customize__amount-preset {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 100%;\n          flex: 0 1 100%; }\n\n@media (max-width: 799px) {\n  .giftCard-customize__amount-main {\n    margin-bottom: 10px; } }\n\n.giftCard-customize__amount-field {\n  position: relative; }\n  .giftCard-customize__amount-field-input {\n    padding-left: 70px;\n    margin-bottom: 0; }\n  .giftCard-customize__amount-field-prefix {\n    position: absolute;\n    left: 1px;\n    top: 1px;\n    display: block;\n    width: 60px;\n    height: 60px;\n    color: #FFFFFF;\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-align: center;\n    line-height: 59px;\n    background-color: #8dc6d9; }\n  .giftCard-customize__amount-field-note {\n    font-size: 0.8rem; }\n\n@media (min-width: 800px) {\n  .giftCard-customize__amount-preset {\n    margin-left: 30px; } }\n\n.giftCard-customize__amount-preset-btn {\n  width: calc(100% / 3 - 5px);\n  margin-bottom: 5px;\n  margin-right: 5px; }\n  @media (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .giftCard-customize__amount-preset-btn {\n      width: calc(33% - 5px); } }\n\n.giftCard-customize__recipient-flex {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.giftCard-customize__recipient-block {\n  width: 100%;\n  margin-bottom: 10px; }\n  @media (min-width: 800px) {\n    .giftCard-customize__recipient-block {\n      width: calc(100% / 3 - 10px);\n      margin-right: 10px; } }\n  @media (min-width: 800px) and (-ms-high-contrast: none), (min-width: 800px) and (-ms-high-contrast: active) {\n    .giftCard-customize__recipient-block {\n      width: calc(33% - 10px); } }\n  .giftCard-customize__recipient-block--textarea {\n    width: 100%; }\n\n.giftCard-customize__recipient-field--textarea {\n  width: 100%; }\n\n.giftCard-customize__recipient-field-input--textarea {\n  padding-top: 20px;\n  height: 200px; }\n\n.giftCard-customize__review-flex {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  @media (min-width: 800px) {\n    .giftCard-customize__review-flex {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; } }\n\n.giftCard-customize__review-design, .giftCard-customize__review-info {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 100%;\n          flex: 0 1 100%; }\n\n@media (max-width: 799px) {\n  .giftCard-customize__review-design {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; } }\n\n@media (max-width: 799px) {\n  .giftCard-customize__review-info {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; } }\n\n.giftCard-customize__review-info-block {\n  padding-top: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #40A0C0; }\n  .giftCard-customize__review-info-block--flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .giftCard-customize__review-info-block-label, .giftCard-customize__review-info-block-data {\n    display: block; }\n  .giftCard-customize__review-info-block-label {\n    font-weight: bold; }\n    .giftCard-customize__review-info-block-label--marginBottom {\n      margin-bottom: 10px; }\n  .giftCard-customize__review-info-block-data:not(.giftCard-customize__review-info-block-data--prewrap) {\n    margin-left: 20px;\n    text-align: right; }\n  .giftCard-customize__review-info-block-data--prewrap {\n    white-space: pre-wrap; }\n\n@media (min-width: 800px) {\n  .giftCard-customize__review-design {\n    margin-left: 30px; } }\n\n.giftCard-customize__review-design-image {\n  width: 100%;\n  margin-bottom: 20px; }\n  .giftCard-customize__review-design-image--none {\n    height: 400px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: #40A0C0;\n    text-align: center;\n    border: 1px solid #40A0C0; }\n\n.giftCard-customize__submit {\n  margin-top: 25px;\n  margin-bottom: 50px;\n  max-width: 300px; }\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ "../node_modules/exenv/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return ExecutionEnvironment;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),

/***/ "../node_modules/history/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.Actions = exports.useQueries = exports.useBeforeUnload = exports.useBasename = exports.createMemoryHistory = exports.createHashHistory = exports.createHistory = undefined;

var _LocationUtils = __webpack_require__("../node_modules/history/lib/LocationUtils.js");

Object.defineProperty(exports, 'locationsAreEqual', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.locationsAreEqual;
  }
});

var _createBrowserHistory = __webpack_require__("../node_modules/history/lib/createBrowserHistory.js");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createHashHistory2 = __webpack_require__("../node_modules/history/lib/createHashHistory.js");

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _createMemoryHistory2 = __webpack_require__("../node_modules/history/lib/createMemoryHistory.js");

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

var _useBasename2 = __webpack_require__("../node_modules/history/lib/useBasename.js");

var _useBasename3 = _interopRequireDefault(_useBasename2);

var _useBeforeUnload2 = __webpack_require__("../node_modules/history/lib/useBeforeUnload.js");

var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);

var _useQueries2 = __webpack_require__("../node_modules/history/lib/useQueries.js");

var _useQueries3 = _interopRequireDefault(_useQueries2);

var _Actions2 = __webpack_require__("../node_modules/history/lib/Actions.js");

var _Actions = _interopRequireWildcard(_Actions2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createHistory = _createBrowserHistory2.default;
exports.createHashHistory = _createHashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;
exports.useBasename = _useBasename3.default;
exports.useBeforeUnload = _useBeforeUnload3.default;
exports.useQueries = _useQueries3.default;
exports.Actions = _Actions;

/***/ }),

/***/ "../node_modules/history/lib/useBeforeUnload.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = __webpack_require__("../node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _DOMUtils = __webpack_require__("../node_modules/history/lib/DOMUtils.js");

var _ExecutionEnvironment = __webpack_require__("../node_modules/history/lib/ExecutionEnvironment.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startListener = function startListener(getPromptMessage) {
  var handleBeforeUnload = function handleBeforeUnload(event) {
    var message = getPromptMessage();

    if (typeof message === 'string') {
      (event || window.event).returnValue = message;
      return message;
    }

    return undefined;
  };

  (0, _DOMUtils.addEventListener)(window, 'beforeunload', handleBeforeUnload);

  return function () {
    return (0, _DOMUtils.removeEventListener)(window, 'beforeunload', handleBeforeUnload);
  };
};

/**
 * Returns a new createHistory function that can be used to create
 * history objects that know how to use the beforeunload event in web
 * browsers to cancel navigation.
 */
var useBeforeUnload = function useBeforeUnload(createHistory) {
  !_ExecutionEnvironment.canUseDOM ?  true ? (0, _invariant2.default)(false, 'useBeforeUnload only works in DOM environments') : (0, _invariant2.default)(false) : void 0;

  return function (options) {
    var history = createHistory(options);

    var listeners = [];
    var stopListener = void 0;

    var getPromptMessage = function getPromptMessage() {
      var message = void 0;
      for (var i = 0, len = listeners.length; message == null && i < len; ++i) {
        message = listeners[i].call();
      }return message;
    };

    var listenBeforeUnload = function listenBeforeUnload(listener) {
      if (listeners.push(listener) === 1) stopListener = startListener(getPromptMessage);

      return function () {
        listeners = listeners.filter(function (item) {
          return item !== listener;
        });

        if (listeners.length === 0 && stopListener) {
          stopListener();
          stopListener = null;
        }
      };
    };

    return _extends({}, history, {
      listenBeforeUnload: listenBeforeUnload
    });
  };
};

exports.default = useBeforeUnload;

/***/ }),

/***/ "../node_modules/lodash._getnative/index.js":
/***/ (function(module, exports) {

/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;


/***/ }),

/***/ "../node_modules/lodash.isarguments/index.js":
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isArguments;


/***/ }),

/***/ "../node_modules/lodash.isarray/index.js":
/***/ (function(module, exports) {

/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isArray;


/***/ }),

/***/ "../node_modules/lodash.keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = __webpack_require__("../node_modules/lodash._getnative/index.js"),
    isArguments = __webpack_require__("../node_modules/lodash.isarguments/index.js"),
    isArray = __webpack_require__("../node_modules/lodash.isarray/index.js");

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;


/***/ }),

/***/ "../node_modules/react-document-title/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__("../node_modules/react/react.js"),
    withSideEffect = __webpack_require__("../node_modules/react-side-effect/lib/index.js");

function reducePropsToState(propsList) {
  var innermostProps = propsList[propsList.length - 1];
  if (innermostProps) {
    return innermostProps.title;
  }
}

function handleStateChangeOnClient(title) {
  var nextTitle = title || '';
  if (nextTitle !== document.title) {
    document.title = nextTitle;
  }
}

var DocumentTitle = React.createClass({
  displayName: 'DocumentTitle',

  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function render() {
    if (this.props.children) {
      return React.Children.only(this.props.children);
    } else {
      return null;
    }
  }
});

module.exports = withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(DocumentTitle);


/***/ }),

/***/ "../node_modules/react-side-effect/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _exenv = __webpack_require__("../node_modules/exenv/index.js");

var _exenv2 = _interopRequireDefault(_exenv);

var _shallowequal = __webpack_require__("../node_modules/shallowequal/modules/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }
  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }
  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state = undefined;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = (function (_Component) {
      _inherits(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck(this, SideEffect);

        _Component.apply(this, arguments);
      }

      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !_shallowequal2['default'](nextProps, this.props);
      };

      SideEffect.prototype.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      SideEffect.prototype.render = function render() {
        return _react2['default'].createElement(WrappedComponent, this.props);
      };

      _createClass(SideEffect, null, [{
        key: 'displayName',

        // Try to use displayName of wrapped component
        value: 'SideEffect(' + getDisplayName(WrappedComponent) + ')',

        // Expose canUseDOM so tests can monkeypatch it
        enumerable: true
      }, {
        key: 'canUseDOM',
        value: _exenv2['default'].canUseDOM,
        enumerable: true
      }]);

      return SideEffect;
    })(_react.Component);

    return SideEffect;
  };
};

/***/ }),

/***/ "../node_modules/shallowequal/modules/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fetchKeys = __webpack_require__("../node_modules/lodash.keys/index.js");

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if (ret !== void 0) {
        return !!ret;
    }

    if (objA === objB) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }

    var keysA = fetchKeys(objA);
    var keysB = fetchKeys(objB);

    var len = keysA.length;
    if (len !== keysB.length) {
        return false;
    }

    compareContext = compareContext || null;

    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < len; i++) {
        var key = keysA[i];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];

        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (_ret === false || _ret === void 0 && valueA !== valueB) {
            return false;
        }
    }

    return true;
};

/***/ }),

/***/ "../node_modules/style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./assets/images/bg_gift.jpg":
/***/ (function(module, exports) {

module.exports = "./assets/images/bg_gift.jpg";

/***/ }),

/***/ "./assets/images/gift_card.png":
/***/ (function(module, exports) {

module.exports = "./assets/images/gift_card.png";

/***/ }),

/***/ "./assets/images/gift_card_hand.png":
/***/ (function(module, exports) {

module.exports = "./assets/images/gift_card_hand.png";

/***/ }),

/***/ "./assets/scss/giftCard.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/lib/loader.js?sourceMap!./assets/scss/giftCard.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/lib/loader.js?sourceMap!./assets/scss/giftCard.scss", function() {
			var newContent = __webpack_require__("../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/lib/loader.js?sourceMap!./assets/scss/giftCard.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/footer/footer.component.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("../node_modules/react-router/es/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * FooterMenuLink
 * A link in the footer.
 */
var FooterMenuLink = function FooterMenuLink(props) {
    var link = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
        { className: "footer__nav-menu-link", to: props.to, onClick: props.action },
        props.title
    );

    if (props.social) {
        link = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            { className: "footer__nav-menu-link", href: "#", onClick: props.action },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "footer__nav-menu-link-icon fa fa-" + props.social })
        );
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "li",
        { className: "footer__nav-menu-item" },
        link
    );
};

FooterMenuLink.propTypes = {
    to: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
    action: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
    title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
    social: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/**
 * Footer
 * The footer component.
 */

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "footer",
                { className: "footer" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "footer__nav footer__nav--site row" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "ul",
                        { className: "footer__nav-menu horizontal-list" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FooterMenuLink, { title: "Home", to: "/" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FooterMenuLink, { title: "How It Works", action: this.props.comingSoon }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FooterMenuLink, { title: "FAQ", action: this.props.comingSoon }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FooterMenuLink, { title: "About Us", action: this.props.comingSoon }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FooterMenuLink, { title: "Contact", action: this.props.comingSoon })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "footer__nav footer__nav--social row" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "ul",
                        { className: "footer__nav-menu horizontal-list" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FooterMenuLink, { action: this.props.comingSoon, social: "facebook" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FooterMenuLink, { action: this.props.comingSoon, social: "twitter" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FooterMenuLink, { action: this.props.comingSoon, social: "linkedin" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FooterMenuLink, { action: this.props.comingSoon, social: "google-plus" })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "footer__info row" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "footer__info-details" },
                        "111 Somewhere St, Someplace SA 00000"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "footer__info-details" },
                        "(000) 111-2222"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "a",
                        { className: "footer__info-details footer__info-details--email" },
                        "example@mail.com"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "footer__copyright" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "footer__copyright-message" },
                        "Copyright \xA9 2017 Derek Zeng"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "a",
                        { className: "footer__copyright-link", href: "https://dzeng-web.me" },
                        "My website"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "a",
                        { className: "footer__copyright-link", href: "https://github.com/Sylphony/gift-card-company-website-prototype" },
                        "Source"
                    )
                )
            );
        }
    }]);

    return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Footer.propTypes = {
    comingSoon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = Footer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\components\\footer\\footer.component.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\components\\footer\\footer.component.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/header/header.component.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__("../node_modules/react-router/es/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * NavMenuLink
 * A link in the nav menu.
 */
var NavMenuLink = function NavMenuLink(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "li",
        { className: "header__nav-menu-item" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
            { className: "header__nav-menu-link", to: props.to, onClick: props.action, activeClassName: "header__nav-menu-link--active" },
            props.title
        )
    );
};

NavMenuLink.propTypes = {
    to: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
    action: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
    title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired
};

/**
 * Nav
 * Navigation component.
 */

var Nav = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav(props) {
        _classCallCheck(this, Nav);

        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

        _this.state = {
            // Set nav menu initial state
            showMenu: false
        };

        _this.toggleNavMenu = _this.toggleNavMenu.bind(_this);
        return _this;
    }

    /**
     * toggleNavMenu()
     * On mobile, toggle nav menu when it is clicked.
     */


    _createClass(Nav, [{
        key: "toggleNavMenu",
        value: function toggleNavMenu() {
            this.setState({ showMenu: !this.state.showMenu });
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "nav",
                { className: "header__nav row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
                    { className: "header__nav-logo", to: "/" },
                    "MY GIFT CARD COMPANY"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "ul",
                    { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(["header__nav-menu horizontal-list", { "header__nav-menu--show": this.state.showMenu }]) },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavMenuLink, { title: "Home", to: "/" }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavMenuLink, { title: "About Us", action: this.props.comingSoon }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavMenuLink, { title: "Purchase", to: "/customize" }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavMenuLink, { title: "Sign In", action: this.props.comingSoon })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "button",
                    { type: "button", className: "header__nav-toggle", onClick: this.toggleNavMenu },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "header__nav-toggle-icon fa fa-navicon" })
                )
            );
        }
    }]);

    return Nav;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Nav.propTypes = {
    comingSoon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired
};

/**
 * Header
 * The header component.
 */

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "header",
                { className: "header" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Nav, this.props)
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\components\\header\\header.component.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\components\\header\\header.component.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("./components/header/header.component.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__ = __webpack_require__("./components/footer/footer.component.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__["a"]; });





 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\components\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\components\\index.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/GiftCard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("./components/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var GiftCard = function (_React$Component) {
    _inherits(GiftCard, _React$Component);

    function GiftCard() {
        _classCallCheck(this, GiftCard);

        return _possibleConstructorReturn(this, (GiftCard.__proto__ || Object.getPrototypeOf(GiftCard)).apply(this, arguments));
    }

    _createClass(GiftCard, [{
        key: "comingSoon",
        value: function comingSoon(evt) {
            evt.preventDefault();

            alert("This is a prototype.  The link you clicked does nothing.");
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components__["a" /* Header */], { comingSoon: this.comingSoon.bind(this) }),
                this.props.children,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components__["b" /* Footer */], { comingSoon: this.comingSoon.bind(this) })
            );
        }
    }]);

    return GiftCard;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = GiftCard;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\GiftCard.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\GiftCard.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/actions/giftCardCustomize.actionCreators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["checkInput"] = checkInput;
/* harmony export (immutable) */ __webpack_exports__["updateAmount"] = updateAmount;
/* harmony export (immutable) */ __webpack_exports__["updateDesign"] = updateDesign;
/* harmony export (immutable) */ __webpack_exports__["updateSenderName"] = updateSenderName;
/* harmony export (immutable) */ __webpack_exports__["updateRecipientName"] = updateRecipientName;
/* harmony export (immutable) */ __webpack_exports__["updateRecipientEmail"] = updateRecipientEmail;
/* harmony export (immutable) */ __webpack_exports__["updateRecipientMessage"] = updateRecipientMessage;
function checkInput(input, fieldName) {
    return {
        type: "CHECK_INPUT",
        input: input,
        fieldName: fieldName
    };
}

function updateAmount(amount) {
    amount = parseInt(amount) || 0;

    return {
        type: "UPDATE_AMOUNT",
        amount: amount
    };
}

function updateDesign(code, imgSrc) {
    code = parseInt(code) || -1;

    return {
        type: "UPDATE_DESIGN",
        design: {
            code: code,
            imgSrc: imgSrc
        }
    };
}

function updateSenderName(name) {
    return {
        type: "UPDATE_SENDER_NAME",
        name: name
    };
}

function updateRecipientName(name) {
    return {
        type: "UPDATE_RECIPIENT_NAME",
        name: name
    };
}

function updateRecipientEmail(email) {
    return {
        type: "UPDATE_RECIPIENT_EMAIL",
        email: email
    };
}

function updateRecipientMessage(message) {
    return {
        type: "UPDATE_RECIPIENT_MESSAGE",
        message: message
    };
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\actions\\giftCardCustomize.actionCreators.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\actions\\giftCardCustomize.actionCreators.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/components/FieldError.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);



var FieldError = function FieldError(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "span",
        { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(["giftCard-customize__section-error", props.errorFlag ? "" : "hide"]) },
        props.errorMessage
    );
};

FieldError.propTypes = {
    errorFlag: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
    errorMessage: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/* harmony default export */ __webpack_exports__["a"] = FieldError;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\FieldError.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\FieldError.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/components/GiftCardCustomize.amount.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dispatchAction__ = __webpack_require__("./giftCard/customize/components/utils/dispatchAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FieldError__ = __webpack_require__("./giftCard/customize/components/FieldError.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * PresetAmtBtn
 * Buttons with preset amounts.
 */
var PresetAmtBtn = function PresetAmtBtn(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "button",
        { type: "button",
            className: "giftCard-customize__amount-preset-btn button",
            value: props.amt,
            onClick: props.action },
        "$" + props.amt
    );
};

PresetAmtBtn.propTypes = {
    amt: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
    action: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired
};

/**
 * GiftCardCustomizeAmount
 * The main React component.
 */

var GiftCardCustomizeAmount = function (_React$Component) {
    _inherits(GiftCardCustomizeAmount, _React$Component);

    function GiftCardCustomizeAmount() {
        _classCallCheck(this, GiftCardCustomizeAmount);

        return _possibleConstructorReturn(this, (GiftCardCustomizeAmount.__proto__ || Object.getPrototypeOf(GiftCardCustomizeAmount)).apply(this, arguments));
    }

    _createClass(GiftCardCustomizeAmount, [{
        key: "allowedInput",

        /**
         * allowedInput()
         * Allow only certain keys to be used.
         * @param {obj} evt: The event (from the input element).
         */
        value: function allowedInput(evt) {
            var allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Backspace", "Delete", "Tab", "Home", "End", "Shift"];
            // NOTE: event.keyCode is deprecated so that's why it is not used here

            // Do not allow any keys except allowed keys listed
            if (!allowedKeys.includes(evt.key)) {
                evt.preventDefault();
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            this.presetAmts = [25, 50, 100, 200, 500, 1000].map(function (amt) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PresetAmtBtn, { amt: amt, action: _this2.setAmount.bind(_this2), key: amt });
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            // Native event on input element to control its allowed input
            this.amountInput.addEventListener("keypress", this.allowedInput);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.amountInput.removeEventListener("keypress", this.allowedInput);
        }

        /**
         * setAmount()
         * Set amount in the input box (from a preset amount button clicked).
         * @param {obj} evt: The event (from the button element).
         */

    }, {
        key: "setAmount",
        value: function setAmount(evt) {
            this.amountInput.value = evt.target.value;

            // Dispatch the action
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_dispatchAction__["a" /* default */])(this.props.updateAmount, evt);

            // Manually trigger the blur event to also dispatch the action on the input element
            this.amountInput.dispatchEvent(new Event("blur", { bubbles: true }));
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "fieldset",
                { className: "giftCard-customize__section giftCard-customize__amount" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "legend",
                    { className: "giftCard-customize__section-title giftCard-customize__amount-title" },
                    "Place an amount"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "giftCard-customize__section-flex giftCard-customize__amount-flex" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "giftCard-customize__amount-main" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "label",
                            { className: "giftCard-customize__amount-field" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "span",
                                { className: "giftCard-customize__amount-field-prefix" },
                                "$"
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { className: "giftCard-customize__section-input giftCard-customize__amount-field-input",
                                name: "amount",
                                type: "text",
                                placeholder: "Amount (whole numbers only)",
                                onChange: __WEBPACK_IMPORTED_MODULE_2__utils_dispatchAction__["a" /* default */].bind(this, this.props.updateAmount),
                                onBlur: __WEBPACK_IMPORTED_MODULE_2__utils_dispatchAction__["a" /* default */].bind(this, this.props.checkInput),
                                maxLength: "4",
                                ref: function ref(input) {
                                    return _this3.amountInput = input;
                                },
                                required: true })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FieldError__["a" /* default */], { errorFlag: this.props.giftCard.errors.amount.error,
                            errorMessage: this.props.giftCard.errors.amount.message })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "giftCard-customize__amount-preset" },
                        this.presetAmts
                    )
                )
            );
        }
    }]);

    return GiftCardCustomizeAmount;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

GiftCardCustomizeAmount.propTypes = {
    updateAmount: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired,
    checkInput: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired,
    giftCard: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
        errors: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
            amount: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
                error: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
                message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
            })
        })
    })
};

/* harmony default export */ __webpack_exports__["a"] = GiftCardCustomizeAmount;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.amount.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.amount.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/components/GiftCardCustomize.design.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dispatchAction__ = __webpack_require__("./giftCard/customize/components/utils/dispatchAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FieldError__ = __webpack_require__("./giftCard/customize/components/FieldError.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _this = this;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * DesignOption
 * A design option radio button component.
 */
var DesignOption = function DesignOption(props) {
    var labelClassNames = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(["giftCard-customize__design-option", props.design.code === props.option.id ? "giftCard-customize__design-option--selected" : ""]);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "label",
        { className: labelClassNames, key: props.option.id },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { className: "giftCard-customize__design-option-input",
            name: "design",
            type: "radio",
            value: props.option.id,
            onChange: props.action.bind(_this, props.option.id, props.option.url),
            onBlur: __WEBPACK_IMPORTED_MODULE_2__utils_dispatchAction__["a" /* default */].bind(_this, props.validate),
            required: true }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "giftCard-customize__design-option-img",
            alt: props.option.title,
            src: props.option.thumbnailUrl })
    );
};

DesignOption.propTypes = {
    design: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
        code: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired
    }),
    option: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
        id: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
        title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
        url: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
        thumbnailUrl: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired
    }),
    action: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired,
    validate: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired
};

/**
 * GiftCardCustomizeDesign
 * The main React component.
 */

var GiftCardCustomizeDesign = function (_React$Component) {
    _inherits(GiftCardCustomizeDesign, _React$Component);

    function GiftCardCustomizeDesign() {
        _classCallCheck(this, GiftCardCustomizeDesign);

        return _possibleConstructorReturn(this, (GiftCardCustomizeDesign.__proto__ || Object.getPrototypeOf(GiftCardCustomizeDesign)).apply(this, arguments));
    }

    _createClass(GiftCardCustomizeDesign, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            var designsArr = this.props.designs;

            // If there are no designs, display a message
            var designOpts = "No designs available";

            // If there are designs, show them
            if (designsArr.length > 0) {
                designOpts = designsArr.map(function (option) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DesignOption, { design: _this3.props.giftCard.design,
                        option: option,
                        action: _this3.props.updateDesign,
                        validate: _this3.props.checkInput,
                        key: option.id });
                });
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "fieldset",
                { className: "giftCard-customize__section giftCard-customize__design" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "legend",
                    { className: "giftCard-customize__section-title giftCard-customize__design-title" },
                    "Select a design"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "giftCard-customize__design-options" },
                    designOpts
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FieldError__["a" /* default */], { errorFlag: this.props.giftCard.errors.design.error,
                    errorMessage: this.props.giftCard.errors.design.message })
            );
        }
    }]);

    return GiftCardCustomizeDesign;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

GiftCardCustomizeDesign.propTypes = {
    designs: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.arrayOf(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object),
    updateDesign: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired,
    checkInput: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired,
    giftCard: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
        errors: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
            design: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
                error: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
                message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
            })
        })
    })
};

/* harmony default export */ __webpack_exports__["a"] = GiftCardCustomizeDesign;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.design.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.design.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/components/GiftCardCustomize.form.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GiftCardCustomize_design__ = __webpack_require__("./giftCard/customize/components/GiftCardCustomize.design.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GiftCardCustomize_amount__ = __webpack_require__("./giftCard/customize/components/GiftCardCustomize.amount.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GiftCardCustomize_recipient__ = __webpack_require__("./giftCard/customize/components/GiftCardCustomize.recipient.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GiftCardCustomize_review__ = __webpack_require__("./giftCard/customize/components/GiftCardCustomize.review.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GiftCardCustomize_submit__ = __webpack_require__("./giftCard/customize/components/GiftCardCustomize.submit.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var GiftCardCustomizeForm = function (_React$Component) {
    _inherits(GiftCardCustomizeForm, _React$Component);

    function GiftCardCustomizeForm() {
        _classCallCheck(this, GiftCardCustomizeForm);

        return _possibleConstructorReturn(this, (GiftCardCustomizeForm.__proto__ || Object.getPrototypeOf(GiftCardCustomizeForm)).apply(this, arguments));
    }

    _createClass(GiftCardCustomizeForm, [{
        key: "checkForm",

        /**
         * checkForm()
         * Check the form to make sure there is no error just yet.
         * @param {obj} evt: The input event.
         */
        value: function checkForm(evt) {
            // Do not allow form to submit just yet
            evt.preventDefault();

            var form = evt.target;

            // Get the main input elements
            var inputEles = {
                design: Array.prototype.filter.call(form.elements, function (ele) {
                    return ele.name === "design" && ele.checked;
                }),
                amount: Array.prototype.filter.call(form.elements, function (ele) {
                    return ele.name === "amount";
                }),
                recipientName: Array.prototype.filter.call(form.elements, function (ele) {
                    return ele.name === "recipientName";
                }),
                recipientEmail: Array.prototype.filter.call(form.elements, function (ele) {
                    return ele.name === "recipientEmail";
                }),
                senderName: Array.prototype.filter.call(form.elements, function (ele) {
                    return ele.name === "senderName";
                })
            };

            // Trigger their respective onBlur handler so that it runs validation
            // This is necessary due to "Enter" button being allowed to submit and does not blur.
            for (var eleArr in inputEles) {
                inputEles[eleArr][0].dispatchEvent(new Event("blur", { bubbles: true }));
            }

            // Check for any errors one more time
            var errors = this.props.giftCard.errors;
            var formHasNoErrors = errors.design.error === false && errors.amount.error === false && errors.senderName.error === false && errors.recipientName.error === false && errors.recipientEmail.error === false;

            // If there is no form error, alert.
            if (formHasNoErrors) {
                alert("This is a prototype so submitting is not possible.  However, if you are seeing this, it means the form was filled out correctly and passed.");
            }
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "form",
                { className: "giftCard-customize__form row", onSubmit: this.checkForm.bind(this) },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__GiftCardCustomize_design__["a" /* default */], this.props),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GiftCardCustomize_amount__["a" /* default */], this.props),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GiftCardCustomize_recipient__["a" /* default */], this.props),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__GiftCardCustomize_review__["a" /* default */], this.props),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__GiftCardCustomize_submit__["a" /* default */], this.props)
            );
        }
    }]);

    return GiftCardCustomizeForm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = GiftCardCustomizeForm;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.form.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.form.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/components/GiftCardCustomize.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components___ = __webpack_require__("./components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GiftCardCustomize_form__ = __webpack_require__("./giftCard/customize/components/GiftCardCustomize.form.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var GiftCardCustomize = function (_React$Component) {
    _inherits(GiftCardCustomize, _React$Component);

    function GiftCardCustomize() {
        _classCallCheck(this, GiftCardCustomize);

        return _possibleConstructorReturn(this, (GiftCardCustomize.__proto__ || Object.getPrototypeOf(GiftCardCustomize)).apply(this, arguments));
    }

    _createClass(GiftCardCustomize, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "section",
                { className: "giftCard-customize" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h1",
                    { className: "giftCard-customize__title" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "block" },
                        "Customize Your Gift Card"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GiftCardCustomize_form__["a" /* default */], this.props)
            );
        }
    }]);

    return GiftCardCustomize;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = GiftCardCustomize;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/components/GiftCardCustomize.recipient.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dispatchAction__ = __webpack_require__("./giftCard/customize/components/utils/dispatchAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FieldError__ = __webpack_require__("./giftCard/customize/components/FieldError.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _this = this;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * fieldClassNames()
 * Class names place on the field elements.
 * @param {str} type: The element type (text, email, textarea, etc.).
 * @return {arr}: Array of class names ([0] is for block, [1] is for the input).
 */
var fieldClassNames = function fieldClassNames(type) {
    return [__WEBPACK_IMPORTED_MODULE_1_classnames___default()(["giftCard-customize__recipient-block", "giftCard-customize__recipient-block--" + type]), __WEBPACK_IMPORTED_MODULE_1_classnames___default()(["giftCard-customize__recipient-field", "giftCard-customize__recipient-field--" + type]), __WEBPACK_IMPORTED_MODULE_1_classnames___default()(["giftCard-customize__section-input", "giftCard-customize__recipient-field-input", "giftCard-customize__recipient-field-input--" + type])];
};

/**
 * TextFieldBlock
 * Component text field blocks.
 */
var TextFieldBlock = function TextFieldBlock(props) {
    var _fieldClassNames = fieldClassNames(props.type),
        _fieldClassNames2 = _slicedToArray(_fieldClassNames, 3),
        blockClassNames = _fieldClassNames2[0],
        labelClassNames = _fieldClassNames2[1],
        inputClassNames = _fieldClassNames2[2];

    // Textarea


    if (props.type === "textarea") {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: blockClassNames },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "label",
                { className: labelClassNames },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", { className: inputClassNames,
                    name: props.name,
                    placeholder: props.placeholder,
                    onChange: __WEBPACK_IMPORTED_MODULE_2__utils_dispatchAction__["a" /* default */].bind(_this, props.action),
                    onBlur: __WEBPACK_IMPORTED_MODULE_2__utils_dispatchAction__["a" /* default */].bind(_this, props.validate),
                    required: props.required ? "required" : "" })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FieldError__["a" /* default */], { errorFlag: props.errorFlag,
                errorMessage: props.errorMessage })
        );
    }

    // All other types
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: blockClassNames },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "label",
            { className: labelClassNames },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { className: inputClassNames,
                name: props.name,
                type: props.type,
                placeholder: props.placeholder,
                onChange: __WEBPACK_IMPORTED_MODULE_2__utils_dispatchAction__["a" /* default */].bind(_this, props.action),
                onBlur: __WEBPACK_IMPORTED_MODULE_2__utils_dispatchAction__["a" /* default */].bind(_this, props.validate),
                required: props.required ? "required" : "" })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FieldError__["a" /* default */], { errorFlag: props.errorFlag,
            errorMessage: props.errorMessage })
    );
};

TextFieldBlock.propTypes = {
    name: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
    placeholder: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
    action: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
    validate: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
    errorFlag: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
    errorMessage: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/**
 * GiftCardCustomizeRecipient
 * The main React component.
 */

var GiftCardCustomizeRecipient = function (_React$Component) {
    _inherits(GiftCardCustomizeRecipient, _React$Component);

    function GiftCardCustomizeRecipient() {
        _classCallCheck(this, GiftCardCustomizeRecipient);

        return _possibleConstructorReturn(this, (GiftCardCustomizeRecipient.__proto__ || Object.getPrototypeOf(GiftCardCustomizeRecipient)).apply(this, arguments));
    }

    _createClass(GiftCardCustomizeRecipient, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "fieldset",
                { className: "giftCard-customize__section giftCard-customize__recipient" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "legend",
                    { className: "giftCard-customize__section-title giftCard-customize__recipient-title" },
                    "Put in recipient's information"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "giftCard-customize__section-flex giftCard-customize__recipient-flex" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TextFieldBlock, { name: "recipientName",
                        type: "text",
                        placeholder: "Recipient's name",
                        action: this.props.updateRecipientName,
                        validate: this.props.checkInput,
                        errorFlag: this.props.giftCard.errors.recipientName.error,
                        errorMessage: this.props.giftCard.errors.recipientName.message,
                        required: true }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TextFieldBlock, { name: "recipientEmail",
                        type: "email",
                        placeholder: "Recipient's email",
                        action: this.props.updateRecipientEmail,
                        validate: this.props.checkInput,
                        errorFlag: this.props.giftCard.errors.recipientEmail.error,
                        errorMessage: this.props.giftCard.errors.recipientEmail.message,
                        required: true }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TextFieldBlock, { name: "senderName",
                        type: "text",
                        placeholder: "Sender's name",
                        action: this.props.updateSenderName,
                        validate: this.props.checkInput,
                        errorFlag: this.props.giftCard.errors.senderName.error,
                        errorMessage: this.props.giftCard.errors.senderName.message,
                        required: true }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TextFieldBlock, { name: "recipientMessage",
                        type: "textarea",
                        placeholder: "Add a personal message (optional)",
                        action: this.props.updateRecipientMessage })
                )
            );
        }
    }]);

    return GiftCardCustomizeRecipient;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

GiftCardCustomizeRecipient.propTypes = {
    updateRecipientName: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired,
    updateRecipientEmail: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired,
    updateRecipientMessage: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired,
    updateSenderName: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired,
    checkInput: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired,
    giftCard: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
        errors: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
            recipientName: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
                error: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
                message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
            }),
            recipientEmail: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
                error: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
                message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
            }),
            recipientMessage: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
                error: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
                message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
            }),
            senderName: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
                error: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
                message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
            })
        })
    })
};

/* harmony default export */ __webpack_exports__["a"] = GiftCardCustomizeRecipient;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.recipient.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.recipient.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/components/GiftCardCustomize.review.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * ReviewDesignImage
 * Review design image component.
 */
var ReviewDesignImage = function ReviewDesignImage(props) {
    // Design review image placeholder for no design selected
    var component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "giftCard-customize__review-design-image giftCard-customize__review-design-image--none" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { className: "giftCard-customize__review-design-image-text" },
            "No design selected"
        )
    );

    // If there is a design selected, show that image instead
    if (props.design.code >= 0) {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "giftCard-customize__review-design-image", alt: "Design review", src: props.design.imgSrc });
    }

    return component;
};

ReviewDesignImage.propTypes = {
    design: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
        code: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
        imgSrc: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired
    })
};

/**
 * ReviewInfoBlock
 * Review info block component.
 */
var ReviewInfoBlock = function ReviewInfoBlock(props) {
    var _ref = [__WEBPACK_IMPORTED_MODULE_1_classnames___default()(["giftCard-customize__review-info-block", props.flex ? "giftCard-customize__review-info-block--flex" : ""]), __WEBPACK_IMPORTED_MODULE_1_classnames___default()(["giftCard-customize__review-info-block-label", props.marginBottom ? "giftCard-customize__review-info-block-label--marginBottom" : ""]), __WEBPACK_IMPORTED_MODULE_1_classnames___default()(["giftCard-customize__review-info-block-data", props.prewrap ? "giftCard-customize__review-info-block-data--prewrap" : ""])],
        blockClassNames = _ref[0],
        labelClassNames = _ref[1],
        dataClassNames = _ref[2];


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: blockClassNames },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { className: labelClassNames },
            props.label
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { className: dataClassNames },
            props.data
        )
    );
};

ReviewInfoBlock.propTypes = {
    flex: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
    marginBottom: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
    prewrap: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
    label: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
    data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.any.isRequired
};

/**
 * GiftCardCustomizeReview
 * The main React component.
 */

var GiftCardCustomizeReview = function (_React$Component) {
    _inherits(GiftCardCustomizeReview, _React$Component);

    function GiftCardCustomizeReview() {
        _classCallCheck(this, GiftCardCustomizeReview);

        return _possibleConstructorReturn(this, (GiftCardCustomizeReview.__proto__ || Object.getPrototypeOf(GiftCardCustomizeReview)).apply(this, arguments));
    }

    _createClass(GiftCardCustomizeReview, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "giftCard-customize__section giftCard-customize__review" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "giftCard-customize__section-title giftCard-customize__review-title" },
                    "Review the gift card"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "giftCard-customize__section-flex giftCard-customize__review-flex" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "giftCard-customize__review-info" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ReviewInfoBlock, { label: "To", data: [this.props.giftCard.recipient.name, " (" + this.props.giftCard.recipient.email + ")"], flex: true }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ReviewInfoBlock, { label: "From", data: this.props.giftCard.sender.name, flex: true }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ReviewInfoBlock, { label: "Amount", data: "$" + this.props.giftCard.amount, flex: true }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ReviewInfoBlock, { label: "Message", data: this.props.giftCard.recipient.message, marginBottom: true, prewrap: true })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "giftCard-customize__review-design" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ReviewDesignImage, { design: this.props.giftCard.design })
                    )
                )
            );
        }
    }]);

    return GiftCardCustomizeReview;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

GiftCardCustomizeReview.propTypes = {
    giftCard: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
        amount: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number.isRequired,
        design: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object.isRequired,
        recipient: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
            name: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
            email: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
            message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired
        }),
        sender: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
            name: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired
        })
    })
};

/* harmony default export */ __webpack_exports__["a"] = GiftCardCustomizeReview;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.review.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.review.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/components/GiftCardCustomize.submit.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
 * GiftCardCustomizeSubmit
 * The main React component.  Submit button.
 */

var GiftCardCustomizeSubmit = function (_React$Component) {
    _inherits(GiftCardCustomizeSubmit, _React$Component);

    function GiftCardCustomizeSubmit() {
        _classCallCheck(this, GiftCardCustomizeSubmit);

        return _possibleConstructorReturn(this, (GiftCardCustomizeSubmit.__proto__ || Object.getPrototypeOf(GiftCardCustomizeSubmit)).apply(this, arguments));
    }

    _createClass(GiftCardCustomizeSubmit, [{
        key: "render",
        value: function render() {
            var errors = this.props.giftCard.errors;

            // Button is enabled if and only if all errors are false (meaning no errors)
            var isDisabled = !(errors.design.error === false && errors.amount.error === false && errors.senderName.error === false && errors.recipientName.error === false && errors.recipientEmail.error === false);

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "submit",
                className: "giftCard-customize__submit button large",
                value: "Next step",
                disabled: isDisabled });
        }
    }]);

    return GiftCardCustomizeSubmit;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = GiftCardCustomizeSubmit;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.submit.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\GiftCardCustomize.submit.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/components/utils/dispatchAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = dispatchAction;
/**
 * dispatchAction()
 * Invokes an action creator to dispatch an action.
 * @param {func}: The action to perform.
 * @param {obj}: The event target (input element) itself.
 */
function dispatchAction(action, evt) {
    if (typeof action === "function") {
        action(evt.target.value, evt.target.name);
    }
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\utils\\dispatchAction.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\components\\utils\\dispatchAction.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/containers/GiftCardCustomize.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_document_title__ = __webpack_require__("../node_modules/react-document-title/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_document_title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_document_title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("../node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_giftCardCustomize_actionCreators__ = __webpack_require__("./giftCard/customize/actions/giftCardCustomize.actionCreators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_GiftCardCustomize__ = __webpack_require__("./giftCard/customize/components/GiftCardCustomize.jsx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var GiftCardCustomizeCtn = function (_React$Component) {
    _inherits(GiftCardCustomizeCtn, _React$Component);

    function GiftCardCustomizeCtn() {
        _classCallCheck(this, GiftCardCustomizeCtn);

        var _this = _possibleConstructorReturn(this, (GiftCardCustomizeCtn.__proto__ || Object.getPrototypeOf(GiftCardCustomizeCtn)).call(this));

        _this.state = {
            designs: []
        };
        return _this;
    }

    _createClass(GiftCardCustomizeCtn, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            // This sets placeholder images for the design step
            __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("https://jsonplaceholder.typicode.com/photos").then(function (resp) {
                var designsArr = resp.data.slice(0, 8);

                designsArr.forEach(function (design, index) {
                    design.thumbnailUrl = design.url;
                    design.thumbnailUrl = design.thumbnailUrl.replace(/\/600\//, "/350x250/");
                    design.url = design.url.replace(/\/600\//, "/700x500/");
                });

                _this2.setState({
                    designs: designsArr
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_document_title___default.a,
                { title: "Gift Card - Customize" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_GiftCardCustomize__["a" /* default */], _extends({}, this.props, this.state))
            );
        }
    }]);

    return GiftCardCustomizeCtn;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/**
 * Map state to props.
 */


function mapStateToProps(state) {
    return {
        giftCard: state.giftCard
    };
}

/**
 * Map dispatch events to props.
 */
function mapDispatchToProps(dispatch) {
    // Bind all action creators to dispatch
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__actions_giftCardCustomize_actionCreators__, dispatch);
}

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(GiftCardCustomizeCtn);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\containers\\GiftCardCustomize.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\containers\\GiftCardCustomize.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/reducers/giftCardCustomize.reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_redux__ = __webpack_require__("../node_modules/react-router-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_inputValidate__ = __webpack_require__("./giftCard/customize/reducers/utils/inputValidate.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Initial state of the form.
 * {obj} design: The design with a code number and image src URL.
 * {num} amount: The amount to put on card.
 * {obj} sender: Sender info.
 * {obj} recipient: Recipient info.
 * {obj} errors: List of errors, for each field.
 */
var initialState = {
    design: {
        code: -1,
        imgSrc: ""
    },
    amount: 0,
    sender: {
        name: ""
    },
    recipient: {
        name: "",
        email: "",
        message: ""
    },
    errors: {
        design: {},
        amount: {},
        senderName: {},
        recipientName: {},
        recipientEmail: {}
    }
};

/**
 * giftCard()
 * Gift card reducer.
 * @param {obj} state = initialState: The state of the app.
 * @param {obj} action: The action dispatched.
 * @return {obj}: The new state.
 */
function giftCard() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case "CHECK_INPUT":
            {
                var results = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_inputValidate__["a" /* default */])(action.input, action.fieldName);

                return _extends({}, state, {
                    errors: _extends({}, state.errors, _defineProperty({}, action.fieldName, results))
                });
            }

        case "UPDATE_DESIGN":
            {
                return _extends({}, state, {
                    design: action.design
                });
            }

        case "UPDATE_AMOUNT":
            {
                return _extends({}, state, {
                    amount: action.amount
                });
            }

        case "UPDATE_SENDER_NAME":
            {
                return _extends({}, state, {
                    sender: _extends({}, state.sender, {
                        name: action.name
                    })
                });
            }

        case "UPDATE_RECIPIENT_NAME":
            {
                return _extends({}, state, {
                    recipient: _extends({}, state.recipient, {
                        name: action.name
                    })
                });
            }

        case "UPDATE_RECIPIENT_EMAIL":
            {
                return _extends({}, state, {
                    recipient: _extends({}, state.recipient, {
                        email: action.email
                    })
                });
            }

        case "UPDATE_RECIPIENT_MESSAGE":
            {
                return _extends({}, state, {
                    recipient: _extends({}, state.recipient, {
                        message: action.message
                    })
                });
            }

        // On route change, reset the form state
        case __WEBPACK_IMPORTED_MODULE_0_react_router_redux__["LOCATION_CHANGE"]:
            {
                return initialState;
            }

        default:
            {
                return state;
            }
    }
}

/* harmony default export */ __webpack_exports__["a"] = {
    giftCard: giftCard
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\reducers\\giftCardCustomize.reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\reducers\\giftCardCustomize.reducer.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/customize/reducers/utils/inputValidate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = inputValidate;
/**
 * validateDesign()
 * Validate the design.
 * @param {str} input: The input value.
 * @return {obj}: Error boolean and message if there is an error.
 */
var validateDesign = function validateDesign(input) {
    var id = parseInt(input);
    var minAllowedId = 1,
        maxAllowedId = 8;

    // Anything out of the ordinary when selecting a design option is an invalid selection

    if (!Number.isInteger(id) || !(id >= minAllowedId) || !(id <= maxAllowedId)) {
        return {
            error: true,
            message: "Invalid selection.  Please choose another one."
        };
    }

    // No errors
    return {
        error: false
    };
};

/**
 * validateAmount()
 * Validate the amount input.
 * @param {str} input: The input value.
 * @return {obj}: Error boolean and message if there is an error.
 */
var validateAmount = function validateAmount(input) {
    var num = parseInt(input);
    var minAmt = 5,
        maxAmt = 2000;


    if (!Number.isInteger(num)) {
        return {
            error: true,
            message: "Please input a valid amount."
        };
    }

    if (!(num >= minAmt)) {
        return {
            error: true,
            message: "The minimum amount is $" + minAmt + "."
        };
    }

    if (!(num <= maxAmt)) {
        return {
            error: true,
            message: "The maximum amount is $" + maxAmt + "."
        };
    }

    // No errors
    return {
        error: false
    };
};

/**
 * validateName()
 * Validate any name input.
 * @param {str} input: The input value.
 * @return {obj}: Error boolean and message if there is an error.
 */
var validateName = function validateName(input) {
    if (!input) {
        return {
            error: true,
            message: "Please enter a name."
        };
    }

    // Only allow alphanumeric and space characters
    var regex = /^[A-Za-z\s]+$/;
    if (!regex.test(input)) {
        return {
            error: true,
            message: "Please enter a valid name."
        };
    }

    return {
        error: false
    };
};

/**
 * validateEmail()
 * Validate any email input.
 * @param {str} input: The input value.
 * @return {obj}: Error boolean and message if there is an error.
 */
var validateEmail = function validateEmail(input) {
    if (!input) {
        return {
            error: true,
            message: "Please enter an email."
        };
    }

    // Simple regex for testing anything@anything.anything
    // NOTE: 
    // This is not a good regex. This is just used for demonstrating in this prototype. 
    // In the real work, the regex standard should be used for checking instead (called RFC822).
    // More details here:
    // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var regex = /\S+@\S+\.\S+/;
    if (!regex.test(input)) {
        return {
            error: true,
            message: "Email should be in the form: anything@anything.anything"
        };
    }

    return {
        error: false
    };
};

/**
 * inputValidate()
 * Check the input and see if it is okay.
 * @param {mixed} input: The input value.
 * @param {str} fieldName: The name of the field.
 * @return {obj} results: The results, consisting of the error boolean and, optionally, a message.
 */
function inputValidate(input, fieldName) {
    var results = {};

    switch (fieldName) {
        case "design":
            results = validateDesign(input);
            break;

        case "amount":
            results = validateAmount(input);
            break;

        case "recipientName":
            results = validateName(input);
            break;

        case "recipientEmail":
            results = validateEmail(input);
            break;

        case "senderName":
            results = validateName(input);
            break;
    }

    return results;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\reducers\\utils\\inputValidate.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\customize\\reducers\\utils\\inputValidate.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/giftCard.routes.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("../node_modules/react-router/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history__ = __webpack_require__("../node_modules/history/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__("../node_modules/react-router-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__giftCard_store__ = __webpack_require__("./giftCard/giftCard.store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GiftCard__ = __webpack_require__("./giftCard/GiftCard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_containers_GiftCardHome__ = __webpack_require__("./giftCard/home/containers/GiftCardHome.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customize_containers_GiftCardCustomize__ = __webpack_require__("./giftCard/customize/containers/GiftCardCustomize.jsx");









// Create an enhanced history that syncs navigation events with the store
var history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__["syncHistoryWithStore"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_history__["useBasename"])(function () {
    return __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"];
})({
    // Define the public path base
    basename: "/gift-card-company-website-prototype/src" || "/"
}), __WEBPACK_IMPORTED_MODULE_4__giftCard_store__["a" /* default */]);

// Set the scrollbar to the top on route change
var setScrollToTop = function setScrollToTop() {
    document.body.scrollTop = 0;
};

var GiftCardRoutes = function GiftCardRoutes() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router__["Router"],
        { history: history },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
            { component: __WEBPACK_IMPORTED_MODULE_5__GiftCard__["a" /* default */], onChange: setScrollToTop },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_6__home_containers_GiftCardHome__["a" /* default */] }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/customize", component: __WEBPACK_IMPORTED_MODULE_7__customize_containers_GiftCardCustomize__["a" /* default */] })
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = GiftCardRoutes;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\giftCard.routes.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\giftCard.routes.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/giftCard.store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__("../node_modules/react-router-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customize_reducers_giftCardCustomize_reducer__ = __webpack_require__("./giftCard/customize/reducers/giftCardCustomize.reducer.js");




// Combine all the reducers here
var allReducers = Object.assign({}, __WEBPACK_IMPORTED_MODULE_2__customize_reducers_giftCardCustomize_reducer__["a" /* default */], {
    routing: __WEBPACK_IMPORTED_MODULE_1_react_router_redux__["routerReducer"]
});

// Create the store
var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(allReducers));

/* harmony default export */ __webpack_exports__["a"] = store;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\giftCard.store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\giftCard.store.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/home/components/GiftCardHome.about.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("../node_modules/react-router/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_gift_card_png__ = __webpack_require__("./assets/images/gift_card.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_gift_card_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_images_gift_card_png__);




var GiftCardHomeAbout = function GiftCardHomeAbout() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "section",
        { className: "giftCard-home__section" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "row" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "giftCard-home__section-textWrap" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h2",
                    { className: "giftCard-home__section-title" },
                    "One card, one smile"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    { className: "giftCard-home__section-desc" },
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { className: "giftCard-home__section-btn button", to: "/customize" },
                    "Purchase now!"
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "giftCard-home__section-imgWrap" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "giftCard-home__section-img", src: "assets/images/gift_card.png", alt: "text" })
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = GiftCardHomeAbout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\home\\components\\GiftCardHome.about.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\home\\components\\GiftCardHome.about.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/home/components/GiftCardHome.attention.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("../node_modules/react-router/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_gift_card_hand_png__ = __webpack_require__("./assets/images/gift_card_hand.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_gift_card_hand_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_images_gift_card_hand_png__);




var GiftCardHomeAttention = function GiftCardHomeAttention() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "section",
        { className: "giftCard-home__section giftCard-home__section--rtl" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "row" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "giftCard-home__section-textWrap" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h2",
                    { className: "giftCard-home__section-title" },
                    "The perfect gift"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    { className: "giftCard-home__section-desc" },
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { className: "giftCard-home__section-btn button", to: "/customize" },
                    "Purchase now!"
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "giftCard-home__section-imgWrap" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "giftCard-home__section-img giftCard-home__section-img--borderBottom", src: "assets/images/gift_card_hand.png", alt: "Some image here" })
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = GiftCardHomeAttention;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\home\\components\\GiftCardHome.attention.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\home\\components\\GiftCardHome.attention.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/home/components/GiftCardHome.hero.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("../node_modules/react-router/es/index.js");



var GiftCardHomeHero = function GiftCardHomeHero() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "section",
        { className: "giftCard-home__section giftCard-home__hero" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h1",
            { className: "giftCard-home__hero-title" },
            "Send a gift that will last a lifetime"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            { className: "giftCard-home__hero-subtitle" },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
            { className: "giftCard-home__hero-btn button", to: "/customize" },
            "Purchase now!"
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = GiftCardHomeHero;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\home\\components\\GiftCardHome.hero.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\home\\components\\GiftCardHome.hero.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/home/components/GiftCardHome.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components___ = __webpack_require__("./components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GiftCardHome_hero__ = __webpack_require__("./giftCard/home/components/GiftCardHome.hero.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GiftCardHome_about__ = __webpack_require__("./giftCard/home/components/GiftCardHome.about.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GiftCardHome_stats__ = __webpack_require__("./giftCard/home/components/GiftCardHome.stats.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GiftCardHome_attention__ = __webpack_require__("./giftCard/home/components/GiftCardHome.attention.jsx");







var GiftCardHome = function GiftCardHome() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GiftCardHome_hero__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GiftCardHome_about__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__GiftCardHome_stats__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__GiftCardHome_attention__["a" /* default */], null)
    );
};

/* harmony default export */ __webpack_exports__["a"] = GiftCardHome;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\home\\components\\GiftCardHome.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\home\\components\\GiftCardHome.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/home/components/GiftCardHome.stats.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("../node_modules/react-router/es/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var GiftCardHomeStats = function (_React$Component) {
    _inherits(GiftCardHomeStats, _React$Component);

    function GiftCardHomeStats(props) {
        _classCallCheck(this, GiftCardHomeStats);

        var _this = _possibleConstructorReturn(this, (GiftCardHomeStats.__proto__ || Object.getPrototypeOf(GiftCardHomeStats)).call(this, props));

        _this.state = {
            amountToday: 800,
            amountTotal: 53506
        };
        return _this;
    }

    _createClass(GiftCardHomeStats, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            // Fake update the numbers
            this.timer = setInterval(function () {
                _this2.setState({
                    amountToday: _this2.state.amountToday += 1,
                    amountTotal: _this2.state.amountTotal += 1
                });
            }, 2000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.timer);
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "section",
                { className: "giftCard-home__section giftCard-home__section--bgBlue giftCard-home__stats" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h2",
                    { className: "giftCard-home__section-title" },
                    "It's popular!"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    { className: "giftCard-home__section-desc" },
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "giftCard-home__stats-info" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "giftCard-home__stats-box" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            { className: "giftCard-home__stats-box-number" },
                            this.state.amountToday
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            { className: "giftCard-home__stats-box-caption" },
                            "Cards sold today"
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "giftCard-home__stats-box" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            { className: "giftCard-home__stats-box-number" },
                            this.state.amountTotal
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            { className: "giftCard-home__stats-box-caption" },
                            "Cards sold total"
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    { className: "giftCard-home__section-desc" },
                    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { className: "giftCard-home__section-btn button button--noMarginBottom", to: "/customize" },
                    "Purchase now!"
                )
            );
        }
    }]);

    return GiftCardHomeStats;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = GiftCardHomeStats;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\home\\components\\GiftCardHome.stats.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\home\\components\\GiftCardHome.stats.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/home/containers/GiftCardHome.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_document_title__ = __webpack_require__("../node_modules/react-document-title/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_document_title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_document_title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_GiftCardHome__ = __webpack_require__("./giftCard/home/components/GiftCardHome.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var GiftCardHomeCtn = function (_React$Component) {
    _inherits(GiftCardHomeCtn, _React$Component);

    function GiftCardHomeCtn() {
        _classCallCheck(this, GiftCardHomeCtn);

        return _possibleConstructorReturn(this, (GiftCardHomeCtn.__proto__ || Object.getPrototypeOf(GiftCardHomeCtn)).apply(this, arguments));
    }

    _createClass(GiftCardHomeCtn, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_document_title___default.a,
                { title: "Gift Card - Home" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_GiftCardHome__["a" /* default */], null)
            );
        }
    }]);

    return GiftCardHomeCtn;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])()(GiftCardHomeCtn);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\home\\containers\\GiftCardHome.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\home\\containers\\GiftCardHome.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./giftCard/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__giftCard_store__ = __webpack_require__("./giftCard/giftCard.store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__giftCard_routes__ = __webpack_require__("./giftCard/giftCard.routes.jsx");






__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
    { store: __WEBPACK_IMPORTED_MODULE_3__giftCard_store__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__giftCard_routes__["a" /* default */], null)
), document.getElementById("giftCard"));

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\index.jsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Derek\\Apache24\\htdocs\\gift-card-web-proto\\src\\giftCard\\index.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./giftCard/index.jsx");
module.exports = __webpack_require__("./assets/scss/giftCard.scss");


/***/ })

},[0]);