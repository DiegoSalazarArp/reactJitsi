import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { InicioId } from "./InicioId";
import { VideoJitsi } from "./VideoJitsi";

function App() {

  const navigate = useNavigate();

  const irVideo = () =>{
    navigate('/')
  }

  const irHome = () =>{
    navigate('/id')
  }

  const inlineStyles = {
    padding: 5
  }

  return (
    <div>
      <div>
        {/* <button onClick={irVideo}>Video</button>
        <hr />
        <button onClick={irHome}>Inicio</button> */}

        <Routes>
          <Route path="/:id" element={<VideoJitsi />} />
          <Route path="/id/:id" element={<InicioId />} />
        </Routes>
      </div>
    </div>

  
  );
}

export default App;
