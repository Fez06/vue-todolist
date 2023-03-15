'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
            todoItemsUpdated: [''],
            todoItems: [
                {
                    text:'fare la spesa',
                    done: false
                },
                {
                    text:'fare una corsa',
                    done: false
                },
                {
                    text:'leggere 20 pagine',
                    done: false
                },
                {
                    text:'passare da gigi',
                    done: true
                }
            ]
        }
    },

    methods: {
        removeTodo(index) {
            console.log('ci hai provato')
            // this.todoItems = this.todoItems.splice(index, 1)
            // console.log(index);
            // console.log(this.todoItems);
            this.todoItemsUpdated = this.todoItems.splice(index, 1);
            console.log(index);
        }
    }
}).mount('#App'); 