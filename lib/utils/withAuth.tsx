import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { getAuthToken } from './helpers';

const withAuth =
// eslint-disable-next-line react/display-name
  <PageProps, >(Page: NextPage<PageProps>): NextPage<PageProps> => ({ ...props }) => {
    const router = useRouter();

    useEffect(() => {
      if (!getAuthToken()) {
        router.push('/');
      }
    }, []);

    return <Page {...(props as PageProps)} />
  };

export default withAuth;
