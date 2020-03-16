
// import React, {useState, useEffect} from "react";
// import Main from "./pages/Index";
// import SearchBar from "./components/search";
// import api from "./utils/API";

import React from "react";
import Header from "./components/header"
import Table from "./components/table";
import Footer from "./components/footer"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   const[users, setUsers]=useState([]);
//   const[search, setSearch]=useState(``);

//   const handleInputChange = e => {
//     setSearch(e.target.value);
//     console.log(search)
//   };

//   useEffect(() => {
//     api.allUsers(15).then(res => {
//       setUsers(res.data.results);
//     }).catch(err => console.log(err))
//   },[]);

//   return (
//     <div className="App">
//       <Main/>
//       <SearchBar users={users} search={search}/>
//       <Table users={users} search={search} handleInputChange={handleInputChange}/>
//     </div>
//   );
// }

// export default App;