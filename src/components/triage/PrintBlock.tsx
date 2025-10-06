import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";

import Fieldset from "./common/Fieldset";

export default function PrintBlock() {
  return (
    <Fieldset title="列印項目">
      <Grid size={12}>
        <FormControlLabel
          value="chemical"
          control={<Checkbox defaultChecked color="secondary" />}
          label="掛畫單"
        />
        <FormControlLabel
          value="chemical"
          control={<Checkbox defaultChecked color="secondary" />}
          label="初診單"
        />
        <FormControlLabel
          value="chemical"
          control={<Checkbox defaultChecked color="secondary" />}
          label="手環"
        />
        <FormControlLabel
          value="chemical"
          control={<Checkbox defaultChecked color="secondary" />}
          label="病歷表"
        />
        <FormControlLabel
          value="chemical"
          control={<Checkbox defaultChecked color="secondary" />}
          label="主訴表"
        />
        <FormControlLabel
          value="chemical"
          control={<Checkbox defaultChecked color="secondary" />}
          label="病床卡"
        />
        <Button variant="contained">列印</Button>
      </Grid>
    </Fieldset>
  );
}
