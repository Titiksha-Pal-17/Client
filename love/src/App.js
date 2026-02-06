import { useState } from "react";
import CatPage from "./components/CatPage";
import LetterPage from "./components/LetterPage";
import GalleryPage from "./components/GalleryPage";
import QuestionPage from "./components/QuestionPage";
import YayPage from "./components/YayPage";

function App() {
  const [page, setPage] = useState(0);

  const nextPage = () => setPage((p) => p + 1);

  return (
    <>
      {page === 0 && <CatPage next={nextPage} />}
      {page === 1 && <LetterPage next={nextPage} />}
      {page === 2 && <GalleryPage next={nextPage} />}
      {page === 3 && <QuestionPage next={nextPage} />}
      {page === 4 && <YayPage />}
    </>
  );
}

export default App;
