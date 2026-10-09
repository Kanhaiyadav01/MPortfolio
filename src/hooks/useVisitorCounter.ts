import { useState, useEffect } from 'react';
import { getVisitorCount, incrementVisitorCount } from '../firebase/visitorService';

export const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const handleVisit = async () => {
      const hasVisited = sessionStorage.getItem('has_visited');
      let count = 0;

      if (!hasVisited) {
        count = await incrementVisitorCount();
        sessionStorage.setItem('has_visited', 'true');
      } else {
        count = await getVisitorCount();
      }

      if (isMounted) {
        setVisitorCount(count);
        setLoading(false);
      }
    };

    handleVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  return { visitorCount, loading };
};
