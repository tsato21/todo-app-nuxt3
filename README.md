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

3. Node.jsの依存関係をインストールします。

```bash
# npm
npm install
```

4. ターミナルで開発サーバーを起動します。

```bash
# npm
npm run dev
```

5. このアプリのインデックスページにアクセスします。( `http://localhost:3000` )


## 使用法

### スタッフリストの管理
特定のスタッフにTodoを割り当てたい場合は、この機能を使用します。（Todoの追加/編集のスタッフのドロップダウンリストに反映されます）

#### スタッフの追加
1. "Staff List"をクリックします。
2. スタッフ名を入力し、"Add Staff" をクリックします。
3. 追加されたスタッフは自動的にスタッフリストテーブルに表示されます。

#### スタッフ名の更新
1. 特定のスタッフレコードの "Edit" をクリックします。
2. スタッフ名を変更し、更新画面で "Update Staff" をクリックします。
3. テーブルのスタッフ名が自動的に変更されます。
    * この更新はTodoリストテーブルのスタッフ情報にも自動反映されます。

#### スタッフの削除
1. 特定のスタッフレコードの "Delete" をクリックします。
2. 確認画面で "Yes, Delete" をクリックします。
3. テーブルのスタッフ名が自動的に削除されます。
    * この削除はTodoリストテーブルのスタッフ情報に反映されます。


### Todoリストの管理
Todoの追加、更新、削除、および完了状態によるフィルタリングなどのTodo管理が可能です。

#### Todoの追加
1. "Add New Todo" ボタンをクリックします。
2. モーダルでTodoの詳細を入力し、"Add Todo" をクリックします。
3. 新しいTodoが自動的にTodoリストに追加されます。

#### Todoの更新
1. 更新したいTodoの "Edit" ボタンをクリックします。
2. 変更画面でTodoの詳細を変更し、 "Update Todo" をクリックします。
3. 更新されたTodoが自動的にTodoリストに反映されます。

#### Todoの削除
1. 削除したいTodoの "Delete" ボタンをクリックします。
2. 確認画面で "Yes, Delete" をクリックしてアクションを確認します。
3. Todoが自動的にTodoリストから削除されます。

#### Todoのフィルタリング
1. "Incomplete"、"All"、または "Completed" ボタンをクリックして、Todoを完了状態でフィルタリングします。
2. Todoリストは自動的に更新され、選択したフィルタに一致するTodoのみが表示されます。

#### Todoの完了状態の切り替え
1. 完了または未完了としてマークしたいTodoのチェックボックスをクリックします。
2. Todoの完了状態が自動的に更新され、この変更はTodoリストに反映されます。


## 現行アプリの課題

### UForm内の要素のスタイルが昼と夜で変わる
昼間は、UForm内のUI（UInputやUButtonなど）が期待通りに動作します（下記参照）。
![Show daytime edit/delete button UI]()
しかし、夜になると、スタイルが自動的に変わります（下記参照）。
![Show evening edit/delete button UI](/docs/assets/evening-form-ui.png)
この問題は現在確認中で、将来的な修正が必要な部分です。

### 編集/削除ボタンのドロップダウンスタイルの設定
現在の実装では、編集/削除ボタンのドロップダウンメニューの使用はサポートされていません（下記参照）。
![Show current edit/delete button UI](/docs/assets/current-update-delete-ui.png)
理想のUIは以下の通りで、これはBootstrapのドロップダウンを使用しています。
![Show desired edit/delete button UI](/docs/assets/desired-update-delete-ui.png)


## 今後の作業

上記の課題を含めた当該アプリの改善点について、修正する予定です。