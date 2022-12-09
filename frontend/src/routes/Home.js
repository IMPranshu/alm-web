import React from "react";
import "@gooddata/sdk-ui-dashboard/styles/css/main.css";
import tigerFactory, { TigerTokenAuthProvider } from "@gooddata/sdk-backend-tiger";
import Page from "../components/Page";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";


import * as Md from "../md/full";

const backend = tigerFactory().withAuthentication(new TigerTokenAuthProvider(process.env.TIGER_API_TOKEN));
function DashboardView() {
  return (
    <div style={{ height: 1000 }}>
      <Dashboard
        dashboard={Md.Dashboards.Demo}
      />
    </div>
  );
}

const Home = () => {

  return (
    <Page>
      <DashboardView />
    </Page>
  );
};

export default Home;