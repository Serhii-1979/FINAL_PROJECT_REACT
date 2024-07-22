import React from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

const DiscountForm = () => {
  return (
    <Container maxWidth="xs" sx={{ bgcolor: 'transparent', paddingTop: 6,paddingBottom: 0,  borderRadius: 2 }}>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          sx={{ bgcolor: 'transparent', borderRadius: 1, mb: 2, input: { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          required
          fullWidth
          id="phone"
          label="Phone number"
          name="phone"
          autoComplete="phone"
          sx={{ bgcolor: 'transparent', borderRadius: 1, mb: 2, input: { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          sx={{ bgcolor: 'transparent', borderRadius: 1, mb: 2, input: { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, p: 1.5, bgcolor: 'white', color: 'black' }}
        >
          Get a discount
        </Button>
      </Box>
    </Container>
  );
};

export default DiscountForm;
