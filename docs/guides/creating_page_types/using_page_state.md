# Using Page State Props

React components inside pages can be coupled to the preloading or
active state of the enclosing page. This can be useful to lazily load
resource-intensive media files or start and stop playback when
entering or leaving the page.

To access this information inside of a component that is used inside
pages, wrap the component by calling `withPageStateProp`:

```jsx
function MyVideoPlayer(props) {
  props.pageState // => object containing state information of parent page
}

const {
  withPageStateProp
} = pageflow.react;

rainbow.MyVideoPlayer = withPageStateProp(MyVideoPlayer);
```

This makes sure an additional `pageState` prop is passed, which can be
used to access the parent's page state.  See
[reference documenation of `withPageStateProp`]() for details on
available page state properties.
