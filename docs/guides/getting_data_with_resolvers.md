# Getting Data with Resolvers

For all components that either live inside of a page or a widget, we
can use so called resolvers to obtain additional data. For example, we
might want to turn the id of a linked page that stored in a page
configuration into a useful set of information like tile and thumbnail
url of the referenced page.

The basic idea is to wrap components using the
`pageflow.react.createContainer` function to turn primitive
information like ids into structured information with the help of the
`resolve` function:

```js
function PagePreview(props) {
  if (props.page) {
    return (
      <div>
        The title of the page is {props.page.title}.
      </div>
    );
  }
  else {
    return (
      <div>
        There is no page with id {props.pageId}.
      </div>
    );
  }
}

const {
  createContainer, resolve
} = pageflow.react;

my.PagePreview = createContainer(PagePreview, {
  fragments: {
    page: resolve('page', {property: 'pageId'})
  }
});
```

Now, when we render `my.PagePreview` passing only a `pageId` prop,
inside of the components render function, we also have access to a
`page` prop containing a wealth of information about the referenced
page:

```jsx
function SomeOtherComponent(props) {
  return (
    <my.PagePreview pageId={5} />
  );
}
```

See the [reference documentation]() for a list of available resolvers
and the data they provide.
