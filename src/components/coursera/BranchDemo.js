const React = require('react');
const NotFoundOrAuthorized = require('src/components/coursera/NotFoundOrAuthorized');
import {branch, compose, renderComponent} from 'recompose';

// const BranchDemo = ({name = 'BranchDemo'}) => {
//   return (
//       <div className="rc-BranchDemo">
//          <h1>BranchDemo {name}</h1>
//       </div>
//     );
// };

// const Spinner = () => <p>Loading</p>;
// const spinnerWhileLoading = hasLoaded => (
//   branch(
//     props => !hasLoaded(props),
//     renderComponent(Spinner),
//   )
// )
//
// const enhance = spinnerWhileLoading(
//   props => props.title && props.author && props.content
// )
//
// const BranchDemo = ({ title, author, content }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>By {author.name}</h2>
//       <div>{content}</div>
//     </div>
//   );
// };
//
//
// module.exports = enhance(BranchDemo);


// const spinnerWhileLoading = hasLoaded =>
//   branch(
//     props => !hasLoaded(props),
//     renderComponent(Spinner) // `Spinner` is a React component
//   )

// Now use the `spinnerWhileLoading()` helper to add a loading spinner to any
// base component
// const enhance = spinnerWhileLoading(
//   props => (!(props.title && props.author && props.content))
// )

// const Post = enhance(({ title, author, content }) =>
//   <article>
//     <h1>{title}</h1>
//     <h2>By {author.name}</h2>
//     <div>{content}</div>
//   </article>
// )

const Post = ({ title, author, content }) => (
  <article>
    <h1>{title}</h1>
    <h2>By {author.name}</h2>
    <div>{content}</div>
  </article>
);

// const withBranch = branch(
//   props => !!props.title,
//   renderComponent(Spinner), // `Spinner` is a React component
//   <Post />
// );


const withNotFoundOrAuthorized = (Component) => {
  return compose(
    branch(
      props => !props.isMounted,
      renderComponent(NotFoundOrAuthorized),
      renderComponent(Component),
    )
  )(Component);
};


module.exports = {
  withNotFoundOrAuthorizedBranch,
  withLoadingBranch,
  withSSRPlaceholderBranch,
};
// module.exports = withBranch(Post);

// export default function(BaseComponent) {
//   return compose(
//     connect(
//       ({ auth }) => ({ auth }),
//       { pushState }
//     ),
//     pure,
//     defaultProps({ auth: emptyObject }),
//     doOnReceiveProps(props => {
//       if (!props.auth.token) {
//         props.pushState(null, `/login?next=${location.pathname}`);
//       }
//     }),
//     branch(
//       props => props.auth.token,
//       renderComponent(BaseComponent),
//       renderNothing,
//     )
//   )(BaseComponent);
// }
