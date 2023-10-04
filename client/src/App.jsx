import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import ShowTask from "./pages/ShowTask";
import UpdateTask from "./pages/UpdateTask";
import DeleteTask from "./pages/DeleteTask";

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks/create' element={<CreateTask />} />
        <Route path='/tasks/show/:id' element={<ShowTask />} />
        <Route path='/tasks/update/:id' element={<UpdateTask />} />
        <Route path='/tasks/delete/:id' element={<DeleteTask />} />

      </Routes>
    </>
  );
}

export default App;
