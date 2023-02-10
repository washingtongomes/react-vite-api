import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
function App() {
  const [tarefas, setTarefas] = useState([]);
  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const resultadoFinal = await resultado.json();
      return resultadoFinal; }
    buscarDados().then((res) => setTarefas(res)); }, []);
  return (
    <div className="App">
      <h1>Buscando Dados da API</h1>
      <h5>
        Fonte: <span>JSON</span>Placeholder{" "}
      </h5>
      {tarefas.map((tarefa) => {
        return (
          <div>
            <ul>
              <li key={tarefa.id}>
                {" "}
                <span> {tarefa.id} : </span>
                {tarefa.title}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
