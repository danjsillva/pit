import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AssetsTable from "./components/AssetsTable";
import "./App.scss";

export const AppContext = React.createContext({});

export default function App() {
  const [totalBroker, setTotalBroker] = useState(200);
  const [totalApplied, setTotalApplied] = useState(0);
  const [totalGrade, setTotalGrade] = useState(0);
  const [assets, setAssets] = useState([]);
  const [asset, setAsset] = useState({
    label: "PETR4",
    price: 10,
    grade: 10,
    amount: 10
  });

  useEffect(() => {
    setTotalApplied(
      assets.reduce((total, item) => total + item.amount * item.price, 0)
    );
    setTotalGrade(assets.reduce((total, item) => total + item.grade, 0));
  }, [assets]);

  function handleSubmitAsset(event) {
    event.preventDefault();

    if (assets.some(item => item.label === asset.label))
      return toast.error("Esse ativo já está na planilha");

    setAssets([...assets, asset]);
  }

  return (
    <AppContext.Provider
      value={{
        totalBroker,
        setTotalBroker,
        totalApplied,
        setTotalApplied,
        totalGrade,
        setTotalGrade,
        assets,
        setAssets
      }}
      className="container"
    >
      <div className="row mb-5">
        <input
          type="text"
          value={totalBroker}
          onChange={e => setTotalBroker(e.target.value)}
          className="col-2 form-control"
        />
        <input
          type="text"
          defaultValue={totalApplied}
          className="col-2 form-control"
        />
        <input type="text" className="col-2 form-control" />
      </div>

      <form onSubmit={handleSubmitAsset} className="row mb-5">
        <input
          type="text"
          value={asset.label}
          onChange={e => setAsset({ ...asset, label: e.target.value })}
          className="col-2 form-control"
        />

        <input
          type="text"
          value={asset.grade}
          onChange={e => setAsset({ ...asset, grade: e.target.value })}
          className="col-2 form-control"
        />

        <input
          type="text"
          value={asset.amount}
          onChange={e => setAsset({ ...asset, amount: e.target.value })}
          className="col-2 form-control"
        />

        <button type="submit" className="btn btn-primary">
          Adicionar ativo
        </button>
      </form>

      <AssetsTable assets={assets} />

      <ToastContainer
        position="bottom-left"
        closeButton={false}
        hideProgressBar={true}
        toastClassName="toast-container"
      />
    </AppContext.Provider>
  );
}
