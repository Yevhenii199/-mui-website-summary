import { render, screen, fireEvent } from "@testing-library/react/";
import Todo from "./Todo";
import "@testing-library/jest-dom";

describe("Todo App", () => {
  test("1️⃣ Сторінка має заголовок TODO", () => {
    render(<Todo />);
    expect(screen.getByText(/TODO/i)).toBeInTheDocument();
  });

  test("2️⃣ Поле для введення підтримує цифри та букви", () => {
    render(<Todo />);
    const input = screen.getByLabelText(/Нова задача/i);

    fireEvent.change(input, { target: { value: "Задача 123" } });
    expect(input.value).toBe("Задача 123");
  });

  test("3️⃣ Порожній ввід показує помилку", () => {
    render(<Todo />);
    
    const button = screen.getByText(/Додати/i);
    fireEvent.click(button);
    
    expect(screen.getByText(/Поле не може бути порожнім!/i)).toBeInTheDocument();
  });


test("4️⃣ Додавання нової задачі у список", () => {
  render(<Todo />);
    
  const input = screen.getByLabelText(/Нова задача/i);
  const button = screen.getByText(/Додати/i);

  fireEvent.change(input, { target: { value: "Завдання для тесту" } });
  fireEvent.click(button);

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox.checked).toBe(false);

  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
});




  test("5️⃣ Введення нового тексту очищає поле вводу після додавання", () => {
    render(<Todo />);
    const input = screen.getByLabelText(/Нова задача/i);
    const button = screen.getByText(/Додати/i);

    fireEvent.change(input, { target: { value: "Ще одна задача" } });
    fireEvent.click(button);

    expect(input.value).toBe("");
  });
});
