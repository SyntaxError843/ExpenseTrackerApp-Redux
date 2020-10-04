import { v4 as uuid } from "uuid";

const transactionsInitialState = [
  { id: uuid(), text: "Flower", amount: -20 },
  { id: uuid(), text: "Salary", amount: 300 },
  { id: uuid(), text: "Book", amount: -10 },
  { id: uuid(), text: "Camera", amount: 150 },
];

export default transactionsInitialState;
