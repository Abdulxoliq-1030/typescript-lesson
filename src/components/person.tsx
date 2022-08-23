type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: PersonProps) => {
  const { first, last } = props.name;
  return <div>{first} {last}</div>;
};
