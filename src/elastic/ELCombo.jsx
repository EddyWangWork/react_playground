import React, { useState } from 'react';
import { EuiComboBox } from '@elastic/eui';

const ELCombo = () => {
    const options = [
        {
            label: 'Titan',
            'data-test-subj': 'titanOption',
        },
        {
            label: 'Enceladus',
        },
        {
            label: 'Mimas',
        },
        {
            label: 'Dione',
        },
        {
            label: 'Iapetus',
        },
        {
            label: 'Phoebe',
        },
        {
            label: 'Rhea',
        },
        {
            label:
                "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
        },
        {
            label: 'Tethys',
        },
        {
            label: 'Hyperion',
        },
    ];

    const [selectedOptions, setSelected] = useState([options[2]]);

    const onChange = (selectedOptions) => {
        // We should only get back either 0 or 1 options.
        setSelected(selectedOptions);
    };
    return (
        <EuiComboBox
            prepend="Prepend"
            isClearable={false}
            singleSelection={{ asPlainText: true }}
            options={options}
            selectedOptions={selectedOptions}
            onChange={onChange}
        />
    );
};

export default ELCombo;