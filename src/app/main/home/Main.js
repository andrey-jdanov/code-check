import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import NavMenu from 'app/fuse-layouts/layout2/components/NavMenu';

function MainPart(props) {
	
	const {t} = useTranslation('HomePageTranslate');

	const newsData = useSelector( state => state.pages.news.allNewsData);
	const lang = useSelector( state => state.i18n.language);
	 
	return (
		<div id="main_home_part">
			<div className="blue-wrap home">
				<section id="cover-home">
					<header className="header clearfix">
						<Link to="/" className="Logo"> </Link>
						<NavMenu />
					</header>
					<div className="GradientBanner"></div>
					<div className="fullscreen-bg">
						<video loop muted autoPlay poster="assets/img/SH_Scroll_Nautilus_Final.jpg" className="fullscreen-bg__video lazy">
							<source src="assets/video/SH_Scroll_Nautilus_Final.webm" type="video/webm"></source>
						</video>
					</div>
					<div className="container-fluid" id="intro-container">
						<div id="intro">
							<div className="inner-path">
								<img src="assets/img/lol-logo.svg" alt="LoL Logo" />
								<div className="l1">{t('Are you ready for')}</div>
								<div className="l2">{t('IAC 2021?')}</div>
								<div className="cta-wrapper">
									<a href="https://www.youtube.com/watch?v=HxPSRgS-e-c" target="_blank" rel="noopener noreferrer" className="trapezo-button" data-aos="fade-up">
										<span>{t('what is iac')}<img src="assets/img/svg/play-icon.svg" alt=""/></span><span className="polygone"></span>
									</a>
								</div>
								<div className="row">									
									<div className="col figure_players">
										<ul style={{margin: 'auto'}}>
											<li>
												<span className="counter count-to" data-from="0" data-to="999"></span>
												<div className="user">
													<i className="icon-sign-team"></i>
													<span className="my-auto">{t('teams signed up')}</span>
												</div>
											</li>
											<li>
												<span className="counter count-to" data-from="0" data-to="9999"></span>
												<div className="user">
													<i className="icon-players"></i>
													<span className="my-auto" >{ t('players registered') }</span>
												</div>

											</li>
										</ul>
									</div>
									<div className="col count-down_wrapper">
										<div className="count-down">

											<ul id="count-down-area">
												<li className="unit-block"><span className="counter">&nbsp;</span><span className="unit">{ t('D') }</span></li>
												<li className="unit-block"><span className="counter">&nbsp;</span><span className="unit">{ t('H') }</span></li>
												<li className="unit-block"><span className="counter">&nbsp;</span><span className="unit">{ t('M') }</span></li>
												<li className="unit-block"><span className="counter">&nbsp;</span><span className="unit">{ t('S') }</span></li>
											</ul>

											<div className="chrono">
												<i className="icon-count-down"></i>
												<span className="my-auto">{ t('countdown TO IAC') }</span>
											</div>

										</div>
									</div>
								</div>
							</div>							
						</div>
					</div>
				</section>

				<section id="tornament-experience">
					<div className="row justify-content-md-center" id="tournament">
						<div className="col col-lg-6 col-md-12 text-center">
							<h2>{t('A Journey in Three Electrifying Seasons')}</h2>
							<h3>{t('Join us from March to October as we celebrate this year\'s finest talents! ')}</h3>
							<p>{t('TOURNAMENT_DESC')}</p>
						</div>
					</div>
					<div id="xp-caroussel-wrapper">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div id="experience-slider" data-aos="fade-up-right">
										<div><div className="lds-ring"><div></div></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" data-src="assets/img/gifs/flags2_1.gif" data-slider-num="1" alt="" className="lazy" width="338" height="338"/></div>
										<div><div className="lds-ring"><div></div></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" data-src="assets/img/gifs/teams.gif" data-slider-num="2" alt="" className="lazy" width="338" height="338"/></div>
										<div><div className="lds-ring"><div></div></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" data-src="assets/img/gifs/teemo-confimred.gif" data-slider-num="3" alt="" className="lazy" width="338" height="338"/></div>
										<div><div className="lds-ring"><div></div></div><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" data-src="assets/img/gifs/trophy-gif.gif" data-slider-num="4" alt="" className="lazy" width="338" height="338"/></div>
									</div>
								</div>
								<div className="col-lg-6">
									<ul id="xp-slide-2">
										<li className="active" data-slider-num="1">
											<div className="xp-all-content clearfix">
												<div className="xp-image">
													<img src="assets/img/svg/multiple_country.svg" alt=""/>
												</div>
												<div className="xp-text">
													<h4>{t('Country Qualifiers')}</h4>
													<p>{t('Three weeks of qualifiers across 14 countries to determine the teams who will advance to the Competitors League and have a chance at joining the Champions League.')}</p>
													<div style={{marginTop: '35px'}}>
														<a href="country-leagues/schedule" className="trapezo-button trapezo-trp"><span><small>{ t("explore the") }</small><br/>{ t("Country Qualifiers") }</span><span className="polygone"></span></a>
													</div>
												</div>
											</div>
										</li>
										<li data-slider-num="2">
											<div className="xp-all-content clearfix">
												<div className="xp-image">
													<img src="assets/img/svg/broadcasting.svg" alt=""/>
												</div>
												<div className="xp-text">
													<h4>{t('Competitors League')}</h4>
													<p>{t('The teams that have qualified from each country will come together under the Competitors League to fight for their shot at joining the ranks of the pro players.')}</p>
													<div style={{marginTop: '35px'}}>
														<a href="regional-qualifiers/schedule" className="trapezo-button trapezo-trp"><span><small>{ t("explore the") }</small><br/>{ t("Competitors League") }</span><span className="polygone"></span></a>
													</div>
												</div>
											</div>
										</li>
										<li data-slider-num="3">
											<div className="xp-all-content clearfix">
												<div className="xp-image">
													<img src="assets/img/svg/stream.svg" alt=""/>
												</div>
												<div className="xp-text">
													<h4>{t('Champions League')}</h4>
													<p>{t("The eight finalists from IAC 2020 will meet again to settle scores, secure their spots in the League and determine the best teams, once and for all.")}</p>
													<div style={{marginTop: '35px'}}>
														<a href="regional-qualifiers/schedule" className="trapezo-button trapezo-trp"><span><small>{ t("explore the") }</small><br/>{ t("Champions League") }</span><span className="polygone"></span></a>
													</div>
												</div>
											</div>
										</li>
										<li data-slider-num="4">
											<div className="xp-all-content clearfix">
												<div className="xp-image">
													<img src="assets/img/svg/one_regional.svg" alt=""/>
												</div>
												<div className="xp-text">
													<h4>{t("Grand Finals")}</h4>
													<p>{t("A finale bringing together the finest talents in the MENA region as they give their all to win the Intel Arabian Cup.")}</p>
													<div style={{marginTop: '35px'}}>
														<a href="register" className="trapezo-button trapezo-trp"><span>{ t("REGISTER NOW") }</span><span className="polygone"></span></a>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<ul id="xp-slide-pagger">
							<li><Link to="#" data-target-slide="1" className="active">{t("Country Qualifiers")}</Link></li>
							<li><Link to="#" data-target-slide="2">{t("Competitors League")}</Link></li>
							<li><Link to="#" data-target-slide="3">{t("Champions League")}</Link></li>
							<li><Link to="#" data-target-slide="4">{t("Grand Finals")}</Link></li>
						</ul>

					</div>
				</section>
			</div>
			<section id="registration">
				<div className="container" id="timeline">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<span className="blue">{t("Compete for the Cup")}</span>
							<h2 className="section-title">{t("with pride")}</h2>
							<ul className="nav nav-tabs">
								<li>
									<a data-toggle="tab" href="#menu1" className="active">
										<span className="icon-cont">
											<img src="assets/img/gifs/icon01.gif" alt="" className="gif"/>
											<img src="assets/img/svg/registre-1.svg" alt="" className="svg" style={{height: '32px'}}/>
										</span>
										<h3><span>{t("Season 1")}</span></h3>
									</a>
								</li>
								<li>
									<a data-toggle="tab" href="#menu2">
										<span className="icon-cont">
											<img src="assets/img/gifs/icon02.gif" alt="" className="gif"/>
											<img src="assets/img/svg/registre-2.svg" alt="" className="svg" style={{height: '32px'}}/>
										</span>
										<h3><span>{t("Season 2")}</span></h3>
									</a>
								</li>
								<li>
									<a data-toggle="tab" href="#menu3">
										<span className="icon-cont">
											<img src="assets/img/gifs/icon03.gif" alt="" className="gif" style={{height: '32px'}}/>
											<img src="assets/img/svg/registre-3.svg" alt="" className="svg" style={{height: '32px'}}/>
										</span>
										<h3><span>{t("Season 3")}</span></h3>
									</a>
								</li>
								<li>
									<a data-toggle="tab" href="#menu4">
										<span className="icon-cont">
											<img src="assets/img/gifs/icon04.gif" alt="" className="gif"/>
											<img src="assets/img/svg/registre-4.svg" alt="" className="svg"/>
										</span>
										<h3><span>{t("Last Chance Qualifiers")}</span></h3>
									</a>
								</li>
								<li>
									<a data-toggle="tab" href="#menu5">
										<span className="icon-cont">
											<img src="assets/img/gifs/icon05.gif" alt="" className="gif"/>
											<img src="assets/img/svg/registre-5.svg" alt="" className="svg"/>
										</span>
										<h3><span>{t("Grand Finals1")}</span></h3>
									</a>
								</li>
							</ul>
							<div className="tab-content">
								<div id="menu1" className="tab-pane fade">
									<h3 className="text-uppercase">{t("Season 1")}</h3>
									<p>{t("25 March to 15 May - The first season of IAC 2021 begins, kicking off a journey that would last the entire year. Country Qualifiers and Champions League run concurrently, leading up to Competitors League in April and the finals in the first week of May.  ")}</p>
								</div>
								<div id="menu2" className="tab-pane fade in active">
									<h3 className="text-uppercase">{t("Season 2")}</h3>
									<p>{t("10 June to 31 July - After a short break, we commence the second season of IAC (registrations between 23 May and 5 June), with the return of the eight pro teams that have secured their position in Season 1, and a fresh opportunity for new and returning teams to climb the ranks.")}</p>
								</div>
								<div id="menu3" className="tab-pane fade">
									<h3 className="text-uppercase">{t("Season 3")}</h3>
									<p>{t("19 August to 25 September - We return with the last season of the year (registrations between 3 and 17 August), where the competition will be fiercer than ever as teams scramble to secure the seven spots that will lead them straight to the IAC Grand Finals.")}</p>
								</div>
								<div id="menu4" className="tab-pane fade">
									<h3 className="text-uppercase">{t("Last Chance Qualifiers")}</h3>
									<p>{t("26 to 29 September - All remaining teams that have landed their name on the Champions League scoreboard at any time during the three seasons get a final chance to prove they are worthy of the eighth and final spot in the finals.")}</p>
								</div>
								<div id="menu5" className="tab-pane fade">
									<h3 className="text-uppercase">{t("Grand Finals1")}</h3>
									<p>{t("1 to 9 October - Nine days of exhilarating battles between the eight teams that have fought to climb the leaderboard across three seasons for a shot at seizing victory and taking the cup home.")}</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 registration_video_container">
							<video loop muted autoPlay className="registration_video lazy">
								<source src="assets/video/WR_LunarBeast_EventTrailer_Thumbnail_1280x720_v2.webm" data-src="assets/video/WR_LunarBeast_EventTrailer_Thumbnail_1280x720_v2.webm"  type="video/webm"/>
							</video>
						</div>
					</div>
				</div>
			</section>

			<section id="register-cont">
				<div className="container">
					<div className="row center-v">
						<div className="col-lg-4 col-md-12 align-left">
							<h2 className="section-title">{ t("REGISTER YOUR TEAM (landing)") }</h2>
						</div>
						<div className="col-lg-4 col-sm-6 col-12 align-center">
							<a href="register" className="trapezo-button" data-aos="fade-up"><span>{ t("REGISTER NOW") }</span><span className="polygone black"></span></a>
						</div>
						<div className="col-lg-4 col-sm-6 col-12 align-right">
							<p><a href="https://discord.gg/nrts2uw" target="_blank" id="discord-link" rel="noopener noreferrer">{t("Join Our Discord Channel")} <img src="assets/img/joint.png" srcSet="assets/img/discord@2x.png 2x" alt="Discord"/></a></p>
						</div>
					</div>
				</div>
			</section>


			<section id="streamer">
				<div className="container">
					<div className="text-center">
						<h2 className="section-title">{t("Become an Official IAC Broadcast Partner")}</h2>
						<h3 className="section-sub-title">{t("For Perks and Glory!")}</h3>
						<div className="row justify-content-md-center">
							<div className="col col-lg-6 col-md-12">
								<p className="sub-title">{t("Join us as an official IAC 2021 broadcast partner and help us bring quality content to the screens of every single League of Legends fan wherever they may be. ")}</p>
							</div>
						</div>
					</div>

					<div className="tab-content">
					<div id="tab-companies" className="tab-content-streamer tab-pane fade in active">
						<div className="row">
							<div className="col-lg-6 col-sm-12">
								<div className="left-trapeze">
										<span className="left-trapeze-inner"><span className="angle"></span></span>
										<img id="change-image" src="assets/img/streamer.jpg" data-src="assets/img/streamer.jpg" alt="streamer" className="lazy" />
									</div>
								</div>
								<div className="col-lg-6 col-sm-12">
									<div className="accordion" id="accordionStreamerCompanies">
										<div className="card">
											<div className="card-header" id="headingStreamerCompanies1">
												<div className="mb-0">
													<button className="btn btn-link Broadcasting" type="button" data-toggle="collapse" data-target="#collapseStreamerCompanies1" aria-expanded="true" aria-controls="collapseStreamerCompanies1">
														<span className="icon-wrapper">&nbsp;</span>
														<span className="img-wrapper">
															<img src="assets/img/svg/broadcasting.svg" alt=""/>
														</span>
														<span className="title">{t("Broadcasting Exclusivity")}</span>
													</button>
												</div>
											</div>
											<div id="collapseStreamerCompanies1" className="collapse show" aria-labelledby="headingStreamerCompanies1" data-parent="#accordionStreamerCompanies">
												<div className="card-body" style={{paddingTop:'15px'}}>
													{t("Exclusive rights for selected partners to broadcast the events and games of the Intel Arabian Cup to viewers in the region. ")}
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-header" id="headingStreamerCompanies2">
												<div className="mb-0">
													<button className="btn btn-link Premium-eSports" type="button" data-toggle="collapse" data-target="#collapseStreamerCompanies2" aria-expanded="false" aria-controls="collapseStreamerCompanies2">
														<span className="icon-wrapper">&nbsp;</span>
														<span className="img-wrapper">
															<img src="assets/img/svg/premium.svg" alt=""/>
														</span>
														<span className="title">{t("Premium eSports Content")}</span>
													</button>
												</div>
											</div>
											<div id="collapseStreamerCompanies2" className="collapse" aria-labelledby="headingStreamerCompanies2" data-parent="#accordionStreamerCompanies">
												<div className="card-body" style={{paddingTop:'15px'}}>
												{t("The chance to be promoted as an official streaming partner on our channels and social media. ")}
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-header" id="headingStreamerCompanies3">
												<div className="mb-0">
													<button className="btn btn-link In-Stream-Brand" type="button" data-toggle="collapse" data-target="#collapseStreamerCompanies3" aria-expanded="false" aria-controls="collapseStreamerCompanies3">
														<span className="icon-wrapper">&nbsp;</span>
														<span className="img-wrapper">
															<img src="assets/img/svg/in-stream.svg" alt=""/>
														</span>
														<span className="title">{t("In-Stream Brand Exposure")}</span>
													</button>
												</div>
											</div>
											<div id="collapseStreamerCompanies3" className="collapse" aria-labelledby="headingStreamerCompanies3" data-parent="#accordionStreamerCompanies">
												<div className="card-body" style={{paddingTop:'15px'}}>
													{t("Exclusive in-game items to give away to your audience.")}
												</div>
											</div>
										</div>
									</div>
									<p className="align-right ApplyNow">
										<a href="streamer/company" className="trapezo-button" data-aos="fade-up"><span className="polygone"></span><span>{t("apply NOW")}</span></a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="news">
				<div className="container">

					<div className="text-center">
						<h2 className="section-title">{t("News and Updates")}</h2>
						<h3 className="section-sub-title">{t("Keeping You in the Loop")}</h3>
						<div className="row justify-content-md-center">
							<div className="col col-lg-6 col-md-12">
								<p className="sub-title">{t("Trust us - you would not want to miss anything about the IAC events, matches, teams and so much more.")}</p>
							</div>
						</div>
					</div>

					<div className="row">
						{
							newsData && newsData['news_' + lang] ?
								newsData['news_' + lang].map( (news, newsIndex) => {
									if(newsIndex > 2){
										return '';
									}else{
										return (
											<div className='col-md-4' key={'news-' + newsIndex}>
												<Link to={news['url']} className='news-item' rel="noopener noreferrer">
													<div className='news-img'>
														<img src={news['image']} data-src={news['image']} alt={news['title']} className="lazy" />
													</div>
													<div className='news-content'>
														<h4>{news['title']}</h4>
														<span className='date'> 
															{new Intl.DateTimeFormat('en-ae', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(new Date(news['date']))}
														</span>
														<p className='short-desc'>{ news['content']}</p>
													</div>
												</Link>
											</div>
										);
									}
								})
							: ""
						}						
					</div>

					<div className="text-right">
						<Link to="/news" className="view-all-link">{t("View all")}</Link>
					</div>

				</div>
			</section>			
		</div> 
	);
}

export default MainPart;
