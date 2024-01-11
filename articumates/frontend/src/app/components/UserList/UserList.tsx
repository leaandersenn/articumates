import { useEffect, useState } from "react";
import { User } from "@/app/utils/TypeDef";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import UserProfile from "../UserProfile/UserProfile";
import './UserList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = async () => {
    try {
      const usersRef = collection(db, 'client');
      const usersSnapshot = await getDocs(usersRef);
      const usersData = usersSnapshot.docs.map(doc => doc.data() as User);
      setUsers(usersData);
    } catch (error) {
      console.log("Could not load users.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
        <input
          type="text"
          className="searchField"
          placeholder="Search for client names..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
      {filteredUsers.map((user, index) => (
        <UserProfile key={index} {...user} />
      ))}
    </div>
  );
}
