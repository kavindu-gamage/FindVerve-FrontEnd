
import { Box } from "@mui/material";
import MainSection from "../../components/organisms/EditProfile/MainSection/MainSection";
import { Layout } from "../../layouts/Layout";
import {
  mainStyles
} from "./EditProfileStyles";

export default function EditProfile() {
  
  return (
    <Layout>
      <Box sx={mainStyles}>
        <MainSection/>
      </Box>
    </Layout>
  );
}
