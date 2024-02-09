/* eslint-disable no-unused-vars */
import image1 from "../assets/images/image-1.jpg";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="flex mt-10 gap-4 h-screen bg-[#F1F1F2]">
        <div className="p-4 ml-10 rounded-lg border border-black bg-[#F1F1F2]  h-[500px] flex items-center ">
          <img className="h-[300px]" src={image1} alt="image" />
        </div>
        <div className="border border-black bg-[#F1F1F2] p-4 mr-10 rounded-lg h-[500px] flex items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          officiis sed reprehenderit est quisquam debitis quia ab harum expedita
          optio iure vitae quas fugit quibusdam, veniam officia mollitia
          consectetur autem.
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
