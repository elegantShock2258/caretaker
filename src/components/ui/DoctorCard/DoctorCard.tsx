import Image from "next/image";
import styles from "./doctorcard.module.css";
import { docType } from "@/server/types/docType";

export default function DoctorCard({ doctor }: { doctor: docType }) {
  return (
    <div className={styles.card}>
      <Image src={doctor.image} width={doctor.w} height={doctor.h} alt="" />
      <div className={styles.info}>
        <div className={styles.name}>{doctor.name}</div>
        <div className={styles.reviews}>★ {doctor.reviews}</div>
      </div>
      <div className={styles.info}>${doctor.rate}/hr</div>
    </div>
  );
}
