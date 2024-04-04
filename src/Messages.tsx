function Messages() {
  const name = "Booob";
  if (name)
    return <h1 className="text-4xl text-center underline">Hello {name}</h1>;
  return <h1 className="text-4xl text-center underline">Hello World!</h1>;
}

export default Messages;
