# Todoアプリ Nuxt3


## セットアップ

1. VS Codeのターミナルを開き、リポジトリのクローンを作成します。

```bash
cd path/to/your/directory
git clone https://github.com/tsato21/todo-app-nuxt3.git
```

2. リポジトリのフォルダにアクセスします。

```bash
cd todo-app-nuxt3
```

3. Node Package Managerをインストールします。

```bash
npm install
```

4. 開発モードのサーバーを起動します。

```bash
npm run dev
```

5. (表示された場合のみ)　参加に対して、"⚫︎ Yes"を選択。

```bash
❯ Are you interested in participating?
● Yes / ○ No
```

6. このアプリのホームページにアクセスします。( `http://localhost:3000` )


## 使用法

### Todoリストの管理
Todoの追加、更新、削除、完了状態の管理、及び完了状態によるフィルタリングなどのTodo管理が可能です。
* ページトップの"Home"をクリックして、該当ページにアクセス。

#### Todoの追加
1. "Add New Todo" ボタンをクリックします。
2. 追加画面でTodoの詳細を入力し、"Add Todo" をクリックします。
![Add Todo UI](/docs/assets/add-todo-ui.png)
* "Staff (optional)" はStaff Listにて、Staffを追加することで選択可能になります。("スタッフリストの管理"で説明)
3. 新しいTodoが自動的にTodoリストテーブルに追加されます。

#### Todoの編集
1. 編集したいTodoの "Edit" ボタンをクリックします。
2. 編集画面でTodoを編集し、 "Close" をクリックします。
![Edit Todo UI](/docs/assets/edit-todo-ui.png)
3. 編集情報は自動的にTodoリストテーブルに反映されます。

#### Todoの削除
1. 削除したいTodoの "Delete" ボタンをクリックします。
2. 確認画面で "Yes, Delete" をクリックします。
![Delete Todo UI](/docs/assets/delete-todo-ui.png)
3. Todoが自動的にTodoリストテーブルから削除されます。

#### Todoの完了状態の切り替え
1. 完了または未完了としてマークしたいTodoのチェックボックスをクリックします。
2. Todoの完了状態が自動的に更新され、この変更はTodoリストテーブルに反映されます。
![Toggle Status UI](/docs/assets/toggle-status-incomplete-ui.png)
![Toggle Status UI](/docs/assets/toggle-status-complete-ui.png)

#### Todoのフィルタリング
1. "Incomplete"、"All"、または "Completed" ボタンをクリックして、Todoを完了状態ごとでフィルタリングします。
2. Todoリストテーブルは自動的に更新され、選択したフィルタに一致するTodoのみが表示されます。
![Status Filter UI](/docs/assets/status-filter-ui.png)

### スタッフリストの管理
特定のスタッフにTodoを割り当てたい場合は、この機能を使用します。
* Todoの追加/編集画面内のスタッフのドロップダウンリストに反映されます。
* ページトップの"Staff List"をクリックして該当ページにアクセス。

#### スタッフの追加
1. スタッフ名を入力し、"Add Staff" をクリックします。
![Add Staff UI](/docs/assets/add-staff-ui.png)
2. 追加されたスタッフは自動的にスタッフリストテーブルに表示されます。

#### スタッフ名の編集
1. 特定のスタッフの "Edit" をクリックします。
2. 編集画面でスタッフ名を編集し、 "Close" をクリックします。
![Edit Staff UI](/docs/assets/edit-staff-ui.png)
3. テーブル内のスタッフ名が自動的に更新されます。
    * この更新はTodoリストテーブルのスタッフ情報にも自動反映されます。

#### スタッフの削除
1. 特定のスタッフの "Delete" をクリックします。
2. 確認画面で "Yes, Delete" をクリックします。
![Delete Staff UI](/docs/assets/delete-staff-ui.png)
3. テーブル内のスタッフ情報が自動的に削除されます。
    * この削除はTodoリストテーブルのスタッフ情報に反映されます。