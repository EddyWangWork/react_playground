import { Button, toaster } from 'evergreen-ui'
import React from "react";

function EGToast() {

    const settings = { duration: 3 }

    return (
        <Button onClick={() => toaster.notify('Evergreen is an open-source design system', settings)}>Notify</Button>
    )
}
;
export default EGToast;