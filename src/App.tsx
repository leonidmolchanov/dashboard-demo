import React from 'react';
import './styles/App.css';
import CardListComponent from './components/cardList.component'
import HeaderComponent from './components/header.component'
import {Provider} from 'react-redux'
import store from './store'
const App: React.FC = () => {
  return (
      <Provider store={store}>
          <HeaderComponent />
    <CardListComponent />
      </Provider>

  );
}

export default App;
