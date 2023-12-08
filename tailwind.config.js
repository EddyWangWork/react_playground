import withMT from "@material-tailwind/react/utils/withMT";
import { nextui } from '@nextui-org/theme';

export default withMT({
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [nextui()],
});


