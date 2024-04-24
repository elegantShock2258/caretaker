import { Slider } from "@/components/ui/slider/slider";
import styles from "./home.module.css";
export default function Home() {
  return (
    <div className={styles.parent}>
      <div className={styles.titleContent}>
        <div className={styles.boldTitle}>Explore your</div>
        <div className={styles.title}>Journey to a</div>
        <div className={styles.boldTitle}>Better Health</div>
      </div>
      <div className={styles.goSlider}>
        <Slider orientation="vertical" />
      </div>
    </div>
  );
}
