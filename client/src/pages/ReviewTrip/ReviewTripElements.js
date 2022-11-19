import styled from "styled-components";
import Footer from "../../components/Footer";
import {Form, useField} from "formik";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import React from "react";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";


export const passengerInitialValues = {
    fname: '',
    mname: '',
    lname: '',
    dob: null,
    gender: '',
    state: '',
    bags: 0
};

export const cardInitialValues = {
    name: '',
    card_number: '',
    exp_date: null,
    cvv: '',
    zip: ''
};

export const BagsSelect = ({ ...props }) => {
    const [field] = useField(props);
    return (
        <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="bags">Checked Bags</InputLabel>
            <Select
            labelId="bags"
            id="bags"
            label="Checked Bags"
            {...field}
            >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
            </Select>
        </FormControl>
    );
};

export const ExpDateSelect = ({ ...props }) => {
    const [, meta, helpers] = useField(props);

    return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Expiration Date"
        openTo="year"
        views={['year', 'month']}
        disablePast={true}
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

export const PassengerForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-style: solid;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const CardForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-style: solid;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: center;
  gap: 15px;
`;

export const TripFooter = styled(Footer)`
  flex-shrink: 0;
`;

export const FlightInfoContainer = styled.div`
  margin-top: 20px;
  border-style: solid;
  height: 160px;
  width: 800px;
`;

export const SubmitButton = styled.button`
  border-radius: 50px;
  background: #010606;
  white-space: nowrap;
  padding: 13px 28px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 30px;
  margin-top: 10px;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #49A9E6;
  }
`;