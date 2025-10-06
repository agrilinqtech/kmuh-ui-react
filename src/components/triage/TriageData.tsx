import {
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import Fieldset from "./common/Fieldset";

export default function TriageData() {
  return (
    <Fieldset title="檢傷資料">
      <Grid
        container
        spacing={1}
        style={{
          padding: "5px",
        }}
      >
        <Grid size={{ md: 4 }}>
          <Stack spacing={1}>
            <TextField id="outlined-required" label="檢傷日期" size="small" />
            <TextField id="outlined-required" label="檢傷時間" size="small" />
            <TextField id="outlined-required" label="檢傷序號" size="small" />
          </Stack>
        </Grid>
        <Grid size={{ md: 4 }}>
          <Stack spacing={1}>
            <TextField id="outlined-required" label="離開日期" size="small" />
            <TextField id="outlined-required" label="離開時間" size="small" />
            <></>
          </Stack>
        </Grid>
        <Grid size={{ md: 4 }}>
          <Stack>
            <div
              style={{
                backgroundColor: "red",
                color: "yellow",
                padding: "5px",
                borderRadius: "5px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {"五級級數"}
            </div>
            <div
              style={{
                color: "red",
                backgroundColor: "lightgrey",
                padding: "5px",
                borderRadius: "5px",
                fontSize: "96px",
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: "1",
              }}
            >
              {"3"}
            </div>
          </Stack>
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField id="outlined-required" label="床號" size="small" />
        </Grid>
        <Grid size={{ md: 8 }}>
          <FormControlLabel
            value="chemical"
            control={<Switch color="error" />}
            label="病友隱私是否被查詢"
          />
        </Grid>
      </Grid>
    </Fieldset>
  );
}
