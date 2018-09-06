demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        addChangeStateEventListener();
        console.log('state3');
    },
    update: function(){},
};