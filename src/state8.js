demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        addChangeStateEventListener();
        console.log('state8');
    },
    update: function(){},
};