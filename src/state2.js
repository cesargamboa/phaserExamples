demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        addChangeStateEventListener();
        console.log('state2');
    },
    update: function(){},
};