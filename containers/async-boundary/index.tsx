import { CustomErrorBoundaryProps, ErrorBoundary } from 'containers/async-boundary/error-boundary';
import SSRSafeSuspense from 'containers/async-boundary/ssr-safe--suspense';
import { ComponentProps } from 'react';

type Props = CustomErrorBoundaryProps & {
  pendingFallback: ComponentProps<typeof SSRSafeSuspense>['fallback'];
};

function AsyncBoundary({ pendingFallback, children, ...errorBoundaryProps }: Props) {
  return (
    <ErrorBoundary {...errorBoundaryProps}>
      <SSRSafeSuspense fallback={pendingFallback}>
        {children} {/* <- fulfilled */}
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
