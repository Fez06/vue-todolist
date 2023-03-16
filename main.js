'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
            nota : '',
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
            console.log('cancellatooooooohhhhh')
            // this.todoItems = this.todoItems.splice(index, 1)
            // console.log(index);
            // console.log(this.todoItems);
            this.todoItemsUpdated = this.todoItems.splice(index, 1);
            console.log(index);
        },
        addTodo() {
            this.todoItems.push({text: nota.value ,done: false});
            //this.nota += {text: this.nota.value ,done: false, };
            nota.value = '';
            console.log(nota.value)
        },
        toggleMarked(element) {
            console.log(this.todoItems[element].done);
            //this.todoItems[element].done = !this.todoItems[element].done;
            //console.log(this.todoItems[element].done);
            if (this.todoItems[element].done === false) {
                this.todoItems[element].done = true;
            } else {
                this.todoItems[element].done = false;
            }
        }
    }
}).mount('#App'); 