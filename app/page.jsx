"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import AnnoucementBar from "./components/AnnoucementBar";
import HeroSlider from "./components/HeroSlider";
import FeaturedCollection from "./components/FeaturedCollection";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import NotFound from "./components/NotFound";
import { useRouter } from "next/navigation";
import AboutSec from "./components/AboutSec";

export default function Home() {
  const [verify, setVerify] = useState(null); // null = loading, false = failed, true = success

  useEffect(() => {
    axios.post("https://backend-store-bkh1.onrender.com/verify", {}, { withCredentials: true }).then((response) => {
        const { auth } = response.data;
        if(auth === true){
          setVerify(true);
        }
      }).catch(() => setVerify(false));
    axios.post("https://www.caryaati.ca/api/vehicle_list_normal", {type: '501'}, { withCredentials: true }).then((response) => {
        const result = response.data;
        console.log(result)
      }).catch((error) => console.log(error, 'error');
  }, []);

  if (verify === null) return <div className='text-4xl fixed right-0 bottom-0 items-center content-center text-center top-0 left-0'><div>Loading...</div></div>; // Optional loader

  if (verify === false) return ( <NotFound /> )
   
    return (
    <>
      <Header />
      <AnnoucementBar />
      <HeroSlider />
      <FeaturedCollection />
      <FeaturedProducts />
      <AboutSec />
      <Testimonials />
      <Footer />
    </>
  );
}
