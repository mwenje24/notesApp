import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' exact element={<NotesListPage />} />
          <Route path='/note/:id' element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
