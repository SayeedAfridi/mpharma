import { FC } from 'react';
import { Dashboard } from '@src/features';
import { AnimatedContent } from '@src/lib/layout';

interface DashboardPageProps {}

export const DashboardPage: FC<DashboardPageProps> = () => {
  return (
    <AnimatedContent style={{ padding: 24 }}>
      <Dashboard />
    </AnimatedContent>
  );
};
