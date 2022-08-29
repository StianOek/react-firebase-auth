import React, { useRef, useContext } from "react";
import {
  FIREBASE_CHANGE_PASSWORD,
  FIREBASE_API_KEY,
} from "../../common/variables";
import AuthContext from "../../src/store/auth-context";

import { ProfileSC } from "./ProfileSC";
const Profile = () => {
  const newPassword = useRef();
  const { token } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const setNewPassword = newPassword.current.value;
    console.log("submitted", setNewPassword);

    // Write some password validation here

    fetch(FIREBASE_CHANGE_PASSWORD + FIREBASE_API_KEY, {
      method: "POST",
      body: JSON.stringify({
        idToken: token,
        password: setNewPassword,
        returnSecureToken: false,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      // successfull code
    });
  };
  return (
    <div>
      <ProfileSC.Form action="" onSubmit={submitHandler}>
        <ProfileSC.InputWrapper>
          <label htmlFor="password">Change password</label>
          <input
            minLength={7} // not a reliable validation, it can be disabled in dev tools
            type="password"
            id="password"
            name="password"
            ref={newPassword}
          />
        </ProfileSC.InputWrapper>
        <ProfileSC.Button>Submit</ProfileSC.Button>
      </ProfileSC.Form>
    </div>
  );
};

export default Profile;
