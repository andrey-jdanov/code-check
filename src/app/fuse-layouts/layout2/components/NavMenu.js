import React from 'react';
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {changeLanguage} from 'app/store/i18nSlice';
import {useTranslation} from 'react-i18next';

function NavMenu(props) {

	const dispatch = useDispatch();
	const {t} = useTranslation('NavMenuLang');
	const lang = useSelector(({i18n}) => i18n.language);

	const handleChangeLanguage = (languageId) => {
		dispatch(changeLanguage(languageId));
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarCollapse">
				<ul className="navbar-nav mr-audio">
					<Link to={{ pathname: "/", hash: "#tornament-experience" }} >
						<li className="nav-item">{t('Home')}</li>
					</Link>
					
					<Link to={{ pathname: "/", hash: "#timeline" }} >
						<li className="nav-item">{t('Timeline')}</li>
					</Link>

					<Link to={{ pathname: "/", hash: "#streamer" }} >
						<li className="nav-item">{t('streaming partners')}</li>
					</Link>

					<Link to={{ pathname: "/", hash: "#news" }} >
						<li className="nav-item">{t('News')}</li>
					</Link>
					
					<Link to='/faq'>
						<li className="nav-item">{t('Faq')}</li>
					</Link>
					
					<li className="nav-item dropdown">
						<Link to='#' className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							{t('Country Qualifiers')}<div className="arrow"></div>
						</Link>
						<div className="dropdown-menu">
							<Link className="dropdown-item" to="/country-leagues/schedule">{t('schedule')}</Link>
							<Link className="dropdown-item" to="/country-leagues/leagues">{t('leagues')}</Link>
							<Link className="dropdown-item" to="/country-leagues/participants">{t('participants')}</Link>
							<Link className="dropdown-item" to="/country-leagues/latest-results/0/range/0-9">{t('latest results')}</Link>
							<Link className="dropdown-item" to="/country-leagues/upcoming-matches/0/range/0-9">{t('upcoming matches')}</Link>
							<Link className="dropdown-item" to="/country-leagues/rankings">{t('rankings')}</Link>
						</div>
					</li>
					<li className="nav-item dropdown">
						<Link to='#' className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{t('Competitors League')}
							<div className="arrow"></div>
						</Link>
						<div className="dropdown-menu split2-dropdown">
							<Link className="dropdown-item" to="regional-qualifiers/schedule">{t('schedule')}</Link>
							<Link className="dropdown-item" to="regional-qualifiers/participants">{t('participants')}</Link>
							<Link className="dropdown-item" to="regional-qualifiers/latest-results">{t('latest results')}</Link>
							<Link className="dropdown-item" to="regional-qualifiers/upcoming-matches">{t('upcoming matches')}</Link>
							<Link className="dropdown-item" to="regional-qualifiers/rankings">{t('rankings')}</Link>
						</div>
					</li>
					<li className="nav-item dropdown">
						<Link to='#' className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{t('Champions League')}
							<div className="arrow"></div>
						</Link>
						<div className="dropdown-menu split2-dropdown">
							<Link className="dropdown-item" to="pro-league/schedule">{t('schedule')}</Link>
							<Link className="dropdown-item" to="pro-league/participants">{t('participants')}</Link>
							<Link className="dropdown-item" to="pro-league/latest-results">{t('latest results')}</Link>
							<Link className="dropdown-item" to="pro-league/upcoming-matches">{t('upcoming matches')}</Link>
							<Link className="dropdown-item" to="pro-league/rankings">{t('rankings')}</Link>
						</div>
					</li>
					
					<li>
						<Link to='/register' className="reg-link">
							<span>{t('REGISTER NOW')}</span>
						</Link>
					</li>
					
					<li className="lang-menu nav-item">
						<Link to='#' onClick={ () => handleChangeLanguage('en')} className={lang === 'en' ?'active': ''} >eng</Link>
						<Link to='#' onClick={ () => handleChangeLanguage('ar')} className={lang === 'ar' ?'active': ''}>arb</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavMenu;