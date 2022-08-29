import styled from "styled-components";

export const ProfileSC = {
  Form: styled.form`
    width: 100%;
  `,
  Button: styled.button`
    width: 200px;
    margin: auto;
  `,
  InputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      font-size: 20px;
      text-align: start;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid #313131;
      margin: 1rem 0;
    }
  `,
};
