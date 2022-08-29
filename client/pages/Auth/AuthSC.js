import styled from "styled-components";

export const AuthSC = {
  Container: styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 1rem;
  `,
  Input: styled.div`
    width: 400px;
    padding: 2rem;
    background: none;
    outline: none;
  `,
};

export const S = {
  Input: styled.input`
    width: 100%;
    border: 1px solid #31313131;
    padding: 0.5rem;
  `,
  Button: styled.input`
    width: 100%;
    background: none;
    outline: none;
    border: 1px solid #31313131;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s ease all;
    &:hover {
      transition: 0.3s ease all;
      background: #333333;
      color: #fff;
    }
  `,
  Span: styled.div`
    cursor: pointer;
    margin: 1rem 0;
  `,
};
