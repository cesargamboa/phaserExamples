demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        addChangeStateEventListener();
        console.log('state5');
    },
    update: function(){},
};