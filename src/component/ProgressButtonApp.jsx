import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import './Component.css';

function ProgressButtonApp() {
    let spinSettings = { position: 'Right', width: 20, template: '<div class="template"></div>' };
    return (<ProgressButtonComponent content='Submit' duration={30000} spinSettings={spinSettings} />);
}
export default ProgressButtonApp;