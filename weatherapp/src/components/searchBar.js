/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const cityJson =  require('../cities.json')
// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11


const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function CountrySelect() {
  const classes = useStyles();

  return (
    <Autocomplete
      id="country-select-demo"
      style={{ width: 300 }}
      options={cityJson}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.city}
      renderOption={(option) => (
        <React.Fragment>
          {option.city}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a city"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}