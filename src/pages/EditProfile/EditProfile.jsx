
import { Box } from "@mui/material";
import MainSection from "../../components/organisms/EditProfile/MainSection/MainSection";
import MenuList from "../../components/organisms/EditProfile/MenuList/MenuList";
import { Layout } from "../../layouts/Layout";
import {
  mainStyles, subStyles
} from "./EditProfileStyles";

export default function EditProfile() {
  
  return (
    <Layout>
      <Box sx={mainStyles}>
        <Box sx={subStyles}>
        <MainSection/>
        <MenuList/>
        </Box>
      </Box>
    </Layout>
  );
}
