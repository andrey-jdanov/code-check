import React, { useState, useEffect } from 'react';
import {useTranslation} from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {saveHasMoreData} from 'app/store/pages/newsSlice';
import NavMenu from 'app/fuse-layouts/layout2/components/NavMenu';

function NewsPage(props) {
    const {t} = useTranslation('NewsTranslate');
	const dispatch = useDispatch();
	const lang = useSelector( state => state.i18n.language);
	const all_news_data = useSelector(state => state.pages.news.allNewsData);
	const has_more = useSelector( state => state.pages.news.has_more);

	const displayingCount = 3;
	const [currentPos, setCurrentPos] = useState(displayingCount);
	const [news_data, setNewsData] = useState([]);
	
	const onHandleHasMore = () => {
		console.log('on click has more');
		setCurrentPos(currentPos + displayingCount);
	}

	useEffect( () => {
		if(all_news_data && all_news_data.news_en ){ console.log("get count to display: ", currentPos);
			let newData = [];
			let allDataLength = 0;
			if(lang === 'en'){
				allDataLength = all_news_data.news_en.length;
				newData = all_news_data.news_en.slice(0, currentPos);
			}else{
				allDataLength = all_news_data.news_ar.length;
				newData = all_news_data.news_ar.slice(0, currentPos);
			}			
			if(allDataLength > currentPos){		
				dispatch(saveHasMoreData(true));
			}else{
				dispatch(saveHasMoreData(false));
			}	
			setNewsData( newData );
		}
	}, [ dispatch, all_news_data, lang, currentPos, has_more]);

	if(news_data){
		return (
			<div>
				<div className="blue-wrap">
					<section id="cover-news">
						<header className="header clearfix">
							<Link to="/" className="Logo"> </Link>
							<NavMenu />
						</header>
						<div className="LeaguesTitle">                        
							<div className="l1">{ t("Keeping You in the Loop") }</div>
							<div className="l2">{ t("News and Updates") }</div>
							<p>{ t("Trust us - you would not want to miss anything about the IAC events, matches, teams and so much more.") }</p>
						</div>						
					</section>
				</div>
				<section className="main-content" id="content-news">
                    <div className="container" id="news">
						<div className='row'>
							{
								news_data.map((data, dataIndex) => {
									return(
										<div className="col-md-4" key={'col-' + dataIndex}>
											<Link to={data['url']} className="news-item">
												<div className="news-img">
													<img src={ data['image'] } alt="" />
												</div>
												<div className="news-content">
													<h4>{ data['title'] }</h4>
													<span className="date">{new Intl.DateTimeFormat('en-ae', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(new Date(data['date']))}</span>
													<p className="short-desc">{ data['content'] }</p>
												</div>
											</Link>
										</div>
									);
								})
							}
						</div>
						{
							has_more 
							? <div className="LoadMore_Container">
								<Link to="#" onClick={onHandleHasMore} className="LoadMore" id="load-more">{ t("load more") }</Link>
							</div>
							: <></>
						}
                    </div>
                </section>
			</div>
		);
	}else {
		return <></>
	} 
}

export default NewsPage;