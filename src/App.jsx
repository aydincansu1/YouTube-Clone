import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import SearchResult from "./pages/SearchResult";
import Header from "./components/Header";
import UndefinedPages from "./components/UndefinedPages";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<VideoDetail />} />
        <Route path="/results" element={<SearchResult />} />
        <Route path="*" element={<UndefinedPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
