
import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const render = (
  ui: JSX.Element,
  ...renderOptions: Omit<RenderOptions, 'queries'>[]
) => {
  const Wrapper: React.FC = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
