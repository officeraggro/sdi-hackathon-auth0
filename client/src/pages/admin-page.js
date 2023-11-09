import React from "react"
import PageLayout from "../components/page-layout"

const AdminPage = () => {

    return (
        <>
        <PageLayout>
            <h1>Admin Page</h1>
            <br />
            <p>This is the admin page. Only authenticated admin users should see this page.</p>
        </PageLayout>
        </>
    )
}

export default AdminPage