import React from "react";
import PageLayout from "../components/page-layout";

const LandingPage = () => {
  return (
    <>
      <PageLayout>
        <h1>Landing Page</h1>
        <p>This is the landing page. Unauthenticated users should see this. Since Route Guard is enabled, the user will need to log in to go anywhere else.</p>
      </PageLayout>
    </>
  );
};

export default LandingPage;
