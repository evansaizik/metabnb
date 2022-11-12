import Footer from "./components/Footer";
import Landing from "./components/Landing/Landing";
import { Routes, Route } from 'react-router-dom';
import Places from './components/pages/Places'
import Header from "./components/Landing/Header";
import Modal from "./components/UI/Modal";
import { useState } from 'react';


function App() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true)
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  }

  return (
    <>
      {openModal && <Modal onClick={closeModalHandler}/>}
      <Header onClick={openModalHandler} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/places" element={<Places />} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
