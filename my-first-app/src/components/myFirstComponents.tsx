import React from "react";

interface FirstComponentProps {
  name: string;
}
//  const  FirstComponent : React.FC<FirstComponentProps> = ({name}) => {

const FirstComponent = ({
  firstname,
  lastname,
}: {
  firstname: string;
  lastname?: string;
}) => {
  return (
    <>
      <div>
        {" "}
        Hello , {firstname} {lastname}
      </div>
    </>
  );
};

export default FirstComponent;

// ------------------------------------------------------------

export const SecondComponent: React.FC<{
  firstname: string;
  lastname: string;
}> = ({ firstname, lastname }) => {
  return (
    <>
      <div>
        {" "}
        Hello , {firstname} {lastname}
      </div>
    </>
  );
};

// -----------------------------------------------------------

type ThirdComponent = {
  firstname: string; //required
  lastname?: string; //optional
};
export const ThirdComponent: React.FC<ThirdComponent> = ({
  firstname,
  lastname,
}) => {
  return (
    <>
      <div>
        Salam , {firstname} {lastname}
      </div>
    </>
  );
};

// ------------------------------------------------------------

interface ForthComponent {
  firstname: string; //required
  lastname?: string; //optional
  age?: number;
}
export const ForthComponent: React.FC<ForthComponent> = ({
  firstname,
  lastname,
  age = 18,
}) => {
  return (
    <>
      <div>
        Salam , {firstname} {lastname} - {age}
      </div>
    </>
  );
};

// -------------------------------------------------------------



