import Header from "../components/Header/Header";
import MainContent from "../components/MainContent/MainContent";
import Sidebar from "../components/Sidebar";

const Home: React.FC = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/BG.png)' }}>
      <Header />
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Home;