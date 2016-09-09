# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'pageflow/react/version'

Gem::Specification.new do |spec|
  spec.name          = "pageflow-react"
  spec.version       = Pageflow::React::VERSION
  spec.authors       = ["Tim Fischbach"]
  spec.email         = ["mail@timfischbach.de"]
  spec.summary       = %q{Building Pageflow page types with React.js}
  spec.homepage      = "https://github.com/codevise/pageflow-react"
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency "pageflow", "~> 0.10"
  spec.add_dependency "react-rails", "~> 1.6.0"
  spec.add_dependency "multi_json", "~> 1.11"

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"

  # Semantic versioning rake tasks
  spec.add_development_dependency 'semmy', '~> 0.3'
end
