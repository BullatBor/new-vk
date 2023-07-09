import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContentContainer from './Components/content/Content';
import { Sidebar } from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app-main-block">
      <div className='app-first-column'>
        <Sidebar />
      </div>
      <div className='app-second-column'>
        <Routes>
          <Route path='/dialogs/:userId?' element={<ContentContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
