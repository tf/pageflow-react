# Creating Page Types

Pageflow React provides the recommended way of building Pageflow page
types.

## JavaScript Directory Layout

In the following example snippets, we build an imaginary Pageflow
plugin called `rainbow`. You can choose whatever name you like for your
plugin instead. Only be sure to name your root folder something other
than `pageflow` to prevent namespace conflicts with existing or future
Pageflow files.

Let's create the minimal required JavaScript code for our page
type. The resulting directory structure inside our engine will look
like this:

```
app/
  assets/
    javascripts/
      rainbow.js
      rainbow/
        components.jsx
        editor.js
        page_type.js
```

The main `rainbow.js` JavaScript file, that users of our plugin will
require from their `pageflow/application.js` file, looks like this:

```js
# rainbow/app/assets/javascripts/rainbow.js
//= require react
//= require pageflow/react

//= require_self

//= require ./rainbow/components
//= require ./rainbow/page_type

window.rainbow = window.rainbow || {};
```

We require `react` and `pageflow/react` and set up a variable in the
global scope, which will act as a home for everything defined by our
plugin. Then we require a file that defines the React components our
page will be built from and a file which registers the page type with
Pageflow's JavaScript API.

It's important to define the React components in a separate file, so
they can also be required from the main app's `components.js` file,
which is used during server side rendering.

Finally, the `editor.js` file contains all code required to integrate
the page type with the Pageflow editor. See the
[page type editor integration guide]() for details.

## Defining the Page Component

To render the contents of our page, we define a React component and
pass it to the `pageflow.react.createPage` function. Note that we can
use ES6 syntax inside of `jsx` files:

```jsx
# rainbow/app/assets/javascripts/rainbow/components.jsx
window.rainbow = rainbow || {};

(function() {
  const {
    PageWrapper,
    PageBackground, PageBackgroundImage, PageShadow,
    PageContent, PageHeader, PageText
  } = pageflow.react.components;

  function Page(props) {
    return (
      <PageWrapper>
        <PageBackground>
          <PageBackgroundImage page={props.page} />
          <PageShadow page={props.page} />
        </PageBackground>

        <PageContent>
          <PageHeader page={props.page} />
          <PageText page={props.page} />
        </PageContent>
      </PageWrapper>
    );
  }

  const {createPage} = pageflow.react;

  rainbow.Page = createPage(Page);
}());
```

The basic layout consisting of `PageWrapper`, `PageBackground` and
`PageContent` is required for the page to work correctly inside the
entry. The specifics inside `PageBackground` and `PageContent` are
just an example and depend on the content you wish to present on your
pages. See the [reference documentation of `pageflow-react`]() for a
list of existing components that you can use to build your page. Of
course, you are always free to create additional components on your
own.

Passing the component to `createPage` ensures a `page` prop is set
containing the attributes of the page's configuration. So, for
example, the title of the page is available as `props.page.title`.

See [the guide on resolvers](getting_data_with_resolvers.md) for more
advanced data retrieval techniques.

## Registering the Page Type

So far we haven't told Pageflow about our new page type. To do so, we
call `pageflow.pageType.register` and create a page type from our page
component using `pageflow.react.createPageType`.

```js
# rainbow/app/assets/javascripts/rainbow/page_type.js
pageflow.pageType.register('rainbow',
                           pageflow.react.createPageType(rainbow.Page));
```

## Creating the Ruby Plugin

Finally, we need to create a plugin class in our engine's Ruby code
that users of our plugin can reference in their Pageflow initializer:

```ruby
# rainbow/lib/rainbow/some_plugin.rb
module Rainbow
  class Plugin < Pageflow::Plugin
    def configure(config)
      config.page_types.register(Rainbow.page_type)
    end
  end

  def self.plugin
    Plugin.new
  end

  def self.page_type
    Pageflow::React.create_page_type('rainbow',
                                     'rainbow.Page')
  end
end
```

The first parameter of `Pageflow::React.create_page_type` takes the
page type name, the second is a JavaScript expression returning the
page component to use for server side rendering.

## Advanced Topics

* [Using separate scroller and foreground](creating_page_types/using_separate_scroller_and_foreground.md)
* [Using page state props](creating_page_types/using_page_state.md)
