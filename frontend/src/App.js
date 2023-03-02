import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import New from './routes/New';
import Killer from './routes/Killer';
import Survivor from './routes/Survivor';

// https://blog.webdevsimplified.com/2022-07/react-router/
function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="bg-black">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/killer" element={<Killer />}></Route>
          <Route exact path="/survivor" element={<Survivor />}></Route>
          <Route path="/new" element={<New />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
