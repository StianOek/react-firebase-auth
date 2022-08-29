import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavSC = {
  Wrapper: styled.ul`
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-bottom: 1px solid #313131;
    margin-bottom: 2rem;
  `,

  Li: styled.li`
    text-decoration: none;
    list-style: none;
  `,

  NavLink: styled(Link)`
    color: #313131;
    font-size: 16px;
    text-decoration: none;
    margin-right: 0.5rem;
    margin-left: 2rem;
  `,

  NavLinkWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  LinkWrapper: styled.div`
    display: flex;
  `,

  Button: styled.button`
    font-size: 16px;
    background: none;
    outline: none;
    border: 1px solid #fff;
    border-radius: 0.5rem;
    cursor: pointer;
  `,
};
