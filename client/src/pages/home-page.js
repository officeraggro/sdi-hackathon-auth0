import React from "react";
import PageLayout from "../components/page-layout";

const HomePage = () => {
  return (
    <>
      <PageLayout>
        <h1>Home Page</h1>
        <p>This is the home page. Authenticated users should see this. Navigation links at the top should also be present. The types/number of navigation links also depends on the user's role. The user can use the links to navigate to other pages. When the user logs out, they will be redirected back to the landing page.</p>
      </PageLayout>
    </>
  );
};

export default HomePage;
