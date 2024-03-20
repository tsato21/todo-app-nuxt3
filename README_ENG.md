# Todo App Nuxt3


## Setup

1. Open the terminal in VS Code and clone the repository.

```bash
git clone https://github.com/tsato21/todo-app-nuxt3.git
```

2. Access the repository folder.

```bash
cd path/to/your/directory
```

3. Install Node.js dependencies,

```bash
#. npm
npm install
```

4. Start the development server.

```bash
# npm
npm run dev
```

5. Access the index page of this app on `http://localhost:3000`.


## Usage

### Manage Staff List
If you would like to assign todos to certain staff, use this feature. (Reflected on dropdown list of staff in add/edit todo)

#### Adding Staff
1. Click "Staff List".
2. Input staff name and click "Add Staff".
3. Added staff will be automatically shown in the staff list table.

#### Updating Staff Name
1. Click "Edit" of a particular staff record.
2. Modify the staff name and click "Update Staff" in the update screen.
3. The staff name in the table will be automatically modified.
    * This update will be reflected on staff information in the Todo list table.

#### Deleting Staff Name
1. Click "Delete" of a particular staff record.
2. Click "Yes, Delete" in the confirmation screen.
3. The staff name in the table will be automatically deleted.
    * This deletion will be reflected on staff information in the Todo list table.

### Manage Todo List
This feature allows you to manage your todos. You can add, update, and delete todos, and also filter them by their completion status.

#### Adding a Todo
1. Click the "Add New Todo" button.
2. Fill in the todo details in the modal and click "Add Todo".
3. The new todo will be automatically added to the todo list.

#### Updating a Todo
1. Click the "Edit" button of the todo you want to update.
2. Modify the todo details in the edit screen and click "Update Todo".
3. The updated todo will be automatically reflected in the todo list.

#### Deleting a Todo
1. Click the "Delete" button of the todo you want to delete.
2. Confirm your action in the confirmation screen by clicking "Yes, Delete".
3. The todo will be automatically removed from the todo list.

#### Filtering Todos
1. Click the "Incomplete", "All", or "Completed" button to filter the todos by their completion status.
2. The todo list will be automatically updated to show only the todos that match the selected filter.

#### Toggling Todo Completion Status
1. Click the checkbox of the todo you want to mark as completed or incomplete.
2. The todo's completion status will be automatically updated, and this change will be reflected in the todo list.


## Known Issues and Limitations

### Styles Change of Elements within UForm between Daytime and Evening
During the daytime, the UI within UForm such as UInput and UButton works as expected (as shown below).
![Show daytime edit/delete button UI]()
However, in the evening, the style changes automatically, as show below.
![Show evening edit/delete button UI](/docs/assets/evening-form-ui.png)
This can make it difficult for users to use the app. This issue is currently under investigation, and a fix will be implemented in a future update.

### Setting Dropdown Styles for Edit/Delete Buttons
The current implementation does not support the use of dropdown menus for the edit/delete buttons as shown below.
![Show current edit/delete button UI](/docs/assets/current-update-delete-ui.png)
Similar UI to be aimed at is below and this uses Bootstrap dropdown.
![Show desired edit/delete button UI](/docs/assets/desired-update-delete-ui.png)


## Future Work

Including the issues mentioned above, we plan to make corrections to the areas of improvement for this app.