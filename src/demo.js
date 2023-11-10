import React from "react";
import {
  Stack,
  Divider,
  Container,
  IconButton,
  Button,
  List,
  ListItem,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import EmailIcon from "@mui/icons-material/Email";
// import { LoremText } from "react-ipsum";
import { styled } from "@mui/material/styles";

import { PeopleIcon, WorkflowIcon, JobsIcon } from "./demo-icons";

//require("../readme.md");

const StackedLabelButton = styled(Button)((/* props */) => ({
  flexDirection: "column",
  display: "contents",
}));

export default function Demo() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  //const [ipsum] = React.useState(<LoremText units={"p"} count={42} />);

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
            {process.env.react_app_name}
            <sup
              style={{
                fontSize: "50%",
              }}
            >
              v{process.env.REACT_APP_version}
            </sup>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="left"
        variant="persistent"
        sx={{ position: "relative", "z-index": 1 }}
      >
        <Toolbar variant="dense" disableGutters={true} />
        <List>
          <ListItem>
            <Stack
              minWidth="100%"
              spacing={0.25}
              alignItems="center"
              alignContent="center"
            >
              <StackedLabelButton startIcon={<PeopleIcon />}>
                People
              </StackedLabelButton>
            </Stack>
          </ListItem>
          <ListItem>
            <Stack
              minWidth="100%"
              spacing={0.25}
              alignItems="center"
              alignContent="center"
            >
              <StackedLabelButton startIcon={<JobsIcon />}>
                Jobs
              </StackedLabelButton>
            </Stack>
          </ListItem>
          <ListItem>
            <Stack
              minwWidth="100%"
              spacing={0.25}
              alignItems="center"
              alignContent="center"
            >
              <StackedLabelButton startIcon={<WorkflowIcon />}>
                Submittals
              </StackedLabelButton>
            </Stack>
          </ListItem>
        </List>
      </Drawer>
      <Box
        sx={{
          p: 1,
          marginLeft: isDrawerOpen ? 18 : 0,
          marginBottom: 4,
        }}
      >
        <Typography component="pre" variant="body2">
          {JSON.stringify(process.env, undefined, "\t")}
        </Typography>
      </Box>
      <Container
        sx={{
          position: "fixed",
          m: 0,
          bottom: 0,
          bgcolor: "background.paper",
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
