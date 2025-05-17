import {Header} from "../../components/Header"

import './style.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src="" className="background" alt="background app"/>
        <div className="info">

            <div>
                <input name="usuario" placeholder="@Username"></input>
                <button>Buscar</button>
            </div> 

            <div className="perfil">
                <img src="https://avatars.githubusercontent.com/u/131191211?v=4" className="profile" alt="foto-usuario"/>
                <div>
                  <h3>Marcos Ribeiro</h3>
                  <span>@marcxs_s</span>
                  <p>Descriçao</p>
                </div>

            </div>{/*perfil*/}

            
            <hr/>

        </div>{/*info*/}
      </div>{/* conteudo */}
    </div>
  );
}

export default App;
