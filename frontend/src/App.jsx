import React from "react";
import NewBlog from "./newBlog";
import Landing from "./Landing";
import DeleteBlog from "./DeleteBlog";
import { BrowserRouter, Route, Routes} from "react-router-dom";


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/delete-blog" element={<DeleteBlog />}/>
        <Route path="/landing" element={<Landing />}/>
        <Route path="/new-blog" element={<NewBlog />}/>
      </Routes>
    </BrowserRouter>

  )
}
export default App;