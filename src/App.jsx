import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience,  Heros, Navbar, Tech, Works, StarsCanvas} from './components';
const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div>
            <Navbar />
            <Heros />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
