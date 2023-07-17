import { Button, Container, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phonenumber-input.css";

const PhonenumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [isValid, setIsValid] = useState(true);

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
    // console.log(country);
    setIsValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{13}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    console.log(phoneNumber);
  };

  return (
    <>
      <Container>
        <FormControl isRequired mt="50%">
          <FormLabel htmlFor="phonenumber">Phone</FormLabel>
          <PhoneInput
            country={"ng"}
            placeholder="+234 80 0000 0000"
            containerClass="phone-input-container"
            autoFormat={true}
            enableSearch={true}
            value={phoneNumber}
            onChange={handlePhoneNumber}
            inputProps={{
              name: "phonenumber",
              required: true,
              autoFocus: true,
            }}
          />
          {!isValid && <p>Please enter a valid phonenumber</p>}
          <Button
            mt="10px"
            colorScheme="blue"
            onClick={handlePhoneNumberSubmit}
          >
            submit
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default PhonenumberInput;
