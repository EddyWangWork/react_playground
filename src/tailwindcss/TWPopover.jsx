import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from "@material-tailwind/react";

import TWSelect from "../tailwindcss/TWSelect"
import TWList from "../tailwindcss/TWList"

function TWPopover() {
    return (
        <Popover
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}
        >
            <PopoverHandler>
                <Button>Popover</Button>
            </PopoverHandler>
            <PopoverContent>
                <TWList />
            </PopoverContent>
        </Popover>
    );
};

export default TWPopover;