import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  margin: 2rem 0;
  padding: 0;
  color: #fdd835;
  text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
    -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,
    -2px 0px 0 #000000, 0px -2px 0 #000000;

  letter-spacing: 0.1rem;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  height: 100%;
  padding: 0;
`;
