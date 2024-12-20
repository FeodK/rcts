import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem.tsx";

interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return <div>
    {users.map(user => 
        <UserItem key={user.id} user={user}/>
    )}
  </div>;
};
