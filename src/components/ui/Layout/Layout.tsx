import { Profile } from '@/src/components/ui/Profile';
import styles from './layout.module.css';

type Props = {
  children: React.ReactNode;
  isDescription?: boolean;
};

export const Layout: React.FC<Props> = ({ children, isDescription = true }) => {
  return (
    <div className={styles.main}>
      <Profile isDescription={isDescription} />
      {children}
    </div>
  );
};