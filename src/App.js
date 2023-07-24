import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import React, { useEffect } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';

function App() {
  const title="Blog website";
  useEffect(() => {
    document.title = 'Blog website';
  },);
  return (
    <Router>
    <div className="App">
        <title>{title}</title>
    <Navbar/>
         <div className="content">
           <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/create'>
              <Create/>
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetail/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
           </Switch>
         </div>
     </div>
     </Router>
  );
}

export default App;

//We didnot add the navbar in the router because we want to see it always on the top
//exact keyword islia use kia hai taka exact match ko hi pkra agar osko khtm krainga to phr / ki base pa bar bar home vala hi load hota jai ga
//route parameters vo hota hain jo changeable values hoti hain router ki like /blogs/123 isma 123 is changeable value of router and known as route parameters