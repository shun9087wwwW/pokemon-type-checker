import { useHandleChangeType } from "./useHandleChangeType";
import { useState } from "react";

export const useHandleClick = () => {
  // hooks
  const { form1Val, form2Val } = useHandleChangeType();

  // こうかばつぐん,こうかがいまひとつ、むこうのタイプを格納するState
  const [superEffective, setSuperEffective] = useState([]);
  const [ineffective, setIneffective] = useState([]);
  const [invalid, setInvalid] = useState([]);

  // 検索機能(ボタンが押されたら)
  const handleClick = () => {
    // 入力された値が1つのとき
    if (form1Val && !form2Val) {
      // formVal1の値の中身をチェック
      switch (form1Val) {
        case "ノーマル":
          setSuperEffective(["かくとう"]);
          setIneffective([]);
          setInvalid(["ゴースト"]);
          break;
        case "ほのお":
          setSuperEffective(["みず", "じめん", "いわ"]);
          setIneffective([
            "ほのお",
            "くさ",
            "こおり",
            "むし",
            "はがね",
            "フェアリー",
          ]);
          setInvalid([]);
          break;
        default:
          console.log("default");
      }
    }
  };

  return { superEffective, ineffective, invalid, handleClick };
};
