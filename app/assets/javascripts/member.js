window.addEventListener('DOMContentLoaded', function(){

// jQuery( function( $ ) {
// 	$( '.test' ).change(function() {
// 		var test_val = $( this ).val();
//     $( '#wrap>input' ).show();
//     $( '#wrap>input' ).filter( ':nth-child(' + test_val + ') ~ input' ).hide();
// 	} ).trigger( 'change' );
// } );




var game_member = document.getElementsByClassName("member");
// console.log(game_member);
  var array = [];
for (var i = 0; game_member.length; i++){
  array[i] = game_member[i].textContent
  // console.log(array);
}

// var aaa = document.getElementById('abc')
// console.log(aaa);
// bbb = aaa.textContent
// console.log(bbb);
// aaa.textContent = 'ccc'
});