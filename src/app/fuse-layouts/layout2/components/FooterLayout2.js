import React from 'react';
// import { useSelector } from 'react-redux';

function FooterLayout2(props) {

	return (
		<footer>
			<section id="Registration_Bloc">
				<div className="container">
					<span>Registrations are open until 24 March</span>
				</div>
			</section>

			<div className="bottom-footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-sm-12 legendsLogo">
							<div className="row">
								<div className="col col-md-6 text-center">
									<img src="assets/img/lol-logo.png" alt="LoL" />
								</div>
								<div className="col col-md-6 text-center">
									<img src="assets/img/riot.png" alt="Riot" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-sm-6 text-center">
							&copy; 2021 Riot Games. All Rights Reserved.<a href="terms">Terms of Use</a> | <a href="privacy">Privacy Policy</a> | <a href="rules">Rules and Regulations</a>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="row">
								<div className="col footer-follow">
									<p>FOLLOW US</p>
									<div className="follow-icon" style={{flexDirection:'row', paddingBottom:'20px'}}>
										<a href="https://www.facebook.com/leagueoflegendsarabia/" target="_blank" rel="noopener noreferrer"><img src="assets/img/follow-fb.png" style={{display: 'inline'}} alt="Facebook"/></a>
										<a href="https://www.instagram.com/leaguearabia/" target="_blank" rel="noopener noreferrer"><img src="assets/img/follow-instagram.png" style={{display: 'inline'}} alt="Instagram"/></a>
										<a href="https://www.youtube.com/channel/UCvr5kSzq-uhQ0E4ebXFgK4g" target="_blank" rel="noopener noreferrer"><img src="assets/img/follow-youtube.png" style={{display: 'inline'}} alt="Youtube"/></a>
										<a href="https://twitter.com/LoLArabia" target="_blank" rel="noopener noreferrer"><img src="assets/img/follow-twitter.png" style={{display: 'inline'}} alt="Twitter"/></a>
										<a href="https://discord.gg/nrts2uw" target="_blank" rel="noopener noreferrer"><img src="assets/img/discord-icon.png" style={{display: 'inline'}} alt="Discord"/></a>
										<a href="https://www.twitch.tv/lolarabia" target="_blank" rel="noopener noreferrer"><img src="assets/img/twitch-icon.png" style={{display: 'inline'}} alt="twitch"/></a>
									</div>
								</div>
								<div className="col footerInsigne">
									<img src="assets/img/footer_insigne.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default React.memo(FooterLayout2);
