# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

1. Copy this repository into your local PC
```bash

```

2. Install the dependencies in Terminal:

```bash
# 1. npm
npm install

# 2. @nuxtjs/composition-api: where defineNuxtConfig comes from.
npm install @nuxtjs/composition-api @pinia/nuxt @nuxt/ui bootstrap

# 3. @pinia/nuxt: State management library for Vue.js that integrates with Nuxt.js.
npm install @pinia/nuxt

# 4. @nuxt/ui: UI library for Nuxt.js.
npm install @nuxt

# 5. bootstrap: CSS framework
npm bootstrap

```

3. Start the development server in Terminal:

```bash
# npm
npm run dev
```

4. Access the index page of this app on `http://localhost:3000`


## Usage

### Setting list of staff
If you would like to assign todos to certain staff, use this feature so that you can assign staff to particular todos from the dropdown later.

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
2. Click "Yes, delete" in the confirmation screen.
3. The staff name in the table will be automatically deleted.
    * This deletion will be reflected on staff information in the Todo list table.

### Todo List
This feature allows you to manage your todos. You can add, update, and delete todos, and also filter them by their completion status.

#### Adding a Todo
1. Click the "Add New Todo" button.
2. Fill in the todo details in the modal and click "Add Todo".
3. The new todo will be automatically added to the todo list.

#### Updating a Todo
1. Click the "Edit" button of the todo you want to update.
2. Modify the todo details in the modal and click "Update Todo".
3. The updated todo will be automatically reflected in the todo list.

#### Deleting a Todo
1. Click the "Delete" button of the todo you want to delete.
2. Confirm your action in the modal by clicking "Yes, delete".
3. The todo will be automatically removed from the todo list.

#### Filtering Todos
1. Click the "Incomplete", "All", or "Completed" button to filter the todos by their completion status.
2. The todo list will be automatically updated to show only the todos that match the selected filter.

#### Toggling Todo Completion Status
1. Click the checkbox of the todo you want to mark as completed or incomplete.
2. The todo's completion status will be automatically updated, and this change will be reflected in the todo list.

## Known Issues and Limitations

### Styles Change of Elements within UForm between Daytime and Evening
During the daytime, the UI within UForm such as UInput and UButton works as expected. However, in the evening, the style changes automatically, which can make it difficult for users to use the app. This issue is currently under investigation, and a fix will be implemented in a future update.

### Setting Dropdown Styles for Edit/Delete Buttons
The current implementation does not support the use of dropdown menus for the edit/delete buttons, similar to what can be achieved with Bootstrap. The desired functionality is illustrated in the following code snippet:

```html
<div class="dropdown text-center">
    <button class="btn btn-sm" data-bs-toggle="dropdown">
        <i class="fa-solid fa-ellipsis-v"></i>
    </button>
    <div class="dropdown-menu">
        <button class="btn btn-sm dropdown-item" data-bs-toggle="modal" data-bs-target="#editCategory{{$category->id}}">
            <div class="text-warning">
                <i class="fa-solid fa-pen-nib"></i> Edit
            </div>
        </button>
        <button class="btn btn-sm dropdown-item" data-bs-toggle="modal" data-bs-target="#forceDeleteCategory{{$category->id}}">
            <div class="text-danger">
                <i class="fa-solid fa-pen-nib"></i> Permanently Delete
            </div>
        </button>
    </div>
</div>
```

## Future Work

This app is still a work in progress, and there are many areas for improvement. Future updates will include code refactoring and UI enhancements to make the app more user-friendly and useful.