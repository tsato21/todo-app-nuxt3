export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ja',
  messages: {
    en: {
      /* Navbar */
      navTitle: 'Todo App Nuxt3',
      home: 'Home',
      staffList: 'Staff List',

      /*Home Page*/
      //Todo List Table
      incomplete: 'Incomplete',
      all: 'All',
      complete: 'Complete',

      /*Staff List Page*/
      //Cards
      cardTitleAddNewStaff: 'Add New Staff',

      /*Common Phrases*/
      //Buttons
      addButton: 'Add',
      editButton: 'Edit',
      deleteButton: 'Delete',
      closeButton: 'Close',

      //Form
      requiredField: '* Required Field',
      automaticUpdate: '* The contents will be automatically updated in the table.',
      deleteConfirmMessage: 'Are you sure you want to delete?',

      //Table Headers
      tableHeaderName: 'Name',
      tableHeaderDetails: 'Details',
      tableHeaderDeadline: 'Deadline',
      tableHeaderStaff: 'Staff',
      tableHeaderCompletionStatus: 'Complete',
    },
    ja: {
      /* Navbar */
      navTitle: 'Todo管理 Nuxt3',
      home: 'ホーム',
      staffList: 'スタッフリスト',

      /*Home Page*/
      //Todo List Table
      incomplete: '未完了',
      all: '全て',
      complete: '完了',

      /*Staff List Page*/
      //Cards
      cardTitleAddNewStaff: '新規スタッフ追加',

      /*Common Phrases*/
      //Buttons
      addButton: '追加',
      editButton: '編集',
      deleteButton: '削除',
      closeButton: '閉じる',
      
      //Form
      requiredField: '* 必須項目です',
      automaticUpdate: '* 編集内容は自動的にテーブルに更新されます。',
      deleteConfirmMessage: '削除してもよろしいですか？',

      //Table Headers
      tableHeaderName: '名前',
      tableHeaderDetails: '詳細',
      tableHeaderDeadline: '締切日',
      tableHeaderStaff: '担当者',
      tableHeaderCompletionStatus: '完了',
    }
  }
}))
