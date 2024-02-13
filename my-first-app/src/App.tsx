import React from "react";
import FirstComponent, {
  SecondComponent,
  ThirdComponent,
  ForthComponent,
} from "./components/myFirstComponents";

import CardComponent from "./components/userComponents";

function App() {
  const results = [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Carl",
        last: "Poulsen",
      },
      email: "carl.poulsen@example.com",
      phone: "62118255",
      cell: "70496142",
      id: {
        name: "CPR",
        value: "230948-0357",
      },
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Stojan",
        last: "Simić",
      },
      email: "stojan.simic@example.com",
      phone: "015-0390-548",
      cell: "061-7931-223",
      id: {
        name: "SID",
        value: "300913424",
      },
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Hailey",
        last: "Allen",
      },
      email: "hailey.allen@example.com",
      phone: "09-1124-5104",
      cell: "0417-699-066",
      id: {
        name: "TFN",
        value: "941752917",
      },
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Séléna",
        last: "Gautier",
      },
      email: "selena.gautier@example.com",
      phone: "02-70-05-22-64",
      cell: "06-16-45-25-48",
      id: {
        name: "INSEE",
        value: "2920126537244 80",
      },
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Warren",
        last: "Chapman",
      },
      email: "warren.chapman@example.com",
      phone: "02-2209-1514",
      cell: "0407-755-215",
      id: {
        name: "TFN",
        value: "804704062",
      },
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Louella",
        last: "Mitchell",
      },
      email: "louella.mitchell@example.com",
      phone: "00-6882-1058",
      cell: "0459-973-436",
      id: {
        name: "TFN",
        value: "306246614",
      },
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Fletcher",
        last: "Wright",
      },
      email: "fletcher.wright@example.com",
      phone: "(740)-670-1159",
      cell: "(314)-438-8747",
      id: {
        name: "",
        value: "3839671B",
      },
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Rich",
        last: "Davidson",
      },
      email: "rich.davidson@example.com",
      phone: "071-935-7539",
      cell: "081-498-0801",
      id: {
        name: "PPS",
        value: "3839671T",
      },
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Thea",
        last: "Jørgensen",
      },
      email: "thea.jorgensen@example.com",
      phone: "66869837",
      cell: "87690426",
      id: {
        name: "CPR",
        value: "081287-2486",
      },
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Kátia",
        last: "da Cunha",
      },
      email: "katia.dacunha@example.com",
      phone: "(96) 2838-2552",
      cell: "(64) 8774-5283",
      id: {
        name: "CPF",
        value: "525.512.139-46",
      },
    },
  ];

  // ---------------------------------------------------


return (
  <>
    {results.map((result, index) => (
      <CardComponent
        key={index}
        name={result.name.first + " " + result.name.last}
        id={result.id.value}
        gender={result.gender}
        email={result.email}
        phone={result.phone}
        cell={result.cell}
      />
    ))}
  </>
);
} 
//   return (
//     <>
//       <ForthComponent firstname="Ali" lastname="Aliyev" />
//       <FirstComponent firstname="Gulnar" lastname="Hagverdiyeva" />
//       <SecondComponent firstname="Aytan" lastname="Aytanova" />
//       <FirstComponent firstname="Elmar" lastname="Elmarov" />
//       <ThirdComponent firstname="Deniz" />
//     </>
//   );
// }

export default App;
