function ProfilePage() {
  const [data, setData] = { name: "suresh", MobileNumber: "123" };

  let handlData = (event) => {
    let updateData = {};

    updateData = { name: event.target.value };
    setData((data) => ({
      ...data,
      ...updateData,
    }));
  };

  console.log(data);

  return (
    <div
      style={{
        minHeight: "100vh",
        maxWidth: "100vw",
        backgroundColor: "black",
        paddingTop: "20px",
      }}
    >
      <h2 style={{ color: "white" }}>This is profile Page</h2>

      <input
        type="text"
        value={data.name}
        onChange={(event) => handlData(event)}
      />
    </div>
  );
}
export default ProfilePage;
