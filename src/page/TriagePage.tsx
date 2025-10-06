import { Grid, Stack } from "@mui/material";
import ArrivalStatusBlock from "../components/triage/ArrivalStatusBlock";
import BioSignBlock from "../components/triage/BioSignBlock";
import PatientData from "../components/triage/PatientData";
import DepartmentBlock from "../components/triage/DepartmentBlock";
import HistoryBlock from "../components/triage/HistoryBlock";
import SpecialMarkBlock from "../components/triage/SpecialMarkBlock";
import TOCCBlock from "../components/triage/TOCCBlock";
import PrintBlock from "../components/triage/PrintBlock";
import CommandBlock from "../components/triage/CommandBlock";
import TriageData from "../components/triage/TriageData";

export default function TriagePage() {
  return (
    <Grid
      container
      spacing={0.5}
      style={{
        padding: "10px",
      }}
    >
      <Grid size={{ xs: 6, md: 4 }}>
        <PatientData />
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <BioSignBlock />
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <TriageData />
      </Grid>
      <Grid size={{ xs: 6, md: 8 }}>
        <DepartmentBlock />
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <HistoryBlock />
      </Grid>
      <Grid size={{ xs: 6, md: 8 }}>
        <ArrivalStatusBlock />
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <SpecialMarkBlock />
      </Grid>
      <Grid size={{ xs: 6, md: 8 }}>
        <TOCCBlock />
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Stack spacing={0.5}>
          <PrintBlock />
          <CommandBlock />
        </Stack>
      </Grid>
    </Grid>
  );
}
