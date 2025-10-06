import { Grid, TextField } from "@mui/material";
import Fieldset from "./common/Fieldset";

export default function BioSignBlock() {
  return (
    <Fieldset title="生理象徵">
      <Grid
        container
        spacing={1}
        style={{
          padding: "5px",
        }}
      >
        <Grid size={{ md: 4 }}>
          <TextField
            slotProps={{
              input: {
                inputProps: {
                  style: {
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  },
                },
              },
            }}
            id="outlined-required"
            label="病例號碼"
            size="small"
            defaultValue={"E123456789"}
          />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField
            id="outlined-required"
            label="姓名"
            size="small"
            defaultValue={"E123456789"}
          />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField id="outlined-required" label="性別" size="small" />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField id="outlined-required" label="ID" size="small" />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField id="outlined-required" label="年齡" size="small" />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField id="outlined-required" label="生日" size="small" />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField id="outlined-required" label="身高" size="small" />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField id="outlined-required" label="體重" size="small" />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField id="outlined-required" label="讀取IC資料" size="small" />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField id="outlined-required" label="HIV，TB" size="small" />
        </Grid>
        <Grid size={{ md: 4 }}>
          <TextField id="outlined-required" label="無名氏" size="small" />
        </Grid>
      </Grid>
    </Fieldset>
  );
}
