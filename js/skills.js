/* $(function skills() {
  $('.piechart').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 30,
    lineCap: 'round', //Can be butt
    barColor: '#009CEF',
    trackColor:	"#555",
    size: 180,
    rotate: 0,    
    animate: 1000,

    
    
  });
});
 */

$("#Skills").mouseover(function()
{
	
    $('.piechart').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 30,
    lineCap: 'round', //Can be butt
    barColor: '#5bce74',
    trackColor:	"#555",
    size: 180,
    rotate: 0,    
    animate: 1000,

    
    
  });
});
$("#Skills").mouseout(function()
{

    $('.piechart').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 30,
    lineCap: 'butt', //Can be butt
    barColor: '#009CEF',
    trackColor:	"#555",
    size: 180,
    rotate: 0,    
    animate: 1000,

}); 
}); 



