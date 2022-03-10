import "./App.css";
import Banner from "./components/Banner";
import Early from "./components/Early";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const title = "All your files in one secure location, accessible anywhere.";
  const content =
    "Fylo stores your most important files in one secure location. Access them wherever you need, shere and collaborate with friends, family, and co-workers.";
  const content1 =
    "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!";

  const banner = "row";
  const banner1 = "row-reverse";

  return (
    <div>
      <Header />
      <Banner
        title={title}
        content={content}
        imageSrc={"images/illustration-1.svg"}
        banner={banner}
      />
      <Banner
        title={"Stay productive, wherever you are"}
        content={content1}
        imageSrc={"images/illustration-2.svg"}
        banner={banner1}
      />
      <Early />
      <Footer />
    </div>
  );
}

export default App;
