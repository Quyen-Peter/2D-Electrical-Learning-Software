const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());



const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Electronic Learning API',
      version: '1.0.0',
    },
  },
  apis: ['./index.js'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/users', (req, res) => {
  const users = [
    {
      id: 1,
      fullName: 'Quản trị viên',
      email: 'admin@example.com',
      role: 'Admin',
      createdAt: '2025-06-02 14:30:00',
    },
    {
      id: 2,
      fullName: 'Giáo viên A',
      email: 'teacher@example.com',
      role: 'Teacher',
      createdAt: '2025-06-02 14:30:00',
    },
    {
      id: 3,
      fullName: 'Học sinh B',
      email: 'student@example.com',
      role: 'Student',
      createdAt: '2025-06-02 14:30:00',
    },
  ];

  res.json(users);
});




app.listen(PORT, () => {
  console.log(`✅ Backend chạy tại http://localhost:${PORT}`);
});
