import React, { useContext } from "react";
import { toast } from "react-toastify";

import { AppContext } from "../../App";

export default function() {
  const { totals, setTotals } = useContext(AppContext);

  return (
    <div className="row">
      <div className="col-12 col-md-6 form-group">
        <input
          type="text"
          value={totals.broker}
          onChange={e => setTotals({ ...totals, broker: e.target.value })}
          className="form-control"
        />
      </div>

      <div className="col-12 col-md-6 form-group">
        <input
          type="text"
          value={totals.applied}
          readOnly
          className="form-control"
        />
      </div>
    </div>
  );
}
