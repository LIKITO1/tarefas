import Menu from "./components/layouts/Menu"
import Btn from "./components/layouts/Btn"
function App() {
  function redirecionar(){
    window.location="/criar"
  }
  return (
    <div>
      <Menu/>
      <Btn text="Criar Tarefa" classe="criar" click={redirecionar}/>
      <h1 className="container mt-4 d-flex justify-content-center">Bem-Vindo as suas Tarefas</h1>
    </div>
  );
}
export default App;