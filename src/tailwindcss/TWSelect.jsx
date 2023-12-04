import { Card, Select, Option } from "@material-tailwind/react";

function SelectDefault() {
    return (
        <Card>
            <Select size="md">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>
        </Card>
    );
};

export default SelectDefault;