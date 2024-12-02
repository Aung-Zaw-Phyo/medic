import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Medicines from "@/components/sections/Medicines";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Header/>
        <Hero/>
        <Medicines/>
        <div className="h-[95vh] bg-[#EDEDF5]">
          <div className="container mx-auto   py-6 grid grid-cols-2 items-center ">
              <div className="w-[95%] md:w-[90%] lg:w-[80%] text-xl">
                  We think that everyone should have easy access to excellent
                  healthcare. Our aim is to make the procedure as simple as
                  possible for our patients and to offer treatment no matter
                  where they are — in person or at their convenience. 
              </div>
              <img src="/assets/images/family.png" alt="" />
              {/* <img src="https://themewagon.github.io/live-doc/v1.0.0/assets/img/gallery/hero.png" alt="" /> */}
          </div>
        </div>
        <Contact/>
        <Footer/>
      </Suspense>
    </div>
  );
}
