import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const getTypenameQuery = gql`
  {
    posts: allPosts {
      id
      title
    }
  }
`;

function Index() {
  return (
    <Query query={getTypenameQuery}>
      {({ data }) => {
        return data && data.posts.map(post => <p key={post.id}>{post.title}</p>);
      }}
    </Query>
  );
}

export default Index;
