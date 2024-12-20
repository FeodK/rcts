import React, { FC } from "react";
import { IUser } from "../types/types.tsx";

interface UserListProps {
  user: IUser[];
  onClick: (user: IUser) => void
}

const UserItem: FC<UserListProps> = ({ user, onClick }) => {
  return (
      <div onClick={() => onClick(user)} style={{ padding: 15, border: "1px soled black",  cursor: 'pointer' }}>
        {user.id}. {user.name} проживает в городе {user.address.city} на улице{" "}
        {user.srteet}
      </div>
  );
};

export default UserItem;
