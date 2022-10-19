import React from "react";
import styled from 'styled-components';
import {Form, useField} from 'formik';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from '@mui/material/FormHelperText';
import Autocomplete from '@mui/material/Autocomplete';
import {countries, states} from "./countries_states";


export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const initialValues = {
    email: '',
    password: '',
    fname: '',
    mname: '',
    lname: '',
    suffix: '',
    dob: null,
    gender: '',
    country: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
}

export const onSubmit = async (signinData, { setSubmitting }) => {
    setSubmitting(true);
    try {
        const response = await axios.post('http://localhost:5000/accounts', signinData);

        if (response.status !== 201) {
            alert('API Status Error: ' + response.status);
        }
        else {
            alert('Created account.');
        }
    }
	catch (error) {
        alert(error);
    }

    setSubmitting(false);
};

export const TextBox = ({ ...props }) => {
        const [field, meta] = useField(props);
        return (
            <TextField
                variant="outlined"
                type="input"
                helperText={meta.error && meta.touched ? meta.error: " "}
                error={!!(meta.error && meta.touched)}
                {...field}
                {...props} />
        );
    };

export const SuffixSelect = ({ ...props }) => {
    const [field] = useField(props);
    return (
        <FormControl sx={{ minWidth: 80 }}>
            <InputLabel id="suffix">Suffix</InputLabel>
            <Select
            labelId="suffix"
            id="suffix"
            label="Suffix"
            {...field}
            >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="JR.">JR.</MenuItem>
                <MenuItem value="SR.">SR.</MenuItem>
                <MenuItem value="M.D.">M.D.</MenuItem>
                <MenuItem value="II">II</MenuItem>
                <MenuItem value="III">III</MenuItem>
                <MenuItem value="IV">IV</MenuItem>
                <MenuItem value="V">V</MenuItem>
                <MenuItem value="PH.D.">PH.D.</MenuItem>
            </Select>
        </FormControl>
    );
};


export const DOBSelect = ({ ...props }) => {
    const [, meta, helpers] = useField(props);
    //console.log("meta:", meta)

    // if (date) {
    //     console.log(date.toLocaleDateString());
    // }
    return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date of Birth"
        openTo="year"
        views={['year', 'month', 'day']}
        disableFuture={true}
        value={meta.value}
        onChange={(newDate) => {
          helpers.setValue(newDate);
        }}
        renderInput={(params) => <TextField {...params} onBlur={() => {helpers.setTouched(true)}}
                                            helperText={meta.error && meta.touched ? meta.error: " "}
                                            error={!!(meta.error && meta.touched)}/>}
      />
    </LocalizationProvider>
    );
};

export const GenderSelect = ({ ...props }) => {
    const [field, meta, helpers] = useField(props);
    //console.log(meta)
    return (
        <FormControl
            sx={{ minWidth: 94 }}
            error={!!(meta.error && meta.touched)}
            onBlur={() => {
                helpers.setTouched(true)
            }}>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
            labelId="gender"
            id="gender"
            label="Gender"
            {...field}
            >
                <MenuItem value="M">Male (M)</MenuItem>
                <MenuItem value="F">Female (F)</MenuItem>
                <MenuItem value="X">Unspecified (X)</MenuItem>
                <MenuItem value="U">Undisclosed (U)</MenuItem>
            </Select>
            <FormHelperText>{meta.error && meta.touched ? meta.error: " "}</FormHelperText>
        </FormControl>
    );
};

export const CountrySelect = ({ ...props }) => {
    const [field, meta] = useField(props);
    //console.log(meta)
    return (
        <Autocomplete
          sx={{ width: 300 }}
          id="country"
          renderInput={(params) => <TextField label="Country" {...params} {...field}
                                helperText={meta.error && meta.touched ? meta.error : " "}
                                error={!!(meta.error && meta.touched)}/>}
          options={countries}
        />
    );
};

export const StateSelect = ({ ...props }) => {
    const [field, meta, helpers] = useField(props);
    console.log(meta)
    return (
        <Autocomplete
          sx={{ width: 190 }}
          id="country"
          onChange={(event, newValue) => {
            helpers.setValue(newValue);
          }}
          renderInput={(params) => <TextField label="State" {...params} {...field}
                                helperText={meta.error && meta.touched ? meta.error : " "}
                                error={!!(meta.error && meta.touched)} />}
          options={states}
        />
    );
};
