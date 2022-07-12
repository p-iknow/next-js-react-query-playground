import { ComponentProps, Suspense, useEffect, useState } from 'react';

export default function SSRSafeSuspense(props: ComponentProps<typeof Suspense>) {
  /*
    useMounted 를 쓴 이유
    https://github.com/vercel/next.js/issues/7417
   */

  const isMounted = useMounted();
  if (isMounted) {
    return <Suspense {...props} />;
  }
  // eslint-disable-next-line react/destructuring-assignment
  return <>{props.fallback}</>;
}

const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};
