// hooks/loadUserData.ts
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../app/firebase';
import { UserAuth } from '../context/AuthContext';

const loadUserData = () => {
  const { user } = UserAuth();
  const [coins, setCoins] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        try {
          const usersRef = collection(db, 'accounts');
          const q = query(usersRef, where('authUserID', '==', user.uid));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0]
            setCoins(userDoc.data().pointTotal || 0);
          } else {
            console.log('No such document!');
          }
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
          setLoading(false);
        }
      };
      fetchUserData();
    }
  }, [user]);

  return { coins, loading, error };
};

export default loadUserData;