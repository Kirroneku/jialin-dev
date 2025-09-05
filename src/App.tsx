import './App.css';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import 'devicon/devicon.min.css';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Router>
        <Nav />
        <main
          className="fancy-bg"
          style={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            margin: 0,
          }}
        >
          <div
            style={{ width: '100%', maxWidth: 1100, padding: '32px 16px', boxSizing: 'border-box' }}
          >
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Navigate to="/about" replace />} />
            </Routes>
          </div>
        </main>
      </Router>
    </FluentProvider>
  );
}

export default App;
