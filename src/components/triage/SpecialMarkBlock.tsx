import { Grid, FormControlLabel, Switch, Checkbox } from "@mui/material";

import Fieldset from "./common/Fieldset";

export default function SpecialMarkBlock() {
  return (
    <Fieldset title="特殊註記">
      <Grid
        container
        spacing={0.5}
        style={{
          padding: "5px",
        }}
      >
        <FormControlLabel
          value="R/O AMI"
          control={<Switch color="primary" />}
          label="R/O AMI"
        />
        <FormControlLabel
          value="R/O AC Stroke"
          control={<Switch color="primary" />}
          label="R/O AC Stroke"
        />
        <FormControlLabel
          value="chemical"
          control={<Switch color="primary" />}
          label="化災"
        />
        <FormControlLabel
          value="chemical"
          control={<Switch color="primary" />}
          label="輻災"
        />
        <FormControlLabel
          value="chemical"
          control={<Switch color="primary" />}
          label="995"
        />
        <FormControlLabel
          value="chemical"
          control={<Switch color="primary" />}
          label="8585"
        />
        <FormControlLabel
          value="chemical"
          control={<Switch color="primary" />}
          label="犯罪傷害"
        />
        <FormControlLabel
          value="chemical"
          control={<Checkbox defaultChecked color="secondary" />}
          label="長期臥床"
        />
        <FormControlLabel
          value="chemical"
          control={<Switch color="primary" />}
          label="一年內曾發生跌倒"
        />
        <Grid size={12}>
          <Fieldset title="特殊註記">
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="左手"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="左腳"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="右手"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="右腳"
            />
          </Fieldset>
        </Grid>
      </Grid>
    </Fieldset>
  );
}
