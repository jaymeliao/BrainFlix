import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Upload from "./Pages/UploadPage/UploadPage";
import NotFound from "./Pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="upload" element={<Upload />} />
          <Route path="videos/:videoId" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
