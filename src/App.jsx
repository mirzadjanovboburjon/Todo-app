import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import CompleatedTask from "./pages/CompleatedTask";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage />}></Route>
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/edit-task" element={<EditTask />} />
            <Route path="/compleated-task" element={<CompleatedTask />} />
          </Routes>
          <Navbar />
        </Router>
      </div>
    </TodoProvider>
  );
}

export default App;
