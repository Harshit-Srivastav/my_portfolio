import Image from "next/image";
import Header from '@/app/components/Header'
import Bio from "./components/Bio";
import Profile from "@/app/components/Profile"
import TechStack from "./components/TechStack";
import Footer from "@/app/components/Footer";
import Projects from "@/app/components/Projects";
import ContactForm from "@/app/components/Contacts";


export default function Home() {
  return (
    <main className="">
      <Header/>
      <Bio/>
      <Profile/>
      <TechStack/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}
