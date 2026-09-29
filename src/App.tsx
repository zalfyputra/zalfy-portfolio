import { Container, CssBaseline, Typography } from '@mui/material'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Zalfy Portfolio
        </Typography>
        <Typography color="text.secondary">v2 fresh start. React + Material UI.</Typography>
      </Container>
    </>
  )
}
