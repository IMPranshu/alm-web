import React, {useState} from "react";
import "@gooddata/sdk-ui-dashboard/styles/css/main.css";
import Page from "../components/Page";
import {Export} from "./Export.js"


import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { modifyMeasure, newNegativeAttributeFilter,newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { AttributeFilterButton } from "@gooddata/sdk-ui-filters";




import * as Md from "../md/full";
import Button from "../components/controls/Button";
import { NavLink } from "react-router-dom";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";


const style = { height: 400 };


function SegmentfirstView() {
    const [scoreFilter, setScoreFilter] = useState(newPositiveAttributeFilter(Md.InternalscoreBins, { uris: ["801-900", "701-800"] }));
    const [typeFilter, setTypeFilter] = useState(newPositiveAttributeFilter(Md.Loanstartyear, { uris: ["2019"] }));
    const [loantermFilter, setLoantermFilter] = useState(newPositiveAttributeFilter(Md.LoantermBins, { uris: ["0-70","71-80","81-90"] }));

    // currentbalance, installment amount, loanterm, numberofaccounts, max dayspastdur6m,

    function onDrillHandler(event) {
        // handle drill
    }


  return (
    <div className="s-attribute-filter">
            {/* <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} />
            <AttributeFilterButton filter={typeFilter} onApply={setTypeFilter} />
            <AttributeFilterButton filter={loantermFilter} onApply={setLoantermFilter} /> */}

    <div style={{height: 600}}>

    <Dashboard
      dashboard={Md.Dashboards.Segment}
       />
    {/* <PivotTable
        rows={[Md.Loannum_1,
            Md.Custinternalunderwritingscore_1,
            Md.Loanterm,
            Md.MaxDpdLast6m,
            Md.TotalDelqLast6m,
            Md.LoanStartMonthYear
        ]}
        onDrill={onDrillHandler}
        filters={scoreFilter ? [scoreFilter,typeFilter,loantermFilter] : []}
    /> */}
</div>
</div>

  );
}

function SegmentsecondView() {
    const [scoreFilter, setScoreFilter] = useState(newPositiveAttributeFilter(Md.InternalscoreBins, { uris: ["601-700"] }));
    const [typeFilter, setTypeFilter] = useState(newPositiveAttributeFilter(Md.Loanstartyear, { uris: ["2019"] }));
    const [loantermFilter, setLoantermFilter] = useState(newPositiveAttributeFilter(Md.LoantermBins, { uris: ["0-70","71-80","81-90"] }));

    // currentbalance, installment amount, loanterm, numberofaccounts, max dayspastdur6m,

    function onDrillHandler(event) {
        // handle drill
    }


  return (
    <div className="s-attribute-filter">
            {/* <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} />
            <AttributeFilterButton filter={typeFilter} onApply={setTypeFilter} />
            <AttributeFilterButton filter={loantermFilter} onApply={setLoantermFilter} /> */}

            <div style={{height: 600}}>
    <Dashboard
      dashboard={Md.Dashboards.Segment}
       />
    {/* <PivotTable
        rows={[Md.Loannum_1,
            Md.Custinternalunderwritingscore_1,
            Md.Loanterm,
            Md.MaxDpdLast6m,
            Md.TotalDelqLast6m,
            Md.LoanStartMonthYear,

        ]}
        onDrill={onDrillHandler}
        filters={scoreFilter ? [scoreFilter,typeFilter,loantermFilter] : []}
    /> */}
</div>
</div>

  );
}

function SegmentthirdView() {
    const [scoreFilter, setScoreFilter] = useState(newNegativeAttributeFilter(Md.MaxDpdLast6mBins, { uris: [] }));
    const [typeFilter, setTypeFilter] = useState(newPositiveAttributeFilter(Md.LoanStartMonthYear, { uris: ["April-2022"] }));
    const [loantermFilter, setLoantermFilter] = useState(newPositiveAttributeFilter(Md.LoantermBins, { uris: ["0-70","71-80","81-90"] }));

    // currentbalance, installment amount, loanterm, numberofaccounts, max dayspastdur6m,

    function onDrillHandler(event) {
        // handle drill
    }


  return (
    <div className="s-attribute-filter">
            {/* <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} />
            <AttributeFilterButton filter={typeFilter} onApply={setTypeFilter} />
            <AttributeFilterButton filter={loantermFilter} onApply={setLoantermFilter} /> */}

    <div style={{height: 600}}>
    <Dashboard
      dashboard={Md.Dashboards.Segment}
       />
    {/* <PivotTable
        rows={[Md.Loannum_1,
            Md.Custinternalunderwritingscore_1,
            Md.Loanterm,
            Md.MaxDpdLast6m,
            Md.TotalDelqLast6m,
            Md.LoanStartMonthYear
        ]}
        onDrill={onDrillHandler}
        filters={scoreFilter ? [scoreFilter,typeFilter,loantermFilter] : []}
    /> */}
</div>
</div>

  );
}


const Strategies = () => {

  return (
    <Page>

      <h2>Segment 1(High Risk)</h2>
      <SegmentthirdView />
      <NavLink to={"/options"} >
                    <Button><h3>Add to an Option</h3></Button>
      </NavLink>


      <h2>Segment 2(Medium Risk)</h2>
      <SegmentsecondView />
      <NavLink to={"/options"} >
                    <Button><h3>Add to an Option</h3></Button>
      </NavLink>
      <h2>Segment 3(Low Risk)</h2>
      <SegmentfirstView />
      <NavLink to={"/options"} >
                    <Button><h3>Add to an Option</h3></Button>
      </NavLink>

    </Page>
  );
};

export default Strategies;