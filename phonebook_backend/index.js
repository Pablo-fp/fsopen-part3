require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const Person = require("./models/person");

// custom token for morgan
morgan.token("postData", function (req) {
  if (req.method === "POST") {
    return JSON.stringify(req.body);
  }
});

//Middlewares
app.use(express.json());
//app.use(morgan("tiny"));
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :postData"
  )
);
app.use(cors());
app.use(express.static("dist"));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

///Mongo definition

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id).then((person) => {
    response.json(person);
  });
});

app.get("/info", (request, response) => {
  response.send(`
  <p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>
  `);
});

app.delete("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id).then((person) => {
    response.json(person);
  });
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    const missing = !body.name ? "Name" : "Number";
    return response.status(400).json({ error: `'${missing}' is missing` });
  }

  const newPerson = new Person({
    name: body.name,
    number: body.number,
  });
  console.log(newPerson);

  newPerson.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
