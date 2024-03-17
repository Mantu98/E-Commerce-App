import React from 'react'
import Layout from '../layouts/Layout'
import { Link } from 'react-router-dom'
import styles from './Pagenotfound.module.css';

function Pagenotfound() {
  return (
      <Layout title={'go back- page not found'}>
          <div className={styles.pnf}>
            <h1 className={styles.pnfTitle}>404</h1>
            <h2 className={styles.pnfHeading}>Oops ! Page Not Found</h2>
            <Link to='/' className={styles.pnfBtn}>
              Go Back
            </Link>
          </div>
      </Layout>
  )
}

export default Pagenotfound