import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

const endpoint = 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex'

function fetchQuery(
  operation,
  variables,
) {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
})

export default environment

