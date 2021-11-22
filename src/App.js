import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import ShopList from './ShopList';
import ItemDetail from './ItemDetail';
import users from './users.json';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" exact component={ShopList} >
        <div>
        {
          users.users.map((user) => {
            return <ShopList key={user.id}></ShopList>
          }
          )
        }

        </div>
      </Route>
      {/* <Route path="/shop/:id" component={ItemDetail}>
        {
          users.users.map((user) => {
          return <ShopList key={user.id}>name={user.name}</ShopList>
          }
          )
        }
      </Route> */}
      </Switch> 
    </div>
    </Router>
  );
}

const Home = () => (
    <div>
      <h1>Home</h1>
    </div>
)

export default App;
