# Todo App Nuxt3


## Setup

1. Open the terminal in VS Code and clone the repository.

```bash
cd path/to/your/directory
git clone https://github.com/tsato21/todo-app-nuxt3.git
```

2. Access the repository folder.

```bash
cd todo-app-nuxt3
```

3. Install Node Package Manager.

```bash
npm install
```

4. Start the development server.

```bash
npm run dev
```

5. (Only when displayed) Choose "⚫︎ Yes" for participation.
```bash
❯ Are you interested in participating?
● Yes / ○ No
```

6. Access the home page of this app on `http://localhost:3000`.


## Usage

### Managing Todo List
This feature allows you to manage your todos. You can add, update, and delete todos, manage completion status, and filter the todos by their completion status.
* Click "Home" on the top of the page to access the target page.

#### Adding a Todo
1. Click the "Add New Todo" button.
2. Fill in the todo details in the adding screen and click "Add Todo".
![Add Todo UI](/docs/assets/add-todo-ui.png)
    * "Staff (optional)" becomes selectable by adding staff in the Staff List. (Explained in "Managing Staff List")
3. The new todo will be automatically added to the todo list table.

#### Updating a Todo
1. Click the "Edit" button of the todo you want to update.
2. Modify the todo details in the edit screen and click "Close".
![Edit Todo UI](/docs/assets/edit-todo-ui.png)
3. The updated todo will be automatically reflected in the todo list table.

#### Deleting a Todo
1. Click the "Delete" button of the todo you want to delete.
2. Click "Yes, Delete" in the confirmation screen.
![Delete Todo UI](/docs/assets/delete-todo-ui.png)
3. The todo will be automatically removed from the todo list table.

#### Toggling Todo Completion Status
1. Click the checkbox of the todo you want to mark as completed or incomplete.
2. The todo's completion status will be automatically updated, and this change will be reflected in the todo list table.
![Toggle Status UI](/docs/assets/toggle-status-incomplete-ui.png)
![Toggle Status UI](/docs/assets/toggle-status-complete-ui.png)

#### Filtering Todos
1. Click the "Incomplete", "All", or "Completed" button to filter the todos by their completion status.
2. The todo list will be automatically updated to show only the todos that match the selected filter.
![Status Filter UI](/docs/assets/status-filter-ui.png)

### Managing Staff List
If you would like to assign todos to certain staff, use this feature.
* Reflected on dropdown list of staff in add/edit todo screen.
* Click "Staff List" on the top of the page to access the target page.

#### Adding Staff
1. Input staff name and click "Add Staff".
![Add Staff UI](/docs/assets/add-staff-ui.png)
2. Added staff will be automatically shown in the staff list table.

#### Updating Staff Name
1. Click "Edit" of a particular staff.
2. Modify the staff name and click "Close" in the update screen.
![Edit Staff UI](/docs/assets/edit-staff-ui.png)
3. The staff name in the table will be automatically modified.
* This update will be reflected on staff information in the todo list table.

#### Deleting Staff Name
1. Click "Delete" of a particular staff.
2. Click "Yes, Delete" in the confirmation screen.
![Delete Staff UI](/docs/assets/delete-staff-ui.png)
3. The staff name in the table will be automatically deleted.
    * This deletion will be reflected on staff information in the todo list table.