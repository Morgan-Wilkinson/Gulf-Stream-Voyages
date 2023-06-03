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
    // {
    //   label: "Location",
    //   labelNo: 2,
    //   content: <LocationTabContent />,
    // },
    {
      label: "Pricing",
      labelNo: 2,
      content: <PricingTabContent />,
    },
    // {
    //   label: "Attributes",
    //   labelNo: 4,
    //   content: <AttributesTabContent />,
    // },
  ];

  return (
    <div>
      <ContentTabContent></ContentTabContent>
      {/* <PricingTabContent></PricingTabContent> */}
    </div>
  );
};

export default Index;
