// a state is like a scene

demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        addChangeStateEventListener();
        console.log('state1');
    },
    update: function(){},
};