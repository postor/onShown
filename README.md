onShown
=======

a jquery plugin that can trigger when an element is shown in view port


usage
========

### html
  <style>
    #a {
      background: #eee;
      padding-bottom: 1000px;
    }
    #b,#c {
      background: red;
      height: 200px;
    }
  </style>
<div id="a">
  <div id="b">
  </div>
</div>
<div id="c"></div>
					
### js  
	<script src="jquery.min.js"></script>
	<script src="onshown.js"></script>
	<script type="text/javascript">
		var show = $('div').onShown({
      callback:function(el){
        console.log(el);
      }
    });
	</script>


params
========

### partShown
    when to trigger, when part of element enters(when set to true) or fully entered(set to false)

### callback
    when trigger it callback and pass element as paramater

### bind
    a function that bind to an event, default is binded to $(window).scroll


