import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin: 0px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 60%;
  padding: 0;
  margin: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  & img {
    max-width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 60%;
  height: 100%;
  /* object-fit: cover; */
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 45%;
  height: 100%;
  padding: 1rem;
  margin-top: 5rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: left;
  width: 100%;
`;

export const Description = styled.p`
  width: 100%;
  max-width: 100%;
  max-height: 55%;
  font-size: 1.2rem;
  margin: 0;
  padding: 1rem 0;
  text-align: left;
  overflow-y: auto;
`;
