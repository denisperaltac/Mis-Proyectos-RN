import {MenuItem} from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 01',
    icon: 'cube-outline',
    component: 'Animation01Screen',
  },
  {
    name: 'Animation 02',
    icon: 'albums-outline',
    component: 'Animation02Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Text Inputs',
    icon: 'document-text-outline',
    component: 'TextInputs',
  },
  {
    name: 'Pull To Refresh',
    icon: 'refresh-outline',
    component: 'PullToRefresh',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionList',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'infinite-outline',
    component: 'InfiniteScroll',
  },
  {
    name: 'Slides',
    icon: 'layers-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Theme',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];
