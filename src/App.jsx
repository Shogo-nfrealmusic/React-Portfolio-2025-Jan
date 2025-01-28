import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Heros, Navbar, Tech, Works, StarsCanvas} from './components';
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
          <Feedbacks />
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
