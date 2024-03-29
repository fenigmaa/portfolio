import Navbar from "../components/navbar";
import Static from "../components/static";

const Home = () => {
  return (
    <main className="w-screen h-screen bg-[color:var(--dark-bg-primary)] flex place-items-center justify-center relative">
      <Navbar />
      <div className="container mx-auto px-4">
        <Static />
      </div>
    </main>
  );
};

export default Home;
