const Page = async () => {
  const response = await fetch("https://randomuser.me/api/");
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  const data = await response.json();
  const user = data.results[0];

  return (
    <div>
      <h1>
        {user.name.first} {user.name.last}
      </h1>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <img src={user.picture.large} alt="User Picture" />
    </div>
  );
};

export default Page;
