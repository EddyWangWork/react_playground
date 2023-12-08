import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";
import { NextUIProvider } from "@nextui-org/system";
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider, EuiText } from '@elastic/eui';
import '@fontsource/inter';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 
    // <GoogleOAuthProvider clientId="552410376639-cj3bbt5ddh1uqmb5ondesogrqhkf3t87.apps.googleusercontent.com">
    // <React.StrictMode>
    <ThemeProvider>
        {/* <CssVarsProvider>
            <EuiProvider>
               
            </EuiProvider>
        </CssVarsProvider> */}
        {/* <NextUIProvider>
        </NextUIProvider> */}
        <App />
    </ThemeProvider>
    // </React.StrictMode>
    // </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

{/* <div className='w-screen h-screen p-8 flex items-start justify-center'> */ }
