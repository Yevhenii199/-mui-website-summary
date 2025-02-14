import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

function Swapi() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then((response) => setCharacters(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ marginTop: 3 }}>Персонажі SWAPI</Typography>
      <List>
        {characters.map((char, index) => (
          <ListItem key={index}>
            <ListItemText primary={char.name} secondary={`Висота: ${char.height} см`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Swapi;
