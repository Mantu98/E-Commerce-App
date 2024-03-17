import React from 'react'
import Layout from '../../layouts/Layout'
import AdminMenu from '../../layouts/AdminMenu'

function Users() {
  return (
    <Layout title={"dashboard - all users"}>
        <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                 <h1>All Users</h1>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Users