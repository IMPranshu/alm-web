import React, {useEffect, useState} from "react";
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
            <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} />
            <AttributeFilterButton filter={typeFilter} onApply={setTypeFilter} />
            <AttributeFilterButton filter={loantermFilter} onApply={setLoantermFilter} />

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
        filters={scoreFilter ? [scoreFilter,typeFilter,loantermFilter] : []}
    />
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
            <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} />
            <AttributeFilterButton filter={typeFilter} onApply={setTypeFilter} />
            <AttributeFilterButton filter={loantermFilter} onApply={setLoantermFilter} />

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
        filters={scoreFilter ? [scoreFilter,typeFilter,loantermFilter] : []}
    />
</div>
</div>

  );
}

function BacktestInsightView() {

  return (


    <div style={style}>
    <InsightView
        insight={Md.Insights.Backtest}

    />
</div>


  );
}

function RedirectOfferScreen() {
    useEffect(() => {
      const timeout = setTimeout(() => {
        // 👇️ redirects to an external URL
        window.location.replace('https://gd.dasceq.link/');
      }, 3000);

      return () => clearTimeout(timeout);
    }, []);

    return <>Will redirect in 3 seconds...</>;
  }



const Offers = () => {

  return (
    <Page>

      <h1>Offers</h1>
      <a href="https://gd.dasceq.link/" target="_blank" rel="noopener noreferrer">
  <Button>Send Offers</Button>
</a>



    </Page>
  );
};

export default Offers;