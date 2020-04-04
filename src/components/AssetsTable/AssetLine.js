import React, { useContext } from "react";

import AssetLineLabel from "./AssetLineLabel";
import AssetLineGrade from "./AssetLineGrade";
import AssetLineApplied from "./AssetLineApplied";
import AssetLineGoal from "./AssetLineGoal";

import { AppContext } from "../../App";

export default function AssetLine({ asset }) {
  const { assets, setAssets } = useContext(AppContext);

  const handleChangeAsset = data => {
    setAssets(
      assets.map(item =>
        item.label === asset.label ? { ...asset, ...data } : item
      )
    );
  };

  return (
    <div className="row">
      <div className="col-3">
        <AssetLineLabel asset={asset} />
      </div>
      <div className="col-1">
        <AssetLineGrade asset={asset} onChangeAsset={handleChangeAsset} />
      </div>
      <div className="col-3">
        <AssetLineApplied asset={asset} onChangeAsset={handleChangeAsset} />
      </div>
      <div className="col-3">
        <AssetLineGoal asset={asset} />
      </div>
      <div className="col-2">COMPRAR</div>
    </div>
  );
}
