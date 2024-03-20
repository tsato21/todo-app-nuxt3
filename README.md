# Todoアプリ Nuxt3


## セットアップ

1. VS Codeのターミナルを開き、リポジトリのクローンを作成します。

```bash
cd あなたのディレクトリへのパス
git clone https://github.com/tsato21/todo-app-nuxt3.git
```

2. リポジトリのフォルダにアクセスします。

```bash
cd path/to/your/directory
```

3. Node Package Managerをインストールします。

```bash
npm install
```

4. 開発モードのサーバーを起動します。

```bash
npm run dev
```

5. このアプリのホームページにアクセスします。( `http://localhost:3000` )


## 使用法

### スタッフリストの管理
特定のスタッフにTodoを割り当てたい場合は、この機能を使用します。
* Todoの追加/編集画面内のスタッフのドロップダウンリストに反映されます。
* Navbarの"Staff List"をクリックして該当ページにアクセス。

#### スタッフの追加
1. スタッフ名を入力し、"Add Staff" をクリックします。
![Add Staff UI](/docs/assets/add-staff-ui.png)
2. 追加されたスタッフは自動的にスタッフリストテーブルに表示されます。

#### スタッフ名の更新
1. 特定のスタッフの "Edit" をクリックします。
2. スタッフ名を変更し、更新画面で "Update Staff" をクリックします。
![Edit Staff UI](/docs/assets/edit-staff-ui.png)
3. テーブル内のスタッフ名が自動的に変更されます。
    * この更新はTodoリストテーブルのスタッフ情報にも自動反映されます。

#### スタッフの削除
1. 特定のスタッフの "Delete" をクリックします。
2. 確認画面で "Yes, Delete" をクリックします。
![Delete Staff UI](/docs/assets/delete-staff-ui.png)
3. テーブル内のスタッフ情報が自動的に削除されます。
    * この削除はTodoリストテーブルのスタッフ情報に反映されます。


### Todoリストの管理
Todoの追加、更新、削除、完了状態の管理、及び完了状態によるフィルタリングなどのTodo管理が可能です。
* Navbarの"Home"をクリックして、該当ページにアクセス。

#### Todoの追加
1. "Add New Todo" ボタンをクリックします。
2. 追加画面でTodoの詳細を入力し、"Add Todo" をクリックします。
![Add Todo UI](/docs/assets/add-todo-ui.png)
3. 新しいTodoが自動的にTodoリストに追加されます。

#### Todoの更新
1. 更新したいTodoの "Edit" ボタンをクリックします。
2. 変更画面でTodoの詳細を変更し、 "Update Todo" をクリックします。
![Edit Todo UI](/docs/assets/edit-todo-ui.png)
3. 更新されたTodoが自動的にTodoリストに反映されます。

#### Todoの削除
1. 削除したいTodoの "Delete" ボタンをクリックします。
2. 確認画面で "Yes, Delete" をクリックしてアクションを確認します。
![Delete Todo UI](/docs/assets/delete-todo-ui.png)
3. Todoが自動的にTodoリストから削除されます。

#### Todoの完了状態の切り替え
1. 完了または未完了としてマークしたいTodoのチェックボックスをクリックします。
2. Todoの完了状態が自動的に更新され、この変更はTodoリストに反映されます。
![Toggle Status UI](/docs/assets/toggle-status-ui.png)

#### Todoのフィルタリング
1. "Incomplete"、"All"、または "Completed" ボタンをクリックして、Todoを完了状態でフィルタリングします。
2. Todoリストは自動的に更新され、選択したフィルタに一致するTodoのみが表示されます。
![Status Filter UI](/docs/assets/status-filter-ui.png)


## 現行アプリの課題

### UForm内の要素のスタイルが昼と夜で変わる
日中は、UForm内のUI（UInputやUButtonなど）が正常に動作します。（下記参照）
![Show daytime UForm Contents](/docs/assets/daytime-form-ui.png)
しかし、夜になると、スタイルが自動的に変わり、ユーザーが入力しにくいUIになります。（下記参照）
![Show evening edit/delete button UI](/docs/assets/evening-form-ui.png)
この課題については、今後修正予定です。

### 編集/削除ボタンのドロップダウンスタイルの設定
理想のUIは以下の通りで、これはBootstrapのドロップダウンを使用しています。
![Show desired edit/delete button UI](/docs/assets/desired-update-delete-ui.png)

しかし、現在のUIでは、ドロップダウンメニューは使用されておらず、表示に課題が残っています。（下記参照）
![Show current edit/delete button UI](/docs/assets/current-update-delete-ui.png)
この課題については、今後修正予定です。


## 今後の作業

上記の課題を含めた当該アプリの改善点について、修正する予定です。