import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../src/store/auth-context";
import { AuthSC, S } from "./AuthSC";
import {
  FIREBASE_API_KEY,
  FIREBASE_URL_SIGN_UP,
  FIREBASE_URL_SIGN_IN,
} from "../../common/variables";
const Auth = () => {
  navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loginError, setLoginError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const loginEmail = useRef();
  const loginPassword = useRef();
  const authContext = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginEmail.current.value, loginPassword.current.value);
    const emailValue = loginEmail.current.value;
    const passwordValue = loginPassword.current.value;
    setIsLoading(true);
    let url;
    if (isLoggedIn) {
      url = FIREBASE_URL_SIGN_IN + FIREBASE_API_KEY;
    } else {
      url = FIREBASE_URL_SIGN_UP + FIREBASE_API_KEY;
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          // do something
          setIsLoading(false);
          setIsLoggedIn((prevState) => !prevState);
          return res.json();
        } else {
          return res.json().then((err) => {
            console.log(err);
            if (err) {
              setLoginError(err);
              setTimeout(() => {
                setLoginError("");
              }, 3000);
            }
          });
        }
      })
      .then((data) => {
        authContext.login(data.idToken);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {isLoggedIn ? (
        <AuthSC.Container onSubmit={handleSubmit}>
          <h1>Login to Brewz</h1>
          <AuthSC.Input>
            <label htmlFor="email">Email</label>
            <S.Input ref={loginEmail} type="email" id="email" required />
          </AuthSC.Input>
          <AuthSC.Input>
            <label htmlFor="password">Password</label>
            <S.Input
              ref={loginPassword}
              type="password"
              id="password"
              required
            />
          </AuthSC.Input>
          <AuthSC.Input>
            <S.Button type="submit" value="Login" />
          </AuthSC.Input>
          <S.Span>
            <p>
              Dont have an account{" "}
              <span
                style={{ color: "blue" }}
                onClick={() => setIsLoggedIn(false)}
              >
                Sign up
              </span>{" "}
              here
            </p>
          </S.Span>
        </AuthSC.Container>
      ) : (
        <AuthSC.Container onSubmit={handleSubmit}>
          <h1>Sign up now</h1>
          <AuthSC.Input>
            <label htmlFor="email">Email</label>
            <S.Input ref={loginEmail} type="email" id="email" required />
          </AuthSC.Input>
          <AuthSC.Input>
            <label htmlFor="password">Password</label>
            <S.Input
              ref={loginPassword}
              type="password"
              id="password"
              required
            />
          </AuthSC.Input>
          <AuthSC.Input>
            <label htmlFor="password">Repeat password</label>
            <S.Input
              ref={loginPassword}
              type="password"
              id="repeat_password"
              required
            />
          </AuthSC.Input>
          {!isLoading && (
            <AuthSC.Input>
              <S.Button type="submit" value="Sign up" />
            </AuthSC.Input>
          )}
          {isLoading && <p>Loading...</p>}

          {loginError && (
            <div>
              <p style={{ color: "pink" }}>{loginError.error.message}</p>
            </div>
          )}
          <S.Span>
            <p>
              Already have an account{" "}
              <span
                style={{ color: "blue" }}
                onClick={() => setIsLoggedIn(true)}
              >
                login
              </span>{" "}
              here
            </p>
          </S.Span>
        </AuthSC.Container>
      )}
    </>
  );
};

export default Auth;
