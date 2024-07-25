import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import ProjectInfo from './components/ProjectInfo'

const App = () => {
  return (
    <BrowserRouter>
      <section className="todoapp">
        <Header />
        <ItemListContainer />
        <Footer />
      </section>
      <ProjectInfo />
    </BrowserRouter>
  )
}

export default App
