import Basket from './pages/Basket'
import ProductPage from './pages/ProductPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ProductPage} />

        <Route path='/basket' component={Basket} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
