import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

function QualifiersNav(props) {

    const {t} = useTranslation('CountryQualifiersTranslate');
    const [page_name, setPageName] = useState('schedule');
    
    let tabs = ['latest-results', 'upcoming-matches', 'playoffs'];

    useEffect( () => {
        let path = props.url;
        let path_segment = path.split('/'); 
        setPageName(path_segment[2]);
        
    }, [props]);

    return(
        <div id="LeaguesNavigations">
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler togglerLeague" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-line"></span>
                    <span className="navbar-toggler-line"></span>
                    <span className="navbar-toggler-line"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={page_name === 'schedule'? 'active': ''} ><Link to='/country-leagues/schedule'>{ t('schedule') }</Link> </li>
                        <li className={page_name === 'leagues'? 'active': ''} ><Link to='/country-leagues/leagues'>{ t('leagues') }</Link> </li>
                        <li className={page_name === 'participants'? 'active': ''} ><Link to='/country-leagues/participants'>{ t('participants') }</Link> </li>
                        <li className={tabs.indexOf(page_name) >= 0 ? 'active dropdown' : 'dropdown'}>
                            <Link to='#' className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{ t('matches') }</Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to='/country-leagues/upcoming-matches/0/range/0-9'>{ t('upcoming matches') }</Link>
                                <Link className="dropdown-item" to='/country-leagues/latest-results/0/range/0-9'>{ t('latest results') }</Link>
                            </div>
                        </li>
                        <li className={page_name === 'standings' ? 'active' : ''}><Link to='/country-leagues/rankings'>{ t('rankings') }</Link> </li> 
                    </ul>
                    <Link to='#' className="closeBtn" data-toggle="collapse" data-target="#navbarNav"></Link>
                </div>
            </nav>
        </div>
    )
}

export default QualifiersNav;