import Layout from "./Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Main } from "./Main/Main";
import ThemeChanger from "./Utils/ThemeChanger";

function App() {
  return (
    <div className={`font-Soleil overflow-x-hidden ${ThemeChanger("bg-white", "bg-[#020817]")}`}>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
