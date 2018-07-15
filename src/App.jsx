import React, { PureComponent } from 'react'
import {
  graphql,
  QueryRenderer,
} from 'react-relay'
import { Spin } from 'antd'
import environment from './http/environment'

const query = graphql`
  query AppQuery ($id: ID!) {
    User(id: $id) {
      id,
      name,
    }
  }`


export default class App extends PureComponent {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables = {{ id: "cjcqkuagqpb8w0164ul8vffsb" }}
        render={({ props }) => {
          if (!props) {
            return <Spin size="large" />
          }
          return <div>user ID: {props.User.id}</div>;
        }}
      />
    );
  }
}
