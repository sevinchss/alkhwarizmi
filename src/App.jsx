import Layout from "./Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import { useEffect } from "react";
import EducationalModel from "./pages/Education/Talim modeli/EducationModel";
import BackToTop from "./component/BacktoTop";
import { WebPage } from "./pages/Faculties/Web";
import ScrollToTop from "./component/ScrolltoTop";
import { MobilePage } from "./pages/Faculties/Mobile";
import { GraphicsPage } from "./pages/Faculties/Graphics";
import { NetworkPage } from "./pages/Faculties/Network";
import { OnlineMain } from "./pages/Education/Online platform/OnlineMain";
import { TalabaMain } from "./pages/Education/Talaba rivojlanishi/TalabaMain";
import { MainAdmission } from "./pages/Admissions/MainAdmission";
import { MainVision } from "./pages/Vision/MainVision";
import { MainAccomodation } from "./pages/Kampus hayoti/AccomodationPage/MainAccomodation";
import { MainEvents } from "./pages/Kampus hayoti/SchoolEventsPage/MainEvents";
import { MainStudent } from "./pages/Kampus hayoti/StudentOrganizationsPage/MainStudent";
import { MainNews } from "./pages/News/MainNews";
import Gallery from "./pages/Galleries/Gallery";
import { MainLeadership } from "./pages/Leadership/MainLeadership";
import History from "./pages/History/History";
import ComingSoon from "./component/ComingSoon";
import ContactPage from "./pages/Contact/Contact";
import { MainPresidency } from "./pages/Kampus hayoti/presidency/MainPresidency";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* 👈 bu har bir sahifa o‘zgarganda tepaga scroll qiladi */}
      <Layout>
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oquv-dasturlari" element={<EducationalModel />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/web" element={<WebPage />} />
          <Route path="/qabul-tartibi" element={<MainAdmission />} />
          <Route path="/maqsad-vazifalar" element={<MainVision />} />
          <Route path="/yotoqxona" element={<MainAccomodation />} />
          <Route path="/maktab-tadbirlari" element={<MainEvents />} />
          <Route path="/history" element={<History />} />
          <Route path="/oquvchilar-tashkilotlari" element={<MainStudent />} />
          <Route path="/rahbariyat" element={<MainLeadership />} />
          <Route path="/presidency" element={<MainPresidency />} />
          <Route path="/mobil" element={<MobilePage />} />
          <Route path="/yangiliklar" element={<MainNews />} />
          <Route path="/fotogalereya" element={<Gallery />} />
          <Route path="/grafika" element={<GraphicsPage />} />
          <Route path="/rivojlanishi" element={<TalabaMain />} />
          <Route path="/fan-yonalishlari" element={<OnlineMain/>} />
          <Route path="/tarmoq" element={<NetworkPage />} />
          <Route path="/kontaktlar" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
