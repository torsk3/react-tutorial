/* eslint react-hooks/exhaustive-deps: off*/
import { useEffect, useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowflag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowflag);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num % 3 === 0) {
      faceShowflag || setFaceShowFlag(true);
    } else {
      faceShowflag && setFaceShowFlag(false);
    }
    // eslitn-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1>こんにちは！</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です</ColorfullMessage>
      <button onClick={onClickCountUp}>ボタン</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowflag && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;
