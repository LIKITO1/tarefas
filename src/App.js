import Menu from "./components/layouts/Menu"
import Btn from "./components/layouts/Btn"
import Card from "./components/layouts/Card"
import {useState,useEffect} from "react"
function App(){
  const [lista,setLista]=useState()
  useEffect(()=>{
  async function chamar(){
  await fetch("http://localhost:5000/api",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  }).then((response)=>response.json()).then((res)=>{
    setLista(res)
  })
}
chamar()
  },[])
  useEffect(()=>{
    console.log(lista)
  },[lista])
  function redirecionar(){
    window.location="/criar"
  }
  return (
    <div>
      <Menu/>
      <Btn text="Criar Tarefa" classe="criar" click={redirecionar}/>
      <h1 className="container mt-4 d-flex justify-content-center">Bem-Vindo as suas Tarefas</h1>
      <div className="container d-flex align-items-center justify-content-center flex-column">
      {lista&&lista.length>0&&(
        lista.map((valor)=>(
          <Card titulo={valor?.titulo} key={valor?.id}/>
        ))
      )}
      </div>
    </div>
  );
}
export default App;