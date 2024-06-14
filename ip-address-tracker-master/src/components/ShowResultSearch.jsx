import { Typography, Grid, Box } from "@mui/material";

const ShowResultSearch = () => {
  return (
    <Box
      sx={{
        width: "75rem",
        position: "absolute",
        bottom: 0,
        transform: "translateY(50%)",
        zIndex: "1000",
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: "white",
          width: "100%",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <Grid
          item
          xs={3}
          sx={{ borderRight: 1, borderColor: "secondary.main" }}
        >
          <Typography
            variant="caption"
            color="secondary.main"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            IP ADDRESS
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
            192.100.130.12
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            borderRight: 1,
            borderColor: "secondary.main",
            padding: "0 25px",
          }}
        >
          <Typography
            variant="caption"
            color="secondary.main"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            LOCATION
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
            BROOKLYN, NY, 10001
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            borderRight: 1,
            borderColor: "secondary.main",
            padding: "0 25px",
          }}
        >
          <Typography
            variant="caption"
            color="secondary.main"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            TIME ZONE
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
            UTC -05:00
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            padding: "0 25px",
          }}
        >
          <Typography
            variant="caption"
            color="secondary.main"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            ISP
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
            SPACEX STARLINK
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShowResultSearch;