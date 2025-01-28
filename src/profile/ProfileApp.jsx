import { ProfileContext } from "./ProfileContext";
import ProfileAddress from "./ProfileAddress";
import Profile from "./Profile";
import ProfileFrom from "./ProfileFrom";
import { useState } from "react";

export default function ProfileApp() {
  const [name, setName] = useState("Muhammad Dwi Susanto");
  return (
    <div>
      <ProfileContext.Provider value={name}>
        <h1>Profile App</h1>
        <ProfileFrom name={name} setName={setName} />
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </div>
  );
}
