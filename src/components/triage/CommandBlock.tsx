import { Button, Grid } from "@mui/material";
import Fieldset from "./common/Fieldset";

export default function CommandBlock() {
  return (
    <Fieldset title="指令">
      <Grid
        container
        size={12}
        style={{
          padding: "5px",
        }}
        sx={{
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Button variant="contained" color="error">
          刪除資料
        </Button>
        <Button variant="outlined">清除畫面</Button>
        <Button variant="contained" color="success">
          存檔換下筆
        </Button>
      </Grid>
    </Fieldset>
  );
}
