type HeadingProps = {
  children: string;
};

function Heading(props: HeadingProps) {
  const {} = props;

  return (
    <>
      <h1>{props.children}</h1>
    </>
  );
}

export default Heading;
