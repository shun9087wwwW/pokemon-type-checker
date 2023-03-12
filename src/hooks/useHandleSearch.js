import { useState } from "react";

export const useHandleSearch = () => {
  // フィルタリングされた後のタイプ
  const [fourfold, setFourfold] = useState([]);
  const [twofold, setTwofold] = useState([]);
  const [half, setHalf] = useState([]);
  const [quarter, setQuarter] = useState([]);
  const [unaffected, setUnaffected] = useState([]);

  return {
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
  };
};
