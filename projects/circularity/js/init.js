var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle;
        var circles = [];


        // TODO 2 : Create a function that draws a circle 
        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas, 10, 10);
            view.addChild(circle);
            circles.push(circle);
        }
        

        // TODO 3 / 7 : Call the drawCircle() function 
        for (var i = 0; i < 100; i++) {
            drawCircle();
        }


        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
            /* Function is deleted because the updatePosition is called in the update function */
            /*physikz.updatePosition();
            physikz.updatePosition();
            physikz.updatePosition();
            physikz.updatePosition();
            physikz.updatePosition();

            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            /* Function is deleted because the circlePosition is called in the update function */
            /*game.checkCirclePosition();
            game.checkCirclePosition();
            game.checkCirclePosition();
            game.checkCirclePosition();
            game.checkCirclePosition();*/
           

            // TODO 9 : Iterate over the array
            for (var i = 0; i < drawCircle.length; i++) {
                var eachCircle = drawCircle[i];
                physikz.updatePosition(eachCircle);
                game.checkCirclePosition(eachCircle);
                
                // code to repeat using eachValue
             }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            // if the circle has gone past the LEFT side of the screen then place it on the RIGHT
           if ( circle.x < canvas.width ) {
                circle.x = canvas.width;
            }
            // if the circle has gone past the TOP of the screen then place it on the BOTTOM 
            if ( circle.y > canvas.height ) {
                circle.y = canvas.height;
            }
            // if the circle has gone past the BOTTOM of the screen then place it at the TOP
            if ( circle.y < canvas.height ) {
                circle.y = 0;
            }


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
    }