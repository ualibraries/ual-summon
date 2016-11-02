# Summon customizations

## Requirements
* [Node.js](https://nodejs.org/en/) 6.6.0 or greater (check with `node --version`)
* [Gulp](http://gulpjs.com/) (`npm install -g gulp`)

## Getting started
Clone the repository `git clone ssh://[username]@vitae.library.arizona.edu/data1/vitae/repos/summon.git`

Run `npm install` to install the Node modules.

Run `npm run dist` to build the project.

Run `npm run watch` to watch for changes.

## Where is everything?

```shell
$ tree -I "node_modules|.DS_Store|.git" -L 2 -a
.
├── .editorconfig  # Standard editor config
├── .eslintrc.json  # ESLint config
├── .gitignore  # Files to exclude from Git
├── .stylelintrc.json  # Stylelint config
├── README.md  # You're looking at it
├── assets  # Front-end assets
│   ├── images  # Images
│   ├── scripts  # Scripts
│   └── styles  # Styles
├── dist  # Built front-end assets (never edit)
│   ├── images  # Built images (never edit)
│   ├── scripts  # Built scripts (never edit)
│   └── styles  # Built styles (never edit)
├── gulpfile.js  # Tells Gulp what to do
└── package.json  # Node.js dependencies and scripts, meta data
```

## Gulp tasks

`gulp styles`: [Less](http://lesscss.org/),
[Stylelint](http://stylelint.io/),
[CSSNano](http://cssnano.co/)

`gulp scripts`: [ESLint](http://eslint.org/),
[Uglify](https://github.com/mishoo/UglifyJS)

`gulp images`: [Imagemin](https://github.com/imagemin/imagemin)

`gulp watch`: Watches things

## Deploying

Update the version query (`?ver=xxxxxxxxxx` in `ualibraries-custom.js`) for `ualibraries-custom.css`- this breaks browser caches.

If you're using [Git flow](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows), merge your
feature branch into master.

Push local changes to `vitae.library.arizona.edu`.

`ssh` into `www.library.arizona.edu`, checkout `master`, and pull from `vitae.library.arizona.edu`.

Test your changes live (yikes!).

Once you're satisfied with your changes, create a tag following [Semver](http://semver.org/) on `vitae.library.arizona.edu`.

Checkout that tag on `www.library.arizona.edu`.
