import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Layout from './page/Layout';
import Home from './page/Home';
import StoryList from './page/StoryList'
import Story from './page/Story'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/storylist' element={<StoryList />}>
              <Route path='/storylist/:name' element = {<Story />}/>
            </Route>
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
