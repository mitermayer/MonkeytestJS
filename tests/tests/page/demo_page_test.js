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

        .test ("Does container have a background color of "+ self.otherColor +" ?",function(){
            this.containerElement.style.background = this.otherColor;
            equal(this.containerElement.style.background, this.otherColor, 'Container background should now be ' + self.otherColor );
        })
        .wait()

        .test ("Have container background being restored to its previosu value?",function(){
            this.containerElement.style.background = this.startBackground;
            equal(this.containerElement.style.background, this.startBackground, 'Container background should now be set as its start value');
        });
    }
});
