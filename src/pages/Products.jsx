import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const data = [
  {
    title: "Iphone 14 pro ",
    id: 1,
    price: 1320,
    url: "https://cdn.dxomark.com/wp-content/uploads/medias/post-125428/Apple-iPhone-14-Pro-Max_FINAL_featured-image-packshot-review-1.jpg",
    about:
      "Apple iPhone 14 Pro получился компактным смартфоном, учитывая тот факт, что большинство смартфонов имеют диагональ более 6.5 дюймов. Его нельзя назвать легким, хоть внутри и находится не очень большая батарея. Причина большого веса для таких размеров заключается в рамке вокруг дисплея, сделанной из нержавеющей стали, которая заметно тяжелее, чем алюминий. С обеих сторон он также защищен достаточно прочным стеклом.",
  },
  {
    title: "Iphone 13 pro",
    id: 2,
    price: 1320,
    url: "https://cdn.dxomark.com/wp-content/uploads/medias/post-94778/Apple-iPhone-13-Pro-featured-image-packshot-review.jpg",
    about:
      "На презентации 14 сентября Apple ни слова не сказала об аккумуляторах новых iPhone. Несмотря на то что в компании объявили о приросте автономности всех моделей, фактическую ёмкость так и оставили в тайне. В Купертино вообще предпочитают особенно не распространяться о цифрах, которые могут быть мало понятны пользователям. Однако сказать о том, что батарейка действительно выросла и стала держать зарядку дольше, было вполне можно.",
  },
  {
    title: "Iphone 12 pro",
    about:
      "Apple iPhone 12 Pro получился относительно компактным и легким устройством за счет тонких рамок и уменьшенной толщины корпуса на 0.7 мм по сравнению с предшественником. С обеих сторон он защищен прочным стеклом Ceramic Shield, которое, по заявлениям производителя, стало в 4 раза прочнее. Рамка выполнена из нержавеющей стали, поэтому смартфон выглядит достойно.",
    id: 3,
    price: 1320,
    url: "https://cdn.dxomark.com/wp-content/uploads/medias/post-125428/Apple-iPhone-14-Pro-Max_FINAL_featured-image-packshot-review-1.jpg",
  },
];
export const Products = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const goBack = () => navigate(-1);
  const navHandler = (el) => {
    navigate(`/Products/${el.id}/details`, { state: el });
  };

  return (
    <>
      <Container>
        {data.map((item) => {
          return (
            <MapCon>
              <Imga src={item.url}></Imga>
              <h2>{item.title}</h2>
              <h3> ${item.price}</h3>
              <Button onClick={() => navHandler(item)} key={item.id}>
                More
              </Button>
            </MapCon>
          );
        })}
      </Container>
      <Button onClick={goBack}>Go Back</Button>
    </>
  );
};
const Container = styled.div`
  display: flex;
  gap: 70px;
  text-align: center;
  justify-content: center;
`;
const MapCon = styled.div`
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 420px;
  border-radius: 7%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Imga = styled.img`
  width: 300px;
  height: auto;
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
