import Router from "./routes/Router";
import logoLila from './assets/img/logoLila.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
   <div className="App" style={{background: "radial-gradient(1300px at center, #FFFFFF,#8C52FF)", height: "100vh"}}>
      <img src={logoLila} style={{position:"absolute", marginLeft:"66vw", marginTop:"25vh"}}/>
     <Router />
    </div>
  );
}

export default App;
