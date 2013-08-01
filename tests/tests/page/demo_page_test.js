registerTest ('Demo page test', {
    setup: function() {
        this.containerElement = this.workspace.document.getElementById("container");
        this.startBackground = this.containerElement.style.background; 
        this.otherColor = "red";
    },
    load:function() {
        var self = this;
    
        self 
        .test ("Do we have an element with the id 'container'?",function(){
            ok(this.containerElement,'An element with the id "container" exists.');
        })

        // run statements are executed before the test happens
        .run(function(){
            this.containerElement.style.background = this.otherColor;
        })
        .test ("Does container have a background color of "+ self.otherColor +" ?",function(){
            equal(this.containerElement.style.background, this.otherColor, 'Container background should now be ' + self.otherColor );
        })

        // run statements are executed before the test happens
        .run(function(){
            this.containerElement.style.background = this.startBackground;
        })
        .test ("Have container background being restored to its previosu value?",function(){
            equal(this.containerElement.style.background, this.startBackground, 'Container background should now be set as its start value');
        });
    }
});
