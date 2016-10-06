import { storiesOf } from '@kadira/storybook'
import { setupGraphiQL } from '@kadira/storybook-addon-graphql'

const graphiql = setupGraphiQL({
  url: 'https://www.graphqlhub.com/graphql',
});

storiesOf('GraphQL Demo', module)
  .add('get github info', graphiql(`
    query GithubQuery($username: String!, $repoName: String!) {
      github {
        user(username: $username) {
          login
          id
          avatar_url
        }
        repo(name: $repoName, ownerUsername: $username) {
          commits {
            message
            date
          }
        }
      }
    }

  `, `
    {"username": "vidaaudrey", "repoName": "program-bdd-demo"}
  `));
