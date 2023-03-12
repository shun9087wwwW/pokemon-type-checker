import { useState } from "react";
import { typeData } from "./../data/typeData";

export const useHandleChangeType = () => {
  // 入力フォーム1と2の値を保存するState
  const [form1Val, setForm1Val] = useState("");
  const [form2Val, setForm2Val] = useState("");

  // 検索機能
  const [searchQuery, setSearchQuery] = useState(typeData);
  // filter
  const handleSearch = (target) => {
    // filter関数で取り除く
    setSearchQuery(
      typeData.filter((type) => type.toLowerCase().includes(target))
    );
  };

  // 値の確認機能
  const handleChangeType1 = (e) => {
    setForm1Val(e.target.value);
    handleSearch(form1Val);
  };
  const handleChangeType2 = (e) => {
    setForm2Val(e.target.value);
    handleSearch(form2Val);
  };

  return {
    form1Val,
    form2Val,
    setForm1Val,
    setForm2Val,
    handleChangeType1,
    handleChangeType2,
    searchQuery,
    setSearchQuery,
  };
};
