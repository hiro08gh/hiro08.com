import { Profile } from '@/src/components/ui/Profile';

type Props = {
  children: React.ReactNode;
  isDescription?: boolean;
};

export const Layout: React.FC<Props> = ({ children, isDescription = true }) => {
  return (
    <div>
      <Profile isDescription={isDescription} />
      {children}
    </div>
  );
};
