import React from 'react'
import Layout from '../../layouts/Layout'
import AdminMenu from '../../layouts/AdminMenu'

function CreateCategory() {
  return (
    <Layout title={"dashboard - create category"}>
       <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <h1>Create Category</h1>
                </div>
            </div>
        </div>    
    </Layout>
  )
}

export default CreateCategory