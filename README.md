**Taskify**

A backend project for managing tasks built with Nodejs, Express, MongoDB, and Mongoose.

**Getting started**

To get started with Taskify, you will need to:

1. Install Node.js and MongoDB.
2. Clone this repository:

```
git clone https://github.com/sadiqful/taskify-backend.git
```

3. Install the project dependencies:

```
npm install
```

4. Start the Taskify server:

```
npm start
```

**API routes**

The Taskify API has the following routes:

**Tasks**

* `/tasks` - Get a list of all tasks.
* `/tasks/:id` - Get a specific task by ID.
* `/tasks` - Create a new task.
* `/tasks/:id` - Update a specific task.
* `/tasks/:id` - Delete a specific task.

**Categories**

* `/categories` - Get a list of all categories.
* `/categories/:id` - Get a specific category by ID.
* `/categories` - Create a new category.
* `/categories/:id` - Update a specific category.
* `/categories/:id` - Delete a specific category.

**Users**

* `/users` - Get a list of all users.
* `/users/:id` - Get a specific user by ID.
* `/users` - Create a new user.
* `/users/:id` - Update a specific user.
* `/users/:id` - Delete a specific user.

**Usage examples**

To get a list of all tasks, you can use the following curl command:

```
curl http://localhost:1337/tasks
```

To create a new task, you can use the following curl command:

```
curl -X POST http://localhost:1337/tasks -d '{
  "title": "My new task",
  "category": "Work"
}'
```

To update a specific task, you can use the following curl command:

```
curl -X PUT http://localhost:1337/tasks/1234567890 -d '{
  "title": "My updated task"
}'
```

To delete a specific task, you can use the following curl command:

```
curl -X DELETE http://localhost:1337/tasks/1234567890
```
