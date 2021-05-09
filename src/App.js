import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components'
import { Products, SingleProduct, Cart, Checkout, } from './pages'

function App() {
  return (
        <Router>
          <Navbar />

          <Switch>
            <Route exact path='/'>
              <Products />
            </Route>

            <Route exact path='/cart'>
              <Cart />
            </Route>


            <Route exact path='/products/:id' children={<SingleProduct />} />

            <Route exact path='/checkout'>
              <Checkout />
            </Route>
          </Switch>

        </Router>
  )
}

export default App
