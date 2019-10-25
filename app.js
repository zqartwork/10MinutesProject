$(document).mousemove(function(e){
    const cursor = document.querySelector('.cursor');
    cursor.setAttribute('style', 'top: ' + (e.clientY - 7) + 'px; left: ' + (e.clientX - 7) + "px;");
    var poseX = e.clientX * 0.1;
    var poseY = e.clientY * 0.1;
    const ctbg = document.querySelector('.container');
    ctbg.setAttribute('style', 'background-position-x: -' + poseX + 'px; background-position-y: -' + poseY + 'px;')
})