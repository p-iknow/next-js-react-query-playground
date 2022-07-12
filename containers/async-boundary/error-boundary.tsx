import * as Sentry from '@sentry/nextjs';
import Axios, { AxiosError } from 'axios';
import { ErrorBoundary as ReactErrorBoundary, ErrorBoundaryProps } from 'react-error-boundary';

export type CustomErrorBoundaryProps = React.PropsWithRef<
  React.PropsWithChildren<ErrorBoundaryProps>
> & {
  errorCallback?: () => void;
};

type AxiosCustomError = AxiosError<{ errorMessage: string }>;

const errorHandler = (errorCallback?: () => void) => (error: Error) => {
  if (error && Axios.isAxiosError(error)) {
    const errorMessage = (error as AxiosCustomError).response?.data.errorMessage;
    const url = (error as AxiosCustomError).config?.url;
    const status = (error as AxiosCustomError).response?.status;
    Sentry.setContext('Axios Error Info', {
      status,
      errorMessage,
      url,
    });
  }
  if (error) {
    Sentry.captureException(error);
  }
  errorCallback?.();
};

const ErrorBoundary = ({ children, errorCallback, ...restProps }: CustomErrorBoundaryProps) => (
  <ReactErrorBoundary {...restProps} onError={errorHandler(errorCallback)}>
    {children}
  </ReactErrorBoundary>
);

export * from 'react-error-boundary';
export { ErrorBoundary };
