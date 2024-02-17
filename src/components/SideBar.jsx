import { useContext } from "react";
import { categories } from "../constants";
import { VideoContext } from "../context/videoContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);

  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories.map((item) => (
        <div onClick={() => setSelectedCategory(item)} key={item.name}>
          <div
            className={` ${
              selectedCategory.name === item.name && "bg-[#2b2a2a]"
            }
              flex items-center gap-2 py-4 px-2 md:px-3 text-base md:text-lg hover:bg-[#2d2d2d] cursor-pointer rounded-md`}
          >
            <span className="max-sm:text-2xl">{item.icon}</span>
            <span className="max-sm:hidden">{item.name}</span>
          </div>
          {/* //dvider degeri true ise cizgi ekle*/}
          {item.divider === true && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
