import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useQuery, gql} from '@apollo/client';

const GET_HELLO = gql`
  query {
    hello
  }
`;


function App() {
 const {loading, error, data} = useQuery(GET_HELLO);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return <h1>{data.hello}</h1>
}

export default App;
