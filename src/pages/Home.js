import { Container, Typography, Paper } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: 3, marginTop: 10 }}>
        <Typography variant="h4">Hi! My name is Yevhenii!</Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
         I’m a Junior Front-End Developer. I specialize in creating modern and responsive web pages using HTML, CSS, and JavaScript.
         I’m also familiar with frameworks like Bootstrap, jQuery, formik, tailwind css , material ui and React, and I’m constantly learning new technologies and approaches in web development.
         In my work, I focus not only on functionality but also on ensuring a great user interface and optimizing website performance. I enjoy working in a team and am always open to new challenges 
         and opportunities to improve my skills.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Home;
