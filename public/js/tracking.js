
$(document).ready(function() {

	function trackEvent( id ) {

		/*******************************************************************************************************
		Start of DoubleClick Floodlight Tag: Please do not remove
		Activity name of this tag: Canon_BringIt_ Social Media Top Flickr
		URL of the webpage where the tag is expected to be placed: http://canonbringit.com
		This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
		Creation Date: 05/08/2014
		*******************************************************************************************************/

		var id = id;
		var axel = Math.random() + "";
		var a = axel * 10000000000000;
		var e = '';

		//page load
		if( id == "landing_page"){e = "canon038";}
		//cat tabs
		else if( id == "Canon_BringIt_Tab_WithYourFamily"){e = "tabwithy";}
		else if( id == "Canon_BringIt_Tab_WhenYouTravel"){e = "tabwheny";}
		else if( id == "Canon_BringIt_Tab_IntheMoment"){e = "tabinthe";}
		//share
		else if( id == "Canon_BringIt_Share"){e = "share";}
		//nav
		else if( id == "Canon_BringIt_Button_WithYourFamily"){e = "bwithyou";}
		else if( id == "Canon_BringIt_Button_WhenYouTravel"){e = "bwhenyo";}
		else if( id == "Canon_BringIt_Button_IntheMoment"){e = "binthemo";}
		else if( id == "shop_now_header"){e = "canon188";}
		else if( id == "facebook_top"){e = "canon165";}
		else if( id == "twitter_top"){e = "canon744";}
		else if( id == "youtube_top"){e = "canon814";}
		
		//top video Anthem
		else if( id == "anthem_video_play"){e = "canon762";}
		//products homepage
		else if( id == "EOS_70D"){e = "canon355";}
		else if( id == "EOS_REBEL_T5i"){e = "canon777";}
		else if( id == "EOS_REBEL_SL1"){e = "canon029";}
		else if( id == "shop_now_inpage"){e = "canon258";}
		else if( id == "PIXMA_PRINTERS"){e = "cabippll";}
		
			

		//Family page
		else if( id == "Canon_BringIt_VideoPlay"){e = "videopla";}
						//-cta
		else if( id == "Canon_BringIt_How-To-Video_Orchard"){e = "how2orch";}
						//-maind product
		else if( id == "Canon_BringIt_LearnMore_CanonEOSRebelSL1"){e = "eosrbsl1";}
		// Vacation page
		else if( id == "Canon_BringIt_OurVacation"){e = "ourvaca";}
						//-cta
		else if( id == "Canon_BringIt_How-To-Video_OurVacation"){e = "how2ourv";}
						//-maind product
		else if( id == "Canon_BringIt_LearnMore_CanonEOS70D"){e = "eos70d";}
		// Moment page
						//-maind product
		else if( id == "Canon_BringIt_LearnMore_CanonEOSRebelT5i"){e = "eosrbt5i";}
		
		//tutorial videos
		else if( id == "Canon_BringIt_TutorialVideoPlay"){e = "tutorial";}


		
		

		else if( id == null){
			//console.log("no tracking link found! abort!");
		}

		//console.log("*** trackEvent >> id: " + id +" "+e);
		

		var link = 'https://801445.fls.doubleclick.net/activityi;src=801445;type=canon207;cat='+ e +';ord=1;num=' + a + '?';
		var iframe = document.createElement('iframe');
		iframe.setAttribute("src", link);
		iframe.setAttribute("style", "display:none;");
		iframe.width="1px";
		iframe.height="1px";
		iframe.frameBorder=0;
		document.getElementById("fl_tracking").appendChild(iframe);
			
		/* End of DoubleClick Floodlight Tag: Please do not remove */

	}

	// Impression / Page view tracking
	trackEvent("landing_page");



	
	// Event tracking	
		//nav : begin
	$('.canon-logo').on("click", function(event) {
		ga('send', 'event', 'Navigation', 'Navigation ', 'Canon Logo ');
		
	});

	$('.site-nav .shop-now').on("click", function(event) {
		trackEvent('shop_now_header');
		ga('send', 'event', 'Header ', 'Engagement - Information', 'Shop Now ');
	});

		//follow
	$('#social-follow .facebook').on("click", function(event) {
		trackEvent('facebook_top');
		ga('send', 'event', 'Header ', 'Follow', 'Facebook ');
	});
	$('#social-follow .twitter').on("click", function(event) {
		trackEvent('twitter_top');
		ga('send', 'event', 'Header ', 'Follow', 'Twitter ');
	});
	$('#social-follow .youtube').on("click", function(event) {
		trackEvent('youtube_top');
		ga('send', 'event', 'Header ', 'Follow', 'YouTube ');
	});

		//share
	$('#social-share .facebook').on("click", function(event) {
		trackEvent("Canon_BringIt_Share");
		ga('send', 'event', 'Header ', 'Share', 'Facebook');
	});	
	$('#social-share .twitter').on("click", function(event) {
		trackEvent("Canon_BringIt_Share");
		ga('send', 'event', 'Header ', 'Share', 'Twitter');
	});	
	/*not approved*/$('#social-share .google').on("click", function(event) {
		trackEvent("Canon_BringIt_Share");
		ga('send', 'event', 'Header ', 'Share', 'Google+');
	});	
	/*not approved*/$('#social-share .mail').on("click", function(event) {
		trackEvent("Canon_BringIt_Share");
		ga('send', 'event', 'Header', 'Share', 'Mail');
	});	

	$('#site-nav-top .family').on("click", function(event) {
		trackEvent("Canon_BringIt_Button_WithYourFamily");
		ga('send', 'event', 'Header', 'Navigation', 'With Your Family Page');
	});	
	$('#site-nav-top .travel').on("click", function(event) {
		trackEvent("Canon_BringIt_Button_WhenYouTravel");
		ga('send', 'event', 'Header', 'Navigation', 'When You Travel');
	});
	$('#site-nav-top .moment').on("click", function(event) {
		trackEvent("Canon_BringIt_Button_IntheMoment");
		ga('send', 'event', 'Header', 'Navigation', 'In The Moment');
	});
		//nav : end

	//body : begin
		//Anthem Video
	$('#header-video').on("click", function(event) {
		trackEvent("anthem_video_play");
		ga('send', 'event', 'Body ', 'Engagement - Video Play ', 'Bring It');
	});
		/* NEW HOMEPAGE TRACKING : BEGIN */
		
	$('#cat-1').on('click',function(){
		
			trackEvent('Canon_BringIt_Tab_WithYourFamily');
			ga('send', 'event', 'Body', 'Navigation', 'With Your Family Page');
		});
		$("#cat-2").on('click',function(){
			trackEvent('Canon_BringIt_Tab_WhenYouTravel');
			ga('send', 'event', 'Body', 'Navigation', 'When You Travel');
		});
		$("#cat-3").on('click',function(){
			trackEvent('Canon_BringIt_Tab_IntheMoment');
			ga('send', 'event', 'Body', 'Navigation', 'In The Moment');
		});
		/* NEW HOMEPAGE TRACKING : END */


	/* VIDEOS ON HOMEPAGE : BEGIN */

	$('#video1').on("click", function(event) {
		
		ga('send', 'event', 'Body ', 'Engagement - Video Play', '[Dynamically Populated video name]');
		
	});
	$('#video3').on("click", function(event) {
		
		ga('send', 'event', 'Body ', 'Engagement - Video Play', '[Dynamically Populated video name]');
	});
	$('#video4').on("click", function(event) {
		
		ga('send', 'event', 'Body ', 'Engagement - Video Play', '[Dynamically Populated video name]');
	});

	/* VIDEOS ON HOMEPAGE : END */
	 /* PRODUCTS : BEGIN */
	$('#prod-1').on("click", function(event) {
		trackEvent('EOS_70D');
		ga('send', 'event', 'Body ', 'Engagement - Information', 'EOS 70D learn more');
	});
	$('#prod-2').on("click", function(event) {
		trackEvent('EOS_REBEL_T5i');
		ga('send', 'event', 'Body ', 'Engagement - Information', 'EOS Rebel T5i learn more');
	});
	$('#prod-3').on("click", function(event) {
		trackEvent('EOS_REBEL_SL1');
		ga('send', 'event', 'Body ', 'Engagement - Information', 'EOS Rebel SL1 learn more ');
	});
	
	$('#prod-6').on("click", function(event) {
		trackEvent('PIXMA_PRINTERS');
		ga('send', 'event', 'Body ', 'Engagement - Learn more', 'Pixma Printers learn more ');
	});
	
	$('#prod-5').on("click", function(event) {
		trackEvent('shop_now_inpage');
		ga('send', 'event', 'Body ', 'Engagement - Information', 'Shop Now');
	});
		 /* PRODUCTS : END */
	
		 /* IMAGE GRID : BEGIN */

	$('#photo1').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 1', 'Baseball');
	});
	$('#photo2').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 2', 'Boat');
	});
	$('#photo3').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 3', 'Ruins');
	});
	$('#photo4').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 4', 'Stones');
	});
	$('#photo5').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 5', 'Owl');
	});
	$('#photo6').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 6', 'Hide and Seek');
	});
	$('#photo7').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 7', 'Eyes Shut');
	});
	$('#photo8').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 8', 'Baby');
	});
	$('#photo9').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 9', 'Boardwalk');
	});
	$('#photo10').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 10', 'Hanging Lights');
	});
	$('#photo11').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 11', 'Fireworks');
	});
	$('#photo12').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 12', 'Girl Running');
	});
	$('#photo13').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 13', 'Bookcase');
	});
	$('#photo14').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 14', 'Waves');
	});
	$('#photo15').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 15', 'Beach');
	});
	$('#photo16').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 16', 'Girl On Bike');
	});
	$('#photo17').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 17', 'Boy Slime');
	});
	$('#photo18').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 18', 'Umbrellas');
	});
	$('#photo19').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 19', 'Water Slide');
	});
	$('#photo20').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 20', 'Guitar');
	});
	
	$('#photo22').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 22', 'Icecream');
	});
	$('#photo23').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 23', 'Tree and Sun');
	});
	$('#photo24').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 24', 'Mountains');
	});
	$('#photo25').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 25', 'Kitchen Table');
	});
	$('#photo26').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 26', 'Bird In Hand');
	});
	$('#photo27').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 27', 'Walking In Forest');
	});
	$('#photo28').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 28', 'Man in Hat');
	});
	$('#photo29').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 29', 'Women In Chair');
	});
	$('#photo30').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 30', 'Temple');
	});
	$('#photo31').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 31', 'Boat In Water');
	});
	$('#photo32').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 32', 'Volcano');
	});
	$('#photo33').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 33', 'Hanging Laundry');
	});
	$('#photo34').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 34', 'Snow');
	});
	$('#photo35').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 35', 'Children Laughing');
	});
	$('#photo36').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 36', 'Screaming Boy');
	});

	$('#photo37').on("click", function(event) {
		ga('send', 'event', 'Body ', 'Engagement - Photo 37', 'Fire');
	});

		 /* IMAGE GRID : END */

		 /* FOOTER : BEGIN*/
	$('.footer-links .terms').on("click", function(event) {
		ga('send', 'event', 'Footer', 'Engagement - Information ', 'T&C ');
	});
	$('.footer-links .privacy').on("click", function(event) {
		ga('send', 'event', 'Footer', 'Engagement - Information', 'Privacy Policy ');
	});

	$('.footer-links .canon').on("click", function(event) {
		ga('send', 'event', 'Footer', 'Engagement - Information', 'Canon USA');
	});
	$('#scroll-arrow').on("click", function(event) {
		ga('send', 'event', 'Footer', 'Navigation ', 'Back to top ');
	});
		 /* FOOTER : END */
	/* WITH YOUR FAMILY PAGE : BEGIN */




	$('#orchard').on("click", function(event) {
		trackEvent("Canon_BringIt_VideoPlay");
		ga('send', 'event', 'Body', 'Engagement - Video Play', 'The Orchard');
	});
	$('#orchard-cta').on("click", function(event) {
		trackEvent("Canon_BringIt_How-To-Video_Orchard");
		ga('send', 'event', 'Body', 'Engagement - Information', 'Learn How Rick Shot His Film');
	});
	//$("#family-showcase div").on("click", function(event) {
		
		//ga('send', 'event', 'Body', 'Navigation - With Your Family', 'Bring it Showcase');
	//});
	$("#EOS-Rebel-SL1").on("click", function(event) {
		trackEvent("Canon_BringIt_LearnMore_CanonEOSRebelSL1");
		ga('send', 'event', 'Body', 'Engagement - Learn more', 'EOS Rebel SL1 learn more');
	});

	

	

	/* WITH YOUR FAMILY PAGE : END */



		/* WHEN YOU TRAVEL PAGE : BEGIN */

	$('#vacation').on("click", function(event) {
		trackEvent("Canon_BringIt_OurVacation");
		ga('send', 'event', 'Body', 'Engagement - Video Play', 'Our Vacation');
	});
	$('#vacation-cta').on("click", function(event) {
		trackEvent("Canon_BringIt_How-To-Video_OurVacation");
		ga('send', 'event', 'Body', 'Engagement - Information', 'How Dana Shot His Film');
	});
	
	$("#EOS-70D").on("click", function(event) {
		trackEvent("Canon_BringIt_LearnMore_CanonEOS70D");
		ga('send', 'event', 'Body', 'Engagement - Learn more', 'EOS 70D learn more');
	});
	

	

	/* WHEN YOU TRAVEL PAGE : END */


	/* IN THE MOMENT PAGE : BEGIN */
	//* There is no video or cta on this page
	
	$("#EOS-Rebel-T5i").on("click", function(event) {
		trackEvent("Canon_BringIt_LearnMore_CanonEOSRebelT5i");
		ga('send', 'event', 'Body', 'Engagement - Learn more', 'EOS Rebel T5i learn more');
	});
	
	

	

	/* IN THE MOMENT PAGE : END */

	/* TUTORIALS : BEGIN */

	$("#tutorial-wrapper #video-btn").on("click", function(event) {
		trackEvent("Canon_BringIt_TutorialVideoPlay");

		var tutSet = $( this ).attr('data');
		if( tutSet == "family")
			{
				if(tutorialCurrent == 1)
					{
						ga('send', 'event', 'Body', 'Engagement - Video Play', 'EOS 101 HOw To:Overview');
						
					}
				else if(tutorialCurrent == 2)
					{
						ga('send', 'event', 'Body', 'Engagement - Video Play', 'Canon EOS 101 How To: Video Basics');
					}	
				else if(tutorialCurrent == 3)
					{
						ga('send', 'event', 'Body', 'Engagement - Video Play', 'Canon EF 101: Telephoto Lenses');
					}	
				else if(tutorialCurrent == 4)
					{
						ga('send', 'event', 'Body', 'Engagement - Video Play', 'Canon EOS 101 How To: Shutter');
					}	
			}
		
		else if( tutSet == "travel")
			{
				if(tutorialCurrent == 1)
					{
						ga('send', 'event', 'Body', 'Engagement - Video Play', 'Canon EOS 101 How To: Video Basics');

					}
				else if(tutorialCurrent == 2)
					{
						ga('send', 'event', 'Body', 'Engagement - Video Play', 'Canon EF 101: Wide Angle Lenses');
					}	
				else if(tutorialCurrent == 3)
					{
						ga('send', 'event', 'Body', 'Engagement - Video Play', 'Canon EF 101: Tilt Shift Lens');
					}	
				else if(tutorialCurrent == 4)
					{
						ga('send', 'event', 'Body', 'Engagement - Video Play', 'White Balance');
					}	
			}
		else if( tutSet == "moment")
			{
				if(tutorialCurrent == 1)
					{
						ga('send', 'event', 'Body', 'Engagement - Video Play', 'Canon EOS 101 How To: Video Basics');
					}
				else if(tutorialCurrent == 2)
					{	
						ga('send', 'event', 'Body', 'Engagement - Video Play', 'Canon EF 101: STM Lenses');
					}	
				else if(tutorialCurrent == 3)
					{	
						ga('send', 'event', 'Body', 'Engagement - Video Play', 'Canon EF 101: Fisheye Lens');
					}	
				else if(tutorialCurrent == 4)
					{
			
						ga('send', 'event', 'Body', 'Engagement - Video Play', 'Canon EOS 101 How To - Components of Exposure');
					}	
			}
	});
		/* TUTORIALS : END */




	

	
	
	
	
	
	




	




});

