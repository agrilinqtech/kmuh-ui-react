import {
  FormControlLabel,
  Radio,
  Checkbox,
  FormLabel,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  styled,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  ListItemIcon,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

import Fieldset from "./common/Fieldset";
import React from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ArrivalStatusBlock() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fieldset title="到院狀態">
      <Grid
        container
        spacing={0.5}
        style={{
          padding: "5px",
        }}
      >
        <Grid container size={{ md: 12 }}>
          <Grid
            size={"auto"}
            container
            direction="row"
            sx={{
              alignItems: "center",
            }}
          >
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              入院狀態
            </FormLabel>
          </Grid>
          <Grid>
            <FormControlLabel value="female" control={<Radio />} label="步入" />
            <FormControlLabel value="male" control={<Radio />} label="輪椅" />
            <FormControlLabel value="other" control={<Radio />} label="推床" />
            <FormControlLabel value="other" control={<Radio />} label="抱入" />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="使用輔具"
            />
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            alignItems: "center",
          }}
        >
          <Grid
            size={"auto"}
            container
            direction="row"
            sx={{
              alignItems: "center",
            }}
          >
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              入院方式
            </FormLabel>
          </Grid>
          <Grid size={"grow"} container>
            <Grid size={{ md: 12 }}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="親友帶來"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="獨自就醫"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="119送達"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="其他"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked color="secondary" />}
                label="民間救護車"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked color="secondary" />}
                label="來自長照機構"
              />
            </Grid>
            <Grid container spacing={2} size={{ md: 12 }}>
              <Grid size={"auto"}>
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="他院轉入"
                />
              </Grid>
              <Grid size={2}>
                <TextField id="outlined-required" size="small" />
              </Grid>
              <Grid size={"auto"}>
                <Button variant="contained" onClick={handleClickOpen}>
                  選擇
                </Button>
              </Grid>
              <Grid size={2}>
                <TextField id="outlined-required" size="small" />
              </Grid>
              <Grid size={4}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">
                    請選擇轉院原因
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="請選擇轉院原因"
                    size="small"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {"健保院所查詢"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Grid direction="row" container spacing={2} alignItems={"center"}>
            <Grid size={6}>
              <TextField
                id="outlined-required"
                label="搜尋"
                size="small"
                defaultValue={"E123456789"}
                style={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid size={2}>
              <Button variant="outlined" style={{ width: "100%" }}>
                {"? 模糊查詢"}
              </Button>
            </Grid>
            <Grid size={4}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{
                  paddingRight: "10px",
                }}
              >
                {"排序"}
              </FormLabel>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="代碼"
              />
              <FormControlLabel value="male" control={<Radio />} label="名稱" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogContent dividers>
          <Grid direction="row" container spacing={2} alignItems={"center"}>
            <Grid size={4}>
              <HospitalLocationList />
            </Grid>
            <Grid size={8}>
              <Paper sx={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{ pagination: { paginationModel } }}
                  pageSizeOptions={[5, 10]}
                  sx={{ border: 0 }}
                />
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {"套用"}
          </Button>
          <Button autoFocus onClick={handleClose}>
            {"離開"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Fieldset>
  );
}

function ItemButton({
  selectedIndex,
  handleListItemClick,
  index,
  location,
}: {
  selectedIndex: number;
  handleListItemClick: (index: number) => void;
  index: number;
  location: string;
}) {
  return (
    <ListItemButton
      selected={selectedIndex === index}
      onClick={() => handleListItemClick(index)}
      style={{
        border: "1px solid",
      }}
    >
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <ListItemText primary={location} />
    </ListItemButton>
  );
}

export function HospitalLocationList() {
  const locations = ["東區", "高屏", "南區", "北區", "中區", "台北", "不分"];

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        {locations.map((location, index) => (
          <ItemButton
            key={index}
            selectedIndex={selectedIndex}
            handleListItemClick={handleListItemClick}
            index={index}
            location={location}
          />
        ))}
      </List>
    </Box>
  );
}
