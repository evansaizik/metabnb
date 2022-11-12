import Footer from "./components/Footer";
import Landing from "./components/Landing/Landing";
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
    <div>
      {openModal && <Modal onClick={closeModalHandler}/>}
      <Landing onClick={openModalHandler}/>
      <Footer />
    </div>
  );
}

export default App;
