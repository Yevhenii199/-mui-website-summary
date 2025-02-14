import { useState } from "react";
import { Container, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <Container maxWidth="sm">
      <TextField
        label="Нова задача"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ marginTop: 2 }}
      />
      <Button onClick={addTask} variant="contained" sx={{ marginTop: 2 }}>Додати</Button>
      <List sx={{ marginTop: 2 }}>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Todo;
