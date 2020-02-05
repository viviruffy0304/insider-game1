/**********countdowntimer********/
$(function(){
 
 //秒数
 var countTime = 180;
 var min = 0;
 var sec = 0;
 var result_interval;
 var flag = false;
 
 //タイムアップ非表示
 $("#time-up").hide();
 
 $("#start").click(function(){
 flag = false;
 var countdown = function(){
 if(flag){
 clearInterval(result_interval);
 return;
 }
 //カウントダウンの処理
 minutes (countTime--);
 if(countTime < 0){
 $("#time-up").show();
 flag = true;
 return;
 }
 }
 result_interval = setInterval(countdown, 1000);
 });
 
 $("#stop").click(function(){
 flag = true;
 });
//リセットが押された時
 $("#reset").click(function(){
 
 minutes (180);
 
 $("#time-up").hide();
 flag = true;
 
 });
 
});
 
//秒数を分に変換する関数
function minutes (time){
 
 var min = Math.floor(time / 60);
 var sec = time % 60;
 sec = ("0" + sec);
 sec = sec.slice(-2);
 
 $("#min").html(min);
 $("#sec").html(sec );
 
}