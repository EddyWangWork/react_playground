import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import TWCard from "../tailwindcss/TWCard"
import TWTooltip from "../tailwindcss/TWTooltip"
import TWCheckbox from "../tailwindcss/TWCheckbox"
import TWPopover from "../tailwindcss/TWPopover"
import TWList from "../tailwindcss/TWList"
import TWSelect from "../tailwindcss/TWSelect"

function TWTab() {
    const data = [
        {
            label: "Card",
            value: "card",
            icon: Square3Stack3DIcon,
            desc: <TWCard />,
        },
        {
            label: "Tooltip",
            value: "tooltip",
            icon: UserCircleIcon,
            desc: <TWTooltip />,
        },
        {
            label: "Checkbox",
            value: "checkbox",
            icon: Cog6ToothIcon,
            desc: <TWCheckbox />,
        },
        {
            label: "Popover",
            value: "popover",
            icon: Cog6ToothIcon,
            desc: <TWPopover />,
        },
        {
            label: "List",
            value: "list",
            icon: Cog6ToothIcon,
            desc: <TWList />,
        },
        {
            label: "Select",
            value: "select",
            icon: Cog6ToothIcon,
            desc: <TWSelect />,
        },
        {
            label: "Settings",
            value: "settings",
            icon: Cog6ToothIcon,
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },

    ];
    return (
        <div>
            <Tabs value="card">
                <TabsHeader>
                    {data.map(({ label, value, icon }) => (
                        <Tab key={value} value={value}>
                            <div className="flex items-center gap-2">
                                {React.createElement(icon, { className: "w-5 h-5" })}
                                {label}
                            </div>
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    <Card>
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                {desc}
                            </TabPanel>
                        ))}
                    </Card>
                </TabsBody>
            </Tabs>
        </div>

    );
}
;
export default TWTab;