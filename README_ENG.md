# Todo App Nuxt3


## Setup

1. Install Node.js and check the version. Nuxt3 requires Node.js version 14 or higher, but some packages may require version 18 or higher. Therefore, it is recommended to install Node.js version 18 or higher.

```bash
nodenv install 18.0.0
node -v
```

2. Open the terminal in VS Code and clone the repository.

```bash
cd path/to/your/directory
git clone https://github.com/tsato21/todo-app-nuxt3.git
```

3. Access the repository folder.

```bash
cd todo-app-nuxt3
```

4. Install Node Package Manager.

```bash
npm install
```

5. Start the development server.

```bash
npm run dev
```

6. (Only when displayed) Choose "⚫︎ Yes" for participation.
```bash
❯ Are you interested in participating?
● Yes / ○ No
```

7. Access the home page of this app on `http://localhost:3000`.


## Usage

### Language Settings
From the top of the page, please select a language.
* The default setting is Japanese.
* The selectable languages are Japanese and English.
![Language Choice](/docs/assets/language-choice-EN.png)

### Managing Todo List
This feature allows you to manage your todos. You can add, update, and delete todos, manage completion status, and filter the todos by their completion status.
* You can access the page by clicking "Home" on the top of the page.

#### Adding a Todo
1. Click the "+ Add" button.
2. Fill in the todo details in the adding screen and click "Add".
    * "Staff" becomes selectable by adding staff in the Staff List. (Explained in "Managing Staff List")
3. The new todo will be automatically added to the todo list table.

#### Updating a Todo
1. Click the "Edit" button of the todo you want to update.
2. Modify the todo details in the edit screen and click "Close".
3. The updated todo will be automatically reflected in the todo list table.

#### Deleting a Todo
1. Click the "Delete" button of the todo you want to delete.
2. Click "Delete" in the confirmation screen.
3. The todo will be automatically removed from the todo list table.

#### Toggling Todo Completion Status
1. Once you finish the todo, click the checkbox of the todo you want to mark as completed.
2. The todo's completion status will be automatically updated, and this change will be reflected in the todo list table.

#### Filtering Todos
1. Click the "Incomplete", "All", or "Completed" button to filter the todos by their completion status.
2. The todo list will be automatically updated to show only the todos that match the selected filter.
![Status Filter UI](/docs/assets/status-filter-ui-EN.png)

### Managing Staff List
If you would like to assign todos to certain staff, use this feature.
* Reflected on dropdown list of staff in add/edit todo screen.
* You can access the page by clicking "Staff List" on the top of the page.

#### Adding Staff
1. Input staff name and click "Add".
2. Added staff will be automatically shown in the staff list table.

#### Updating Staff Name
1. Click "Edit" of a particular staff.
2. Modify the staff name and click "Close" in the update screen.
3. The staff name in the table will be automatically modified.
    * This update will be reflected on staff information in the todo list table.

#### Deleting Staff Name
1. Click "Delete" of a particular staff.
2. Click "Delete" in the confirmation screen.
3. The staff name in the table will be automatically deleted.
    * This deletion will be reflected on staff information in the todo list table.