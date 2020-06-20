import React from 'react';
import './App.css';
import { createRouter } from 'the-react-router'
import Home from'./views/Home';
import Links from './Links';
import Abaut from'./views/Abaut';
import NewPage from'./views/NewPage';

const routes={
routes:[ 	{
          path: '/',
          component: Home 
         },
         {
          path: '/Abaut',
          component: Abaut 
         },
         {
          path: '/NewPage',
          component: NewPage 
         },

  
]

}
const [Router, Routes]=createRouter(routes)

function App() {
  return (
   <Router>
<div>
				<Links/>
			</div>
     
   <Routes/>
    </Router>

  );
}

export default App;
