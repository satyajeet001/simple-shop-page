import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <main className="hero container">
              <div className="hero-content">
                  <h1>WHERE COMFORT MEETS STYLE</h1>
                    <p>
                      ELEVATE YOUR COMFORT, ELEVATE YOUR STYLE WITH OUR CLOTHING. EXPERIENCE THE PERFECT BLEND OF QUALITY AND COMFORT. EXPERIENCE THE WIDE RANGE OF VARITIES.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" size="medium">Buy</Button>
                            <Button variant="text" size="medium">Category</Button>
                        </Stack>
                    </div>
                    
              </div>
            </main>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <div className="hero-image">
              <img src="/images/hero-img1.png" alt="hero-image" />
            </div>
          </Item>
        </Grid>
      </Grid>
  );
}
