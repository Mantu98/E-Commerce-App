import React from 'react'
import Layout from '../../layouts/Layout'
import UserMenu from '../../layouts/UserMenu'
import { useAuth } from '../../../context/auth'

function Dashboard() {
  const [auth] = useAuth();
  return (
   
     <Layout title={"dashboard- Ecommerce App"}>
        <div className="container-fluid p-3 m-3">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu />
                </div>
                <div className="col-md-9">
                    <h3>{auth?.user?.name}</h3>
                    <h3>{auth?.user?.email}</h3>
                    <h3>{auth?.user?.address}</h3>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Dashboard