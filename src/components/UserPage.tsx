import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/types";
import Cards, { CardVariant } from "./Cards";
import EventsExample from "./EventsExample";
import List from "./List";
import UserItem from "./UserItem";
const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useNavigate()

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
        <EventsExample />
      <Cards
        onClick={(num) => console.log(num)}
        variant={CardVariant.outlined}
        width="200px"
        height="150px"
      >
        <button>Кнопка</button>
      </Cards>
      <List
        item={users}
        renderItem={(user: IUser) => <UserItem onClick={(user) => history("/users/" + user.id)} key={user.id} user={user} />}
      />
    </div>
  );
};

export default UserPage;
