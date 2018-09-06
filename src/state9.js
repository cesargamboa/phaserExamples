demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        addChangeStateEventListener();
        console.log('state9');
    },
    update: function(){},
};