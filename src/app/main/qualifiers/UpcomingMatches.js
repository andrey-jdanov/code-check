import React from 'react';
import {useTranslation} from 'react-i18next';
function UpcomingMatches(props) {

    const {t} = useTranslation('CountryQualifiersTranslate');

    return(
        <div className="blue-wrap">
			{t('UpcomingMatches')}
		</div>
    )
}

export default UpcomingMatches;