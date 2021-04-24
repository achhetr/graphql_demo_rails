import React from 'react';
// import { gql, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
// import UserAvatar from './UserAvatar'
// import CreateUser from './CreateUser'

const GET_USER = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

const Users = (props) => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return 'Loading..';
  if (error) return `Errors..${error.message}`;
  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
};

export default Users;
