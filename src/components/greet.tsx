type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name}! You have 10 unread messages</h2>
    </div>
  );
};

export default Greet;
