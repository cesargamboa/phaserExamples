demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        addChangeStateEventListener();
        console.log('state7');
    },
    update: function(){},
};