import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import isString from "lodash/isString";
import isNumber from "lodash/isNumber";

const styles = theme => ({
  selectField: {
    color: theme.palette.text.primary,
    "&:focus": {
      backgroundColor: "transparent"
    }
  },
  select: {
    padding: "0 8px",
    backgroundColor: theme.palette.background.content,
    "&:focus": {
      backgroundColor: "transparent"
    }
  },
  label: {
    color: theme.palette.text.primary,
    width: "max-content",
    fontSize: 20,
    fontWeight: "bold"
  },
  root: {
    minWidth: "150px",
    maxWidth: "100%"
  }
});

const DropDown = props => {
  const {
    classes,
    label,
    items,
    onChange,
    value,
    name,
    style,
    error,
    helperText,
    disabled
  } = props;
  return (
    <FormControl style={style} className={classes.root} error={error}>
      {label && <Typography variant="caption">{label}</Typography>}
      <Select
        value={value === null ? "none" : value}
        classes={{
          selectMenu: classes.selectField
        }}
        onChange={onChange}
        inputProps={{
          name: name,
          id: `${label}-filter-dropdown`
        }}
        className={classes.select}
        disabled={disabled}
      >
        {items &&
          items.map(item =>
            isString(item) || isNumber(item) ? (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ) : (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            )
          )}
      </Select>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
};

DropDown.defaultProps = {
    items: [],
    label: '',
    value: 'none',
    error: false,
    helperText: null,
    disabled: false
}

export default withStyles(styles)(DropDown)