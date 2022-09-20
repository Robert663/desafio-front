import { Box, TextField } from '@mui/material';

export const Input = ({ label, onChange, value, type }: any) => {
  return (
    <Box
    sx={{background: '#fff'}}
    >
      <TextField
        label={label}
        fullWidth
        required
        variant="outlined"
        sx={{ mb: 2 }}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};
