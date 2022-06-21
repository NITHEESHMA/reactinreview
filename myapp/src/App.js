// import React,{useEffect,useState} from 'react';
// import Header from './Pages/Header/Header';
// import List from './Pages/List/List';
// import Map from './Pages/Map/Map';
// import { getplacedata } from './Api/Index';
// import {CssBaseline,Grid} from '@material-ui/core'
// //import GoogleMap from './com/GoogleMap'
// function App(){
// const [place,setplace]=useState([])
// const [coordinates,setCordinates]=useState({});
// const [bound,setbound]= useState(null);
//     useEffect(()=>{
// getplacedata().then((data)=>{
//     console.log(data)
//     setplace(data)
// })
//     },[])
//     return(
//         <div>
//         <CssBaseline/>
//         <Header/>
//         <Grid container spacing={3} style={{width:'100%'}}>
//         <Grid item xs={12} md={4}>
//         <List/>
//         </Grid>
        

//         <Grid item xs={12} md={8}>
//         <Map setCordinates={setCordinates}
//         setBound={setbound}
//         coordinates={coordinates}/>
//         </Grid>
        
//         </Grid>
        
//         </div>
//     )
// }

// export default App;

// import React, { useState } from 'react';
// import { Appcontext } from './Context';
// import Adduser from './contextapicomponent/Adduser';
// import User from './contextapicomponent/User';
// import Userlist from './contextapicomponent/Userlist';
// const userlist=[{
//     id:1,
//     name:"nidhi",
//     age:29,
//     job:"developer"
// }]
// const App = () => {
//     const [user,setuser]=useState();
//     const diapatchuserevent=(actiontype,payload)=>{
//         switch(actiontype){
//             case 'ADD-USER':setuser([...user,payload.newuser])
//             return;
//             case 'REMOVE-USER':setuser(user.filter(users=>users.id==payload.userid));
//             return;
//             default:return;
//         }
//     }
//     return (
//         <div>
//         <Appcontext.Provider value={{user,diapatchuserevent}}>
//           <Adduser/>
//           <User/>
//           <Userlist/>  
//           </Appcontext.Provider>
//         </div>
//     );
// };

// export default App;

import React, { Component } from 'react'
import Navbar from './componentsss/Navbar'

export default class App extends Component {
  
  
    render() {
    return (
      <div>
    
      <Navbar/>
      </div>
    )
  }
}
