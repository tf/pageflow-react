# Pageflow React

[![Gem Version](https://badge.fury.io/rb/pageflow-react.svg)](http://badge.fury.io/rb/pageflow-react)
[![Build Status](https://travis-ci.org/codevise/pageflow-react.svg?branch=master)](https://travis-ci.org/codevise/pageflow-react)

React bindings for Pageflow plugin development.

## Installation

This gem is not intended to be used in a Pageflow application
directly. Instead it comes as a dependency of a gem providing Pageflow
plugins.

## Usage

* [Creating page types](/docs/guides/creating_page_types.md)
* [Creating widget types](/docs/guides/creating_widget_types.md)
* [Getting data with resolvers](/docs/guides/getting_data_with_resolvers.md)

## Development Mode

Enter js dir:

    $ cd js

Install npm dependencies:

    $ npm install

Run webpack watcher to rebuild javascript files in `app/assets` and
karma test suite:

    $ npm start

Run test suite only:

    $ npm test

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
