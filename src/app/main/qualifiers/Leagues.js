import React from 'react';
import {useTranslation} from 'react-i18next';
function Leagues(props) {

    const {t} = useTranslation('CountryQualifiersTranslate');

    return(
        <>
            <section id="LeaguesContent">
                <div className="container">
                    <h2 className="section-title">{ t("leagues") }</h2>
                    <div className="mobileRT d-block d-sm-none">
                        <span>{ t("Registered Teams") }</span>
                    </div>
                    <div className="row">
                        {/* <?php foreach ($tournaments as $tournament) { 
                            if($tournament['type'] == 1){
                        ?>
                            <div className="col-lg-6 col-md-12 blocLeague">
                                <div className="Country">
                                    <div className="flag"><img src="/assets/img/flag/<?php echo in_array($tournament['country'], ['XX', 'XY', 'XZ', 'ZZ']) ? 'XX' : $tournament['country']; ?>.jpg" alt="<?php echo $tournament['country']; ?>" /></div>
                                    <span className="CountryName"><?php echo $tournament['country_name']; ?></span>
                                    <div className="Registered_Teams">
                                        <div className="Effective_Team"><?php echo $tournament['count']; ?></div>
                                        <span className="d-none d-sm-block"><?php echo t("Registered Teams"); ?></span>
                                    </div>
                                </div>
                            </div>
                        <?php }} ?> */}
                    </div>
                </div>

            </section>
        </>
    )
}

export default Leagues;