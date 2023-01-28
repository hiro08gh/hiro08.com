import Link from 'next/link'
import Image from 'next/image';
import styles from './profile.module.scss';

type Props = {
  isDescription?: boolean;
};

export const Profile: React.FC<Props> = ({ isDescription = true }) => {
  return (
    <div className={styles.container}>
      <div>
        <span aria-label="hidden">
          <Link href="/">
            <Image
              src="/profile.png"
              alt=""
              width={60}
              height={60}
              className={styles.image}
            />
          </Link>
        </span>
        <div className={styles.profile}>
          <div className={styles.row}>
            <h1 className={styles.name}>Hiroki Ueda</h1>
            <a
              href="https://github.com/hiro08gh"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/github.png"
                alt="GitHub Icon"
                width={20}
                height={20}
              />
            </a>
          </div>
          <span className={styles.description}>
            Software enginner and Jamstack Developer.
          </span>
        </div>
      </div>
      {isDescription && (
        <span>
          I m an Software engineer interested in Next.js and UI development,
          Testing, Accessibility, DDD. Currently working at microCMS and
          commmune Global team.
        </span>
      )}
    </div>
  );
};
