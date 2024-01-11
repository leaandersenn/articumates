import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { User } from '@/app/utils/TypeDef';

export const useFirebaseUsers = (searchTerm: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, 'client');
        const snapshot = await getDocs(usersRef);
        const filteredUsers = snapshot.docs
          .map(doc => doc.data() as User)
          .filter(user => user.name.includes(searchTerm));
        setUsers(filteredUsers);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [searchTerm]);

  return { users, loading, error };
};
