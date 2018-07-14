import React from 'react'
import {
  graphql,
  QueryRenderer,
} from 'react-relay'
import environment from './http/environment'


export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            User(id:"cjcqkuagqpb8w0164ul8vffsb") {
              id,
              name,
            }
          }
        `}
        render={({ props }) => {
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>user ID: {props.User.id}</div>;
        }}
      />
    );
  }
}
