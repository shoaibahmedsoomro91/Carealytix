import React from "react";
import { AlertDialog, Button, Center } from "native-base";

interface DialogProps {
  handleButtonClick : (() => void)  
}

export default function Dialog ({ handleButtonClick } : DialogProps ) {  
  const onClose = () => handleButtonClick();
  const cancelRef = React.useRef(null);

  return (
    <Center>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={true} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.Body>
            Entry Has been Added Successfully...
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button colorScheme="success" onPress={onClose}>
              ok
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
};