    /* SECTS VARS : BEGIN */

    
    	var showcaseSlWidth = $(".img-gallery").width();
		var showcaseCurrent = 1;
		var showcaseNext;
		var showcaseTotal = 5;



		var tutorialCurrent = 1;
		var tutorialNext;
		var tutorialPrev;
		var turorialOut;



		var tutorialsW = $('#tutorial-wrapper').width();
		var tutorialW = $('#tutorial-1').width();

		

		var tutPos1 = -120;
		var tutPos2 = 280;//(tutorialsW-tutorialW)/2;
		var tutPos3 = 680;//tutorialsW-(tutorialW-120);
		var tutPos4 = 1080;//tutPos3+400;
		var tutPos5 = -520;	
		//-120 280 680 1080 -520
		//alert(tutPos1 +" "+ tutPos2+" "+tutPos3+" "+tutPos4+" "+tutPos5)


		$(".img-gallery .mages").css({left:showcaseSlWidth});
		$(".img-gallery #img-1").css({left:0});
		$(".img-gallery-nav #dot-"+showcaseCurrent).css({background:"#e21a22"});
		$(".tutorial-gallery-nav #dot-"+tutorialCurrent).css({background:"#e21a22"});


		$(".learn-how ul #tutorial-"+tutorialCurrent).css({opacity:1});
		$(".learn-how .tutorial-hide").css({opacity:.6});


	



	/* HERO SCREENS : BEGIN */
		 var screenPic;
		 //screnCat global var
		$(".page-hero-screens img").on('click',function(){

			screenPic = $( this ).attr( "data" );
			screenCat = $( this ).parent().parent().attr('id');
			//alert( screenPic +" "+ screenCat );
			sectionImage = true;
			//alert(sectionImage);
			videoOverlay("image",screenPic);
				
			
			
			

		}).on('mouseenter',function(){

			$( this ).css({ opacity:.3 });

		}).on('mouseleave',function(){
			$( this ).css({ opacity:1 });
		})

	/* HERO SCREENS : END */
		

    /* SECTS VARS : END */
		/* ROTATING - SHOWCASE : BEGIN */
		function coverOff(){$(".img-gallery .carousel-cover").css({visibility:"hidden"});}

		function showcase_right()
			{
				$(".img-gallery .carousel-cover").css({visibility:"visible"});
				
				
				if(whichShow == "family-showcase"){ga('send', 'event', 'Body', 'Navigation - With Your Family', 'Bring it Showcase');}
				else if (whichShow == "travel-showcase"){ga('send', 'event', 'Body', 'Navigation - When You Travel', 'Bring it Showcase');}
				else if (whichShow == "moment-showcase"){ga('send', 'event', 'Body', 'Navigation - In The Moment', 'Bring it Showcase');}

				if(showcaseCurrent == showcaseTotal)
					{
						
						showcaseNext = 1;
						$(".img-gallery #img-"+showcaseCurrent).animate({left:(showcaseSlWidth)*-1});
						$(".img-gallery #img-"+showcaseNext).css({left:showcaseSlWidth});
						$(".img-gallery #img-"+showcaseNext).animate({left:0},coverOff);
						showcaseCurrent = 1;
						//showcaseCurrent=1;

					}
				else{
						
						showcaseNext = showcaseCurrent+1;
						
						$(".img-gallery #img-"+showcaseCurrent).animate({left:(showcaseSlWidth)*-1})
						$(".img-gallery #img-"+showcaseNext).css({left:showcaseSlWidth});
						$(".img-gallery #img-"+showcaseNext).animate({left:0},coverOff);
						showcaseCurrent++;

						
					}
					$(".img-gallery-nav .dot").css({background:"#c1c1c1"});
					$(".img-gallery-nav #dot-"+showcaseCurrent).css({background:"#e21a22"});
					showcaseCopy(showcaseCurrent);
			}

		function showcase_left()
			{
					$(".img-gallery .carousel-cover").css({visibility:"visible"});
					if(whichShow == "family-showcase"){ga('send', 'event', 'Body', 'Navigation - With Your Family', 'Bring it Showcase');}
					else if (whichShow == "travel-showcase"){ga('send', 'event', 'Body', 'Navigation - When You Travel', 'Bring it Showcase');}
					else if (whichShow == "moment-showcase"){ga('send', 'event', 'Body', 'Navigation - In The Moment', 'Bring it Showcase');}
				if(showcaseCurrent == 1)
					{
						
						showcaseNext = showcaseTotal;
						$(".img-gallery #img-"+showcaseCurrent).animate({left:(showcaseSlWidth)});
						$(".img-gallery #img-"+showcaseNext).css({left:showcaseSlWidth*-1});
						$(".img-gallery #img-"+showcaseNext).animate({left:0},coverOff);
						showcaseCurrent = showcaseTotal;

						
						//showcaseCurrent=1;

					}
				else{
						showcaseNext = showcaseCurrent-1;
						$(".img-gallery #img-"+showcaseCurrent).animate({left:(showcaseSlWidth)})
						$(".img-gallery #img-"+showcaseNext).css({left:showcaseSlWidth*-1});
						$(".img-gallery #img-"+showcaseNext).animate({left:0},coverOff);
						showcaseCurrent--;
						//alert(showcaseCurrent);
					}
					
					$(".img-gallery-nav .dot").css({background:"#c1c1c1"});
					$(".img-gallery-nav #dot-"+showcaseCurrent).css({background:"#e21a22"});
			}

		var LR;
		var whichShow;
		var arrowRO;
		$(".showcase-arrow-btn").on('click',function(){
			LR = $( this ).attr('id');
			whichShow = $(this).parent().attr('id');

			if(LR == "arrowL"){
				showcase_left();
				
			}
			else if(LR == "arrowR"){
				showcase_right();
			

			}
		
		}).on('mouseenter',function(){
			LR = $( this ).attr('id');
			arrowRO = "#"+LR;
			if(LR == "arrowL")
				{$(arrowRO).attr('src','img/arrow-sm-left-ro.png');}
			else if(LR == "arrowR")
				{$(arrowRO).attr('src','img/arrow-sm-right-ro.png');}
			
			
		}).on('mouseleave',function(){
			if(LR == "arrowL")
				{$(arrowRO).attr('src','img/arrow-sm-left.png');}
			else if(LR == "arrowR")
				{$(arrowRO).attr('src','img/arrow-sm-right.png');}
		});

	

		var whichDot;
		$(".img-gallery-nav .dot").on('click',function(){
			$(".img-gallery .carousel-cover").css({visibility:"visible"});
			whichDot = parseFloat($( this ).attr('data'));
			var whichCase = $( this ).parent().attr('id');
			
			if(whichCase == "family-showcase"){ga('send', 'event', 'Body', 'Navigation - With Your Family', 'Bring it Showcase');}
			else if(whichCase == "travel-showcase"){ga('send', 'event', 'Body', 'Navigation - When You Travel', 'Bring it Showcase');}
			else if(whichCase == "moment-showcase"){ga('send', 'event', 'Body', 'Navigation - In The Moment', 'Bring it Showcase');}


			
			if(showcaseCurrent == whichDot){}
			else if(showcaseCurrent != whichDot){

				showcaseNext = whichDot;
				$(".img-gallery #img-"+showcaseCurrent).animate({left:(showcaseSlWidth)*-1})
				$(".img-gallery #img-"+showcaseNext).css({left:showcaseSlWidth});
				$(".img-gallery #img-"+showcaseNext).animate({left:0},coverOff);
				showcaseCurrent = whichDot;
				$(".img-gallery-nav .dot").css({background:"#c1c1c1"});
				$(".img-gallery-nav #dot-"+showcaseCurrent).css({background:"#e21a22"});
				

			}
			
		/*	 ROLL OVER - SHOWCASE : BEGIN */
		}).on('mouseenter',function(){
			whichDot = parseFloat($( this ).attr('data'));
			$(".img-gallery-nav #dot-"+whichDot).css({background:"#696969"});
		
		}).on('mouseleave',function(){
			
			$(".img-gallery-nav #dot-"+whichDot).css({background:"#c1c1c1"});
			$(".img-gallery-nav #dot-"+showcaseCurrent).css({background:"#e21a22"});
		});
		/*	 ROLL OVER - SHOWCASE : END */
		

		$(".showcase-image").on('click',function(){

			screenPic = $( this ).attr( "data" );
			screenCat = $( ".showcase" ).attr('id');
			//alert( screenPic +" "+ screenCat );
			sectionImage = true;
			//alert(sectionImage);
			if(screenPic == 8)
				{
					if(screenCat == "family"){videoOverlay("video","owlmI8syfnE");}
					else if(screenCat == "travel"){videoOverlay("video","m8STkEDNIWs");}
					else if(screenCat == "moment"){videoOverlay("video","-l203wNDqsQ");}
					
				}
			else
				{
					videoOverlay("image",screenPic);
				}
			
				
			
			
			

		}).on('mouseenter',function(){

			$( this ).css({ opacity:.3});

		}).on('mouseleave',function(){
			$( this ).css({ opacity:1});
		})





		/* ROTATING - SHOWCASE : END */


		
		


		/* ROTATING - TUTORIALS : BEGIN */
		function tutorialCoverOff(){$(".learn-how .carousel-cover").css({visibility:"hidden"});}
		
		

		function tutorial_right()
			{

				$(".learn-how .carousel-cover").css({visibility:"visible"});

				/* need to add whichTut to add right amount of totalslides*/
				
				
				if(whichtTut == "family-tutorials"){ga('send', 'event', 'Body', 'Navigation - With Your Family', 'Learn How to Bring it');}
				else if (whichtTut == "travel-tutorials"){ga('send', 'event', 'Body', 'Navigation - When You Travel', 'Learn How to Bring it');}
				else if (whichtTut == "moment-tutorials"){ga('send', 'event', 'Body', 'Navigation - In The Moment', 'Learn How to Bring it');}
				
						
						
						if(tutorialCurrent == 1)
							{
								tutorialNext = tutorialCurrent+1;
								tutorialPrev = tutorialTotalSlides;	
							}
						else
							{
								tutorialNext = tutorialCurrent+1;
								tutorialPrev = tutorialCurrent-1;
							}
						
						if(tutorialCurrent == (tutorialTotalSlides-1))/*3*/
							{
								tutorialOut = 1;
							}
						else
							{
								tutorialOut = tutorialCurrent+2;
							}
								

						

						// for 4
						if( tutorialCurrent == tutorialTotalSlides)
							{
								

								$("#tutorial-"+(tutorialCurrent-1)).animate({left:tutPos5});
								$("#tutorial-"+tutorialCurrent).animate({left:tutPos1});	
								$("#tutorial-1").animate({left:tutPos2});

								$("#tutorial-2").css({left:tutPos4});
								$("#tutorial-2").animate({left:tutPos3});
								tutorialCurrent = 1;
								//alert(5)
							}
						
						else{

							
							$("#tutorial-"+tutorialPrev).animate({left:tutPos5});
							$("#tutorial-"+tutorialCurrent).animate({left:tutPos1});
							$("#tutorial-"+tutorialNext).animate({left:tutPos2});
							$("#tutorial-"+tutorialOut).css({left:tutPos4});
							$("#tutorial-"+tutorialOut).animate({left:tutPos3});

							tutorialCurrent++;

						}
						
						
						

						
						
						$(".tutorial-gallery-nav .dot").css({background:"#c1c1c1"});
						$(".tutorial-gallery-nav #dot-"+tutorialCurrent).css({background:"#e21a22"});
					
				

			}


		function tutorial_left()
			{
				$(".learn-how .carousel-cover").css({visibility:"visible"});
				
				
				
				if(whichtTut == "family-tutorials"){ga('send', 'event', 'Body', 'Navigation - With Your Family', 'Learn How to Bring it');}
				else if (whichtTut == "travel-tutorials"){ga('send', 'event', 'Body', 'Navigation - When You Travel', 'Learn How to Bring it');}
				else if (whichtTut == "moment-tutorials"){ga('send', 'event', 'Body', 'Navigation - In The Moment', 'Learn How to Bring it');}
				
						if(tutorialCurrent == 1)
							{
								tutorialNext = tutorialCurrent+1;
								tutorialPrev = tutorialTotalSlides;	
							}
						else
							{
								tutorialNext = tutorialCurrent-1;
								tutorialPrev = tutorialCurrent+1;
							}
						
						if(tutorialCurrent == 2)
							{
								tutorialOut = tutorialTotalSlides;
								//alert("5")
							}
						else
							{
								tutorialOut = tutorialCurrent-2;
							}

								

						

						
						if( tutorialCurrent == 1)
							{
								

								$("#tutorial-2").animate({left:tutPos4});
								$("#tutorial-"+tutorialCurrent).animate({left:tutPos3});
								$("#tutorial-"+tutorialTotalSlides).animate({left:tutPos2});
								$("#tutorial-"+(tutorialTotalSlides-1)).css({left:tutPos5});
								$("#tutorial-"+(tutorialTotalSlides-1)).animate({left:tutPos1});
								tutorialCurrent = tutorialTotalSlides;
							}
						else if( tutorialCurrent == tutorialTotalSlides)
							{

								$("#tutorial-"+tutorialOut).css({left:tutPos5});
								$("#tutorial-"+tutorialOut).animate({left:tutPos1});
								$("#tutorial-1").animate({left:tutPos4});
								$("#tutorial-"+tutorialCurrent).animate({left:tutPos3});
								$("#tutorial-"+tutorialNext).animate({left:tutPos2});
							
								//alert(tutorialPrev);
								tutorialCurrent--;
							}
						else{

							
							$("#tutorial-"+tutorialOut).css({left:tutPos5});
							$("#tutorial-"+tutorialOut).animate({left:tutPos1});
							$("#tutorial-"+tutorialPrev).animate({left:tutPos4});
							$("#tutorial-"+tutorialCurrent).animate({left:tutPos3});
							$("#tutorial-"+tutorialNext).animate({left:tutPos2});
							
							//alert(tutorialPrev);
							tutorialCurrent--;

						}
						
						
						

						
						
						$(".tutorial-gallery-nav .dot").css({background:"#c1c1c1"});
						$(".tutorial-gallery-nav #dot-"+tutorialCurrent).css({background:"#e21a22"});
				}
		var whichTutDot;
		var whichtTut
		$(".learn-how #arrowR").on('click',function(){

			tutorial_right();
			
			

			
		}).on('mouseenter',function(){
			$( this ).attr('src','img/arrow-sm-right-ro.png');
			 whichtTut = $( this ).parent().attr('id');
		}).on('mouseleave',function(){
			$( this ).attr('src','img/arrow-sm-right.png');
		});

		$(".learn-how #arrowL").on('click',function(){
			tutorial_left();
			

		}).on('mouseenter',function(){
			whichtTut = $( this ).parent().attr('id');
			$( this ).attr('src','img/arrow-sm-left-ro.png');
			
		}).on('mouseleave',function(){
			$( this ).attr('src','img/arrow-sm-left.png');
		})


		
		$(".tutorial-gallery-nav .dot").on('click',function(){

			$(".learn-how .carousel-cover").css({visibility:"visible"});
			whichTutDot = parseFloat($( this ).attr('data'));
			whichtTut = $( this ).parent().attr('id');
			
			

			if(whichtTut == "family-tutorials"){ga('send', 'event', 'Body', 'Navigation - With Your Family', 'Learn How to Bring it');}
			else if (whichtTut == "travel-tutorials"){ga('send', 'event', 'Body', 'Navigation - When You Travel', 'Learn How to Bring it');}
			else if (whichtTut == "moment-tutorials"){ga('send', 'event', 'Body', 'Navigation - In The Moment', 'Learn How to Bring it');}
			
			if(tutorialCurrent == whichTutDot){}
			else if(tutorialCurrent != whichTutDot){
				
				
				
				
				
				var tutDif = tutorialCurrent - whichTutDot;
					
				if(whichTutDot < tutorialCurrent)
					{
						
						if(tutDif > 1)
							{

								
								if(whichTutDot == 1 && tutorialCurrent == tutorialTotalSlides){tutorial_right();}
								else
									{
										if(tutDif == 2)// Goin forward
											{
													if(tutorialTotalSlides == 7)
														{
															if( tutorialCurrent == 7)
																{
																	tutorialPrev = tutorialCurrent-1;
																	tutorialNext = 1;
																}
															}
													else
														{
															tutorialPrev = tutorialCurrent-1;
															tutorialNext = tutorialCurrent+1;

														}

													if(tutorialTotalSlides == 7 || tutorialTotalSlides == 9)
														{

															//alert(tutorialPrev+" "+tutorialCurrent+" "+tutorialNext);
															$("#tutorial-"+tutorialPrev).stop().animate({left:tutPos3},600);
															$("#tutorial-"+tutorialNext).stop().animate({left:tutPos4},600);
															
															$("#tutorial-"+(tutorialCurrent-2)).css({left:tutPos5});
															$("#tutorial-"+(tutorialCurrent-3)).css({left:tutPos5});

															$("#tutorial-"+tutorialCurrent).stop().animate({left:tutPos4},

															
																{
																 duration:600,
																 step: function(event){
																 var prevPos = $( this).position();
																
																	 if(prevPos.left > 800)
																	 	{
																	 		
																	 		
																	 		if(whichTutDot == 1)
																	 			{
																	 				$("#tutorial-"+whichTutDot).css({left:tutPos5});
																					$("#tutorial-"+(whichTutDot+1)).css({left:tutPos5});
																					$("#tutorial-"+(whichTutDot-1)).css({left:tutPos5});
																					$("#tutorial-1").css({left:tutPos5});
																					//alert("done")

																	 			}
																	 		else
																	 			{
																	 				$("#tutorial-"+whichTutDot).css({left:tutPos5});
																					$("#tutorial-"+(whichTutDot+1)).css({left:tutPos5});
																					$("#tutorial-"+(whichTutDot-1)).css({left:tutPos5});
																	 			}
																	 		
																			
																	 	}

																}
															});

														}



														else if(tutorialTotalSlides == 4)

															{

																	if( whichTutDot == 2){
																	tutorialNext = 1;
																	tutorialOut = whichTutDot;
																	tutorialPrev = 3;
																	
																}
																else if( whichTutDot == 1)
																	{
																		tutorialNext = 4;
																		tutorialOut = whichTutDot;
																		tutorialPrev = 2;
																	}
																	$("#tutorial-"+tutorialOut).css({left:tutPos4},600);
																	$("#tutorial-"+tutorialOut).stop().animate({left:tutPos2},600);
																	$("#tutorial-"+tutorialCurrent).stop().animate({left:tutPos5},600);
																	$("#tutorial-"+tutorialNext).stop().animate({left:tutPos1},600);

																	var prevPos;
																	$("#tutorial-"+tutorialPrev).stop().animate({left:tutPos5},
																		{
																			 duration:400,
																			 step: function(event){
																			 prevPos = $("#tutorial-"+tutorialPrev).position();
																			// 
																			 if(prevPos.left < -250)
																			 	{
																			 		//console.log(prevPos.left);
																				
																			 	$("#tutorial-"+tutorialPrev).css({left:tutPos4});
																			 	$("#tutorial-"+tutorialPrev).stop().animate({left:tutPos3});
																			 	}

																			}
																		});

												








															}	
															
															
														if(tutorialTotalSlides == 7 || tutorialTotalSlides == 9)

															{

																if(whichTutDot == 1)
																	{
																		$("#tutorial-"+whichTutDot ).stop().animate({left:tutPos2},600);
																		$("#tutorial-7").css({left:tutPos5});
																		$("#tutorial-7").stop().animate({left:tutPos1},600);
																		$("#tutorial-"+(whichTutDot+1)).stop().animate({left:tutPos3},600);
																	}
																
																else
																	{
																		$("#tutorial-"+whichTutDot).css({left:tutPos5});
																		$("#tutorial-"+whichTutDot ).stop().animate({left:tutPos2},600);
																		$("#tutorial-"+(whichTutDot-1)).stop().animate({left:tutPos1},600);
																		$("#tutorial-"+(whichTutDot+1)).stop().animate({left:tutPos3},600);
																	}

															}




												







												
												
											}
											else if(tutDif == 3)
												{
												
															if( tutorialCurrent == 7)
																{
																	tutorialPrev = tutorialCurrent-1;
																	tutorialNext = 1;
																}


															
															else
																{
																	
																	tutorialPrev = tutorialCurrent-1;
																	tutorialNext = tutorialCurrent+1;
																}
															

																
																	$("#tutorial-"+(tutorialCurrent-3)).css({left:tutPos5});
																	$("#tutorial-"+(tutorialCurrent-4)).css({left:tutPos5});	
																
															

															$("#tutorial-"+tutorialPrev).stop().animate({left:tutPos4},600);
															$("#tutorial-"+tutorialNext).stop().animate({left:tutPos4},600);
															$("#tutorial-"+tutorialCurrent).stop().animate({left:tutPos4},

															
																{
																 duration:600,
																 step: function(event){
																 var prevPos = $( this).position();
																
																	 if(prevPos.left > 940)
																	 	{
																	 		
																	 		
																	 		if(whichTutDot == 1)
																	 			{
																	 				$("#tutorial-"+whichTutDot).css({left:tutPos5});
																					$("#tutorial-"+(whichTutDot+1)).css({left:tutPos5});
																					$("#tutorial-"+(whichTutDot-1)).css({left:tutPos5});
																					$("#tutorial-1").css({left:tutPos5});
																					//alert("done")

																	 			}
																	 		else
																	 			{
																	 				$("#tutorial-"+whichTutDot).css({left:tutPos5});
																					$("#tutorial-"+(whichTutDot+1)).css({left:tutPos5});
																					$("#tutorial-"+(whichTutDot-1)).css({left:tutPos5});
																	 			}
																	 		
																			
																	 	}

																}
															});
															
															

															if(whichTutDot == 1)
																{
																	$("#tutorial-"+whichTutDot ).stop().animate({left:tutPos2},600);
																	$("#tutorial-7").css({left:tutPos5});
																	$("#tutorial-7").stop().animate({left:tutPos1},600);
																	$("#tutorial-"+(whichTutDot+1)).stop().animate({left:tutPos3},600);
																}
															
															else
																{
																	$("#tutorial-"+whichTutDot).css({left:tutPos5});
																	$("#tutorial-"+whichTutDot ).stop().animate({left:tutPos2},600);
																	$("#tutorial-"+(whichTutDot-1)).stop().animate({left:tutPos1},600);
																	$("#tutorial-"+(whichTutDot+1)).stop().animate({left:tutPos3},600);
																}



												}

											tutorialCurrent = whichTutDot;
											$(".tutorial-gallery-nav .dot").css({background:"#c1c1c1"});
											$(".tutorial-gallery-nav #dot-"+tutorialCurrent).css({background:"#e21a22"});
									}

							}
						else
							{
								
								
										tutorial_left();

									
								
							}
						

					}
				else{
						

						if(whichTutDot == tutorialTotalSlides && tutorialCurrent == 1){tutorial_left();}
						else{
								if(tutDif == -2)
									{
										

											//alert("7");				
										if( tutorialCurrent == 1)
											{
												tutorialPrev = tutorialTotalSlides;
												tutorialNext = tutorialCurrent+1;
												//alert("k")
											}



										else
											{
												tutorialPrev = tutorialCurrent-1;
												tutorialNext = tutorialCurrent+1;

											}

										//alert(tutorialPrev+" "+tutorialCurrent+" "+tutorialNext);
										if(tutorialTotalSlides == 7 || tutorialTotalSlides == 9)
											{

													//alert("im here");
													$("#tutorial-"+tutorialPrev).stop().animate({left:tutPos5},600);
													$("#tutorial-"+tutorialNext).stop().animate({left:tutPos1},600);
													$("#tutorial-"+(tutorialCurrent+2)).css({left:tutPos4});
													$("#tutorial-"+(tutorialCurrent+3)).css({left:tutPos4});
													$("#tutorial-"+tutorialCurrent).stop().animate({left:tutPos5},

													
														{
														 duration:600,
														 step: function(event){
														 var prevPos = $( this).position();
														
															 if(prevPos.left > 800)
															 	{
															 		
															 		
															 		if(whichTutDot == 1)
															 			{
															 				$("#tutorial-"+whichTutDot).css({left:tutPos4});
																			$("#tutorial-"+(whichTutDot+1)).css({left:tutPos4});
																			$("#tutorial-"+(whichTutDot-1)).css({left:tutPos4});
																			$("#tutorial-1").css({left:tutPos5});
																			//alert("done")

															 			}
															 		else
															 			{
															 				$("#tutorial-"+whichTutDot).css({left:tutPos4});
																			$("#tutorial-"+(whichTutDot+1)).css({left:tutPos4});
																			$("#tutorial-"+(whichTutDot-1)).css({left:tutPos4});
															 			}
															 		
																	
															 	}

														}
													});

											}
										else if(tutorialTotalSlides == 4)
											{



													if( whichTutDot == 4){
													tutorialNext = tutorialCurrent+1;
													tutorialOut = whichTutDot;
													tutorialPrev = tutorialCurrent-1;

													}
													else if( whichTutDot == 3)
														{
															tutorialNext = 2;
															tutorialOut = whichTutDot;
															tutorialPrev = 4;
														}
														$("#tutorial-"+tutorialOut).css({left:tutPos4},600);
														$("#tutorial-"+tutorialOut).stop().animate({left:tutPos2},600);
														$("#tutorial-"+tutorialCurrent).stop().animate({left:tutPos5},600);
														$("#tutorial-"+tutorialNext).stop().animate({left:tutPos1},600);

														var prevPos;
														$("#tutorial-"+tutorialPrev).stop().animate({left:tutPos5},
															{
																 duration:400,
																 step: function(event){
																 prevPos = $("#tutorial-"+tutorialPrev).position();
																// 
																 if(prevPos.left < -250)
																 	{
																 		//console.log(prevPos.left);
																	
																 	$("#tutorial-"+tutorialPrev).css({left:tutPos4});
																 	$("#tutorial-"+tutorialPrev).stop().animate({left:tutPos3});
																 	}

																}
															});

											}

										
										
										if(tutorialTotalSlides == 7 || tutorialTotalSlides == 9)
											{

													if(whichTutDot == 7 || whichTutDot == 9)
												{
													
													$("#tutorial-"+whichTutDot ).stop().animate({left:tutPos2},600);
													$("#tutorial-1").css({left:tutPos4});
													$("#tutorial-1").stop().animate({left:tutPos3},600);
													$("#tutorial-"+(whichTutDot-1)).stop().animate({left:tutPos1},600);
													
												}

											
											else
												{
													$("#tutorial-"+whichTutDot).css({left:tutPos4});
													$("#tutorial-"+whichTutDot ).stop().animate({left:tutPos2},600);
													$("#tutorial-"+(whichTutDot-1)).stop().animate({left:tutPos1},600);
													$("#tutorial-"+(whichTutDot+1)).stop().animate({left:tutPos3},600);
												}

											}



												

									tutorialCurrent = whichTutDot;
									$(".tutorial-gallery-nav .dot").css({background:"#c1c1c1"});
									$(".tutorial-gallery-nav #dot-"+tutorialCurrent).css({background:"#e21a22"});


										
									}


									else if( tutDif == -3)
									{

															if( tutorialCurrent == 1)
																{
																	tutorialPrev = tutorialTotalSlides;
																	tutorialNext = tutorialCurrent+1;
																}


															
															else
																{
																	
																	tutorialPrev = tutorialCurrent-1;
																	tutorialNext = tutorialCurrent+1;
																}
															

																
																	$("#tutorial-"+(tutorialCurrent+2)).css({left:tutPos4});
																	$("#tutorial-"+(tutorialCurrent+4)).css({left:tutPos4});

																	//alert((tutorialCurrent+2)+" "+whichTutDot+" "+(tutorialCurrent+4));	
																
															

															$("#tutorial-"+tutorialPrev).stop().animate({left:tutPos5},600);
															$("#tutorial-"+tutorialNext).stop().animate({left:tutPos5},600);
															$("#tutorial-"+tutorialCurrent).stop().animate({left:tutPos5},

															
																{
																 duration:600,
																 step: function(event){
																 var prevPos = $( this).position();
																
																	 if(prevPos.left > 900)
																	 	{
																	 		
																	 		
																	 		if(tutorialTotalSlides == 7)
																	 			{
																	 				$("#tutorial-"+whichTutDot).css({left:tutPos4});
																					
																					$("#tutorial-"+(whichTutDot-1)).css({left:tutPos4});
																					$("#tutorial-1").css({left:tutPos4});
																	 			}
																	 		else if(tutorialTotalSlides == 9)
																	 			{
																	 				$("#tutorial-"+whichTutDot).css({left:tutPos4});
																					
																					$("#tutorial-"+(whichTutDot-1)).css({left:tutPos4});
																					$("#tutorial-1").css({left:tutPos4});
																	 			}
																	 		

																	 		else
																	 			{
																	 				$("#tutorial-"+whichTutDot).css({left:tutPos4});
																					$("#tutorial-"+(whichTutDot+1)).css({left:tutPos4});
																					$("#tutorial-"+(whichTutDot-1)).css({left:tutPos4});
																	 			}
																			
																	 	}

																}
															});
															
															

															if(whichTutDot == 7 || whichTutDot == 9)
																{
																	$("#tutorial-"+whichTutDot ).css({left:tutPos4});
																	$("#tutorial-"+whichTutDot ).stop().animate({left:tutPos2},600);
																	$("#tutorial-1").css({left:tutPos4});
																	$("#tutorial-1").stop().animate({left:tutPos3},600);
																	$("#tutorial-"+(whichTutDot-1)).stop().animate({left:tutPos1},600);
																}
															
															else
																{
																	$("#tutorial-"+whichTutDot).css({left:tutPos4});
																	$("#tutorial-"+whichTutDot ).stop().animate({left:tutPos2},600);
																	$("#tutorial-"+(whichTutDot-1)).stop().animate({left:tutPos1},600);
																	$("#tutorial-"+(whichTutDot+1)).stop().animate({left:tutPos3},600);
																}



												

											tutorialCurrent = whichTutDot;
											$(".tutorial-gallery-nav .dot").css({background:"#c1c1c1"});
											$(".tutorial-gallery-nav #dot-"+tutorialCurrent).css({background:"#e21a22"});






									}


									

								else
									{
										
										tutorial_right();

									}
							
							
						}
						
						
					}

					
				


			
			
				
				

			}
			

		}).on('mouseenter',function(){
			whichTutDot = parseFloat($( this ).attr('data'));
			
			$(".tutorial-gallery-nav #dot-"+whichTutDot).css({background:"#696969"});
		
		}).on('mouseleave',function(){
			
			
			$(".tutorial-gallery-nav #dot-"+whichTutDot).css({background:"#c1c1c1"});
			$(".tutorial-gallery-nav #dot-"+tutorialCurrent).css({background:"#e21a22"});
		});

		/* ROTATING - TUTORIALS : END */

		

	/* MAIN PROD ROLLOVER : BEGIN */
	var sec_prod_cta;
	$(".main-prod").on('mouseenter',function(event){
		sec_prod_cta = $( this ).find(".cta");
		$(sec_prod_cta).attr('src','img/section-LearnMore_o.png');
	}).on('mouseleave',function(){
		$(sec_prod_cta).attr('src','img/section-LearnMore.png');
	})

	/* MAIN PROD ROLLOVER : END*/

	/*section*/
	$(".video-poster img").on('click',function(){
		var whichSecVideo = $( this ).parent().attr('id');
			
			if(whichSecVideo == "orchard"){
				videoOverlay("video","TtjhBNW4UOE");
			}
			else if(whichSecVideo == "vacation"){
				videoOverlay("video","wltQXRfDGzY");
			}
			else if(whichSecVideo == "mydog"){
				//alert("d");
				sectionImage = false;
				//videoOverlay("image",mageSrc);
				videoOverlay("image","moment");

			}
		
		
	
	});
	
	$("#vacation-cta").on('click',function(){
		sectionVideoCat = "travel";
		videoOverlay("video","hcgUrPf8txc");
	});

	$("#orchard-cta").on('click',function(){
	
		sectionVideoCat = "family";
		videoOverlay("video","BKb_qizULU4");

	})
	

	$(".learn-how #video-btn").on('click',function(){

		if(tutorialCurrent > 4){sectionImageTip = true;}
		else {sectionImageTip = false;}

		var tutSet = $( this ).attr('data');
		if( tutSet == "family")
			{
				screenCat = "tips";
				tipCat = tutSet;

				if(tutorialCurrent == 1)
					{
						videoOverlay("video","0taULWDk8fY");
						
					}
				else if(tutorialCurrent == 2)
					{
						videoOverlay("video","6toO3796fm8");
					}	
				else if(tutorialCurrent == 3)
					{
						videoOverlay("video","ezXupnFbI-Q");
					}	
				else if(tutorialCurrent == 4)
					{
						videoOverlay("video","gnl55vfUChY");
					}
				else if(tutorialCurrent == 5)
					{
						tipOverlay(tutorialCurrent);
						
					}
				else if(tutorialCurrent == 6)
					{
						
						tipOverlay(tutorialCurrent);;						
					}
				else if(tutorialCurrent == 7)
					{
						
						tipOverlay(tutorialCurrent);

						
					}
			}
		
		else if( tutSet == "travel")
			{
				
				screenCat = "tips";
				tipCat = tutSet;
				if(tutorialCurrent == 1)
					{
						videoOverlay("video","6toO3796fm8");
						

					}
				else if(tutorialCurrent == 2)
					{
						videoOverlay("video","Z2WAkjIcyWg");
						
					}	
				else if(tutorialCurrent == 3)
					{
						videoOverlay("video","mmPQVvF3EPQ");
						
					}	
				else if(tutorialCurrent == 4)
					{
						videoOverlay("video","93pa2W-c_kU");
						
					}
				else if(tutorialCurrent == 5)
					{
						tipOverlay(tutorialCurrent);
						
					}
				else if(tutorialCurrent == 6)
					{
						tipOverlay(tutorialCurrent);
						
					}
				else if(tutorialCurrent == 7)
					{
						tipOverlay(tutorialCurrent);
						
					}	
				else if(tutorialCurrent == 8)
					{
						tipOverlay(tutorialCurrent);
						
					}
				else if(tutorialCurrent == 9)
					{
						tipOverlay(tutorialCurrent);
						
					}	
			}
		else if( tutSet == "moment")
			{
				if(tutorialCurrent == 1)
					{
						videoOverlay("video","6toO3796fm8");
						
					}
				else if(tutorialCurrent == 2)
					{
						videoOverlay("video","VOxrkY6lFZo");
						
					}	
				else if(tutorialCurrent == 3)
					{
						videoOverlay("video","plsuW2yPX-A");
						
					}	
				else if(tutorialCurrent == 4)
					{
						videoOverlay("video","no-zxb3cDio");
						
					}	
			}
		
		
	});











