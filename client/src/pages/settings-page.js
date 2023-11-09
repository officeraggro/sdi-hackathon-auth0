import React from "react";
import PageLayout from "../components/page-layout";

const SettingsPage = () => {
  return (
    <>
      <PageLayout>
        <h1>Settings Page</h1>
        <br />
        <p>This is the settings page. Authenticated users should be able to see this.</p>
      </PageLayout>
    </>
  );
};

export default SettingsPage;
