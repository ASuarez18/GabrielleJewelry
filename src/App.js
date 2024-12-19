import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Products from './components/Products';

/**
 * 
 * @returns 
 */
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <HeadlineCards /> */}
      <Products />
    </div>
  );
}

export default App;
