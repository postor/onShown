(function($){
  var tellShown = function (el,part) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    if(part){
      return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
      );
    }

    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }
  $.fn.onShown = function(opt){
    opt = $.extend({
      //partShown
      partShown:true,
      elements:$(this),
      shown:[],
      callback:function(el){
        $(el).trigger('onShown');
      },
      //可以重写bind来修改检查的范围，默认是$(window).scroll
      bind:function(){
        var that = this;
        $(window).scroll(function(){
          that.check();
        });
      }
    },opt);
    
    //遍历检查每个元素
    opt.check = function(){
      var finished = true;
      for(var i=0;i<opt.elements.length;i++){
        if(opt.shown[i])continue;
        el = opt.elements[i];
        if(tellShown(el,opt.partShown)){
          opt.shown[i] = true;
          opt.callback(el);
        }else{
          finished = false;
        }
      }
      if(finished){
        opt.check = function(){};
      }
    };
    opt.bind();
    return opt;
  }
})(jQuery);
