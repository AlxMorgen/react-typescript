import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IUser } from '../types/types';



const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams()
    const history = useNavigate()
    
    
   
    

    useEffect(() => {
      fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>(
          "https://jsonplaceholder.typicode.com/users/" + params.id
        );
        setUser(response.data);
      } catch (error) {
        alert(error);
      }
    }
  return (
    <div>
        <button onClick={() => history("/users")}>back</button>
        <h1>Страница пользователя {user?.name}</h1>
    <div>
        {user?.address.zipcode} {user?.address.street} {user?.address.city}
    </div>
    </div>
  )
}

export default UserItemPage