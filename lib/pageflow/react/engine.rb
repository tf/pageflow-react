require 'react-rails'

module Pageflow
  module React
    class Engine < Rails::Engine
      isolate_namespace Pageflow::React

      config.autoload_paths << File.join(config.root, 'lib')

      initializer "pageflow-react.add_watchable_files", group: :all do |app|
        app.config.watchable_files.concat Dir["#{config.root}/app/assets/javascripts/**/*.jsx*"]
      end
    end
  end
end
