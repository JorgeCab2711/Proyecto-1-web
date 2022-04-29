import React, { Fragment } from 'react';
import logo from './img/logo.png';
import weapons from './img/weapons.jpg';
import girl from './img/girl.jpg';
import fit from './img/fit.jpg';
import tl from './img/tlk.jpg';
import inf from './img/3.jpg';
import vg from './img/4.jpg';
import vga from './img/2.jpg';
import retro from './img/1.jpg';
import './style.scss';

function App() {
  return (
    <Fragment>
      <div id="background"></div>
      <body>
        <div className="container">
          <div className="logoContainer">
            <img src={logo} id="logo" />
          </div>
          <div className="info-container">
            <header className="info-header">Boards</header>
            <div className="column-container">
              <div className="column">
                <header>Japanse Culture</header>
                <div className="page-link">Anime & Manga</div>
                <div className="page-link">Anime/Cute</div>
                <div className="page-link">Anime/Wallpapers</div>
                <div className="page-link">Mecha</div>
                <div className="page-link">Cosplay & EGL</div>
                <div className="page-link">Cute/Male</div>
                <div className="page-link">Flash</div>
                <div className="page-link">Transportation</div>
                <div className="page-link">Otaku Culture</div>
                <div className="page-link">Virtual YouTubers</div>
                <header>Video Games</header>
                <div className="page-link">Video Games</div>
                <div className="page-link">Video Game Generals</div>
                <div className="page-link">Video Games/Multiplayer</div>
                <div className="page-link">Video Games/Mobile</div>
                <div className="page-link">Pokémon</div>
                <div className="page-link">Retro Games</div>
                <div className="page-link">Video Games/RPG</div>
                <div className="page-link">Video Games/Strategy</div>
              </div>
              <div className="column">
                <header>Interest</header>
                <div className="page-link">Comics & Cartoons</div>
                <div className="page-link">Technology</div>
                <div className="page-link">Television & Film</div>
                <div className="page-link">Weapons</div>
                <div className="page-link">Auto</div>
                <div className="page-link">Animals & Nature</div>
                <div className="page-link">Traditional Games</div>
                <div className="page-link">Sports</div>
                <div className="page-link">Extreme Sports</div>
                <div className="page-link">Professional Wrestling</div>
                <div className="page-link">Science & Math</div>
                <div className="page-link">History & Humanities</div>
                <div className="page-link">International</div>
                <div className="page-link">Outdoors</div>
                <div className="page-link">Toys</div>
              </div>
              <div className="column">
                <header>Creative</header>
                <div className="page-link">Oekaki</div>
                <div className="page-link">Papercraft & Origami</div>
                <div className="page-link">Photography</div>
                <div className="page-link">Food & Cooking</div>
                <div className="page-link">Artwork/Critique</div>
                <div className="page-link">Wallpapers/General</div>
                <div className="page-link">Literature</div>
                <div className="page-link">Music</div>
                <div className="page-link">Fashion</div>
                <div className="page-link">3DCG</div>
                <div className="page-link">Graphic Design</div>
                <div className="page-link">Do-It-Yourself</div>
                <div className="page-link">Worksafe GIF</div>
                <div className="page-link">Quests</div>
              </div>
              <div className="column">
                <header>Other</header>
                <div className="page-link">Businness & Finance</div>
                <div className="page-link">Travel</div>
                <div className="page-link">Fitness</div>
                <div className="page-link">Paranormal</div>
                <div className="page-link">Advice</div>
                <div className="page-link">LGBT</div>
                <div className="page-link">Pony</div>
                <div className="page-link">Current News</div>
                <div className="page-link">Worksafe Requests</div>
                <div className="page-link">Very Important Posts</div>
                <header>
                  Misc.
                  <div className="nsfw">(NSFW)</div>
                </header>
                <div className="page-link">Random</div>
                <div className="page-link">ROBOT9001</div>
                <div className="page-link">Politically Incorrect</div>
                <div className="page-link">International/Random</div>
                <div className="page-link">Cams & Meetups</div>
                <div className="page-link">Shit 4chan Says</div>
              </div>
              <div className="column">
                <header>
                  Adult
                  <div className="nsfw">(NSFW)</div>
                </header>
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  Sexy Beautiful Women
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  Hardcore
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  Handsome Men
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  Hentai
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  Ecchi
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  Yuri
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  Hentai/Alternative
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  Yaoi
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  Torrents
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  High Resolution
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  Adult GIF
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  Adult Cartoons
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  Adult Requests
                </a>
                <br />
                <a
                  className="page-link"
                  href="https://www.youtube.com/watch?v=Urwk4XD_2k4"
                >
                  LOL
                </a>
                <br />
              </div>{' '}
            </div>
          </div>

          <div className="info-container">
            <header className="info-header">Popular Threads</header>
            <div className="column-container">
              {/* Column*/}
              <div className="column">
                <div className="thread-container">
                  {/* Thread */}
                  <header className="thread-header">Weapons</header>
                  <div className="image-container">
                    <img src={weapons} className="thread-image"></img>
                    <div className="thread-description">
                      Do you have any home intruder stories?
                    </div>
                  </div>
                  {/*end of thread*/}
                </div>
                <div className="thread-container">
                  {/* Thread*/}
                  <header className="thread-header">Television & Film</header>
                  <div className="image-container">
                    <img src={girl} className="thread-image"></img>
                    <div className="thread-description">
                      Official depp v heard defamation trial thread. can i
                      clarify? NO! Edition
                    </div>
                    {/*end of thread*/}
                  </div>
                </div>
                {/*end of column */}
              </div>
              {/* Column*/}
              <div className="column">
                <div className="thread-container">
                  {/* Thread */}
                  <header className="thread-header">Fitness</header>
                  <div className="image-container">
                    <img src={fit} className="thread-image"></img>
                    <div className="thread-description">
                      ITT :: we post cursed physiques
                    </div>
                  </div>
                  {/*end of thread*/}
                </div>
                <div className="thread-container">
                  {/* Thread*/}
                  <header className="thread-header">Technology</header>
                  <div className="image-container">
                    <img src={tl} className="thread-image"></img>
                    <div className="thread-description">
                      What the fuck does it do?!
                    </div>
                    {/*end of thread*/}
                  </div>
                </div>
                {/*end of column */}
              </div>
              {/* Column*/}
              <div className="column">
                <div className="thread-container">
                  {/* Thread */}
                  <header className="thread-header">Business & Finance</header>
                  <div className="image-container">
                    <img src={inf} className="thread-image"></img>
                    <div className="thread-description">
                      ICP: Why would someone pay to use the decentralized
                      web3.0? especially at inflated prices 2000/piss
                    </div>
                  </div>
                  {/*end of thread*/}
                </div>
                <div className="thread-container">
                  {/* Thread*/}
                  <header className="thread-header">Retro Games</header>
                  <div className="image-container">
                    <img src={retro} className="thread-image"></img>
                    <div className="thread-description">
                      Will Doom ever be topped?
                    </div>
                    {/*end of thread*/}
                  </div>
                </div>
                {/*end of column */}
              </div>
              {/* Column*/}
              <div className="column">
                <div className="thread-container">
                  {/* Thread */}
                  <header className="thread-header">Video Games</header>
                  <div className="image-container">
                    <img src={vga} className="thread-image"></img>
                    <div className="thread-description">
                      This is a strong, independent female character.
                    </div>
                  </div>
                  {/*end of thread*/}
                </div>
                <div className="thread-container">
                  {/* Thread*/}
                  <header className="thread-header">Video Game Generals</header>
                  <div className="image-container">
                    <img src={vg} className="thread-image"></img>
                    <div className="thread-description">
                      /ggg/ - Guilty Gear General: My Wife I-No Is Cute And Won
                      A Major! You Should Play Her! Edition RESOURCES Main wiki
                      with fram...
                    </div>
                    {/*end of thread*/}
                  </div>
                </div>
                {/*end of column */}
              </div>
            </div>
          </div>
          <div className="info-container">
            <div className="info-header">Stats</div>
            <div className="column-container">
              <div className="column">
                <header className="stats thread-header ">
                  Total Posts: 4,109,842,335
                </header>
              </div>
              <div className="column">
                <header className="stats thread-header ">
                  Current Users: 222,218
                </header>
              </div>
              <div className="column">
                <header className="stats thread-header ">
                  Active Content: 1329 GB
                </header>
              </div>
            </div>
          </div>
          <div className="misc-container">
            <div className="misc" id="misc-first">
              Home
            </div>
            <div className="misc">News</div>
            <div className="misc">Blog</div>
            <div className="misc">FAQ</div>
            <div className="misc">Rules</div>
            <div className="misc">Support</div>
            <div className="misc">Advice</div>
            <div className="misc">Press</div>
            <div className="misc">日本語</div>
          </div>
          <div className="extras-container">
            <div className="extras">About</div>
            <div>•</div>
            <div className="extras">Feedback </div>
            <div>•</div>
            <div className="extras">Legal </div>
            <div>•</div>
            <div className="extras">Contact </div>
          </div>
          <p>
            Copyright © 2003-2022 4chan community support LLC. All rights
            reserved.
          </p>
        </div>
      </body>
    </Fragment>
  );
}

export default App;
