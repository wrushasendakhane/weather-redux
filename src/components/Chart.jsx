import React, { Fragment } from "react";
import _ from "lodash";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

import "./Chart.css";

function Chart(props) {
  return (
    <Fragment>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {_.round(_.mean(props.data))} {props.units}
      </div>
    </Fragment>
  );
}

export default Chart;
