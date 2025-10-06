import {
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  type GridSize,
} from "@mui/material";
import Fieldset from "./common/Fieldset";

export function DepartmentButton({
  size,
  label,
}: {
  size: GridSize;
  label: string;
}) {
  return (
    <Grid size={size}>
      <Button variant="outlined" style={{ width: "100%" }}>
        {label}
      </Button>
    </Grid>
  );
}

export default function DepartmentBlock() {
  return (
    <Fieldset title="檢傷分類">
      <Grid
        container
        spacing={0.5}
        style={{
          padding: "5px",
        }}
      >
        <DepartmentButton size={"grow"} label="內科" />
        <DepartmentButton size={"grow"} label="外傷科" />
        <DepartmentButton size={"auto"} label="外傷(N)" />
        <DepartmentButton size={"grow"} label="小兒科" />
        <DepartmentButton size={"grow"} label="牙科" />
        <DepartmentButton size={"grow"} label="皮膚科" />
        <DepartmentButton size={"grow"} label="婦產科" />
        <DepartmentButton size={"grow"} label="ENT" />
        <DepartmentButton size={"grow"} label="眼科" />
        <DepartmentButton size={"grow"} label="精神科" />
        <Grid size={{ md: 12 }}>
          <FormControlLabel
            control={<Checkbox defaultChecked color="secondary" />}
            label="進入發燒區A"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="secondary" />}
            label="進入急診室R"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="secondary" />}
            label="進入內科重症區C"
          />
        </Grid>
      </Grid>
    </Fieldset>
  );
}
