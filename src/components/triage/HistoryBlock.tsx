import {
  FormLabel,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Fieldset from "./common/Fieldset";

export default function HistoryBlock() {
  return (
    <Fieldset title="過去病史，藥物過敏，重大傷病">
      <Grid
        container
        spacing={0.5}
        style={{
          padding: "5px",
        }}
      >
        <Grid size={12}>
          <TextField
            style={{
              width: "100%",
            }}
            id="filled-multiline-flexible"
            label="過去病史，藥物過敏，重大傷病"
            multiline
            rows={2}
            defaultValue="過去病史，藥物過敏，重大傷病"
          />
        </Grid>
        <Grid size={12}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            有藥物過敏
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="有" />
            <FormControlLabel value="male" control={<Radio />} label="無" />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="不清楚"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </Fieldset>
  );
}
