import { useAuth0 } from '@auth0/auth0-react'
import React from "react";
import PageLayout from "../components/page-layout";

const ProfilePage = () => {
  const { user } = useAuth0()
  const profiles = {
    users: {
      nsure: {
        name: "Sure, Not",
        occupation: "US Army Librarian/Smartest Man Alive",
        role: "User",
        profile_pic:
          "https://preview.redd.it/nawc5pihg5p81.png?auto=webp&s=eec25ebdaa83137d4eaa688e6eff0dc09fb9f580",
        contact_phone: "222-222-2222",
        contact_cell: "333-333-3333",
      },
      dcamacho: {
        name: "Dwayne Elizondo Mountain Dew Herbert Camacho",
        occupation: "President of the United States",
        role: "User",
        profile_pic:
          "https://mrwgifs.com/wp-content/uploads/2014/01/Dwayne-Elizondo-Mountain-Dew-Herbert-Camacho-Flipping-The-Bird-In-Idiocracy-Gif.gif",
        contact_phone: "111-111-1111",
        contact_cell: "444-444-4444",
      },
      fpendejo: {
        name: "Frito Pendejo",
        occupation: "Lawyer",
        role: "Administrator",
        profile_pic: "https://i.redd.it/ci1d7szfizz41.jpg",
        contact_phone: '555-555-5555',
        contact_cell: '666-666-6666'
      },
    },
  };

  return (
    <>
      <PageLayout>
        <h1>Profile Page</h1>
        <br />
        <div className='user-info-card'>
          <div className='info-card-items'>
            <img
              src={profiles["users"][user.nickname]?.profile_pic}
              alt="Not Sure"
              height="250px"
              width="250px"
            />
            <p>
              <strong>Name: </strong> {profiles["users"][user.nickname]?.name}
            </p>
            <p>
              <strong>Occupation: </strong>{" "}
              {profiles["users"][user.nickname]?.occupation}
            </p>
            <p>
              <strong>Phone: </strong>{" "}
              {profiles["users"][user.nickname]?.contact_phone}
            </p>
            <p>
              <strong>Mobile: </strong>{" "}
              {profiles["users"][user.nickname]?.contact_cell}
            </p>
            <p>
              <strong>Email: </strong> {user.email}
            </p>
            <p>
              <strong>Username: </strong> {user.nickname}
            </p>
            <p>
              <strong>Role: </strong> {profiles["users"][user.nickname]?.role}
            </p>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ProfilePage;
