import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className=" bg-alkGray font-sans">
      {" "}
      <Header /> <main className="pt-24">{children}</main>
      <Footer/>{" "}
    </div>
  );
}
