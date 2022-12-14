import { DashboardOutlined } from '@ant-design/icons';
import { routes } from '@src/config/routes';

export const excludedPaths = [routes.startup];

export interface NavMenuItem {
  title: string;
  Icon: any;
  path: string;
}

export const MenuItems: NavMenuItem[] = [
  {
    title: 'Dashboard',
    Icon: DashboardOutlined,
    path: routes.dashboard,
  },
];
