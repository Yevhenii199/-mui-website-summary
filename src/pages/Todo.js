import { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";
import { Delete, Edit, Clear } from "@mui/icons-material";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    document.title = "TODO";
  }, []);

  const addTask = () => {
    if (input.trim().length === 0) {
      setError("Поле не може бути порожнім!");
      return;
    }

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = input;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: input, completed: false }]);
    }

    setInput("");
    setError("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setInput(tasks[index].text);
    setEditIndex(index);
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h1" align="center" sx={{ marginTop: 3 }}>
        TODO
      </Typography>

      <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
        <TextField
          label="Нова задача"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          error={!!error}
          helperText={error}
          inputProps={{ pattern: "[A-Za-z0-9]*" }}
        />
        <Button onClick={addTask} variant="contained">
          {editIndex !== null ? "Оновити" : "Додати"}
        </Button>
      </Box>

      {tasks.length > 0 && (
        <Button
          onClick={clearAll}
          variant="outlined"
          color="secondary"
          sx={{ marginTop: 2 }}
          startIcon={<Clear />}
        >
          Очистити все
        </Button>
      )}

      <List sx={{ marginTop: 2 }}>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Checkbox checked={task.completed} onChange={() => toggleCompletion(index)} />
            <ListItemText primary={task.text} />
            <IconButton onClick={() => editTask(index)} color="primary">
              <Edit />
            </IconButton>
            <IconButton onClick={() => deleteTask(index)} color="error">
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Todo;
