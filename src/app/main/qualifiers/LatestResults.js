import React from 'react';
import {useTranslation} from 'react-i18next';
function LatestResults(props) {

    const {t} = useTranslation('CountryQualifiersTranslate');

    return(
        <div className="blue-wrap">
			{t('LatestResults')}
		</div>
    )
}

export default LatestResults;