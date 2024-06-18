import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Enter your full name"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1 }}>Do you already have an account?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            Sign In
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
