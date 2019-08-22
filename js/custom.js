// Postcode test

$('#edit-postnatal-course-search-postcode').keyup(function() {
        this.value = this.value.toLocaleUpperCase();
      });

// ********* Header - Search ***********//

$(".nav-search-close").on("click", function(){
    var icon = $('.search-display-button');
    var icon_fa_icon = icon.attr('data-icon');
    var icon_fa_prefix = icon.attr('data-prefix');

    $(".nav-search-form").toggle("slide");
    
    if (icon_fa_prefix === 'far') {
        icon.attr('data-prefix', 'fas');
    } else {
        icon.attr('data-prefix', 'far');
    }

    if (icon_fa_icon === "times-circle") {			// Search is closed
        icon.attr('data-icon', 'search');
        $(this).removeClass("open").addClass("close");
        $(".nav-search-close button").removeClass("black-text-20").addClass("nct-dark-green-text");
	$(".social-media-icons").addClass("d-lg-inline-block");
    } else {							// Search is open
        icon.attr('data-icon', 'times-circle');
        $(this).removeClass("close").addClass("open");
        $(".nav-search-close button").removeClass("nct-dark-green-text").addClass("black-text-20");
	$(".social-media-icons").removeClass("d-lg-inline-block");
    }

});


$(".search-accordion-section a").on("click", function(){
    var icon = $(this).find('.accordion-icon');
    var icon_fa_icon = icon.attr('data-icon');
    var icon_fa_prefix = icon.attr('data-prefix');	

    if (icon_fa_icon === "chevron-down") {			
        icon.attr('data-icon', 'chevron-up');
    } else {					
        icon.attr('data-icon', 'chevron-down');
    }

});


$(".multi-accordion-section a, .accordion-section a, .content-accordion-section a").on("click", function(){
    var icon = $(this).find('.accordion-icon');
    var icon_fa_icon = icon.attr('data-icon');
    var icon_fa_prefix = icon.attr('data-prefix');	

    if (icon_fa_icon === "plus") {			
        icon.attr('data-icon', 'minus');
    } else {					
        icon.attr('data-icon', 'plus');
    }

});



// ********* Footer Form - GDPR Dropdown ***********//

$('.footer-form-input').focus(function(){
    $('#collapseGDPR').collapse('show');
    console.log('focus');
});




$("#colourSelector").change(function() {
    var color = $(this).val();
    $("#site-promotional-banner").removeClass().addClass(color);
});



// ********* Datepicker ***********//
  $( function() {
    $( ".datepicker" ).datepicker({dateFormat: "dd/mm/yy"});
  } );
  
  
$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });	
});

$("input[name=membershipOption]").on("change", function(){
	$('.continue-button').removeClass('disabled');
	
	if( $(this).attr('id') === "18month"  ) {
		//console.log('18month');
		$('.membership-option-1').addClass('d-block');     //, .membership-option-2, .price-option-1, .price-option-2
		$('.price-option-1').addClass('d-inline-block');
		
		$('.membership-option-2').removeClass('d-block');
		$('.price-option-2').removeClass('d-inline-block');
		$('.price-option-2').addClass('d-none');
		$('.price-option-0').addClass('d-none');
	} else {
		$('.membership-option-2').addClass('d-block');     //, .membership-option-2, .price-option-1, .price-option-2
		$('.price-option-2').addClass('d-inline-block');
		
		$('.membership-option-1').removeClass('d-block');
		$('.price-option-0').addClass('d-none');
		$('.price-option-1').removeClass('d-inline-block');
		$('.price-option-1').addClass('d-none');
	}
	
});


  