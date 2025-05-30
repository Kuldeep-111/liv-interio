// pages/_app.js
import '@/styles/fonts.css'; 
import '@/styles/globals.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Layout from '@/components/layout/Layout'; // Import your layout

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
