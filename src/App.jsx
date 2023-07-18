import { ChakraProvider } from "@chakra-ui/react";
import PhonenumberInput from "./phonenumber-input";

import "./App.css";
import { TabTest } from "./tab-test";

function App() {
  return (
    <>
      <ChakraProvider>
        {/* <PhonenumberInput /> */}
        <TabTest />
      </ChakraProvider>
    </>
  );
}

export default App;
