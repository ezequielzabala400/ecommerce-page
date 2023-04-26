import Navbar from "./components/Navbar/Navbar"
import Product from "./components/Product/Product"
import { store } from "./store/store"
import { GlobalStyles } from "./styles/GlobalStyles"
import {Provider} from 'react-redux'

function App() {

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Product />
      </Provider>
      <GlobalStyles />
    </>
  )
}

export default App
