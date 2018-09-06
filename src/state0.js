var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        //taking user input
        //check docs for add 
        //add(listener, listenerContext, priority, args)
        addChangeStateEventListener();
        console.log('state0');
    },
    update: function(){},
};
const changeState= (i, stateNum) => {
    game.state.start('state'+stateNum);
}
const addKeyCallBack = (key, fn, args) => {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
};
const addChangeStateEventListener = () =>{
    addKeyCallBack(Phaser.Keyboard.ZERO, changeState, 0);
        addKeyCallBack(Phaser.Keyboard.ONE, changeState, 1);
        addKeyCallBack(Phaser.Keyboard.TWO, changeState, 2);
        addKeyCallBack(Phaser.Keyboard.THREE, changeState, 3);
        addKeyCallBack(Phaser.Keyboard.FOUR, changeState, 4);
        addKeyCallBack(Phaser.Keyboard.FIVE, changeState, 5);
        addKeyCallBack(Phaser.Keyboard.SIX, changeState, 6);
        addKeyCallBack(Phaser.Keyboard.SEVEN, changeState, 7);
        addKeyCallBack(Phaser.Keyboard.EIGHT, changeState, 8);
        addKeyCallBack(Phaser.Keyboard.NINE, changeState, 9);
}