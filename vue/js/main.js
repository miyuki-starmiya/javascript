
(function() {
    // validate type miss
    'use strict';
    let vm = new Vue({
        // Controllerの設定
        el: '#app',
        // Modelの変数群
        data: {
            newItem: '',
            todos: [],
        },
        // save data in localStorage
        watch: {
            todos: {
                handler: function() {
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                    // alert('Data saved');
                },
                deep: true
            },
        },
        // localStorageからdataを読み込む
        mounted: function() {
            this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        },
        methods: {
            addItem: function() {
                // this = data
                let item = {
                    title: this.newItem,
                    isDone: false,
                };
                this.todos.push(item);
                this.newItem = '';
            },
            deleteItem: function(i) {
                if (confirm('are you sure?')) {
                    this.todos.splice(i, 1);
                }
            },
            purge: function() {
                if (confirm('delete finished?')) {
                    this.todos = this.todos.filter(function(todo) {
                        return !todo.isDone;
                    });
                }
            },
        },
        // 関数の戻り値を変数として利用
        computed: {
            remaining: function() {
                let items = this.todos.filter(function(todo) {
                    return !todo.isDone;
                });
                return items.length;
            },
        },
    });
})();

