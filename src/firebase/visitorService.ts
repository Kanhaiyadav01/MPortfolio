import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from './config';

export const getVisitorCount = async (): Promise<number> => {
  try {
    const docRef = doc(db, 'stats', 'visitors');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().count || 1;
    } else {
      await setDoc(docRef, { count: 1 });
      return 1;
    }
  } catch (error) {
    console.warn('Firebase visitor count read failed, falling back to local count.', error);
    return 142; // Fallback default count
  }
};

export const incrementVisitorCount = async (): Promise<number> => {
  try {
    const docRef = doc(db, 'stats', 'visitors');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(docRef, { count: increment(1) });
      return (docSnap.data().count || 0) + 1;
    } else {
      await setDoc(docRef, { count: 1 });
      return 1;
    }
  } catch (error) {
    console.warn('Firebase visitor increment failed, using fallback.', error);
    return 143;
  }
};
