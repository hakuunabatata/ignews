import Image from "next/image";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export const Header = () => (
  <header className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <Image src="/images/logo.svg" alt="ig.news" width={100} height={100} />
      <nav>
        <a className={styles.active}>Home</a>
        <a>Posts</a>
      </nav>

      <SignInButton />
    </div>
  </header>
);
