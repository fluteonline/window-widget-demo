require.config({
   paths:{
       jquery:'jquery-2.2.3.min',
       jqueryUI: 'jquery-ui.min'
   }
});

require(['jquery','window'],function($,w){
    $('#a').click(function(){
       new w.Window().alert({
           title:'提示',
           content:'welcome!',
           width:300,
           height:150,
           y:50,
           hasCloseBtn:true,
           text4AlertBtn:'OK',
           dragHandle:'.window_header',
           skinClassName:'window_skin_a',
           handler4AlertBtn:function(){
               alert('you click the alert button');
           },
           handler4CloseBtn:function(){
               alert('you click the close button');
           }
       });
    });
});