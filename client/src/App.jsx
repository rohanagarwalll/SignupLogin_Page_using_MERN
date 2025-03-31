// import { useState } from 'react'
// import Signup from './Signup';
// import Login from './Login';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


// function App() {
  

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/register' element={<Signup/>}></Route>
//         <Route path='/login' element={<Login/>}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} /> {/* Redirect to /register */}
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
