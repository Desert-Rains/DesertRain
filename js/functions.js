            // javascript animations
            //slide in left
            function slideLeftIn(element){
                $(element).show();
                $(element).animate({left:0},"slow");
            }
            //slide out left
            function slideLeftOut(element){
                $(element).animate({left:-100+"%"},"slow");
                $(element).hide();
            }

            //slide in right
            function slideRightIn(element){
                $(element).animate({right:0},"slow");
            }
            //slide out right
            function slideRightOut(element){
                $(element).animate({right:-100+"%"},"slow");
                $(element).hide();
            }

            //scroll slide up animation
            function scrollSlideUp(element){
                $(element).animate({"margin-top": "10px"},"slow");
            }