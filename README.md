# Todoアプリ Nuxt3


## セットアップ

1. Node.jsをインストールし、バージョンを確認してください。Nuxt3はNode.jsのバージョン14以上が必要ですが、一部のパッケージではバージョン18以上が求められる場合があります。そのため、バージョン18以上のNode.jsをインストールすることを推奨します。

```bash
nodenv install 18.0.0
node -v
```

2. VS Codeのターミナルを開き、リポジトリのクローンを作成します。

```bash
cd path/to/your/directory
git clone https://github.com/tsato21/todo-app-nuxt3.git
```

3. リポジトリのフォルダにアクセスします。

```bash
cd todo-app-nuxt3
```

4. Node Package Managerをインストールします。

```bash
npm install
```

5. 開発モードのサーバーを起動します。

```bash
npm run dev
```

6. (表示された場合のみ)　参加に対して、"⚫︎ Yes"を選択します。

```bash
❯ Are you interested in participating?
● Yes / ○ No
```

7. このアプリのホームページにアクセスします。( `http://localhost:3000` )


## 使用法

### 言語設定
ページトップより、言語を選択してください。
* 初期設定は日本語で設定されています。
* 選択可能な言語は日本語とEnglishです。
![言語選択](/docs/assets/language-choice-JP.png)

### Todoリストの管理
Todoの追加、更新、削除、完了状態の管理、及び完了状態によるフィルタリングなどのTodo管理が可能です。
* ページトップの"ホーム"をクリックすると、該当ページにアクセスできます。

#### Todoの追加
1. "+ 追加" ボタンをクリックします。
2. 追加画面でTodoの詳細を入力し、"追加" をクリックします。
* "スタッフ" はスタッフリストにて、追加することで選択可能になります。("スタッフリストの管理"で説明)
3. 新しいTodoが自動的にTodoリストテーブルに追加されます。

#### Todoの編集/更新
1. 編集したいTodoの "編集" ボタンをクリックします。
2. 編集画面でTodoを編集し、 "閉じる" をクリックします。
3. 編集情報は自動的にTodoリストテーブルに反映されます。

#### Todoの削除
1. 削除したいTodoの "削除" ボタンをクリックします。
2. 確認画面で "削除" をクリックします。
3. Todoが自動的にTodoリストテーブルから削除されます。

#### Todoの完了状態の切り替え
1. Todoが完了したら、チェックボックスをクリックします。
2. Todoの完了状態が自動的に更新され、Todoリストテーブルに反映されます。

#### Todoのフィルタリング
1. "未完了"、"全て"、または "完了" ボタンをクリックします。
2. Todoリストテーブルは自動的に更新され、選択したフィルタに一致するTodoのみが表示されます。
![完了状態フィルター](/docs/assets/status-filter-ui-JP.png)

### スタッフリストの管理
特定のスタッフにTodoを割り当てたい場合は、この機能を使用します。
* Todoの追加/編集画面内のスタッフのドロップダウンリストに反映されます。
* ページトップの"スタッフリスト"をクリックすると、該当ページにアクセスできます。

#### スタッフの追加
1. スタッフ名を入力し、"追加" をクリックします。
2. 追加されたスタッフは自動的にスタッフリストテーブルに表示されます。

#### スタッフ名の編集/更新
1. 特定のスタッフの "編集" をクリックします。
2. 編集画面でスタッフ名を編集し、 "閉じる" をクリックします。
3. テーブル内のスタッフ名が自動的に更新されます。
    * この更新はTodoリストテーブルのスタッフ情報にも自動反映されます。

#### スタッフの削除
1. 特定のスタッフの "削除" をクリックします。
2. 確認画面で "削除" をクリックします。
3. テーブル内のスタッフ情報が自動的に削除されます。
    * この削除はTodoリストテーブルのスタッフ情報に反映されます。