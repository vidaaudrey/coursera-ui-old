const React = require('react');
// const NotFoundOrAuthorized = require('src/components/coursera/NotFoundOrAuthorized');
// import {branch, compose, renderComponent} from 'recompose';

// class BranchComponentDemo extends React.Component {
//   static propTypes = {
//   }
//
//   render() {
//     const {message} = this.props;
//     return (
//       <div className="rc-BranchComponentDemo">
//         <h1>You have reached the data part</h1>
//       </div>
//     );
//   }
// }


// const Spinner = () => (<p>Loading</p>);
// const spinnerWhileLoading = hasLoaded =>
//   branch(
//     props => !hasLoaded(props),
//     <Spinner />,
//     // renderComponent(Spinner) // `Spinner` is a React component
//   )

// Now use the `spinnerWhileLoading()` helper to add a loading spinner to any
// base component
// const enhance = spinnerWhileLoading(
//   props => props.title && props.author && props.content
// )
// const Post = enhance(({ title, author, content }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>By {author.name}</h2>
//       <div>{content}</div>
//     </div>
//   );
// });
const BranchComponentDemo = ({ title, author, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>By {author.name}</h2>
      <div>{content}</div>
    </div>
  );
};

module.export = BranchComponentDemo;

// const spinnerWhileLoading = hasLoaded =>
//   branch(
//     props => hasLoaded(props),
//     <Spinner />,
//     // renderComponent(Spinner) // `Spinner` is a React component
//   )
//
// const enhance = spinnerWhileLoading(props => props.isMounted);
//
// const BranchComponentDemo = (props) => {
//   return (
//     <div className="rc-BranchComponentDemo">
//       <h1>You have reached the data part</h1>
//     </div>
//   );
// }
// module.exports = enhance(BranchComponentDemo);


// const waitTillLoaded = (isMounted) => (
//   branch(
//     props => props.isMounted,
//     <NotFoundOrAuthorized message="wait till mounted" />
//   )
// );
// module.exports = compose(
//   branch(
//     props => !!props.isMounted,
//     <NotFoundOrAuthorized message="wait till mounted" />,
//     // <NotFoundOrAuthorized message="got it" />,
//   )
// )(BranchComponentDemo);
