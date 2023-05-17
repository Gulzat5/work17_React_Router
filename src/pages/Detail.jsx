import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const Detail = () => {
  const Navigate = useNavigate();
  const goBack = () => Navigate(-1);

  const data = useLocation();
  const element = data.state;

  return (
    <Container>
      <div>
        <Button onClick={goBack}>Go Back</Button>
        <Imga src={element.url}></Imga>
      </div>
      <div>
        <h2>{element.title}</h2>
        <h2>${element.price}</h2>
      </div>
      <ContainerInfo>{element.about}</ContainerInfo>
    </Container>
  );
};

const Imga = styled.img`
  width: 300px;
  height: auto;
`;
const Container = styled.div`
  margin-left: 25%;
  width: 900px;
  height: 300px;
  display: flex;

  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #ffff;
  border-radius: 4%;
`;
const ContainerInfo = styled.div`
  width: 400px;
  height: 200px;
`;
const Button = styled.button`
  background: #5e5df0;
  border-radius: 999px;
  box-shadow: #5e5df0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
    NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
    EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
`;
