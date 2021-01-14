import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import Authors from './containers/Home/allAuthors.js'


const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            {/* <Route path="/" component={Home} /> */}
            <>
            <Home />
            <Authors />
            </>
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
