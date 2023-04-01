import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 280px;
  height: 400px;
  padding: 0;
  margin: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1rem auto;
  padding: 0 1rem;
  height: 3.5rem;
`;

export const Description = styled.p`
  width: 100%;
  max-width: 100%;
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
`;

export const Time = styled.p`
  font-size: 0.9rem;
  margin: 0.3rem auto;
  width: 90%;
  text-align: right;
`;

export const ButtonReadMore = styled.button`
  width: 100%;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  background-color: blue;
  margin: 0;
  padding: 1rem 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fdd835;
    color: #000;
  }

  position: absolute;
  bottom: 0px;
`;
