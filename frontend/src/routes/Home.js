import React, { useState } from "react";

import Page from "../components/Page";
import { InsightView } from "@gooddata/sdk-ui-ext";

import * as Md from "../md/full";

import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { modifyMeasure, newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";

function LoansBySegment() {
  return (
    <div style={{ height: 400 }}>
      <InsightView
        insight={Md.Insights.LoansBySegment}
        showTitle={"Loans by segment"}
      />
    </div>
  );
}

function SegmentVariables() {
  return (
    <div style={{ height: 400 }}>
      <InsightView
        insight={Md.Insights.SegmentVariables}
        showTitle={"Segment Variables"}
      />
    </div>
  );
}

const segmentFilter = newPositiveAttributeFilter(Md.PaymentPropensity, ["S1"]);

function CustomChart() {
  const loans = modifyMeasure(Md.TotalDelqLast6m.Avg, (m) =>
    m.title("Average Deliquencies")
  );
  const [filter, setFilter] = useState(segmentFilter);

  return (
    <div style={{ height: 300 }}>
      <AttributeFilter
        filter={filter}
        onApply={(updatedFilter) => {
          console.log("Applying updated filter:", updatedFilter);
          setFilter(updatedFilter);
        }}
      />
      <ColumnChart
        measures={[loans]}
        viewBy={Md.PaymentPropensity}
        filters={[filter]}
      />
    </div>
  );
}

const Home = () => {
  return (
    <Page>
      <LoansBySegment />
      <SegmentVariables />
      <CustomChart />
    </Page>
  );
};

export default Home;
