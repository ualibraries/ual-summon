# University of Arizona Libraries Summon customizations

## Requirements

* [Node.js](https://nodejs.org/en/) 6.6.0 or greater (check with `node --version`)

## Getting started

Clone the repository `git clone ssh://[username]@vitae.library.arizona.edu/data1/vitae/repos/summon.git`

* Run `$ yarn install` to install the Node modules.
* Run `$ yarn run build` to build the project.
* Run `$ ./deploy.sh` to deploy the project.

Configure Summon to load this script in Summon Admin Console > 'Summon 2.0 External Script' > 'Custom Script Url'.

'Custom Script Url' should be set to `http://ualibr-summon.s3-website-us-west-2.amazonaws.com/bundle.js`.

## Testing

The project uses [StandardJS](https://standardjs.com). Visual regression testing is handled by [BackstopJS](https://github.com/garris/BackstopJS).
