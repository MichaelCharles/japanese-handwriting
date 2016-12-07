$("document").ready(function(){
    $(".bigger").click(function(){
        var fontSize = parseInt($(".input-area").css("font-size"));
        fontSize += 10;
        $(".input-area").css("font-size", fontSize);
    });
    
    
    $(".smaller").click(function(){
        var fontSize = parseInt($(".input-area").css("font-size"));
        fontSize -= 10;
        $(".input-area").css("font-size", fontSize);
    });
    
    
    $(".cute").click(function(){
        $(".input-area").css("font-family", "Cute Japanese");
    });
    
    
    
    $(".stroke").click(function(){
        $(".input-area").css("font-family", "KSO");
    });
});