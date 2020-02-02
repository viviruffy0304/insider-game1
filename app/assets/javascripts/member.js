jQuery( function( $ ) {
	$( '.test' ).change(function() {
		var test_val = $( this ).val();
    $( '#wrap>input' ).show();
    $( '#wrap>input' ).filter( ':nth-child(' + test_val + ') ~ input' ).hide();
	} ).trigger( 'change' );
} );

