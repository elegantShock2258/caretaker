"use client";
import { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function Navbutton({
  thisIndex,
  index,
  img,
  page,
  setIndex,
}: {
  thisIndex: number;
  setIndex: Function;
  index: number;
  img: string;
  page: string;
}) {
  let router = useRouter();
  return (
    <div
      onClick={() => {
        setIndex(index);
        router.push(`${page}`);
      }}
      className={`${thisIndex == index ? styles.navbutton : styles.eh}`}
    >
      <Image
        src={img}
        alt=""
        width={20}
        height={20}
        className={`${thisIndex == index ? styles.highlightImage : ""}`}
      />
    </div>
  );
}

export default function NavBar() {
  let [index, setIndex] = useState<number>(0);
  const images = [
    { img: "/navbar/home.png", page: "/home" },
    { img: "/navbar/search.png", page: "/search" },
    { img: "/navbar/wishlist.png", page: "/wishlist" },
    { img: "/navbar/chat.png", page: "/chat" },
    { img: "/navbar/profile.png", page: "/profile" },
  ];
  let p = usePathname();
  return (
    <>
      {p != "/" && (
        <div className={styles.parent}>
          {images.map((image, i) => {
            return (
              <Navbutton
                thisIndex={index}
                setIndex={setIndex}
                index={i}
                {...image}
                key={i}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
