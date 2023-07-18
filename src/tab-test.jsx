import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export const TabTest = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = () => {
    setTabIndex((tabIndex) => tabIndex + 1);
  };
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Tabs index={tabIndex}>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>

          <Button onClick={handleTabsChange}>Text</Button>

          <TabList h="25px">
            <Tab></Tab>
            <Tab onClick={() => console.log(first)}></Tab>
          </TabList>
        </Tabs>
      </Flex>
    </>
  );
};
