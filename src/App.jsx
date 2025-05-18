import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// <- el componente al que quieres ir
import First from './First';
import Secondary from './Secondary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/herramienta" element={<Secondary />} />
      </Routes>
    </Router>
  );
}

export default App