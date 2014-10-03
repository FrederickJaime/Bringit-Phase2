$( document ).ready( function(){

//alert(document.URL);
	/* SHARES : BEGIN */

	

	var DialogW = 520;
	var DialogH = 350
	var winTop = (screen.height / 2) - (DialogW / 2);
    var winLeft = (screen.width / 2) - (DialogH / 2);


    var sectionImage = false;
    var sectionVideo;
    var sectionImageTip = false;
  	var tipCat;
    var screenCat;
	var tip_title;
	var tip_num;
	var tip_copy;

    
	
	
	
	//if( whichTut =="moment"){tutorialTotalSlides = 4}
	//else{tutorialTotalSlides = 7};
	//<div id="tutorial-wrapper" class="family">
	//alert(tutCountTotal);


    $(".categories .ro,.categories .label").css({opacity:0});
	

    	/*FACEBOOK*/
    $("#social-share .facebook").click(function(e) {
	    e.preventDefault();
	    
	    window.open('https://www.facebook.com/sharer/sharer.php?u=http://bringit.usa.canon.com','null','width='+DialogW+',height='+DialogH+',toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left='+winLeft+',top='+winTop);
	    return false;
	});

		/*TWITTER*/

	$("#social-share .twitter").click(function(e) {
	    e.preventDefault();
	    
	    window.open("https://twitter.com/intent/tweet?text=Bring your Canon. Bring your lenses. Bring your talent. Bring everything you’ve got. %23bringit", "tweet", "height="+DialogH+",width="+DialogW+",resizable=1,left="+winLeft+",top="+winTop);
	     return false;
	});


		/*GOOGLE*/
	$("#social-share .google").click(function(e) {
	    e.preventDefault();
	    
	    window.open("https://plus.google.com/share?url=http://bringit.usa.canon.com?",'google+', 'menubar=no,toolbar=no,resizable=yes,,left='+winLeft+',top='+winTop+',scrollbars=no,height='+DialogH+',width='+DialogW);
	     return false;
	});


		/*MAIL*/

		$('#social-share .mail').click(function(e){
		sendMail();
		});

		function sendMail() {
		
		var mailBody = "Bring your Canon. Bring your lenses. Bring your talent.";
		mailBody += " Bring everything you’ve got. Then share your photographs and Full HD video with #bringit and show the world.%0d%0a%0d%0a";
		mailBody += "Your creativity can be featured at http://bringit.usa.canon.com.";
		mailBody += "";
		mailBody += "";
	
	    	
	    	var link = "mailto:"
	             + "?subject=" + escape("Grab your Canon and #bringit.")
	             //+ "&body=" + escape("This is the body.")
	             + "&body=" + mailBody;

	    window.location.href = link;
	}

	/* SHARES : END */

	$("#scroll-arrow").on('click',function(event){
		$("body , html").animate({ scrollTop: 0},1000);

		}).on('mouseenter',function(){
			$( this ).attr('src','img/scroll_arrow_RO.png');
		}).on('mouseleave',function(){
			$( this ).attr('src','img/scroll_arrow.png')
		})




	$(window).scroll(function() {
	   
			scrollLoc = $(window).scrollTop();
			

			
			if(scrollLoc > 85 && scrollLoc < 90 || scrollLoc > 100){$( "#scroll-nav" ).stop().animate({top:0});}
			if(scrollLoc < 84){$( "#scroll-nav" ).stop().animate({top:-46});}

			if ( scrollLoc > 90 && $("#scroll-arrow").css('opacity') == 0)
				{
					$('.site-header').addClass('scroll');
					$("#scroll-arrow").animate({opacity:1});
					
				}

			else if ( scrollLoc < 90 && $("#scroll-arrow").css('opacity') == 1)
				{
					$('.site-header').removeClass('scroll');
					$("#scroll-arrow").animate({opacity:0});
					
				}

		
		



	});


	/* CLICK OUTSIDE OF PLAYER TO CLOSE */
	$("#video-cover").on('click',function(){
		closeOverlay();
	});
	
	/* CLICK BUTTON TO CLOSE PLAYER */
	$("#video-holder .closeBtn").on('click',function(){
		closeOverlay();
	});


	var tutorialTotalSlides;
		if(window.location.href.indexOf("In-The-Moment") > -1) {tutorialTotalSlides = 4;}
		else{tutorialTotalSlides = 7;}

	/* HIGHLIGHT SECTION LINK ON NAV */

	if(window.location.href.indexOf("With-Your-Family") > -1) {
       $("#site-nav-top .family").css({color:"#e21a22"});
    }
    else if(window.location.href.indexOf("When-You-Travel") > -1) {
    	$("#site-nav-top .travel").css({color:"#e21a22"});
    }
    else if(window.location.href.indexOf("In-The-Moment") > -1) {
    	$("#site-nav-top .moment").css({color:"#e21a22"});

    }


	/* */






});

	/*	VARS : BEGIN */

		var whichTrailer = "";
		var whichTutorial = "";
		var scrollLoc = $(window).scrollTop();
		var windowH = $(window).height();
		var windowW = $(window).width();
		var vidHeight = 532;
		var videoPlaying;

		var documentH = $( document ).height();

		var social_follow_Btns;
		var social_share_Btns;

		var whichIcon;
		var whichImage;
		var sectionVideoCatCount = 1;
		var sectionVideoCat ="";

		var tutorialTotalSlides;
		if(window.location.href.indexOf("With-Your-Family") > -1) {
	       tutorialTotalSlides = 7;
	    }
	    else if(window.location.href.indexOf("When-You-Travel") > -1) {
	    	tutorialTotalSlides = 9;
	    }
	    else if(window.location.href.indexOf("In-The-Moment") > -1) {
	    	tutorialTotalSlides = 4;
	    	
	    }

		
//alert(tutorialTotalSlides);




	/*  VARS : END */


	$( "#scroll-nav #bg" ).css({opacity:.1});
	$("#site-nav-top").clone().appendTo( "#scroll-nav #nav #left-nav" );
	$(".site-nav").clone().appendTo( "#scroll-nav #nav #right-nav" );
	
	/* SOCIAL NAV : BEGIN */
	
		
	/* HOME ICON : BEGIN */

	$(".h_icon").on('mouseenter',function(){
		$( this ).find('img').attr('src',"img/i_home_o.png");
	}).on('mouseleave',function(){
		$( this ).find('img').attr('src',"img/i_home.png");
	}).on('mousedown',function(){
		$( this ).find('img').attr('src',"img/i_home_p.png");
	})

	/* HOME ICON : END */
	

	$("#social-share, #scroll-nav #social-share").on('mouseenter',function(){

		social_share_Btns = $( this ).find( "div" );
		$( this ).stop().animate({width:160});
		social_share_Btns.stop().animate({right:0});

		$( "#social-share a, #scroll-nav #social-share a" ).css({color:"#696969",left:2});

		$( "#social-follow, #scroll-nav #social-follow" ).stop().animate({width:85});
		$( "#social-follow div, #scroll-nav #social-follow div"  ).stop().animate({right:-74});

	}).on('mouseleave',function(){

		$( this ).stop().animate({width:73});
		social_share_Btns.stop().animate({right:-104});

		$( "#social-share a, #scroll-nav #social-share a" ).css({color:"#000",left:0});

		$( "#social-follow, #scroll-nav #social-follow" ).stop().animate({width:150});
		$( "#social-follow div, #scroll-nav #social-follow div"  ).stop().animate({right:12});


	});


		
		/* ICON ROLLOVERS */
	
	$(".site-nav a").on('mouseenter',function(event){

		whichIcon = $( this ).attr('class');
		whichImage = $( this ).find( "img" );

		whichImage.attr('src','img/i-'+whichIcon+'_o.png');
	}).on('mouseleave',function(event){
		whichImage.attr('src','img/i-'+whichIcon+'.png');
	});

	/* SOCIAL NAV : ENDS */


	
	/*
    new AnimOnScroll( document.getElementById( 'grid' ), {
		minDuration : 0.4,
		maxDuration : 0.7,
		viewportFactor : 0.2
	} );
*/
	




	function closeOverlay()
		{	
			function overlayReset()
				{
					$("#video-holder #video-player").tubeplayer("destroy");
					//$( "#video-holder").css({ width:"50%",height:"auto"});
					imageOverlay = "off";
					$("#video-holder #video-player img").remove();
					sectionImage = false;
					sectionVideo = false;
					sectionImageTip = false;
					$("#video-holder h2").html("#bringit");
					$(".tip").css({visibility:"hidden"});
					sectionVideoCat ="";
					sectionVideoCatCount = 1;
					$( "#video-cover" ).css({width:"0%",height:"0%",visibility:"hidden"});
					$( "#video-holder").css({"position":"absolute",visibility:"hidden",left:(windowW-$( "#video-holder" ).width())/2,top:(windowH-$( "#video-holder" ).height())/2})
				}
			$( "#video-cover" ).animate({opacity:0});
			$( "#video-holder" ).animate({opacity:0},overlayReset);
		}


	


	function videoHeaderLoad(whichVid){
			
		///$("#video-player img").remove();
			
		$("#video-holder #video-player").tubeplayer({
			width:"100%", // the width of the player
			height: "100%", // the height of the player
			allowFullScreen: "true", // true by default, allow user to go full screen
			initialVideo: whichVid, // the video that is loaded into the player
			preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
			iframed: true, // iframed can be: true, false; if true, but not supported, degrades to flash
			showinfo: false, // if you want the player to include details about the video
			modestbranding: false, // specify to include/exclude the YouTube watermark
			autoPlay: true, // whether the player should autoplay the video, 0 or 1
			autoHide: true, 
			onPlayerEnded: function(){
				
					
							if(sectionVideoCat == "family")
								{
									
									if(sectionVideoCatCount == 1){
										sectionVideoCatCount++;
										$("#video-holder #video-player").tubeplayer("play", "5hM3wx_Iw50");
									}
									else if(sectionVideoCatCount == 2){
										sectionVideoCatCount++;
										$("#video-holder #video-player").tubeplayer("play", "ypXLT6ckJZY");
									}
									else if(sectionVideoCatCount == 3){closeOverlay();}


								}
							else if( sectionVideoCat == "travel")
								{
									if(sectionVideoCatCount == 1){sectionVideoCatCount++;$("#video-holder #video-player").tubeplayer("play", "drsFiUNLk9s");}
									else if(sectionVideoCatCount == 2){sectionVideoCatCount++;$("#video-holder #video-player").tubeplayer("play", "atmo_ot1Dzo");}
									else if(sectionVideoCatCount == 3){closeOverlay();}
								}

									
								else if (sectionVideoCat == ""){
									closeOverlay();
								}

					


				}

		});
	}



		var imageOverlay;



		function tipOverlay(itemSrc)
			{
		
				documentH = $( document ).height();
				$( "#video-cover" ).css({width:"100%",height:documentH,visibility:"visible"});

				var tips = $('<img src="/img/sectionHR/'+screenCat+'/'+tipCat+'/'+itemSrc+'.jpg"/>');

				$(".tip").css({visibility:"visible"});
				//alert(tip_num+" "+tip_copy+" "+tip_title);
				//alert(screenCat+" "+tipCat);

				tips.load(function(){
					  // console.log('ad load complete '+ itemSrc);
					 	 windowH = $(window).height();
						windowW = $(window).width();
						var mageW = $("#video-player img").width();
						var mageH = $("#video-player img").height();
						var mageHolder = $( "#video-holder").height();
						var mageHolderW = $( "#video-holder").width();
						$( "#video-holder" ).animate({opacity:1});

						if( tipCat == "family")
							{
								if( itemSrc == 5)
										{
											$("#video-holder h2").html(" TELLING A STORY");
											$("#video-holder .tip-number").html("tip 1: ");
											$("#video-holder .tip-copy").html("When shooting video, you want to try to have medium, close and wide shots that show variety and change. You want to have shots that introduce something, have a build up or climax, and some sort of an ending.");
										}
								else if( itemSrc == 6)
										{
											$("#video-holder h2").html(" CAPTURING B-ROLL");
											$("#video-holder .tip-number").html("tip 2: ");
											$("#video-holder .tip-copy").html("B-roll is very important. We like to take our time going through the footage afterwards to pick and choose the right moments to tell a story.");
										}
								else if( itemSrc == 7)
										{
											$("#video-holder h2").html(" A CINEMATIC LOOK");
											$("#video-holder .tip-number").html("tip 3: ");
											$("#video-holder .tip-copy").html("Shooting at 24 frames is a must if you want to achieve a cinematic film look. ");
										}
							}
						else if( tipCat == "travel")
							{
								if( itemSrc == 5)
										{
											$("#video-holder h2").html(" TRIPOD TRICKS");
											$("#video-holder .tip-number").html("tip 1: ");
											$("#video-holder .tip-copy").html("A neat little trick people might like is that if you actually flip the tripod and camera upside-down, the legs will fan out in a way that kind of acts as a stabilization so you can actually get really low to the ground.");
										}
								else if( itemSrc == 6)
										{
											$("#video-holder h2").html(" STABILIZATION TECHNIQUES");
											$("#video-holder .tip-number").html("tip 2: ");
											$("#video-holder .tip-copy").html("In the cases where you don't have a tripod, you can literally lean your body up against a stump or a tree — anything that's stable — and get the same stabilization technique without a tripod.");
										}
								else if( itemSrc == 7)
										{
											$("#video-holder h2").html(" WIDE SHOT LENSES");
											$("#video-holder .tip-number").html("tip 3: ");
											$("#video-holder .tip-copy").html("For the big, wide shots you want the EF 14mm f/2.8 II USM lens to make the world look as big as it is.");
										}
								else if( itemSrc == 8)
										{
											$("#video-holder h2").html(" LOW LIGHT LENSES");
											$("#video-holder .tip-number").html("tip 4: ");
											$("#video-holder .tip-copy").html("The EF 24mm f/1.4L II USM lens is wide enough for low-light situations. So, for instance, you can be around a campfire and have the ability to pick off shots super quick!");
										}
								else if( itemSrc == 9)
										{
											$("#video-holder h2").html(" BEAUTY LENSES");
											$("#video-holder .tip-number").html("tip 5: ");
											$("#video-holder .tip-copy").html("I like to think of the EF 50mm f/1.2L USM lens as a beauty lens. It has a really nice, super shallow depth-of field to capture amazing moments. ");
										}
							}


						if(mageW > mageH)
							{
								
								if(windowH > 640 && windowH < 768)
									{
										$( "#video-holder").css({ height:"70%"});
										
									}
								else if(windowH < 640)
									{
										$( "#video-holder").css({ height:"80%"});
										

									}
								else if(windowH > 768)
									{
										if(windowW < 1024)
										{
											$( "#video-holder").css({ height:"45%"});
											
										}

										if(windowW > 1024 && windowW < 1200)
										{
											$( "#video-holder").css({ height:"50%"});
											
										}
										if(windowW > 1200)
										{
											$( "#video-holder").css({ height:"60%"});
											
										}
										
										

									}

									
										
										$( "#video-player").css({height:"89%"});
										$( "#video-player img").css({height:"100%",width:"auto"});
										$( "#video-player").css({width:$( "#video-player img").width()});
										$( "#video-holder").css({ width:$( "#video-player img").width()+60});
										$( "#video-player").css({height:$( "#video-player img").height()});
										$( "#video-holder").css({ height:$( "#video-player img").height()+140});

										var tipCenter = (($("#video-holder").width() - $("#video-holder .tip").width())/2)+30;
										//alert(tipCenter)
										$("#video-holder .tip").css({left:tipCenter});
										$( "#video-holder").css({"position":"fixed",visibility:"visible",left:(windowW-$( "#video-holder" ).width())/2,top:(windowH-$( "#video-holder" ).height())/2})
									
								
							}

					});
					$( "#video-cover" ).animate({opacity:.5},function(){});
					$("#video-player").append(tips);

			}













			









		function videoOverlay(imageVid,itemSrc)
		{
			
			documentH = $( document ).height();
			
			
			$( "#video-cover" ).css({width:"100%",height:documentH,visibility:"visible"});
			

			
			if(imageVid == "image")
				{
					imageOverlay = "on";


					
					if (sectionImage == true)
						{
							var img = $('<img src="/img/sectionHR/'+screenCat+'/'+itemSrc+'.jpg"/>');
							
						}
					
					else{
						var img = $('<img src="/img/HR/'+itemSrc+'.jpg"/>');
					}
					
					img.load(function(){
					  // console.log('ad load complete '+ itemSrc);
					 	 windowH = $(window).height();
						windowW = $(window).width();
						var mageW = $("#video-player img").width();
						var mageH = $("#video-player img").height();
						var mageHolder = $( "#video-holder").height();
						var mageHolderW = $( "#video-holder").width();
						$( "#video-holder" ).animate({opacity:1});

							
						if(mageW > mageH)
							{
								
								if(windowH > 640 && windowH < 768)
									{
										$( "#video-holder").css({ height:"70%"});
										
									}
								else if(windowH < 640)
									{
										$( "#video-holder").css({ height:"80%"});
										

									}
								else if(windowH > 768)
									{
										if(windowW < 1024)
										{
											$( "#video-holder").css({ height:"45%"});
											
										}

										if(windowW > 1024 && windowW < 1200)
										{
											$( "#video-holder").css({ height:"50%"});
											
										}
										if(windowW > 1200)
										{
											$( "#video-holder").css({ height:"60%"});
											
										}
										
										

									}

								
								
								
										$( "#video-player").css({height:"89%"});
										$( "#video-player img").css({height:"100%",width:"auto"});
										$( "#video-player").css({width:$( "#video-player img").width()});
										$( "#video-holder").css({ width:$( "#video-player img").width()+60});
										$( "#video-player").css({height:$( "#video-player img").height()});
										$( "#video-holder").css({ height:$( "#video-player img").height()+80});
										$( "#video-holder").css({"position":"fixed",visibility:"visible",left:(windowW-$( "#video-holder" ).width())/2,top:(windowH-$( "#video-holder" ).height())/2})
									

								


							
								
							 

								
							}
						else if(mageW == mageH)
							{
								
								if(windowH > 640 && windowH < 768)
									{
										$( "#video-holder").css({ height:"80%"});
										
									}
								else if(windowH < 640)
									{
										$( "#video-holder").css({ height:"80%"});
										

									}
								else if(windowH > 768)
									{
										if(windowW < 1024)
										{
											$( "#video-holder").css({ height:"65%"});
											
										}

										if(windowW > 1024 && windowW < 1200)
										{
											$( "#video-holder").css({ height:"50%"});
											
										}
										if(windowW > 1200)
										{
											$( "#video-holder").css({ height:"60%"});
											
										}
										
										

									}



								//$( "#video-holder").css({ height:"55%"});
								$( "#video-player").css({height:"89%"});
								$( "#video-player img").css({height:"100%",width:"auto"});
								$( "#video-player").css({width:$( "#video-player img").width()});
								$( "#video-holder").css({ width:$( "#video-player img").width()+60});
								$( "#video-player").css({height:$( "#video-player img").height()});
								$( "#video-holder").css({ height:$( "#video-player img").height()+80});

								$( "#video-holder").css({"position":"fixed",visibility:"visible",left:(windowW-$( "#video-holder" ).width())/2,top:(windowH-$( "#video-holder" ).height())/2})
								//$( "#video-cover" ).animate({opacity:.5});

							}
						else if( mageH > mageW)
							{
								
							
								$( "#video-holder").css({ height:"75%"});
								$( "#video-player").css({height:"89%"});
								$( "#video-player img").css({height:"100%",width:"auto"});
								$( "#video-player").css({width:$( "#video-player img").width()});
								$( "#video-holder").css({ width:$( "#video-player img").width()+60});
								$( "#video-player").css({height:$( "#video-player img").height()});
								$( "#video-holder").css({ height:$( "#video-player img").height()+80});


								//
								$( "#video-holder").css({"position":"fixed",visibility:"visible",left:(windowW-$( "#video-holder" ).width())/2,top:(windowH-$( "#video-holder" ).height())/2})
								//$( "#video-cover" ).animate({opacity:.5});

							}
						
						


					});
					$( "#video-cover" ).animate({opacity:.5},function(){

					});
							
			

				$("#video-player").append(img);
				}
			else if(imageVid == "video")
				{
					
					
					$( "#video-holder").css({ width:930,height:597});
					$( "#video-holder").css({"position":"fixed",visibility:"visible",left:(windowW-$( "#video-holder" ).width())/2,top:(windowH-$( "#video-holder" ).height())/2})
					$( "#video-player").css({width:880,height:518});
					
					$( "#video-cover" ).animate({opacity:.5});

					$( "#video-player img").remove();
					$("#video-holder").animate({opacity:1},videoHeaderLoad(itemSrc));

					
					
				}

		}
	

	/* CLICK HEADER TO PLAY VIDEO */	
	$("#header-video").on('click',function(){
		videoOverlay("video","S6vFwq6Zuhw");
	});

	/* CLICK VIDEO ONE */	
	$("#video1").on('click',function(){
		videoOverlay("video","owlmI8syfnE");
	});

	

	$("#video3").on('click',function(){
		videoOverlay("video","-l203wNDqsQ");
	});

	$("#video4").on('click',function(){
		videoOverlay("video","m8STkEDNIWs");
	});

	


	

	/* GRID ROLLOVERS : BEGIN*/
	var gridPic; 
	var gridProd;
	var gridProdCta;
		
		$("#grid li").on('mouseenter',function(){

			gridPic = $( this ).find( "img" );
			gridProd = $( this ).find( "a" ).attr('class');
			gridProdCta = $( this ).find(".cta");

			if( gridProd == "prod"){

				gridProdCta.attr('src','img/learnMore_RO.png');

			}else{
				gridPic.css({ "opacity":.3});
			}
			

		}).on('mouseleave',function(){

			if( gridProd == "prod")
				{
					gridProdCta.attr('src','img/learnMore.png');
				}
			else{
					gridPic.css({ "opacity":1});
				}	
			

		}).on('click',function(){

			if( gridProd == "prod"){

				

			}else{
				if(gridProd == "vid")
					{}
				else{
				var mageSrc = $( this ).attr('data');
				//alert(mageSrc);
				sectionImage = false;
				videoOverlay("image",mageSrc);
					}
				
			}
		})

		$("#grid-mid li").on('mouseenter',function(){

			gridPic = $( this ).find( "img" );
			gridProd = $( this ).find( "a" ).attr('class');
			gridProdCta = $( this ).find(".cta");

			if( gridProd == "prod"){

				gridProdCta.attr('src','img/learnMore_RO.png');

			}else{
				gridPic.css({ "opacity":.3});
			}
			

		}).on('mouseleave',function(){

			if( gridProd == "prod")
				{
					gridProdCta.attr('src','img/learnMore.png');
				}
			else{
					gridPic.css({ "opacity":1});
				}	
			

		}).on('click',function(){

			if( gridProd == "prod"){

				

			}else{
				if(gridProd == "vid")
					{}
				else{
				var mageSrc = $( this ).attr('data');
				//alert(mageSrc);
				sectionImage = false;
				videoOverlay("image",mageSrc);
					}
				
			}
		})
	/* GRID ROLLOVERS : END */

	/* CATEGORIES ROLLOVERS : BEGIN */
		
		$("#cat-1").on('mouseenter',function(){

			$( this ).find( ".label" ).stop().animate({opacity:1},100);
			$( this ).find( ".btn" ).stop().animate({opacity:0},100);
			$( this ).find( ".ro" ).stop().animate({opacity:.5},100);
		}).on('mouseleave',function(){

			$( this ).find( ".label" ).stop().animate({opacity:0},100);
			$( this ).find( ".btn" ).stop().animate({opacity:1},100);
			$( this ).find( ".ro" ).stop().animate({opacity:0},100);
		});

		$("#cat-2").on('mouseenter',function(){

			$( this ).find( ".label" ).stop().animate({opacity:1},100);
			$( this ).find( ".btn" ).stop().animate({opacity:0},100);
			$( this ).find( ".ro" ).stop().animate({opacity:.5},100);
		}).on('mouseleave',function(){

			$( this ).find( ".label" ).stop().animate({opacity:0},100);
			$( this ).find( ".btn" ).stop().animate({opacity:1},100);
			$( this ).find( ".ro" ).stop().animate({opacity:0},100);
		});
		$("#cat-3").on('mouseenter',function(){

			$( this ).find( ".label" ).stop().animate({opacity:1},100);
			$( this ).find( ".btn" ).stop().animate({opacity:0},100);
			$( this ).find( ".ro" ).stop().animate({opacity:.5},100);
		}).on('mouseleave',function(){

			$( this ).find( ".label" ).stop().animate({opacity:0},100);
			$( this ).find( ".btn" ).stop().animate({opacity:1},100);
			$( this ).find( ".ro" ).stop().animate({opacity:0},100);
		});





	
		/*


		*/	
		/* links */
		//
		
	

		

	/* CATEGORIES ROLLOVERS : END */

	$('#cat-1').on('click',function(){
			$(location).attr('href', '/With-Your-Family');

			
		});
		$("#cat-2").on('click',function(){
			$(location).attr('href', '/When-You-Travel');
			
			
		});
		$("#cat-3").on('click',function(){
			$(location).attr('href', '/In-The-Moment');
			
			
		});



	

	




	







$(window).resize(function(){
	windowH = $(window).height();
	windowW = $(window).width();
	$( "#video-holder").css({left:(windowW-$( "#video-holder" ).width())/2,top:(windowH-$( "#video-holder" ).height())/2});

	if(imageOverlay == "on")
		{
			$( "#video-player").css({height:$( "#video-player img").height()});
			$( "#video-holder").css({ height:$( "#video-player img").height()+80});
		}
	

});



/*--------------------------------------------------------------------------------------------*/
