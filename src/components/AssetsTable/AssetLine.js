import React, { useContext } from "react";

import AssetLineLabel from "./AssetLineLabel";
import AssetLineGrade from "./AssetLineGrade";
import AssetLineApplied from "./AssetLineApplied";
import AssetLineGoal from "./AssetLineGoal";

import { AppContext } from "../../App";

export default function AssetLine({ asset }) {
  const { totals, setTotals, assets, setAssets } = useContext(AppContext);

  const handleChangeAsset = data => {
    const newAssets = assets.map(item =>
      item.label === asset.label ? { ...asset, ...data } : item
    );

    setAssets(newAssets);
    setTotals({
      ...totals,
      applied: newAssets.reduce(
        (total, item) =>
          parseInt(total) + parseInt(item.applied) * parseFloat(item.price),
        0
      ),
      grade: newAssets.reduce(
        (total, item) => parseInt(total) + parseInt(item.grade),
        0
      )
    });
  };

  return (
    <div className="row py-3">
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
      <div className="col-2">{asset.status}</div>
    </div>
  );
}
