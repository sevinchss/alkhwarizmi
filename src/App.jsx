import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import DarkMode from './Context/DarkMode';
import Hero from './Main/Hero/Hero';
import Section2 from './Main/Section2/Section2';
import Section3 from './Main/Section3/Section3';
import Section4 from './Main/Section4/Section4';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <div className='font-Soleil'>
    <DarkMode>
      <Layout>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
      </Layout>
    </DarkMode>
    </div>
  )
}

export default App
