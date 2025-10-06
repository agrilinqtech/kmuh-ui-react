import {
  Box,
  Grid,
  Tabs,
  Tab,
  FormControlLabel,
  Checkbox,
  Radio,
} from "@mui/material";

import Fieldset from "./common/Fieldset";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

export default function TOCCBlock() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Fieldset title="TOCC">
      <Grid size={12}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="病患旅遊史" />
              <Tab label="職業史" />
              <Tab label="親友出國接觸史" />
              <Tab label="其他接觸史" />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="無"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="上海"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="北京"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="廣東"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="中國大陸"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="武漢"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="香港"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="新加坡"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="越南"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="多倫多"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="加拿大"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="美國"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="墨西哥"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="其他"
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <FormControlLabel value="female" control={<Radio />} label="農" />
            <FormControlLabel value="female" control={<Radio />} label="漁" />
            <FormControlLabel value="female" control={<Radio />} label="工" />
            <FormControlLabel value="female" control={<Radio />} label="商" />
            <FormControlLabel value="female" control={<Radio />} label="醫療" />
            <FormControlLabel value="female" control={<Radio />} label="教職" />
            <FormControlLabel value="female" control={<Radio />} label="服務" />
            <FormControlLabel value="female" control={<Radio />} label="自由" />
            <FormControlLabel value="female" control={<Radio />} label="畜牧" />
            <FormControlLabel value="female" control={<Radio />} label="學生" />
            <FormControlLabel value="female" control={<Radio />} label="無" />
            <FormControlLabel value="female" control={<Radio />} label="不詳" />
            <FormControlLabel value="female" control={<Radio />} label="其他" />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="無"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="越南"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="泰國"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="柬埔寨"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="墨西哥"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="香港"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="新加坡"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="日本"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="歐洲"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="美國"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="加拿大"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="中國大陸"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="武漢"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="其他"
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="無"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="實驗室檢體"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="發燒的親友"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="貓"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="狗"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="禽鳥類"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="其他"
            />
          </CustomTabPanel>
        </Box>
      </Grid>
    </Fieldset>
  );
}
