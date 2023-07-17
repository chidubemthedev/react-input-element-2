import { ChakraProvider } from "@chakra-ui/react";
import PhonenumberInput from "./phonenumber-input";

import "./App.css";

function App() {
  return (
    <>
      <ChakraProvider>
        {/* <p>this is a test</p> */}
        <PhonenumberInput />
      </ChakraProvider>
    </>
  );
}

export default App;
