import * as R from 'ramda';

export const drawerNavigationObject = {
  home: {
    label: 'Home',
    name: 'home',
    iconName: 'home'
  },
  songs: {
    label: 'Songs',
    name: 'songs',
    iconName: 'headset'
  },
  playlists: {
    label: 'Playlists',
    name: 'playlists',
    iconName: 'list'
  },
  people: {
    label: 'People',
    name: 'people',
    iconName: 'people'
  },
  likedSongs: {
    label: 'Liked Songs',
    name: 'likedSongs',
    iconName: 'favorite'
  },
  settings: {
    label: 'Settings',
    name: 'settings',
    iconName: 'settings'
  }
};

export const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);

export const isPresent = R.complement(isNilOrEmpty);
