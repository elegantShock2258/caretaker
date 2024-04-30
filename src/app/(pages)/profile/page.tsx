"use client";
import Image from "next/image";
import styles from "./profile.module.css";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel/carousel";
export default function Profile() {
  let router = useRouter();
  let organs = [
    "/profile/brain.png",
    "/profile/heart.png",
    "/profile/lungs.png",
  ];
  let date = "10/4/2024";
  let doc = "Dr. Malavika Menon";
  let data = ["117/60", "120mm", "80-90", "35/230"];
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
          <div className={styles.top}>Profile</div>
        </div>
        <div className={styles.title}>My Heart</div>
        <div className={styles.cards}>
          {data.length > 0 ? (
            <>
              <div className={styles.infoCard}>
                <div className={styles.infoCardTopContainer}>
                  <div className={styles.infoCardIcon}>
                    <Image
                      src="/profile/blood_level.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </div>
                  <div className={styles.Title}>
                    Blood Status
                    <div className={styles.data}>{data[0]}</div>
                  </div>
                </div>
                <Image
                  src={"/profile/card_pic_blood_level.png"}
                  width={170}
                  height={170}
                  alt=""
                />
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoCardTopContainer}>
                  <div className={styles.infoCardIcon}>
                    <Image
                      src="/profile/heart_card_icon.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </div>
                  <div className={styles.Title}>
                    BP
                    <div className={styles.data}>{data[1]}</div>
                  </div>
                </div>
                <Image
                  src={"/profile/heartbeat_card_pic.png"}
                  width={170}
                  height={170}
                  alt=""
                />
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoCardTopContainer}>
                  <div className={styles.infoCardIcon}>
                    <Image
                      src="/profile/chart.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </div>
                  <div className={styles.Title}>
                    Blood Count
                    <div className={styles.data}>{data[2]}</div>
                  </div>
                </div>
                <Image
                  src={"/profile/oxygen_level_card.png"}
                  width={170}
                  height={170}
                  alt=""
                />
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoCardTopContainer}>
                  <div className={styles.infoCardIcon}>
                    <Image
                      src="/profile/blood_level.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </div>
                  <div className={styles.Title}>
                    Oxygen Level
                    <div className={styles.data}>{data[3]}</div>
                  </div>
                </div>
                <Image
                  src={"/profile/card_pic_blood_level.png"}
                  width={170}
                  height={170}
                  alt=""
                />
              </div>
            </>
          ) : (
            <>You need to sync your health tracker with us</>
          )}
        </div>
        <div className={styles.organs}>
          {organs.map((org, i) => (
            <div className={styles.organCard} key={i}>
              <Image src={org} alt="" width={170} height={170} />
            </div>
          ))}
        </div>
        <div className={styles.scheduleCard}>
          <div className={styles.title}>My Schedule</div>
          <div className={styles.schedule}>
            <div className={styles.card}>
              <div className={styles.calender}>
                <div className={styles.calender}>
                  <Image
                    src="/profile/calender.png"
                    alt=""
                    height={25}
                    width={25}
                    className={styles.calImg}
                  />
                  <div className={styles.info}>
                    <div className={styles.nextCheckupTitle}>Next Checkup</div>
                    <div className={styles.date}>{date}</div>
                  </div>
                </div>
                <div className={styles.assigned}>
                  <div className={styles.nextCheckupTitle}>Assigned To</div>
                  <div className={styles.doc}>{doc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
