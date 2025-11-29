import TabsNav from "./TabsNav";
import TabContent from "./TabContent";
import { useState } from "react";

const PerfilTabs = () => {
  const [selectedTab, setSelectedTab] = useState("enCurso-tab");

  return (
    <>
      <TabsNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TabContent selectedTab={selectedTab} />
    </>
  );
};

export default PerfilTabs;
