import React from "react";

const List = ({ fourfold, twofold, half, quarter, unaffected }) => {
  return (
    <div className="resultBox container-fluid w-100">
      <h3 className="resultTitle text-center mb-4">検索結果</h3>
      {/* 検索結果の一覧ここから */}
      <div className="ResultList container-fluid w-100">
        {/* タイプ2も入力されたら4倍一覧表示 */}
        {/* 4倍表示ここから */}
        <div className="doubleSuperEffectiveBox mb-4">
          <h6
            className="text-center m-0"
            style={{ backgroundColor: "rgba(30,255,65,0.3)" }}
          >
            こうかは ばつぐんだ!(×4)
          </h6>
          {/* タイプ一覧リストここから */}
          <div className="typeBox">
            {
              <p key={fourfold} className="m-0 border text-center">
                {fourfold}
              </p>
            }
          </div>
        </div>
        {/* 効果抜群(こうかは ばつぐんだ！×2)ここから */}
        <div className="superEffectiveBox mb-4 border">
          <h6
            className="text-center m-0"
            style={{ backgroundColor: "rgba(255,116,97,0.2)" }}
          >
            こうかは ばつぐんだ!(×2)
          </h6>
          {/* タイプ一覧リストここから */}
          <div className="typeBox">
            {
              <p key={twofold} className="m-0 border text-center">
                {twofold}
              </p>
            }
          </div>
        </div>
        {/* 効果いまひとつ(こうかは いまひとつのようだ)ここから */}
        <div className="superEffectiveBox mb-4 border">
          <h6
            className="text-center m-0"
            style={{ backgroundColor: "rgba(188,238,255,0.3)" }}
          >
            こうかは いまひとつのようだ(×0.5)
          </h6>
          {/* タイプ一覧リストここから */}
          <div className="typeBox">
            {
              <p key={half} className="m-0 border text-center">
                {half}
              </p>
            }
          </div>
        </div>
        {/* 効果いまひとつ(こうかは いまひとつのようだ)ここから */}
        <div className="superIneffectiveBox mb-4 border">
          <h6
            className="text-center m-0"
            style={{ backgroundColor: "rgba(0,62,255,0.4)" }}
          >
            こうかは いまひとつのようだ(×0.25)
          </h6>
          {/* タイプ一覧リストここから */}
          <div className="typeBox">
            {
              <p key={quarter} className="m-0 border text-center">
                {quarter}
              </p>
            }
          </div>
        </div>
        {/* 無効(こうかが ない ようだ)ここから */}
        <div className="superEffectiveBox mb-4 border">
          <h6
            className="text-center m-0"
            style={{ backgroundColor: "rgba(215,220,215,0.5)" }}
          >
            こうかが ない ようだ...(×0)
          </h6>
          {/* タイプ一覧リストここから */}
          <div className="typeBox">
            {
              <p key={unaffected} className="m-0 border text-center">
                {unaffected}
              </p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
