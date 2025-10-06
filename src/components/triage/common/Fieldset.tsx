import { Box, Typography } from "@mui/material";

export default function Fieldset({ title, children }: { title: string, children: React.ReactNode }) {

    return (
        <Box
          component="fieldset"
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            padding: 0
          }}
        >
          <Typography
            component="legend"
            sx={{
              px: 1,
              fontSize: '0.9rem',
              color: 'text.secondary',
            }}
          >
            {title}
          </Typography>
          {children}
        </Box>
    )
}