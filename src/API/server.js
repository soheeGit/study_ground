const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const groups = [
  { id: 1, name: 'Group 1' },
  { id: 2, name: 'Group 2' },
  { id: 3, name: 'Group 3' },
];

app.get('/api/groups', (req, res) => {
  res.json(groups);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
