import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SideBar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex space-x-3 bg-gray-200">
      <SideBar />
    </div>
  );
};

export default Home;
