import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../helpers/getData";
// 1) context yapisinin temelini olustur
export const VideoContext = createContext();

//2) Saglayici tanimlama
export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);
  //kategori her degistiginde api'dan veriyi al
  useEffect(() => {
    //menu seciliyse fonksiyonu durdur
    if (selectedCategory.type === "menu") return;

    //onceki kategorinin verilerini temzle
    setVideos(null);

    //kategori home ise home endpointine istek at
    if (selectedCategory.type === "home") {
      getData("/home").then((res) => setVideos(res.data));
    }
    //kategori trending ise trending endpointine istek at
    if (selectedCategory.type === "trending") {
      getData("/trending").then((res) => setVideos(res.data));
    }
    //typ'i catgorye esit ise search endpointine istek at
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((res) =>
        setVideos(res.data)
      );
    }
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </VideoContext.Provider>
  );
};
