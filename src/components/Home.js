import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clients from '../pages/Clients';

import '../sass/global.scss'
import Header from './Header';
import Dashboard from '../pages/Dashboard';
import Stores from '../pages/Stores';
import Members from '../pages/Members';
import Preferences from '../pages/Preferences';
import MenuDrawer from '../utils/Drawer';
import AddStore from '../pages/AddStore';

import AddMember from '../pages/AddMember';
function Home() {
    return (
       
        

          <>
           <Router>
               <div className="app">
             
               {/* <Sidebar /> */}
               <MenuDrawer/>
             
               <div className="app__container">
               <Header />
               <Switch>
                    <div className="app__middle">
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/clients" component={Clients} />
                    <Route path="/stores" component={Stores} />
                    <Route path="/members" component={Members} />
                    <Route path="/preferences" component={Preferences} />
                    <Route path="/newstore" component={AddStore} />
                    <Route path="/new-member" component={AddMember} />

                    </div>
                   
                    </Switch>
               </div>

               </div>
               
          
           
            
               
            </Router>

           </> 
         
           
      
    )
}

export default Home
