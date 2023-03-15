'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
            todoItems: [
                {
                    text:'fare la spesa',
                    bool: false
                },
                {
                    text:'fare una corsa',
                    bool: false
                },
                {
                    text:'leggere 20 pagine',
                    bool: false
                },
                {
                    text:'passare da gigi',
                    bool: true
                }
            ]
        }
    },

    methods: {
        done(element) {
            element.classList.add('marked')
        }
    }
}).mount('#App')