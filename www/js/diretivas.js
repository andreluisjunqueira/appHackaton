angular.module('carrossel',[]).directive('imgCarrossel',function(){

return {
    templateUrl : 'templates/carrossel.html',
    scope:{
        imgs:'='    
    },
    restrict : "E",
    link : function(scope, elem, attr){

        scope.options = {
            loop: true,
            effect: 'fade',
            speed: 500,
            pagination: false
        }
        

        var countPrev = '';
        var countNext = '';
        var atual = '';
        var tamanhoArr = scope.imgs.length -1;

        scope.$on("$ionicSlides.sliderInitialized", function(event, data){
        // data.slider is the instance of Swiper

            countPrev = data.slider.activeIndex-1;
            countNext = data.slider.activeIndex+1;
            atual = data.slider.activeIndex;
            if(data.slider.activeIndex == 0){
               countPrev = tamanhoArr;
            }
            if(data.slider.activeIndex == tamanhoArr){
               countNext = 0;
            }
            
            scope.$apply(function(){
                scope.prev = scope.imgs[countPrev];
                scope.next = scope.imgs[countNext];
                scope.atual = scope.imgs[atual];
            });
        });

        scope.$on("$ionicSlides.slideChangeStart", function(event, data){

             console.log('Slide change is beginning');
        });

        scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
            // note: the indexes are 0-based
            countPrev = data.slider.activeIndex-1;
            countNext = data.slider.activeIndex+1;
            atual = data.slider.activeIndex;
            if(data.slider.activeIndex == 0){
               countPrev = tamanhoArr;
            }
            if(data.slider.activeIndex == tamanhoArr){
               countNext = 0;
            }
            scope.$apply(function(){
                scope.prev = scope.imgs[countPrev];
                scope.next = scope.imgs[countNext];
                scope.atual = scope.imgs[atual];
            });
            //scope.data.activeIndex = data.slider.activeIndex;
            //scope.previousIndex = data.slider.previousIndex;
        });
    }
}

});