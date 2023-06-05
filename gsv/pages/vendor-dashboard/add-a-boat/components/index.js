import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ContentTabContent from "./ContentTabContent";
import LocationTabContent from "./LocationTabContent";
import PricingTabContent from "./PricingTabContent";
import AttributesTabContent from "./AttributesTabContent";

const Index = () => {
  const tabs = [
    {
      label: "Info",
      labelNo: 1,
      content: <ContentTabContent />,
    },
    {
      label: "Pricing",
      labelNo: 2,
      content: <PricingTabContent />,
    },
  ];

  return (
    <div>
      <ContentTabContent></ContentTabContent>
      {/* <PricingTabContent></PricingTabContent> */}
    </div>
  );
};

export default Index;
