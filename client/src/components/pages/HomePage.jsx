import React from 'react'
import Layout from '../layouts/Layout';
import { useAuth } from '../../context/auth';

function HomePage() {
  const [auth, setAuth] = useAuth();
  return (
      <Layout title={'best offers'}>
          <h1>HomePage</h1>
          <pre>{JSON.stringify(auth, null, 4)}</pre>
      </Layout>
  );
};

export default HomePage;