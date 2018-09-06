demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        addChangeStateEventListener();
        console.log('state4');
    },
    update: function(){},
};