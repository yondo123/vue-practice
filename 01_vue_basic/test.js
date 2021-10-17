var appHeader = {
    template: '<h1>header</h1>',
    props: ['propsdata']
}

new Vue({
    el: '#app',
    components: {
        'app-header': appHeader
    },
    data: {
        message: 'hello Vue~~!!'
    }
});