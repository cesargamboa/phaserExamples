var demo = {};
var centerX = 1400/2;
var centerY =1000/2;
var franco;
var ninjaSong;
const characterSpeed = 3.5;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        // game.load.image('franco', 'src/Assets/Franco/franco1.png');
        game.load.image('bg', 'src/Assets/BackGround/evening.png');
        //add widht and heig of the sprites
        game.load.spritesheet('franco', 'src/Assets/Sprites/Sprites/SpriteSheet.png', 150, 150);
        // game.load.spritesheet('francoStanding', 'src/Assets/Sprites/S/StandingSprite.png', 413, 438);
        game.load.audio('ninjaSong', ['src/Assets/Sound/the_japanese_ninja.mp3'])
    },
    create: function(){
        music = game.add.audio('ninjaSong');
        music.play();
        //initialize physics
        //to be able to manipulate the image, we need to create a var
        franco = game.add.sprite(0, 0, 'bg');
        franco = game.add.sprite(centerX, centerY+300, 'franco');
        franco.anchor.x = 0.5;
        franco.anchor.y =0.5;
        //add animation to franco
        franco.animations.add('atack', [0,1,2,3,4,5,6]);
        franco.animations.add('climb', [7,8,9,10,11,12,13,14,15,16]);
        franco.animations.add('fall', [17,18,19,20,21,22,23,24,25,26]);
        franco.animations.add('parachute', [27,28,29,30,31,32,33,34,35,36]);
        franco.animations.add('standing', [37,38,39,40,41,42,43,44,45,46]); //this one is good
        franco.animations.add('jump', [47,48,49,50,51,52,53,54,55,56]);
        franco.animations.add('atackSword', [57,58,59,60,61,62,63,64,65,66]);
        franco.animations.add('atackKunai', [67, 68,69,70,71,72,73,74,75,76]);
        franco.animations.add('walk', [77,78,79,80,81,82,83,84,85,86]); //this one is good
        //CHANGE FRANCO SIZE
        // (width, height)

        franco.scale.setTo(1.3, 1.3);
        //set bounds of the game
        game.world.setBounds(0, 0, 1920, 1080); 
        //taking user input
        //check docs for add 
        //add(listener, listenerContext, priority, args)
        addChangeStateEventListener();
        //scale the game for all screen sizes
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //make the camara follow the playerw
        game.camera.follow(franco);
        //set dead some, meaning, where should the camera starts following player
        game.camera.deadzone =  new Phaser.Rectangle(centerX-300, 0, 600, 1080);
        game.physics.enable(franco);
        franco.body.collideWorldBounds = true;
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            franco.x += characterSpeed;
            franco.scale.setTo(1.3, 1.3);
            //second par is frames 1-60, 3rd par is the loop
            franco.animations.play('walk', 19, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            franco.x -= characterSpeed;
            franco.scale.setTo(-1.3, 1.3);
            franco.animations.play('walk', 17, true);
        }
        else {
            franco.animations.stop('walk');
            franco.animations.play('standing', 15, true);
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            franco.y += characterSpeed;
            if(franco.y>880){
                franco.y = 880;
            }
            franco.animations.play('walk', 14, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            franco.y -= characterSpeed;
            if(franco.y<803){
                franco.y = 800;
            }
            franco.animations.play('walk', 14, true);
        }   
        if(game.input.keyboard.justPressed(Phaser.Keyboard.K)){
            franco.animations.play('atack', 1, false);
        }
    },
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