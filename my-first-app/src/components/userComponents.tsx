import React from "react";

type CardComponent = {
  name: string; //required
  id: string;
  gender: string;
   email: string;
  phone: number;
  cell: number;
};
export const CardComponent: React.FC<CardComponent> = ({
  name,
  id,
  gender,
  email,
  phone,
  cell,
}) => {
  return (
    <>
      <div>
        {name} {id}
        {gender} {email} {phone} {cell}
      </div>
    </>
  );
};

export default CardComponent;
