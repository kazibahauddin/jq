/*stickup part start*/
              //initiating jQuery
              jQuery(function($) {
                $(document).ready( function() {
                  //enabling stickUp on the '.navbar-wrapper' class
                  $('.stickup').stickUp();
                });
              });

              /*stickup part end*/

/*Elevated zoom jquery plugin  part end*/

$(".zoom").elevateZoom();

$(".zoom1").elevateZoom({
  zoomType				: "lens",
  lensShape : "round",
  lensSize    : 200
});
/*Elevated zoom jquery plugin  end*/

