import App, { Container } from 'next/app';
import { NextComponentType } from 'next';
import React from 'react';
import withApolloClient from '../lib/withApolloClient';
import { ApolloProvider } from 'react-apollo';

interface AppInitialProps {
  apolloClient?: any;
  Component: NextComponentType;
  pageProps: any;
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apolloClient }: AppInitialProps = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
