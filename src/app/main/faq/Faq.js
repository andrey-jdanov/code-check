import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavMenu from 'app/fuse-layouts/layout2/components/NavMenu';
import {fetchFaqData} from 'app/store/pages/faqSlice';


function FaqPage(props) {
    const {t} = useTranslation('FaqPage');
	const dispatch = useDispatch();

	const lang = useSelector( state => state.i18n.language);
	const faqs = useSelector( state => state.pages.faq);
	const [faq_data , setFaqData] = useState([]);

	let faq_type = 'Registration';
	let faqImage = {
		'Tournament Timeline': 'timeline-black.svg', 
		'Tournament Mechanics': 'mecanic-black.svg', 
		'Cash prize for the Tournaments': 'cash-black.svg', 
		'Streaming': 'streaming-black.svg' 
	};

	const getFaqPartId = (faqType) => {
		return 'faq-' + faqType.replace(' ', '-');
	}

	useEffect( () => {
		if(faqs.allFaqData && !faqs.loading){
			if(lang === 'en'){
				setFaqData(faqs.allFaqData.faq_en);
			}else{
				setFaqData(faqs.allFaqData.faq_ar);
			}
		}else{
			dispatch(fetchFaqData());
		}
		
		
	}, [dispatch, faqs, lang]);

	return (
		<div>
			<div className="blue-wrap">
				<section id="cover-FAQ">
					<header className="header clearfix">
						<Link to="/" className="Logo"> </Link>
						<NavMenu />
					</header>					
					<div className="LeaguesTitle">
						<div className="l1">{ t("Frequently Asked Questions") }</div>
						<div className="l2">{ t("FAQ") }</div>
						<p>{ t("You've got questions, we've got answers. If you don't find what you're looking for here, don't hesitate to drop us a line!") }</p>
					</div>
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="col col-lg-8 text-center">
								<ul className="faq-legends">
									<li><Link to="#faq-tournament-timeline" className="scroll-link-faq"><span><img src="assets/img/svg/timeline.svg" alt=""/> { t("Tournament Timeline") }</span></Link></li>
									<li><Link to="#faq-tournament-mechanics" className="scroll-link-faq"><span><img src="assets/img/svg/mecanic.svg" alt=""/> { t("Tournament Mechanics") }</span></Link></li>
									<li><Link to="#faq-iac-companion" className="scroll-link-faq"><span><img src="assets/img/svg/streaming.svg" alt=""/> { t("IAC Companion") }</span></Link></li>
									<li><Link to="#faq-streaming" className="scroll-link-faq"><span><img src="assets/img/svg/streaming.svg" alt=""/> { t("Streaming") }</span></Link></li>
									<li><Link to="#faq-cash-prize-for-the-tournaments" className="scroll-link-faq"><span><img src="assets/img/svg/cash.svg" alt=""/> { t("Cash prize for the Tournaments") }</span></Link></li>
									<li><Link to="#faq-regional-event-finale" className="scroll-link-faq"><span><img src="assets/img/svg/cup.svg" alt=""/> { t("Regional Event Finale") }</span></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
			<section className="main-content">
				<div className="container">
				{
					faq_data && faq_data.map( (data, dataIndex) => {
						if(data['tag'] !== 'Registration'){
							if(data['tag'] !== faq_type){
								faq_type = data['tag'];
								return(
									<h2 id={getFaqPartId(data['tag'])} className="faq-h2" key={'faq_header_' + dataIndex}>{ t(data['tag'])}</h2>
								);
							}else{
								return(
									<div className="accordion accordionFAQ-inner" key={'faq_content_' + dataIndex}>
										<div className="card">
											<div className="card-header" id={"heading" + dataIndex}>
												<div className="mb-0">
													<button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse" + dataIndex} aria-expanded="false" aria-controls={"collapse" + dataIndex}>
														<span className="img-wrapper">
															<img src={"assets/img/svg/" + faqImage[data['tag']]} alt="" />
														</span>
														<span className="faq-title">{ data['question']}</span>
														<span className="icon-wrapper">&nbsp;</span>
													</button>
												</div>
											</div>
											<div id={"collapse" + dataIndex} className="collapse" aria-labelledby={"heading" + dataIndex}>
												<div className="card-body">{data['answer']}</div>
											</div>
										</div>
									</div>
								);
							}								
						}else{
							return '';
						}							
					})
				}
				</div>
			</section> 
		</div>
	);
}

export default FaqPage;