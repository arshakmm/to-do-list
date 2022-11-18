
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import ToDo from "./ToDo";

function App() {
  return <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="to-do" element={<ToDo/>}/>
    </Routes>
    </BrowserRouter>
    </div>;
}

export default App;
