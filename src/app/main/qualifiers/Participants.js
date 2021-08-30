import React from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
function Participants(props) {

    const {t} = useTranslation('CountryQualifiersTranslate');

    return(
        <>
            <section id="LeaguesContent">
                <div className="container">
                    <div className="Headline clearfix">
                        <h2 className="section-title">{ t('participants') }</h2>
                        <form className="d-flex searchForm" id="participant-search-form">
                            <i className="searchIcon" aria-hidden="true"></i>
                            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder={t('Search for a participant')} aria-label="Search" id="participant-quicksearch" />
                        </form>
                        <select name="league" id="filter-participant-league" className="ui fluid dropdown">
                            <option value="">{ t("All Leagues") }</option>
                            <option value="*">{ t("All Leagues") }</option>
                            {/* <?php foreach ($tournaments as $tournament) {
                                if($tournament['type'] == 1){ ?>
                            <option value="<?php echo $tournament['country']; ?>"><?php echo $tournament['country_name']; ?></option>
                            <?php }} ?> */}
                        </select>

                    </div>
                    <div className="row" id="participants-grid">
                        {/* <?php foreach ($participants as $i => $participant) : ?>
                        <div className="col-lg-6 col-md-12 blocLeague <?php echo $participant['country']; ?>">
                            <div className="Country">
                                <div className="flag"><img src="/assets/img/flag/<?php echo in_array($participant['country'], ['XX', 'XY', 'XZ', 'ZZ']) ? 'XX' : $participant['country']; ?>.jpg" alt="<?php echo $participant['country']; ?>" /></div>
                                <span className="CountryName"><?php echo $participant['data']->name; ?></span>
                                <div className="Registered_Teams TeamsNames">
                                    <div className="Effective_Team"><?php echo isset($participant['data']->custom_fields->tag) ? strtoupper($participant['data']->custom_fields->tag) : '&nbsp;'; ?></div>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?> */}
                    </div>
                    <div className="LoadMore_Container">
                        <Link to="#" className="LoadMore" id="load-more">{ t("load more") }</Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Participants;