import React from 'react';
import {useTranslation} from 'react-i18next';
function Rankings(props) {

    const {t} = useTranslation('CountryQualifiersTranslate');

    return(
        <div className="blue-wrap">
			{t('Rankings')}
		</div>
    )
}

export default Rankings;