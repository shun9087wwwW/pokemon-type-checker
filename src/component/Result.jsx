import React from "react";
import { useHandleClick } from "./../hooks/useHandleClick";

const Result = () => {
  // hooks
  const { superEffective, ineffective, invalid } = useHandleClick();

  return (
    <div className="resultBox container-fluid w-100">
      <h3 className="resultTitle text-center mb-4">検索結果</h3>
      {/* 検索結果の一覧ここから */}
      <div className="typeList container-fluid w-100">
        {/* 効果抜群(こうかは ばつぐんだ！)ここから */}
        <div className="superEffectiveBox border border-dark mb-4">
          <h6
            className="text-center m-0"
            style={{ backgroundColor: "rgba(255,116,97,0.2)" }}
          >
            こうかは ばつぐんだ!
          </h6>
          <hr className="m-0" />
          {superEffective.map((type) => (
            <p key={type} className="m-0 border-bottom text-center">
              {type}
            </p>
          ))}
        </div>
        {/* 効果いまひとつ(こうかは いまひとつのようだ)ここから */}
        <div className="ineffectiveBox border border-dark mb-4">
          <h6
            className="text-center m-0"
            style={{ backgroundColor: "rgba(188,238,255,0.3)" }}
          >
            こうかは いまひとつのようだ
          </h6>
          <hr className="m-0" />
          {ineffective.map((type) => (
            <p key={type} className="m-0 border-bottom text-center">
              {type}
            </p>
          ))}
        </div>
        {/* 無効(こうかが ない ようだ)ここから */}
        <div className="invalidBox border border-dark mb-4">
          <h6
            className="text-center m-0"
            style={{ backgroundColor: "rgba(215,220,215,0.5)" }}
          >
            こうかが ない ようだ...
          </h6>
          <hr className="m-0" />
          {invalid.map((type) => (
            <p key={type} className="m-0 border-bottom text-center">
              {type}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
