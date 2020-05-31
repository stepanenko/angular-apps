
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';

import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import store from './store';
import { loadUser } from './actions/authActions';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
