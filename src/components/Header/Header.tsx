import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="SIMPLE"
          className={styles.logo}
          width={46}
          height={46}
          priority
        />
      </Link>
    </header>
  );
}
