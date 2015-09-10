# Pageflow::React

TODO: Write a gem description

## Installation

Add this line to your application's Gemfile:

    gem 'pageflow-react'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install pageflow-react

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
