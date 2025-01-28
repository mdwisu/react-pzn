import { ProfileContext } from "./ProfileContext";
import ProfileAddress from "./ProfileAddress";
import Profile from "./Profile";

export default function ProfileApp() {
  return (
    <div>
      <ProfileContext.Provider value="Muhammad Dwi Susanto">
        <h1>Profile App</h1>
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </div>
  );
}
