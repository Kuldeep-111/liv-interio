import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomModal from '../utilities/CustomModal';
import Form from '../utilities/Form';

export default function Layout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      <Header onOpen={openModal} />
      
      {isModalOpen && (
        <CustomModal onClose={closeModal}>
          <Form />
        </CustomModal>
      )}
      
      {React.cloneElement(children, { openModal })}
      <Footer />
    </div>
  );
}
