class Form{
constructor(){

}

display(){
    var title=createElement("h2");
    title.html("car racing");
    title.position(200,40);
    var name=createInput("name:");
    name.position(200,100);

    var button=createButton("play");
    button.position(300,150);
    button.mousePressed(function(){
        name.hide();
        button.hide();
        var playerName=name.value();
        playerCount=playerCount+1;
        player.update(playerName);
        player.updateCount(playerCount);

        var greeting= createElement("h3");
        greeting.html("hello "+playerName+"..wait for other players to join");
        greeting.position(200,200);

    })
}
    
}
