import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider} from 'react-apollo'
import { ApolloClient} from 'apollo-client'
import { createHttpLink} from 'apollo-link-http'
import { InMemoryCache} from 'apollo-cache-inmemory'
import App from '../react/components/App'

// const link = createHttpLink({
//   uri: 'http://localhost:3000/graphql'
// })

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
      uri: 'http://localhost:3000/graphql'
    })
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ,
    document.body.appendChild(document.createElement('div')),
  )
})
