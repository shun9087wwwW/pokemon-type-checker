import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import List from "./List";
import axios from "axios";
import { useHandleSearch } from "./../hooks/useHandleSearch";

const Search = () => {
  // hooks
  const {
    fourfold,
    twofold,
    half,
    quarter,
    unaffected,
    setFourfold,
    setTwofold,
    setHalf,
    setQuarter,
    setUnaffected,
  } = useHandleSearch();

  //state
  const [form1, setForm1] = useState("");
  const [form2, setForm2] = useState("");

  // 関数
  const handleSelect1 = (e) => {
    console.log("form1:" + e.target.value);
    setForm1(e.target.value);
  };
  const handleSelect2 = (e) => {
    console.log("form2:" + e.target.value);
    setForm2(e.target.value);
  };
  const handleClick = async (e) => {
    // 中身が消えないために
    e.preventDefault();

    try {
      if (form1 && form2) {
        const merged = form1 + form2;
        console.log("結合されました。" + merged);

        // 複合タイプをとってくる
        const data = { name: merged };
        console.log(data);
        console.log("送信されるタイプ：" + data.name);

        // axiosでサーバーへ送信
        await axios
          .get(`http://localhost:5000/api/get/${data.name}`, {
            name: merged,
          })
          .then((res) => {
            console.log(res.data[0]);
            setFourfold(res.data[0].fourfold);
            setTwofold(res.data[0].twofold);
            setHalf(res.data[0].half);
            setQuarter(res.data[0].quarter);
            setUnaffected(res.data[0].unaffected);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (form1 && !form2) {
        console.log("単タイプの相性をデータベースからとってきます");
        const type = form1;
        const data = { name: type };
        console.log("送信されるタイプ：" + data.name);

        // axiosでサーバーへ送信
        await axios
          .get(`http://localhost:5000/api/get/${data.name}`, {
            name: type,
          })
          .then((res) => {
            console.log(res.data[0]);
            setTwofold(res.data[0].twofold);
            setHalf(res.data[0].half);
            setUnaffected(res.data[0].unaffected);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div className="searchBox container-fluid w-100 p-2">
      {/* 説明書きここから */}
      <div
        className="usageBox container p-2 mb-3 d-flex flex-column text-center"
        style={{ backgroundColor: "rgba(31,123,255,0.1)" }}
      >
        <p className="h6 pb-2">
          <SearchIcon />
          使い方
        </p>
        <p className="m-0">
          <small>弱点を知りたいポケモンのタイプを入力してください</small>
        </p>
        <p className="mb-3">
          <small>
            <span>タイプが2つあるものも調べることができます</span>
          </small>
        </p>
      </div>

      {/* 入力フォームここから */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="formBox d-flex flex-column align-items-center"
      >
        <select className="form-select" onChange={(e) => handleSelect1(e)}>
          <option>タイプを選んでください</option>
          <option defaultValue="ノーマル">ノーマル</option>
          <option defaultValue="ほのお">ほのお</option>
          <option defaultValue="みず">みず</option>
          <option defaultValue="でんき">でんき</option>
          <option defaultValue="くさ">くさ</option>
          <option defaultValue="こおり">こおり</option>
          <option defaultValue="かくとう">かくとう</option>
          <option defaultValue="どく">どく</option>
          <option defaultValue="じめん">じめん</option>
          <option defaultValue="ひこう">ひこう</option>
          <option defaultValue="エスパー">エスパー</option>
          <option defaultValue="むし">むし</option>
          <option defaultValue="いわ">いわ</option>
          <option defaultValue="ゴースト">ゴースト</option>
          <option defaultValue="ドラゴン">ドラゴン</option>
          <option defaultValue="はがね">はがね</option>
          <option defaultValue="フェアリー">フェアリー</option>
        </select>
        <select className="form-select" onChange={(e) => handleSelect2(e)}>
          <option>タイプを選んでください</option>
          <option defaultValue="ノーマル">ノーマル</option>
          <option defaultValue="ほのお">ほのお</option>
          <option defaultValue="みず">みず</option>
          <option defaultValue="でんき">でんき</option>
          <option defaultValue="くさ">くさ</option>
          <option defaultValue="こおり">こおり</option>
          <option defaultValue="かくとう">かくとう</option>
          <option defaultValue="どく">どく</option>
          <option defaultValue="じめん">じめん</option>
          <option defaultValue="ひこう">ひこう</option>
          <option defaultValue="エスパー">エスパー</option>
          <option defaultValue="むし">むし</option>
          <option defaultValue="いわ">いわ</option>
          <option defaultValue="ゴースト">ゴースト</option>
          <option defaultValue="ドラゴン">ドラゴン</option>
          <option defaultValue="はがね">はがね</option>
          <option defaultValue="フェアリー">フェアリー</option>
        </select>
        <div className="d-grid gap-2 mx-auto">
          <button
            className="btn btn-primary"
            type="button"
            onClick={(e) => handleClick(e)}
          >
            検索
          </button>
        </div>
      </Box>

      <hr />

      {/* 検索結果ここから */}
      <List
        fourfold={fourfold}
        twofold={twofold}
        half={half}
        quarter={quarter}
        unaffected={unaffected}
      />
    </div>
  );
};

export default Search;
