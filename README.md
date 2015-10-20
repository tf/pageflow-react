# Pageflow React

React bindings for Pageflow page type development.

## Installation

This gem is not intended to be used in a Pageflow application
directly. Instead it comes as a dependency of a gem providing Pageflow
plugins.

## Usage

TODO

## Development Mode

Enter js dir:

    $ cd js

Install npm dependencies:

    $ npm install
    $ npm install -g karma-cli webpack

Run webpack watcher to rebuild javascript files in `app/assets`

    $ webpack --watch

Run test suite

    $ karma start

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
