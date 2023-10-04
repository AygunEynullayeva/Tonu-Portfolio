var xmark=document.querySelector('.xmark')
var responsiveList=document.querySelector('.responsive-list')
var bar=document.querySelector('.bar')
bar.onclick=function(){
    responsiveList.style.display="inline-block"
    responsiveList.style.transition="1s all"
    responsiveList.style.display='flex'
}
xmark.onclick=function(){
    responsiveList.style.display='none'
}