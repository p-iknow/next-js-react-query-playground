import { useName } from '@hooks';

export const Name = () => {
  const { data, isIdle, isLoading, isError } = useName();

  if (isLoading || isIdle) return <div>Loading</div>;

  if (isError) {
    throw new Error('error');
  }

  return (
    <section>
      <span>Name </span> <span>{data.name}</span>
    </section>
  );
};
