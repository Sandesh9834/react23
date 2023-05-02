import { userData } from "./data";

export function UserProfile() {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name : {userData.name}</p>
      <p>Age : {userData.age}</p>
      <p>Email : {userData.email}</p>
    </div>
  );
}
