import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomModal from '../utilities/CustomModal';
import Form from '../utilities/Form';

export default function Layout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // List of routes where Header/Footer should be hidden
  const noLayoutRoutes = ['/disclaimer', '/privacy-policy'];

  // Function to open/close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const shouldHideLayout = noLayoutRoutes.includes(router.pathname);

  return (
    <div className="relative">
      {!shouldHideLayout && <Header onOpen={openModal} />}

      {isModalOpen && (
        <CustomModal onClose={closeModal}>
          <Form logo={true} />
        </CustomModal>
      )}

      {React.cloneElement(children, { openModal })}

      {!shouldHideLayout && <Footer />}
    </div>
  );
}
