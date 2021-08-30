import React, { useState, useEffect } from 'react';
import {useTranslation} from 'react-i18next';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';


function DetailNews(props) {

    const {t} = useTranslation('NewsTranslate');
	// const dispatch = useDispatch();
	const lang = useSelector( state => state.i18n.language);
	const all_news_data = useSelector(state => state.pages.news.allNewsData);
	const has_more = useSelector( state => state.pages.news.has_more);

	const [currentPos, setCurrentPos] = useState(0);
	const [news_data, setNewsData] = useState([]);
    const [exist_next, setExistNext] = useState(true);
    const [exist_prev, setExistPrev] = useState(false);

    const onHandlePreviousNews = () => {
        setCurrentPos(currentPos - 1);
        console.log('previous news');
    }

    const onHandleNextNews = () => {
        setCurrentPos(currentPos + 1);
        console.log('next news');
    }

    useEffect( () => {
        let newsUrl = props.match.url;
		if(all_news_data && all_news_data.news_en ){ 
			let newData = [];
			let allDataLength = 0;
            let pos = 0;
			if(lang === 'en'){
				allDataLength = all_news_data.news_en.length;
                pos = all_news_data.news_en.findIndex( data => data.url === newsUrl);
				newData = all_news_data.news_en[pos];
			}else{
				allDataLength = all_news_data.news_ar.length;
				pos = all_news_data.news_ar.findIndex( data => data.url === newsUrl);
				newData = all_news_data.news_ar[pos];
			}		
            if (pos <= 0) {
                setExistNext(true);
                setExistPrev(false);
            }else if (allDataLength <= pos){
                setExistNext(false);
                setExistPrev(true);
            }else{
                setExistNext(true);
                setExistPrev(true);
            }
            setCurrentPos(pos);	
			setNewsData( newData );
		}
	}, [ props, all_news_data, lang, has_more]);

    useEffect( () => {
        console.log('change pos', currentPos);
    }, [currentPos])

    if(news_data){
        return (
            <section id="single-new">
                <div id="single-new-list" className="main-content">
                    <div className="container">
                        <div className="news-item">
                            {
                                exist_prev ? <Link className="prev-news" to="#" onClick={ onHandlePreviousNews }>{ t('Previous article') }</Link>: ''
                            }
                            <div className="news-item-inner">
                                <h1>{ news_data['title']}</h1>
                                {
                                    news_data['date'] 
                                    ? <span className="date">{new Intl.DateTimeFormat('en-ae', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(new Date(news_data['date']))}</span>
                                    : ''
                                }
                                <div className="image-container">
                                    <img src={news_data['image']} alt={news_data['title']} />
                                </div>
    
                                {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
                                <div className="addthis_inline_share_toolbox"></div>
                                {/* <div dangerouslySetInnerHTML={{__html:news_data['shortDescription']}}></div> */}
                                { ReactHtmlParser(news_data['shortDescription']) }
                            </div>
                            {
                                exist_next ? <Link className="next-news" to="#" onClick={onHandleNextNews}>{ t('Next article') }</Link> : ''
                            }
                        </div>
                        <p className="align-center">
                            <Link to="/news" className="trapezo-button"><span>{ t('other news') }</span><span className="polygone black"></span></Link>
                        </p>
                    </div>
                </div>
            </section>
        );
    } else {
        return <></>
    }
	
}

export default DetailNews;