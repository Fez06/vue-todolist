'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
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
        itemDone() {
            console.log('questo todo e stato completato')
            //li.classList.add('marked')
        }
    }
}).mount('#App')