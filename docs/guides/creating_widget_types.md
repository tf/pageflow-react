# Creating Widget Types

Pageflow React provides the recommended way of building Pageflow
widget types.

## JavaScript Directory Layout

In the following example snippets, we build an imaginary Pageflow
plugin called `rainbow`. You can choose whatever name you like for your
plugin instead. Only be sure to name your root folder something other
than `pageflow` to prevent namespace conflicts with existing or future
Pageflow files.

Let's create the minimal required JavaScript code for our widget
type. The resulting directory structure inside our engine will look
like this:

```
app/
  assets/
    javascripts/
      rainbow.js
      rainbow/
        components.jsx
        widget_type.js
```

The main `rainbow.js` JavaScript file, that user's of our plugin will require from
their `pageflow/application.js` file, looks like this:

```js
# rainbow/app/assets/javascripts/rainbow.js
//= require react
//= require pageflow/react

//= require_self

//= require ./rainbow/components
//= require ./rainbow/widget_type

window.rainbow = window.rainbow || {};
```

We require `react` and `pageflow/react` and setup a variable in the
global scope, which will act as a home for everything defined by our
plugin. Then we require a file that defines the React components our
widget will be build from and a file which registers the widget type
with Pageflow's JavaScript API.

It's important to define the React components in a separate file, so
they can also be required from the main app's `components.js` file,
which is used during server side rendering.

## Defining the Widget Component

To render the contents of our widget, we define a React component and
pass it to the `pageflow.react.createWidget` function. Note that we
can use ES6 syntax inside of `jsx` files:

```jsx
# rainbow/app/assets/javascripts/rainbow/components.jsx
window.rainbow = rainbow || {};

(function() {
  function RainbowWidget(props) {
    return (
      <div>
        Render whatever you like here
      </div>
    );
  }

  const {createWidget} = pageflow.react;

  rainbow.Widget = createWidget(Widget);
}());
```

Passing the component to `createWidget` ensures all data retrieval
techniques described in the
[the guide on resolvers](./getting_data_with_resolvers.md) can be used
by components inside the widget.

## Registering the Widget Type

So far we haven't told Pageflow about our new widget type. To do so,
we call `pageflow.widgetTypes.register` and create a widget type from
our widget component using `pageflow.react.createWidgetType`.

```js
# rainbow/app/assets/javascripts/rainbow/widget_type.js
pageflow.widgetTypes.register('rainbow',
                              pageflow.react.createWidgetType(rainbow.Widget));
```

## Creating the Ruby Plugin

Finally, we need to create a plugin class in our engine's Ruby code
that user's of our plugin can reference in their Pageflow initializer:

```ruby
# rainbow/lib/rainbow/some_plugin.rb
module Rainbow
  class Plugin < Pageflow::Plugin
    def configure(config)
      config.widget_types.register(Rainbow.widget_type)
    end
  end

  def self.plugin
    Plugin.new
  end

  def self.widget_type
    Pageflow::React.create_widget_type('rainbow',
                                       'rainbow.Widget')
  end
end
```

The first parameter of `Pageflow::React.create_widget_type` takes the
widget type name, the second is a JavaScript expression returning the
widget component to use for server side rendering.

