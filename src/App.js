import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';

import './style.scss';

function App() {
     return (
          <Fragment id = 'app'>

               <body id='background' >
                    <div class="container">
                         <div class="logoContainer">
                         <img src={logo} id="logo" ></img>
                         </div>
                         <div class="info-container">
                              <header class="info-header">
                                   Boards
                              </header>
                              <div class="column-container">
                                   <div class="column">
                                        <header>Japanse Culture</header>
                                        <div class="page-link">Anime & Manga</div>
                                        <div class="page-link">Anime/Cute</div>
                                        <div class="page-link">Anime/Wallpapers</div>
                                        <div class="page-link">Mecha</div>
                                        <div class="page-link">Cosplay & EGL</div>
                                        <div class="page-link">Cute/Male</div>
                                        <div class="page-link">Flash</div>
                                        <div class="page-link">Transportation</div>
                                        <div class="page-link">Otaku Culture</div>
                                        <div class="page-link">Virtual YouTubers</div>
                                        <header>Video Games</header>
                                        <div class="page-link">Video Games</div>
                                        <div class="page-link">Video Game Generals</div>
                                        <div class="page-link">Video Games/Multiplayer</div>
                                        <div class="page-link">Video Games/Mobile</div>
                                        <div class="page-link">Pokémon</div>
                                        <div class="page-link">Retro Games</div>
                                        <div class="page-link">Video Games/RPG</div>
                                        <div class="page-link">Video Games/Strategy</div>
                                   </div>
                                   <div class="column">
                                        <header>Interest</header>
                                        <div class="page-link">Comics & Cartoons</div>
                                        <div class="page-link">Technology</div>
                                        <div class="page-link">Television & Film</div>
                                        <div class="page-link">Weapons</div>
                                        <div class="page-link">Auto</div>
                                        <div class="page-link">Animals & Nature</div>
                                        <div class="page-link">Traditional Games</div>
                                        <div class="page-link">Sports</div>
                                        <div class="page-link">Extreme Sports</div>
                                        <div class="page-link">Professional Wrestling</div>
                                        <div class="page-link">Science & Math</div>
                                        <div class="page-link">History & Humanities</div>
                                        <div class="page-link">International</div>
                                        <div class="page-link">Outdoors</div>
                                        <div class="page-link">Toys</div>
                                   </div>
                                   <div class="column">
                                        <header>Creative</header>
                                        <div class="page-link">Oekaki</div>
                                        <div class="page-link">Papercraft & Origami</div>
                                        <div class="page-link">Photography</div>
                                        <div class="page-link">Food & Cooking</div>
                                        <div class="page-link">Artwork/Critique</div>
                                        <div class="page-link">Wallpapers/General</div>
                                        <div class="page-link">Literature</div>
                                        <div class="page-link">Music</div>
                                        <div class="page-link">Fashion</div>
                                        <div class="page-link">3DCG</div>
                                        <div class="page-link">Graphic Design</div>
                                        <div class="page-link">Do-It-Yourself</div>
                                        <div class="page-link">Worksafe GIF</div>
                                        <div class="page-link">Quests</div>
                                   </div>
                                   <div class="column">
                                        <header>Other</header>
                                        <div class="page-link">Businness & Finance</div>
                                        <div class="page-link">Travel</div>
                                        <div class="page-link">Fitness</div>
                                        <div class="page-link">Paranormal</div>
                                        <div class="page-link">Advice</div>
                                        <div class="page-link">LGBT</div>
                                        <div class="page-link">Pony</div>
                                        <div class="page-link">Current News</div>
                                        <div class="page-link">Worksafe Requests</div>
                                        <div class="page-link">Very Important Posts</div>
                                        <header>Misc.<div class="nsfw">(NSFW)</div></header>
                                        <div class="page-link">Random</div>
                                        <div class="page-link">ROBOT9001</div>
                                        <div class="page-link">Politically Incorrect</div>
                                        <div class="page-link">International/Random</div>
                                        <div class="page-link">Cams & Meetups</div>
                                        <div class="page-link">Shit 4chan Says</div>
                                   </div>
                                   <div class="column">
                                        <header>Adult <div class="nsfw">(NSFW)</div></header>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Sexy Beautiful Women</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'> Hardcore</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Handsome Men</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Hentai</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Ecchi</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Yuri</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Hentai/Alternative</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Yaoi</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Torrents</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>High Resolution</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Adult GIF</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Adult Cartoons</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Adult Requests</a><br></br>
                                        <a class='page-link' href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>LOL</a><br></br>
                                   </div>
                                   

                              </div>
                         </div>

                         <div class="info-container">
                              <header class="info-header">
                                   Boards
                              </header>
                              <div class="column-container">
                                   <div class="column">
                                        <header>Japanse Culture</header>
                                        <div class="page-link">Anime & Manga</div>
                                        <div class="page-link">Anime/Cute</div>
                                        <div class="page-link">Anime/Wallpapers</div>
                                        <div class="page-link">Mecha</div>
                                        <div class="page-link">Cosplay & EGL</div>
                                        <div class="page-link">Cute/Male</div>
                                        <div class="page-link">Flash</div>
                                        <div class="page-link">Transportation</div>
                                        <div class="page-link">Otaku Culture</div>
                                        <div class="page-link">Virtual YouTubers</div>
                                        <header>Video Games</header>
                                        <div class="page-link">Video Games</div>
                                        <div class="page-link">Video Game Generals</div>
                                        <div class="page-link">Video Games/Multiplayer</div>
                                        <div class="page-link">Video Games/Mobile</div>
                                        <div class="page-link">Pokémon</div>
                                        <div class="page-link">Retro Games</div>
                                        <div class="page-link">Video Games/RPG</div>
                                        <div class="page-link">Video Games/Strategy</div>
                                   </div>
                                   <div class="column">
                                        <header>Interest</header>
                                        <div class="page-link">Comics & Cartoons</div>
                                        <div class="page-link">Technology</div>
                                        <div class="page-link">Television & Film</div>
                                        <div class="page-link">Weapons</div>
                                        <div class="page-link">Auto</div>
                                        <div class="page-link">Animals & Nature</div>
                                        <div class="page-link">Traditional Games</div>
                                        <div class="page-link">Sports</div>
                                        <div class="page-link">Extreme Sports</div>
                                        <div class="page-link">Professional Wrestling</div>
                                        <div class="page-link">Science & Math</div>
                                        <div class="page-link">History & Humanities</div>
                                        <div class="page-link">International</div>
                                        <div class="page-link">Outdoors</div>
                                        <div class="page-link">Toys</div>
                                   </div>
                                   <div class="column">
                                        <header>Creative</header>
                                        <div class="page-link">Oekaki</div>
                                        <div class="page-link">Papercraft & Origami</div>
                                        <div class="page-link">Photography</div>
                                        <div class="page-link">Food & Cooking</div>
                                        <div class="page-link">Artwork/Critique</div>
                                        <div class="page-link">Wallpapers/General</div>
                                        <div class="page-link">Literature</div>
                                        <div class="page-link">Music</div>
                                        <div class="page-link">Fashion</div>
                                        <div class="page-link">3DCG</div>
                                        <div class="page-link">Graphic Design</div>
                                        <div class="page-link">Do-It-Yourself</div>
                                        <div class="page-link">Worksafe GIF</div>
                                        <div class="page-link">Quests</div>
                                   </div>
                                   <div class="column">
                                        <header>Other</header>
                                        <div class="page-link">Businness & Finance</div>
                                        <div class="page-link">Travel</div>
                                        <div class="page-link">Fitness</div>
                                        <div class="page-link">Paranormal</div>
                                        <div class="page-link">Advice</div>
                                        <div class="page-link">LGBT</div>
                                        <div class="page-link">Pony</div>
                                        <div class="page-link">Current News</div>
                                        <div class="page-link">Worksafe Requests</div>
                                        <div class="page-link">Very Important Posts</div>
                                        <header>Misc.<div class="nsfw">(NSFW)</div></header>
                                        <div class="page-link">Random</div>
                                        <div class="page-link">ROBOT9001</div>
                                        <div class="page-link">Politically Incorrect</div>
                                        <div class="page-link">International/Random</div>
                                        <div class="page-link">Cams & Meetups</div>
                                        <div class="page-link">Shit 4chan Says</div>
                                   </div>
                                   
                                   <div class="column">
                                        <header>Adult <div class="nsfw">(NSFW)</div></header>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Sexy Beautiful Women</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'> Hardcore</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Handsome Men</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Hentai</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Ecchi</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Yuri</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Hentai/Alternative</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Yaoi</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Torrents</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>High Resolution</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Adult GIF</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Adult Cartoons</a><br></br>
                                        <a class="page-link" href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>Adult Requests</a><br></br>
                                        <a class='page-link' href='https://www.youtube.com/watch?v=Urwk4XD_2k4'>LOL</a><br></br>
                                   </div>
                                   

                              </div>
                         </div>
                         
                    </div>
               </body>
          </Fragment>
          
     );
}

export default App;
