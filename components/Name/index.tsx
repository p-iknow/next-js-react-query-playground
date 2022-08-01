import { useName } from '@hooks';

export const Name = () => {
  const { data, isIdle, isLoading, isError, error } = useName();

  if (isLoading || isIdle) return <div>Loading</div>;

  if (isError) {
    throw error;
  }

  return (
    <section>
      <span>Name </span> <span>{data.name}</span>
    </section>
  );
};
