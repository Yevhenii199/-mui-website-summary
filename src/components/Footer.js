import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ textAlign: "center", padding: 2, marginTop: 10, backgroundColor: "#f0f0f0" }}>
      <Typography variant="body2">Сontacts</Typography>
      <Typography variant="body2">Email: gshijanov5@gmail.com</Typography>
      <Typography variant="body2">Phone: +38268656978</Typography>
      <Typography variant="body2">Telegram: https://t.me/Yevhenii_Shyianov</Typography>
      <Typography variant="body2">linkedin: https://www.linkedin.com/in/yevhenii-shyianov-292696292/</Typography>
      <Typography variant="body2">GitHub: https://github.com/Yevhenii199?tab=repositories</Typography>
    </Box>
  );
}

export default Footer;
