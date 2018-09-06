demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){},
    create: function(){
        addChangeStateEventListener();
        console.log('state6');
    },
    update: function(){},
};