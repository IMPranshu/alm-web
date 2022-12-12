import React, {useState} from "react";
import "@gooddata/sdk-ui-dashboard/styles/css/main.css";
import Page from "../components/Page";
import {Export} from "./Export.js"


import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { modifyMeasure, newNegativeAttributeFilter,newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { AttributeFilterButton } from "@gooddata/sdk-ui-filters";




import * as Md from "../md/full";


const style = { height: 400 };


function SegmentfirstView() {
    const [scoreFilter] = useState(newPositiveAttributeFilter(Md.InternalscoreBins, { uris: ["801-900", "701-800"] }));

    // currentbalance, installment amount, loanterm, numberofaccounts, max dayspastdur6m,

    function onDrillHandler(event) {
        // handle drill
    }


  return (
    <div className="s-attribute-filter">
            {/* <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} /> */}

    <div style={style}>
    <PivotTable
        rows={[Md.Loannum_1,
            Md.Custinternalunderwritingscore_1,
            Md.Loanterm,
            Md.MaxDpdLast6m,
            Md.TotalDelqLast6m,
            Md.LoanStartMonthYear
        ]}
        onDrill={onDrillHandler}
        filters={scoreFilter ? [scoreFilter] : []}
    />
</div>
</div>

  );
}

function SegmentsecondView() {
    const [scoreFilter, setScoreFilter] = useState(newPositiveAttributeFilter(Md.InternalscoreBins, { uris: ["601-700"] }));

    // currentbalance, installment amount, loanterm, numberofaccounts, max dayspastdur6m,

    function onDrillHandler(event) {
        // handle drill
    }


  return (
    <div className="s-attribute-filter">
            {/* <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} /> */}

    <div style={style}>
    <PivotTable
        rows={[Md.Loannum_1,
            Md.Custinternalunderwritingscore_1,
            Md.Loanterm,
            Md.MaxDpdLast6m,
            Md.TotalDelqLast6m,
            Md.LoanStartMonthYear
        ]}
        onDrill={onDrillHandler}
        filters={scoreFilter ? [scoreFilter] : []}
    />
</div>
</div>

  );
}

function SegmentthirdView() {
    const [scoreFilter, setScoreFilter] = useState(newPositiveAttributeFilter(Md.InternalscoreBins, { uris: ["501-600"] }));

    // currentbalance, installment amount, loanterm, numberofaccounts, max dayspastdur6m,

    function onDrillHandler(event) {
        // handle drill
    }


  return (
    <div className="s-attribute-filter">
            {/* <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} /> */}

    <div style={style}>
    <PivotTable
        rows={[Md.Loannum_1,
            Md.Custinternalunderwritingscore_1,
            Md.Loanterm,
            Md.MaxDpdLast6m,
            Md.TotalDelqLast6m,
            Md.LoanStartMonthYear
        ]}
        onDrill={onDrillHandler}
        filters={scoreFilter ? [scoreFilter] : []}
    />
</div>
</div>

  );
}


const Strategies = () => {

  return (
    <Page>

      <h2>Segment 1</h2>
      <SegmentfirstView />
      <h2>Segment 2</h2>
      <SegmentsecondView />
      <h2>Segment 3</h2>
      <SegmentthirdView />


    </Page>
  );
};

export default Strategies;