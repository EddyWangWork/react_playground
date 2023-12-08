import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography
} from "@material-tailwind/react";
import React from "react";

import Chart from "react-apexcharts";
import Donut from '../apexcharts/Donut';
import APLine from '../apexcharts/APLine';
import APBar from '../apexcharts/APBar';
import TWTab from '../tailwindcss/TWTab';
import TWTooltip from '../tailwindcss/TWTooltip';
import TWCheckbox from '../tailwindcss/TWCheckbox';
import TWSelect from '../tailwindcss/TWSelect';
import TWPopover from '../tailwindcss/TWPopover';

function ApexCharts() {

    const donutCard = () => {
        return (
            <Card className="mt-6 w-[350px]">
                <CardBody>
                    {/* <div class="grid grid-cols-1 gap-6 py-5"> */}
                    <div className="flex flex-row">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <div className="pl-2 pt-1"><TWTooltip /></div>
                    </div>
                    <div className="flex justify-center">
                        <Donut />
                    </div>
                    {/* </div> */}
                </CardBody>
                <CardFooter className="pt-0">
                    <hr className="my-8 border-blue-gray-50" />
                    <TWSelect />
                </CardFooter>
            </Card>
        )
    }

    const lineCard = () => {
        return (
            <Card className="mt-6">
                <CardBody>
                    {/* <div class="grid grid-cols-1 gap-6 py-5"> */}
                    <div className="flex flex-row">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <div className="pl-2 pt-1"><TWTooltip /></div>
                    </div>
                    <div className="flex justify-center">
                        <APLine />
                    </div>
                    {/* </div> */}
                </CardBody>
                <CardFooter className="pt-0">
                    <hr className="my-8 border-blue-gray-50" />
                    <TWSelect />
                </CardFooter>
            </Card>
        )
    }

    const barCard = () => {
        return (
            <Card className="mt-6">
                <CardBody>
                    {/* <div class="grid grid-cols-1 gap-6 py-5"> */}
                    <div className="flex flex-row">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <div className="pl-2 pt-1"><TWTooltip /></div>
                    </div>
                    <div className="flex justify-center">
                        <APBar />
                    </div>
                    {/* </div> */}
                </CardBody>
                <CardFooter className="pt-0">
                    <hr className="my-8 border-blue-gray-50" />
                    <TWSelect />
                </CardFooter>
            </Card>
        )
    }

    return (
        <div>
            <div class="grid grid-cols-2 gap-6 py-5">
                <div class="pl-10 col-span-2">{barCard()}</div>
                <div class="pl-10 col-span-2">{lineCard()}</div>
                <div class="pl-10">{donutCard()}</div>


                {/* <div><TWTab /></div> */}

                {/* <div class="pl-10">{Donut()}</div> */}
            </div>
        </div>
    );
}
;
export default ApexCharts;

