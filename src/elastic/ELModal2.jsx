import {
    EuiButton,
    EuiButtonEmpty,
    EuiButtonIcon,
    EuiFieldText,
    EuiForm,
    EuiFormRow,
    EuiModal,
    EuiModalBody,
    EuiModalFooter,
    EuiModalHeader,
    EuiModalHeaderTitle,
    EuiSelect,
    EuiSpacer,
    EuiText,
    EuiTextArea,
    useGeneratedHtmlId,
    EuiDatePicker,
    EuiFieldNumber
} from '@elastic/eui';
import moment from 'moment';
import React, { useState, Fragment, useEffect } from 'react';

const ELModal2 = ({ setmodalResponse, rowData }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);

    const [showErrors, setShowErrors] = useState(false);
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [startDate, setStartDate] = useState(moment());
    const [amount, setamount] = useState(0);

    let errors;
    let modal;

    const onChangeFName = (e) => {
        setfirstName(e.target.value);
    };

    const onChangeLName = (e) => {
        setlastName(e.target.value);
    };

    const onChangeAmount = (e) => {
        setamount(e.target.value);
    };

    const handleDateChange = (date) => {
        setStartDate(date);
    };

    const onButtonClick = () => {
        setShowErrors(!showErrors);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    }

    const setModalValue = () => {
        setfirstName(rowData?.original?.name?.firstName);
        setlastName(rowData?.original?.name?.lastName);
        setStartDate(moment(rowData?.original?.joindate));
        setamount(rowData?.original?.amount);
    }

    const clearValue = () => {
        setfirstName('');
        setlastName('');
        setStartDate(moment());
        setamount(0);
    }

    const returnModalValue = () => {
        var isAdd = rowData == null;
        var ressss = {
            'isAdd': isAdd,
            'firstName': firstName,
            'lastName': lastName,
            'joinDate': moment(startDate).format('YYYY/M/D'),
            'amount': amount
        }
        setmodalResponse(ressss);
        closeModal();
    }

    useEffect(() => {
        if (rowData?.original) {
            console.log(rowData?.original);
            setModalValue();
        }
        else {
            clearValue();
        }
    }, [isModalVisible]);


    if (showErrors) {
        errors = [
            "Here's an example of an error",
            'You might have more than one error, so pass an array.',
        ];
    }

    const formSample = (
        <Fragment>
            <EuiForm isInvalid={showErrors} error={errors} component="form">
                <EuiFormRow label="FirstName" isInvalid={showErrors}>
                    <EuiFieldText name="firstName" value={firstName} onChange={onChangeFName} isInvalid={showErrors} />
                </EuiFormRow>

                <EuiFormRow label="LastName" isInvalid={showErrors}>
                    <EuiFieldText name="lastName" value={lastName} onChange={onChangeLName} isInvalid={showErrors} />
                </EuiFormRow>

                <EuiFormRow label="Select a date">
                    <EuiDatePicker selected={startDate} onChange={handleDateChange} />
                </EuiFormRow>

                <EuiFormRow label="Amount">
                    <EuiFieldNumber
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => onChangeAmount(e)}
                        aria-label="Use aria labels when no actual label is in use"
                    />
                </EuiFormRow>

                <EuiSpacer />
            </EuiForm>
        </Fragment>
    );

    if (isModalVisible) {
        modal = (
            <EuiModal
                onClose={closeModal}
                initialFocus="[name=firstName]"
            >
                <EuiModalHeader>
                    <EuiModalHeaderTitle>Modal title</EuiModalHeaderTitle>
                </EuiModalHeader>

                <EuiModalBody>{formSample}</EuiModalBody>

                <EuiModalFooter>
                    <EuiButtonEmpty onClick={closeModal}>Cancel</EuiButtonEmpty>
                    <EuiButton onClick={returnModalValue}>
                        Save
                    </EuiButton>
                    <EuiButton fill color="danger" onClick={onButtonClick}>
                        Toggle errors
                    </EuiButton>
                </EuiModalFooter>
            </EuiModal>
        );
    }

    return (
        <div>
            <EuiButtonIcon
                display="base"
                iconType="compute"
                aria-label="Delete"
                color="primary"
                onClick={showModal}
            />
            {modal}
        </div>
    );
};

export default ELModal2;