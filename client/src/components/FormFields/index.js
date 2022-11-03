import {useField} from "formik";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import React, {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";


export const TextBox = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
        <TextField
            type="input"
            variant="outlined"
            helperText={meta.error && meta.touched ? meta.error: " "}
            error={!!(meta.error && meta.touched)}
            {...field}
            {...props}
        />
    );
};

export const PassBox = ({ ...props }) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <TextField
            type={show ? "input" : "password"}
            variant="outlined"
            helperText={meta.error && meta.touched ? meta.error: " "}
            error={!!(meta.error && meta.touched)}
            {...field}
            {...props}
            style = {{width: 224}} // default TextField size
            InputProps={{
                endAdornment:
                    <InputAdornment position="end">
                        <IconButton onClick={toggleShow} edge="end">
                            {show ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
            }}
        />
    );
};