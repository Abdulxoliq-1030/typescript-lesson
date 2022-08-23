type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { name, messageCount, isLoggedIn } = props;
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
