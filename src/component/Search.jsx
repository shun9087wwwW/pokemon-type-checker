import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import List from "./List";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Search = () => {
  // state
  const [types, setTypes] = useState([]);
  const [pickUp, setPickUp] = useState([]);

  useEffect(() => {
    // データベースから取得する
    const typeData = collection(db, "type");

    // リアルタイムで取得し、配列stateに格納する
    onSnapshot(typeData, (type) => {
      setTypes(type.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  //state
  const [form, setForm] = useState("");

  // 関数
  const handleSelect = (e) => {
    try {
      if (e.target.value === "タイプを選んでください") {
        alert("この選択肢は使えません");
      } else {
        setForm(e.target.value);
        // 単タイプ
        if (form) {
          // 選択されたタイプを判別
          if (types.map((type) => type.name).includes(form)) {
            // trueならそのタイプのオブジェクトのみ取り出す。
            setPickUp(types.filter((type) => type.name === form));
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (e) => {
    // 中身が消えないために
    e.preventDefault();
    try {
      // 単タイプ
      if (form) {
        // 選択されたタイプを判別
        if (types.map((type) => type.name).includes(form)) {
          // trueならそのタイプのオブジェクトのみ取り出す。
          setPickUp(types.filter((type) => type.name === form));
        }
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
        className="usageBox container p-2 mt-4 mb-3 d-flex flex-column text-center"
        style={{ backgroundColor: "rgba(31,123,255,0.1)" }}
      >
        <p className="h6 pb-2">
          <SearchIcon />
          使い方
        </p>
        <p className="m-0">
          <small>弱点を知りたいポケモンのタイプを入力してください</small>
        </p>
        <p className="mb-3 text-danger">
          <small>
            <span>複数タイプの相性表は今後実装予定です</span>
            {/* <span>複数タイプの相性表は一番下に表示されます</span> */}
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
        <select className="form-select" onChange={(e) => handleSelect(e)}>
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
      <List pickUp={pickUp} />
    </div>
  );
};

export default Search;
