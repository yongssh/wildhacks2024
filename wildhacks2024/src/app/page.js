"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Timer from '../components/Timer';

export default function Home() {
  return (
    // <div className="Home">
    //   <Timer />
    // </div>

    <body className={styles.body}>
    <div className="Home">
        <Timer />
    </div>
    </body>
  );
}