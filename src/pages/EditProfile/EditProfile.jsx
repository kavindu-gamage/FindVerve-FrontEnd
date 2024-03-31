import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile1 from "../../assets/images/profiles/profile1.png";
import { Layout } from "../../layouts/Layout";
import {
  addSkillButtonStyle,
  arrowStyle,
  cancelButtonStyle,
  changeButtonStyle,
  deleteSkillButtonStyle,
  frameStyle,
  imageBoxStyle,
  infoSectionStyles,
  leftMenuStyle,
  mainSectionStyles,
  mainStyles,
  mainTitleStyle,
  pImageStyle,
  removeButtonStyle,
  saveButtonStyle,
  skillAddTextInputStyle,
  skillBoxStyle,
  subStyles,
  subTitleStyle,
  textInputStyle,
  textStyle,
  titleStyle,
} from "./EditProfileStyles";

export default function EditProfile() {
  const menuButtons = [
    { text: "General Information", path: "/general" },
    { text: "About", path: "/about" },
    { text: "Working Experience", path: "/experience" },
    { text: "Skills", path: "/skills" },
    { text: "Education", path: "/education" },
  ];
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);

  const handleAddSkill = (newSkill) => {
    if (skills.length < 5 && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    setSkills(skills.filter((skill) => skill != skillToDelete));
  };

  const AddSkillsForm = ({ onAdd }) => {
    const [skill, setSkill] = useState("");

    const handleAddSkill = () => {
      onAdd(skill);
      setSkill("");
    };

    return (
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField
          label="Add your Skills"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          sx={skillAddTextInputStyle}
        />
        <Button
          onClick={handleAddSkill}
          disabled={!skill.trim() || skill.length > 15}
          sx={addSkillButtonStyle}
        >
          + Add
        </Button>
      </Stack>
    );
  };
  AddSkillsForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  return (
    <Layout>
      <form>
        <Box sx={mainStyles}>
          <Box sx={subStyles}>
            <Box sx={mainSectionStyles}>
              <Stack direction="row" spacing={2} justifyContent="flex-start">
                <IconButton sx={arrowStyle} onClick={() => navigate("/")}>
                  <ArrowBackIcon />
                </IconButton>
                <Typography variant="h4" sx={mainTitleStyle}>
                  Edit Profile
                </Typography>
              </Stack>
              <Stack direction="row" spacing={3} justifyContent="flex-end">
                <Button variant="outlined" sx={cancelButtonStyle}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={saveButtonStyle}
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </Stack>
            </Box >
            <Grid sx={infoSectionStyles}>
              <Grid item xs={12} sm={12} md={4} justifyContent="flex-start" >
                {menuButtons.map((button, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => navigate(button.path)}
                    sx={leftMenuStyle}
                  >
                    <Typography sx={textStyle}>{button.text}</Typography>
                  </MenuItem>
                ))}
              </Grid>
              <Grid item xs={12} sm={12} md={8} justifyContent="flex-start">
                <Box id="general" sx={frameStyle}>
                  <Typography sx={titleStyle}>General Information</Typography>
                  <Typography sx={subTitleStyle}>Avatar</Typography>
                  <Box sx={imageBoxStyle}>
                    <img src={profile1} alt="logo" style={pImageStyle} />
                    <Button variant="text" sx={changeButtonStyle}>
                      Change
                    </Button>
                    <Button variant="text" sx={removeButtonStyle}>
                      Remove
                    </Button>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={4}
                    justifyContent="flex-start"
                  >
                    <Stack>
                      <Typography sx={subTitleStyle}>Name</Typography>
                      <TextField
                        hiddenLabel
                        id="filled-basic"
                        variant="outlined"
                        sx={textInputStyle}
                      />
                    </Stack>
                    <Stack>
                      <Typography sx={subTitleStyle}>Title</Typography>
                      <TextField
                        hiddenLabel
                        id="filled-basic"
                        variant="outlined"
                        sx={textInputStyle}
                      />
                    </Stack>
                  </Stack>
                  <Stack>
                    <Typography sx={subTitleStyle}>
                      Professional Skills
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="flex-start"
                    >
                      {skills.map((skill, index) => (
                        <Box key={index} sx={skillBoxStyle}>
                          {skill}{" "}
                          <Button
                            variant="text"
                            size="small"
                            onClick={() => handleDeleteSkill(skill)}
                            sx={deleteSkillButtonStyle}
                          >
                            X
                          </Button>
                        </Box>
                      ))}
                      {skills.length < 5 && (
                        <AddSkillsForm onAdd={handleAddSkill} />
                      )}
                    </Stack>
                  </Stack>
                  <Stack>
                    <Typography sx={subTitleStyle}>Description</Typography>
                    <TextField
                      hiddenLabel
                      id="filled-basic"
                      multiline
                      maxRows={4}
                      variant="filled"
                    />
                  </Stack>
                </Box>
                <div id="about">
                  <Typography sx={titleStyle}>About</Typography>
                  {/* Add details content for "About" here */}
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </form>
    </Layout>
  );
}
