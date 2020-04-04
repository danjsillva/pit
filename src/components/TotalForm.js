import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

import { AppContext } from "../App";

export default function() {
  const { totalBroker, setTotalBroker, totalApplied } = useContext(AppContext);

  return (
    <div className="">
      <div className="form-group">
        <label>Valor total em conta</label>
        <input
          type="text"
          value={totalBroker}
          onChange={e => setTotalBroker(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          defaultValue={totalApplied}
          readOnly
          className="form-control"
        />
      </div>
    </div>
  );
}
