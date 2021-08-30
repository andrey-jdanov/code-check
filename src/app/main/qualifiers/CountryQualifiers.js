import React from 'react';
import {Switch, Route} from 'react-router';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import NavMenu from 'app/fuse-layouts/layout2/components/NavMenu';
import QualifiersNav from './QualifiersNav';
import Schedule from './Schedule';
import Leagues from './Leagues';
import Participants from './Participants';
import UpcomingMatches from './UpcomingMatches';
import LatestResults from './LatestResults';
import Ranking from './Rankings';

function CountryQualifiers(props) {

    const {t} = useTranslation('CountryQualifiersTranslate');

    return(
		<div id="schedule">
			<section id="cover-countryLeagues">
				<header className="header clearfix">
					<Link to="/" className="Logo"> </Link>
					<NavMenu />
				</header>
				<div className="LeaguesTitle">                        
					<div className="l1">{ t("Explore the") }</div>
					<div className="l2">{ t("Country Qualifiers") }</div>
					<p>{ t("Presenting the teams from 14 different countries who will step into the arena and battle for a chance to vanquish the competition and rise up to the Competitors League.") }</p>
				</div>	
				<QualifiersNav url={props.location.pathname}/>
			</section>
			<Switch>
				<Route path="/country-leagues/schedule">
					<Schedule />
				</Route>
				<Route path="/country-leagues/leagues">
					<Leagues />
				</Route>
				<Route path="/country-leagues/participants">
					<Participants />
				</Route>
				<Route path="/country-leagues/latest-results/0/range/0-9">
					<LatestResults />
				</Route>
				<Route path="/country-leagues/upcoming-matches/0/range/0-9">
					<UpcomingMatches />
				</Route>
				<Route path="/country-leagues/rankings">
					<Ranking />
				</Route>
			</Switch>
		</div>
    )
}

export default CountryQualifiers;