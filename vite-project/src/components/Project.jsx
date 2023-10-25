import { Icon, colors } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project(props) {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          height: "450px",
          width: "450px",
          marginRight: "10px",
          marginBottom: "20px",
          backgroundImage: `url(${props.image})`,
          justifyContent: "center",
          imageOrientation: "",
        }}
      >
        <legend style={{ color: "black" }}>
          {props.title}

          <a href={props.href}>
            <GitHubIcon
              sx={{ fontSize: 50, color: "#ffcccc", float: "right" }}
            />
          </a>
        </legend>
      </Box>
    </Container>
  );
}

export default Project;
