# Training

## Users

PORT: 3000

- Create User: `localhost:3000/users` => POST
  ```sh
    {
        "name": "Sandy",
        "mobile": 789
    }
  ```
- Get all Users: `localhost:3000/users` => GET

## Todos

PORT: 4000

- Create a TODO: `localhost:4000/todos?mobile=` => POST
  ```sh
    {
      "todo": "This is a test"
    }
  ```
- Get all TODOs: `localhost:4000/todos` => GET
- Create a Completed TODO: `localhost:4000/todos/completed?todo=` => POST
  ```sh
    {
      "completed": true
    }
  ```
- Get all Completed TODOs: `localhost:4000/todos/completed` => GET
