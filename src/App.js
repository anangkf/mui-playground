import { Container } from '@mui/system';
import './App.css';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Navbar />   
      <Container>
        <Hero />
        <Services />
        <Features />
      </Container>   
    </div>  
  );
}

export default App;
