import HomeScreen from './HomeScreen';
import SongsScreen from './SongsScreen';
import PlaylistsScreen from './PlaylistsScreen';
import PeopleScreen from './PeopleScreen';
import LikedSongsScreen from './LikedSongsScreen';
import SettingsScreen from './SettingsScreen';

export const getScreen = screen => {
  switch (screen) {
    case 'home': {
      return HomeScreen;
    }
    case 'songs': {
      return SongsScreen;
    }
    case 'playlists': {
      return PlaylistsScreen;
    }
    case 'people': {
      return PeopleScreen;
    }
    case 'likedSongs': {
      return LikedSongsScreen;
    }
    case 'settings': {
      return SettingsScreen;
    }
    default: {
      return HomeScreen;
    }
  }
};
