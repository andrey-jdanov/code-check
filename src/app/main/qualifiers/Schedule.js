import React from 'react';
import {useTranslation} from 'react-i18next';
function Schedule(props) {

    const {t} = useTranslation('CountryQualifiersTranslate');

    return(
        <>
            <section id="LeaguesContent" className="Schedule">
                <div className="container">
                    <div className="tournament-format">
                        <div className="tournament-format-text">
                            <h2 className="section-title">{ t("Qualifiers Overview") }</h2>
                            <p>{ t("The Country Qualifiers are the first step for any team wishing to make their break in the League of Legends competitive scene and reach the heights of the teams in the Champions League.") }</p>

                            <p>{ t("Across a period of three weeks, teams that have registered from the 14 participating countries will compete, each within their own country, for a chance to qualify to the Competitors League, which in turn will pave the way for the top teams from each country to join the Champions League. Games will not be broadcasted on our channels, so all players have the freedom to stream them on their personal channels.") }</p>

                            <p> { t("For more details about the stages of the chmpionship and the organization in which it will be organized, we recommend that you review all the ") } <a href="/rules" target="_blank">{ t("terms and conditions") }</a>{ t(" of the Arab Cup")}</p>
                            <ul className="calendar" style={{justifyContent:'flex-start'}}>
                                <li className="date"><img src="assets/img/svg/registre-6.svg" alt="" /> <p>{ t("25th of March") }</p></li>
                                <li className="countries"><img src="assets/img/svg/registre-7.svg" alt="" /> <p>{ t("14 Countries") }</p></li>   
                                <li className="timing"></li>                 
                            </ul>
                        </div>
                        <div className="image-shedule-content">
                            <div className="right-trapeze">
                                <img src="assets/img/saber-suite.png" alt="" className="saber-suite" />
                                <span className="right-trapeze-inner"><span className="angle"></span></span>
                                <img id="change-image" src="assets/img/tournament-format.jpg" alt="tournament format" />
                                <img src="assets/img/lolarabia.png" id="lolarabia" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="schedule-part-2">
                <div className="container">
                    <h1>{ t("Things to Keep in Mind") }</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li><span><img src="assets/img/svg/keep-in-mind-1.svg" alt=""/></span> <p>{ t("Match details will be communicated to team captains in advance, and it's their duty to inform their team members of the schedule.") }</p></li>
                                <li><span><img src="assets/img/svg/keep-in-mind-2.svg" alt=""/></span> <p>{ t("When registering your team, double-check all the provided information, especially the Summoner’s name, as any incorrect names may affect the functionality of the tournament code.") }</p></li>
                                <li><span><img src="assets/img/svg/keep-in-mind-3.png" alt=""/></span> <p>{ t("Taking a quick tour of the Toornament website and understanding it fully is strongly advisable, since it will be the platforrm for all the matches, tournament brackets and schedules.") }</p></li>
                                <li><span><img src="assets/img/svg/keep-in-mind-4.svg" alt=""/></span> <p>{ t("All team members must be ready and accounted for 30 minutes before the match starts. Tardiness will not be accepted.") }</p></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li><span><img src="assets/img/svg/keep-in-mind-5.svg" alt=""/></span><p>{ t("Games might be rescheduled on or before the day of due to some unforeseen circumstances. We will be sure to inform you ahead of time, so keep an eye out for your emails and our social channels.") }</p></li>
                                <li><span><img src="assets/img/svg/keep-in-mind-6.svg" alt=""/></span> <p>{ t("Players may stream their own matches as long as they are not featured matches on our Twitch channel.") }</p></li>
                                <li><span><img src="assets/img/svg/keep-in-mind-7.svg" alt=""/></span><p>{ t("It’s important to check your network connection on the day of the match to avoid any interruptions during the matches.") }</p></li>
                                <li><span><img src="assets/img/svg/keep-in-mind-8.svg" alt=""/></span><p>{ t("The duration of each match may vary depending on a variety of factors, including potential pauses.") }</p></li>
                            </ul>
                        </div>
                    </div>


                    <p className="vert"> { t("Our") } <a href="https://discord.gg/nrts2uw" target="_blank" rel="noopener noreferrer"><img src="assets/img/svg/discord-channel.png" style={{display: 'inline-block'}} alt=""/></a> { t("Our Discord channel is your friend. If in doubt about anything, we will be there to provide you with assistance and answer any questions.") }</p>

                </div>
            </section>

        </>
    )
}

export default Schedule;