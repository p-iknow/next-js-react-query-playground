import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <header>
      <Link href="/">
        <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
      </Link>
      <Link href="/react-query-without-suspense">
        <a className={pathname === '/react-query-without-suspense' ? 'is-active' : ''}>
          React-Query-Without-Suspense
        </a>
      </Link>
      <Link href="/react-query-suspense-sequential">
        <a className={pathname === '/react-query-suspense-sequential' ? 'is-active' : ''}>
          React-Query-Suspense-Sequential
        </a>
      </Link>
      <Link href="/react-query-suspense-parallel">
        <a className={pathname === '/react-query-suspense-parallel' ? 'is-active' : ''}>
          React-Query-Suspense-Parallel
        </a>
      </Link>
      <style jsx>{`
        header {
          margin-bottom: 25px;
        }
        a {
          font-size: 14px;
          margin-right: 15px;
          text-decoration: none;
        }
        .is-active {
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
};
