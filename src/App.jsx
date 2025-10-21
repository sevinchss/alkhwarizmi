import Layout from "./Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes, BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import { useEffect } from "react";
import EducationalModel from "./pages/Education/Talim modeli/EducationModel";
import { Faculties } from "./pages/Faculties/Faculties";
import BackToTop from "./component/BacktoTop";
import { WebPage } from "./pages/Faculties/Web";
import ScrollToTop from "./component/ScrolltoTop";
import { MobilePage } from "./pages/Faculties/Mobile";
import { GraphicsPage } from "./pages/Faculties/Graphics";
import { NetworkPage } from "./pages/Faculties/Network";
import { OnlineMain } from "./pages/Education/Online platform/OnlineMain";
import ContactPage from "./pages/Contact/Contact";
import { TalabaMain } from "./pages/Education/Talaba rivojlanishi/TalabaMain";
import { MainAdmission } from "./pages/Admissions/MainAdmission";
import { MainLeadership } from "./pages/Leadership/MainLeadership";
import { MainVision } from "./pages/Vision/MainVision";
import { MainAccomodation } from "./pages/Kampus hayoti/AccomodationPage/MainAccomodation";
import { MainEvents } from "./pages/Kampus hayoti/SchoolEventsPage/MainEvents";
import { MainStudent } from "./pages/Kampus hayoti/StudentOrganizationsPage/MainStudent";
import { MainService } from "./pages/Kampus hayoti/StudentServices/MainService";
import { MainPresidency } from "./pages/Kampus hayoti/presidency/MainPresidency";
import { MainNews } from "./pages/News/MainNews";
import Gallery from "./pages/Galleries/Gallery";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
      <BrowserRouter basename="/">
    <Router>
      <ScrollToTop /> {/* 👈 bu har bir sahifa o‘zgarganda tepaga scroll qiladi */}
      <Layout>
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oquv-dasturlari" element={<EducationalModel />} />
          <Route path="/web" element={<WebPage />} />
          <Route path="/qabul-tartibi" element={<MainAdmission />} />
          <Route path="/maqsad-vazifalar" element={<MainVision />} />
          <Route path="/yotoqxona" element={<MainAccomodation />} />
          <Route path="/maktab-tadbirlari" element={<MainEvents />} />
          <Route path="/oquvchilar-tashkilotlari" element={<MainStudent />} />
          <Route path="/oquvchilar-xizmati" element={<MainService />} />
          <Route path="/rahbariyat" element={<MainLeadership />} />
          <Route path="/presidency" element={<MainPresidency />} />
          <Route path="/mobil" element={<MobilePage />} />
          <Route path="/yangiliklar" element={<MainNews />} />
          <Route path="/fotogalereya" element={<Gallery />} />
          <Route path="/grafika" element={<GraphicsPage />} />
          <Route path="/rivojlanishi" element={<TalabaMain />} />
          <Route path="/fan-yonalishlari" element={<OnlineMain/>} />
          <Route path="/tarmoq" element={<NetworkPage />} />
          <Route path="/yonalishlar" element={<Faculties />} />
          <Route path="/kontaktlar" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
    </BrowserRouter>
  );
}

export default App;
