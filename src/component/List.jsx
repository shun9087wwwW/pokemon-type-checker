import React from "react";

const List = ({ pickUp }) => {
  return (
    <div className="resultBox container-fluid w-100">
      <h3 className="resultTitle text-center mb-4">検索結果</h3>
      {/* 検索結果の一覧ここから */}
      <div className="ResultList container-fluid w-100">
        {/* 効果抜群(こうかは ばつぐんだ！×2)ここから */}
        <div className="twofoldBox mb-4 border">
          <h6
            className="text-center m-0"
            style={{ backgroundColor: "rgba(255,116,97,0.2)" }}
          >
            こうかは ばつぐんだ!(×2)
          </h6>
          {/* タイプ一覧リストここから */}
          <div className="typeBox">
            {
              <p
                key={pickUp.map((type) => type.name)}
                className="m-0 border text-center"
              >
                {pickUp.map((type) => type.twofold)}
              </p>
            }
          </div>
        </div>
        {/* 効果いまひとつ(こうかは いまひとつのようだ)ここから */}
        <div className="halfBox mb-4 border">
          <h6
            className="text-center m-0"
            style={{ backgroundColor: "rgba(188,238,255,0.3)" }}
          >
            こうかは いまひとつのようだ(×0.5)
          </h6>
          {/* タイプ一覧リストここから */}
          <div className="typeBox">
            {
              <p
                key={pickUp.map((type) => type.name)}
                className="m-0 border text-center"
              >
                {pickUp.map((type) => type.half)}
              </p>
            }
          </div>
        </div>

        {/* 無効(こうかが ない ようだ)ここから */}
        <div className="unAffectedBox mb-4 border">
          <h6
            className="text-center m-0"
            style={{ backgroundColor: "rgba(215,220,215,0.5)" }}
          >
            こうかが ない ようだ...(×0)
          </h6>
          {/* タイプ一覧リストここから */}
          <div className="typeBox">
            {
              <p
                key={pickUp.map((type) => type.name)}
                className="m-0 border text-center"
              >
                {pickUp.map((type) => type.unaffected)}
              </p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
