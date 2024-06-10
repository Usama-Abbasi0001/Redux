
import './App.css';
import store from './reduxcontainer/Store';
import BookContainer from './reduxcontainer/BookContainer';
import { Provider } from 'react-redux'

function App() {
  return (
      <Provider  store={store}>
        <div className="App">
          <BookContainer />
        </div>
      </Provider>
  
  );
}

export default App;
