import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const MyOrders = () => {
  const Navigate = useNavigate();
  const goBack = () => Navigate(-1);
  return (
    <>
      <Container>
        <Button onClick={goBack}> Go Back</Button>
        <h3>Are you smile ?</h3>
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 800px;
  height: 300px;
  background-color: #ffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 2.4%;
  margin-left: 20rem;
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
