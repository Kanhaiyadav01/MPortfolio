import { userImages } from '../data/images';

export const getDailyDecoration = () => {
  const day = new Date().getDay();
  switch (day) {
    case 0:
      return { path: userImages.decorations.soulLeavingBody, name: 'Sunday Mood' };
    case 1:
    case 3:
      return { path: userImages.decorations.cyberKatana, name: 'Focus Mode' };
    case 2:
    case 4:
      return { path: userImages.decorations.candlelightDark, name: 'Night Owl' };
    case 5:
      return { path: userImages.decorations.shy, name: 'Friday Vibes' };
    case 6:
    default:
      return { path: userImages.decorations.blossomBurst, name: 'Weekend Energy' };
  }
};
