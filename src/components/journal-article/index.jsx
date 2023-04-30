import React from "react";
import "./journal-article.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import { Box } from "@mui/material";

function ListIconShare() {
  return (
    <Box className="meta_share_list">
      <ul>
        <li>
          <TwitterIcon></TwitterIcon>
        </li>
        <li>
          <FacebookOutlinedIcon></FacebookOutlinedIcon>
        </li>
        <li>
          <MailOutlineOutlinedIcon></MailOutlineOutlinedIcon>
        </li>
        <li>
          <InsertLinkOutlinedIcon></InsertLinkOutlinedIcon>
        </li>
      </ul>
    </Box>
  );
}

const FurtherReadlist = [
  "75th Directors Guild of America Awards—a list by Shawn Stubbs",
  "34th Producers Guild of America Awards—a list by Shawn Stubbs",
  "29th Screen Actors Guild Awards—a list by Shawn Stubbs",
  "Costume Designers Guild 2023 winners and nominees",
  "Art Directors Guild 2023 winners and nominees",
];

function Further() {
  return (
    <Box className="further">
      <h3>FURTHER READING</h3>
      <ul>
        {FurtherReadlist.map((futher) => (
          <li style={{ marginTop: 10 }}>{futher}</li>
        ))}
      </ul>
    </Box>
  );
}

const related_articles = [
  {
    id: 1,
    image: "https://a.ltrbxd.com/resized/sm/upload/ve/q1/w2/3h/3-0-640-0-360-crop-fill.jpg?k=4844a1097e",
    category: "Interview",
    time: "28 FEB 2023",
    title: "Banshees and Vampires.",
    description:
      "Composer Carter Burwell on his Oscar-nominated The Banshees of Inisherin score, collabing with the Coens and composing the iconic 'Bella's Lullaby' Twilight theme.",
    displayname: "MIA VICINO",
  },
  {
    id: 2,
    image: "https://a.ltrbxd.com/resized/sm/upload/oz/hu/t0/lv/B_KRAMER_332-0-640-0-360-crop-fill.jpg?k=d670485683",
    category: "Podcast",
    time: "18 FEB 2023",
    title: "Best in Show: Mr. Academy on Miss M3GAN.",
    description:
      "Academy CEO Bill Kramer teases this year’s Oscars ceremony, and we highlight the big winners from the London Film Critics Circle Awards.",
    displayname: "MIA VICINO",
  },
];

function Articles() {
  return (
    <Box className="articles">
      {related_articles.map((article) => (
        <Box className="article_item">
          <Box component="img" maxWidth={"80vw"} src={article.image} alt="" />
          <p style={{ fontSize: 12 }}>
            <b style={{ fontWeight: 800 }}>{article.category}</b> . {article.time}
          </p>
          <p style={{ fontSize: 18 }}>
            <span style={{ fontSize: 22, fontWeight: 800 }}>{article.title}</span> {article.description}
          </p>
          <span style={{ fontWeight: 600 }}>{article.displayname}</span>
        </Box>
      ))}
    </Box>
  );
}

const JournalArticle = () => {
  return (
    <Box id="journal-article-page" style={{ marginTop: 50, fontFamily: "TiemposTextWeb,Georgia,serif,ColorEmoji" }}>
      <Box id="nav">
        <span className="label">Journal</span>
      </Box>
      <Box className="border_line" />
      <Box className="label_header">
        <Box className="meta">
          <a href>Podcast</a>
        </Box>
        <Box className="article-title">
          <h1>Best in Show: Guilds and Guillermo</h1>
        </Box>
        <Box className="metasharinglayout">
          <Box className="meta_timestamp">
            <Box className="meta_timestamp_user">
              <Box
                component="img"
                maxWidth={"80vw"}
                src="https://secure.gravatar.com/avatar/d31a4b9508ddd892eb3f904c6ce6bd2d?rating=PG&size=48&border=&default=https%3A%2F%2Fs.ltrbxd.com%2Fstatic%2Fimg%2Favatar48.7a758b1e.png"
                alt=""
              />
              <a href className="name">
                MIA VICINO
              </a>
            </Box>
            <Box className="meta_timestamp_date">
              <time dateTime="2023-03-02T21:58:29.995Z" className="localtime-d-mmm-yyyy">
                3 Mar 2023
              </time>
            </Box>
          </Box>
          <ListIconShare></ListIconShare>
        </Box>
      </Box>
      <Box id="main">
        <Box id="banner">
          <Box className="img_banner">
            <Box
              component="img"
              maxWidth={"80vw"}
              src="https://a.ltrbxd.com/sm/upload/sm/gz/tz/de/header.jpeg?k=bfbb148c77"
              alt=""
            />
            <figcaption className="figure-caption caption">
              Paddingto meetsMarcel the Shell with Shoes On, courtesy of JaytheChou.
            </figcaption>
          </Box>
        </Box>
        <Box id="content">
          <Box className="body">
            <Box className="subhead">
              <p>
                As the very nearly! last of the guild awards land, we recap the BAFTAs and Césars, and chat with
                Pinocchio stop motion maestros Guillermo del Toro and Mark Gustafson.&nbsp;
              </p>
            </Box>
            <Box className="body_text">
              <Box className="article-base rich-content">
                <p>
                  Welcome back to Best in Show! Last week, we brought you a write-up of our interview with The Banshees
                  of Inisherin (and Twilight!) composer Carter Burwell. This week, we've returned to give you a status
                  report on the many, many trophies handed out over the past few weeks: the BAFTAs, Césars, Annies and
                  guilds guilds guilds galore!
                  <strong />
                </p>
              </Box>
              <Box className="body_text_content_item">
                <h2>Pinocchio, Annie Awards and Guillermo del Toro's love of Paddington</h2>
                <p>
                  “Paddington 2 is a damn masterpiece.” That was music from Guillermo del Toro's mouth to our ears
                  during our podcast interview with the Mexican master and his American creative partner Mark Gustafson
                  about their stop motion take on Carlo Collodi's story of Pinocchio.&nbsp;
                </p>
                <p>
                  We're not betting people but, if stats are facts, the fact is that even in a very strong field,
                  Guillermo del Toro's Pinocchio is this year's Oscar front runner for best animated feature (though del
                  Toro has argued all awards season that animation is not a genre but a style of storytelling, and
                  that's true too). Among many seasonal gongs, GDT's Pinocchio took home five Annies, including best
                  feature, from the hInternational Animated Film Association's 50th annual awards, and three Visual
                  Effects Society awards. These are huge nods for the film. The BAFTA for animated feature is also in
                  hand, along with best animated movie from the Producers' Guild and the Hollywood Critics' Association
                  (HCA).&nbsp;
                </p>
                <Box style={{ position: "relative" }}>
                  <Box
                    component="img"
                    maxWidth={"80vw"}
                    src="https://a.ltrbxd.com/sm/upload/vy/qa/rr/wr/paddington.jpeg?k=894cbc471f"
                    alt=""
                  />
                  <figcaption className="figure-caption caption">
                    Serial Paddington memer Jay the Chou has even managed to sneak the bear into Guillermo del Toro's
                    Pinocchio.&nbsp;
                  </figcaption>
                </Box>
                <p>
                  Our dear, also-Oscar-nominated Marcel the Shell with Shoes On has also won several trophies of late,
                  with special notice for Jenny Slate's voice work as the eponymous shell from both the Annies and the
                  HCA. Marcel is also a stop-motion marvel, and on that note it was a delight to ask del Toro and
                  Gustafson which stop-motion and claymation films and filmmakers they would throw themselves in front
                  of a bus to save. They answer that question and many more, including why it's good to be weird,
                  Jungian theories, how Lydia Tár bled into Spazzatura, and the first awards they ever won (Gustafson's
                  is a goodie).
                  <strong />
                </p>
                <Box style={{ position: "relative" }}>
                  <Box
                    component="img"
                    maxWidth={"80vw"}
                    src="https://a.ltrbxd.com/resized/sm/upload/qx/vt/p9/6m/guillermo-0-960-0-0.jpg?k=d36bbce2c0"
                    alt=""
                  />
                  <figcaption className="figure-caption caption">
                    Geppetto, Mark Gustafson and Guillermo del Toro with their BAFTA award.&nbsp;
                    <span className="credit -has-caption">
                      <span className="_sr-only">Photographer…</span> Stuart Wilson/​Getty Images
                    </span>
                  </figcaption>
                </Box>
              </Box>
              <Box className="body_text_content_item">
                <h2>BAFTA </h2>
                <p>
                  Our London editor Ella Kemp was on the BAFTA red carpet (grabbing four favorites from Ke Huy Quan and
                  Frankie Corio) and in the press room, so she was witness to Ariana DeBose's viral, campy opening song
                  (which I have since memorized so I could subject my friends to voice memos of me singing “Angela
                  Bassett did the thing!”). Ultimately, however, it was Banshees and All Quiet on the Western Front that
                  did the thing: the former won outstanding British [Irish] film, original screenplay and both
                  supporting performer categories, while the latter won outstanding film, film not in the English
                  language, adapted screenplay, director, cinematography and the rest of the technical categories. Check
                  out our HQ story for the complete list of BAFTA victors, and Letterboxd member Jaime's list of
                  nominees and winners ranked by number of nominations.
                </p>
                <Box style={{ position: "relative" }}>
                  <Box
                    component="img"
                    maxWidth={"80vw"}
                    src="https://a.ltrbxd.com/resized/sm/upload/0n/up/f4/uo/night-0-960-0-0.jpg?k=8604d43ef0"
                    alt=""
                  />
                  <figcaption className="figure-caption caption">
                    Behind the scenes of The Night of the 12th.&nbsp;
                  </figcaption>
                </Box>
              </Box>
              <Box className="body_text_content_item">
                <h2>César Awards</h2>
                <p>
                  Just across the Channel from the BAFTAs, the 48th César Awards—the French film industry's top
                  prizes—were held in Paris on February 24, Dominik Moll's brooding procedural thriller The Night of the
                  12th (‘La Nuit du 12') taking best picture and director. It's a film that much of the world is yet to
                  see, but Letterboxd member Hugo says (translated from French) “raises questions about men and women
                  today and about the place of masculinity” and that Moll “deserves his prizes” for the “perfect
                  staging”.
                </p>
                <p>
                  On the acting front, Virginie Efira won best actress for her performance as a terrorist attack
                  survivor in Alice Winocour's Paris Memories, while Benoît Magimel won the leading actor gong for
                  Albert Serra's Pacifiction, which also picked up the cinematography prize and recently started playing
                  in the US. Plus, Letterboxd fave Noémie Merlant won best supporting actress for The Innocent, the
                  fourth film directed by actor Louis Garrel—whom you may recognize from Greta Gerwig's Little Women.
                  Finally, David Fincher was awarded an Honorary César, which he accepted to the tune of the Pixies'
                  ‘Where Is My Mind?' and a standing ovation. To see all the winners, check out this list by
                  Thomas.&nbsp;
                </p>
                <Box
                  component="img"
                  maxWidth={"80vw"}
                  src="https://a.ltrbxd.com/resized/sm/upload/vs/5z/kj/f9/eeaao-0-960-0-0.jpg?k=51ee55be56"
                  alt=""
                />
                <figcaption className="figure-caption caption">
                  Shirley Kurata's designs for Jobu Tupaki contributed to her Costume Designers Guild win for Everything
                  Everywhere All at Once.
                </figcaption>
              </Box>
              <Box className="body_text_content_item">
                <h2>Guilds round-up</h2>
                <p>
                  WhileEverything Everywhere All at Once only managed an editing win at the BAFTAs, it completely swept
                  the guilds—the multiverse genre-bender scooped up best director from the Directors Guild of America
                  (DGA), best producer from the Producers Guild of America (PGA) and best cast from the Screen Actors
                  Guild (SAG). It's a promising portend for its Oscar odds, since only one film to date has ever won top
                  prizes at all three guilds and not won best picture—that's Ron Howard's Apollo 13.&nbsp;
                </p>
                <p>
                  As for the SAGs, the 2022 nominated films are the highest-rated on Letterboxd yet. Although recency
                  bias almost certainly plays a role, it's still fascinating to see that Babylon, The Banshees of
                  Inisherin, Everything Everywhere All at Once, The Fabelmans and Women Talking combined boast a
                  4.1-out-of-five average rating; the second-closest year is 1997 with a 3.9 average. Interestingly,
                  none of SAG's winning acting picks aligned with the BAFTAs' selections of Cate Blanchett (TÁR), Austin
                  Butler (Elvis) and Kerry Condon and Brendan Gleeson of Banshees. Instead, Brendan Fraser (The Whale)
                  and Michelle Yeoh, Jamie Lee Curtis and Ke Huy Quan of Everything Everywhere emerged victorious. No,
                  you are not the only one to notice Colin Farrell's name conspicuously missing. My optimistic (naïve?)
                  decision to put all my metaphorical chips in on the best eyebrow actor in the biz may leave me
                  metaphorically bankrupt. This is why we're not betting people!
                </p>
                <p>
                  But any bets placed on Everything Everywhere are continuing to pay off, as both the Costume Designers
                  (CDG) and Art Directors Guilds (ADG) aligned to name it the best in fantasy costume/production design,
                  as well as Glass Onion: A Knives Out Mystery in the contemporary categories. While Catherine Martin's
                  wiggle-friendly work on Elvis scored her a win for best period costume design from the CDG, Florencia
                  Martin's (no relation) old Hollywood art direction on Babylon snagged her best period production
                  design from the ADG. Check the further reading section below for a full list of all 2023 guild winners
                  and nominees.&nbsp;
                </p>
                <Box
                  component="img"
                  maxWidth={"80vw"}
                  src="https://a.ltrbxd.com/resized/sm/upload/8k/1e/bn/1l/babylon-0-960-0-0.jpg?k=0d5429d166"
                  alt=""
                />
                <figcaption className="figure-caption caption">
                  Live footage of the Best in Show team at Santa Monica beach during the Indie Spirit Awards.
                </figcaption>
                <p>
                  The guild sprint isn't over yet—the 75th Writers Guild of America award winners drop March 5, the day
                  after the Independent Spirit Awards, which we'll be attending! Tune in next week for a dispatch from
                  the Indie Spirits red carpet, one of the only awards bodies brave enough to nominate one of the best
                  films of last year, After Yang. Kogonada, if you're reading this, be prepared for me to thrust a
                  microphone in front of your face and beg for your Four Faves.&nbsp;
                </p>
                <p>New episodes of 'Best in Show' drop every Tuesday until the end of March.</p>
              </Box>
              <Box className="inner">
                <Box className="inner_body">
                  <Box className="inner_user">
                    <Box
                      component="img"
                      maxWidth={"80vw"}
                      className="user_img"
                      src="https://secure.gravatar.com/avatar/d31a4b9508ddd892eb3f904c6ce6bd2d?rating=PG&size=48&border=&default=https%3A%2F%2Fs.ltrbxd.com%2Fstatic%2Fimg%2Favatar48.7a758b1e.png"
                      alt=""
                    />
                    <a href="" className="name">
                      MIA VICINO
                    </a>
                  </Box>
                  <Box className="inner_account">
                    <b style={{ fontSize: 12 }}>Mia on Letterboxd &gt; </b>
                  </Box>
                </Box>
                <Box style={{ width: "100%", marginTop: 12, textAlign: "center" }} className="border_line" />
              </Box>
              <Further></Further>
              <Box style={{ display: "flex", justifyContent: "space-between", width: "85%", marginTop: 60 }}>
                <span>TAGS</span>
                <span style={{ color: "#9ab", fontWeight: 700 }}>AWARDS</span>
                <span style={{ color: "#9ab", fontWeight: 700 }}>BEST IN SHOW</span>
                <span style={{ color: "#9ab", fontWeight: 700 }}>PODCAST</span>
                <span style={{ color: "#9ab", fontWeight: 700 }}>CESARS</span>
                <span style={{ color: "#9ab", fontWeight: 700 }}>BAFTA</span>
              </Box>
              <Box style={{ textAlign: "center", width: "100%", margin: "40px 0" }}>
                <ListIconShare></ListIconShare>
              </Box>
            </Box>
          </Box>
          <Box style={{ width: "100%", marginTop: 12, textAlign: "center" }} className="border_line" />
          <Articles></Articles>
        </Box>
      </Box>
    </Box>
  );
};
export default JournalArticle;
