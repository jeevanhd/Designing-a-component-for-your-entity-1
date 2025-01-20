import React, { useState } from "react";
const styles = {};

const userCard = () => {
  const [data, setData] = useState({
    name: "jeevan",
    email: "iWontTellMyEmail@email.com",
    phone: "93431 69420",
    address: "some were on earth",
    image: "secret.png",
  });

  return (
    <div class="card">
      <img
        src={data.image}
        alt="Profile Photo"
        className="profile-photo"
        style={styles.profilePhoto}
      />

      <h2 className="name">{data.name}</h2>

      <p className="mail">{data.email}</p>

      <p className="phone-number">{data.phone}</p>

      <p className="address">{data.address}</p>
    </div>
  );
};

export default userCard;
