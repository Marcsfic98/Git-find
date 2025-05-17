import { useState } from "react";
import {Header} from "../../components/Header"
import git from '../../assents/logo/git.png'
import { ItenList } from "../../components/List";
import './style.css'

function App() {

    const [user, setUser] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [repos, setRepos] = useState(null);

    const handleGetData = async () => {
      const useData = await fetch(`https://api.github.com/users/${user}`);
      const newUser = await useData.json();
      
      if(newUser.name){
        const {avatar_url,name,bio,login} = newUser
        setCurrentUser({avatar_url,name,bio,login})

        const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
        const newRepos = await reposData.json();

        if(newRepos.length){
          setRepos(newRepos);
        }
      }
    }



  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src={git} className="background" alt="background app"/>
        <div className="info">

            <div>
                <input name="usuario" value={user} onChange={event => setUser(event.target.value)} placeholder="@Username"></input>
                <button onClick={handleGetData}>Buscar</button>
            </div> 

            {currentUser?.name ?(
              
              <>
            <div className="perfil">
              <img src={currentUser.avatar_url} className="profile" alt="foto-usuario"/>
              <div>
                <h3>{currentUser.name} </h3>
                <span>{currentUser.login} </span>
                <p>{currentUser.bio} </p>
              </div>

            </div>

              <hr/> 
              </>
            ) : null }
            
           
            {repos?.length ?(

              <div className="repositorio">
                <h4>Repositórios</h4>

                {repos.map(repo => (
                  <ItenList title={repo.name} description={repo.description} link={repo.svn_url}/>
                ))}
                
              </div>
            ):null}


        </div>{/*info*/}
      </div>{/* conteudo */}
    </div>
  );
}

export default App;
