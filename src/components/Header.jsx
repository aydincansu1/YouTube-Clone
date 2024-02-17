import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
const Header = () => {
  const navigate = useNavigate();
  //form gonderilince tetiklenir
  const handleSubmit = (e) => {
    e.preventDefault();
    //inputa girilen veri
    const text = e.target[0].value;
    //kullaniciyi sonuclar sayfasina yonlendir
    //search_query paremetresi olarak aratilan terimi ekle
    navigate(`/results?search_query=${text}`);
  };
  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/youtube.png" alt="youtube logo" />
        <h1 className="hidden md:block text-2xl">YouTube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="overflow-hidden flex items-center border outline-none border-gray-400 rounded-[20px]"
      >
        <input className="px-3 py-1 bg-black text-white" type="text" />

        <button className="border-l px-2 text-xl">
          <IoIosSearch />
        </button>
      </form>
      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition durattion-[400ms]" />
        <IoVideocam className="hover:text-gray-400" />
      </div>
    </div>
  );
};

export default Header;
