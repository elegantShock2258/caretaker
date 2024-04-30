"use client";
import Image from "next/image";
import styles from "./wishlist.module.css";
import { useRouter } from "next/navigation";
import DoctorCard from "@/components/ui/DoctorCard/DoctorCard";
import { useState } from "react";
import { docType } from "@/server/types/docType";
export default function Wishlist() {
  let router = useRouter();
  let [index, setIndex] = useState(0);
  const DoctorsData: docType[] = Array(100).fill({
    image: "/doc.png",
    w: 170,
    h: 170,
    name: "Dr. Ayush Chadha",
    specialization: "Cardio",
    rating: 4.5,
    reviews: 100,
    rate: "40",
  });
  let [Doctors, setDoctors] = useState<docType[]>(DoctorsData);
  const categories = ["All", "Cardio", "Brain", "Optics", "Arthritis"];
  return (
    <>
      <div className={styles.parent}>
        <div className="flex justify-between p-[8px] align-center w-full">
          <div
            onClick={() => {
              router.push("/");
            }}
          >
            <Image src="/backBtn.png" width={30} height={30} alt="" />
          </div>
          <div className={styles.top}>My Wishlist</div>
        </div>

        <div className={styles.cat}>
          {categories.map((category, i) => {
            return (
              <div
                key={i}
                className={`${index == i ? styles.highlight : ""}`}
                onClick={() => {
                  setIndex(i);
                  if (category === "All") {
                    setDoctors(DoctorsData);
                  } else {
                    setDoctors(
                      DoctorsData.filter((doc) => {
                        return doc.specialization == category;
                      }),
                    );
                  }
                }}
              >
                {category}
              </div>
            );
          })}
        </div>
        <div className={styles.docsContainer}>
          {Doctors.map((doc, i) => {
            return <DoctorCard doctor={doc} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}
