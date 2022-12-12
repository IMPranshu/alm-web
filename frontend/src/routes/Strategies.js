import React, {useState} from "react";
import "@gooddata/sdk-ui-dashboard/styles/css/main.css";
import Page from "../components/Page";

import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { modifyMeasure, newNegativeAttributeFilter,newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { AttributeFilterButton } from "@gooddata/sdk-ui-filters";




import * as Md from "../md/full";


const style = { height: 400 };

function PivotView() {
    const [typeFilter, setTypeFilter] = useState(newNegativeAttributeFilter(Md.NewOld, { uris: [] }));
    const [scoreFilter, setScoreFilter] = useState(newNegativeAttributeFilter(Md.InternalscoreBins, { uris: [] }));
    const [delqFilter, setDelqFilter] = useState(newNegativeAttributeFilter(Md.TotalDelqLast6m, { uris: [] }));
    const [maxdpdFilter, setMaxdpdFilter] = useState(newNegativeAttributeFilter(Md.MaxDpdLast6mBins, { uris: [] }));
    const [balFilter, setBalFilter] = useState(newNegativeAttributeFilter(Md.CurrentbalanceBins, { uris: [] }));
    const [instamtFilter, setInstamtFilter] = useState(newNegativeAttributeFilter(Md.InstallmentamountBins, { uris: [] }));
    const [loantermFilter, setLoantermFilter] = useState(newNegativeAttributeFilter(Md.LoantermBins, { uris: [] }));
    const [numofaccFilter, setNumofaccFilter] = useState(newNegativeAttributeFilter(Md.NumberofaccountsBins, { uris: [] }));

    // currentbalance, installment amount, loanterm, numberofaccounts, max dayspastdur6m,

    function onDrillHandler(event) {
        // handle drill
    }


  return (
    <div className="s-attribute-filter">
            <AttributeFilterButton filter={typeFilter} onApply={setTypeFilter} />
            <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} />
            <AttributeFilterButton filter={delqFilter} onApply={setDelqFilter} />
            <AttributeFilterButton filter={maxdpdFilter} onApply={setMaxdpdFilter} />
            <AttributeFilterButton filter={balFilter} onApply={setBalFilter} />
            <AttributeFilterButton filter={instamtFilter} onApply={setInstamtFilter} />
            <AttributeFilterButton filter={loantermFilter} onApply={setLoantermFilter} />
            <AttributeFilterButton filter={numofaccFilter} onApply={setNumofaccFilter} />

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
        filters={scoreFilter ? [typeFilter,scoreFilter,delqFilter,maxdpdFilter,balFilter,instamtFilter,loantermFilter,numofaccFilter] : []}
    />
</div>
</div>

  );
}

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
        <h1>Total Population</h1>
      <PivotView />
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