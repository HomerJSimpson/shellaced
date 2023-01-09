import React from "react";
import {
  Stack,
  Divider,
  Container,
  IconButton,
  List,
  ListItem,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import { LoremText } from "react-ipsum";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { WorkflowIcon, JobsIcon } from "./demo-icons";

export default function Demo() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [ipsum] = React.useState(<LoremText units={"p"} count={42} />);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Shellaced<sup>v0.0</sup>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="left"
        variant={!isDrawerOpen ? "persistent" : "persistent"}
        sx={{ position: "relative", "z-index": 1 }}
      >
        <Toolbar variant="dense" disableGutters={true} />
        <List>
          <ListItem>
            <Stack spacing={0.25} alignItems="center" alignContent="center">
              <PeopleAltIcon color="action" />
              <Typography variant="caption" component="div">
                People
              </Typography>
            </Stack>
          </ListItem>
          <ListItem>
            <Stack spacing={0.25} alignItems="center" alignContent="center">
              <JobsIcon color="action" />
              <Typography variant="caption" component="div">
                Jobs
              </Typography>
            </Stack>
          </ListItem>
          <ListItem>
            <Stack spacing={0.25} alignItems="center" alignContent="center">
              <WorkflowIcon color="action" />
              <Typography variant="caption" component="div">
                Submittals
              </Typography>
            </Stack>
          </ListItem>
        </List>
      </Drawer>
      <Box
        sx={{
          p: 1,
          marginLeft: isDrawerOpen ? 12 : 0,
          marginBottom: 4
        }}
      >
        <Typography variant="body2">{ipsum}</Typography>
      </Box>
      <Container
        sx={{
          position: "fixed",
          m: 0,
          bottom: 0,
          bgcolor: "background.paper"
        }}
        style={{ padding: 0 }}
      >
        <Divider />
        <Typography variant="body2" textAlign="center">
          footer &copy; 2023
        </Typography>
      </Container>
    </div>
  );
}
