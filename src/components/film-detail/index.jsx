import React from "react";
import ratingImg from "./ratings.png";
import AvatarGirl from "./avatar_girl.jpg";
import Populer_List_Image1 from "./populer_list1.png";
import Populer_List_Image2 from "./populer_list2.png";
import Populer_List_Image3 from "./populer_list3.png";
import "./style.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

const Cast = [
  "Sam Worthington",
  "Zoe Saldaña",
  "Sigourney Weaver",
  "Britain Dalton",
  "Stephen Lang",
  "Jack Champion",
  "Cliff Curtis",
  "Kate Winslet",
  "Joel David Moore",
  "CCH Pounder",
  "Edie Falco",
  "Brendan Cowell",
  "Jemaine Clement",
  "Jamie Flatters",
  "Trinity Bliss",
  "Bailey Bass",
  "Filip Geljo",
  "Duane Evans Jr.",
  "Giovanni Ribisi",
  "Dileep Rao",
  "Matt Gerald",
  "Robert Okumu",
  "Alicia Vela-Bailey",
  "Andrew Arrabito",
  "Johnny Alexander",
  "Show All…",
];
const Populer_reviews = [
  {
    id: 1,
    name: "sophie",
    image: "https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-80-0-80-crop.jpg?v=1d19016187",
    rating: 3.5,
    number_comment_reply: 53,
    comment: "james cameron had 13 years to change the font for the subtitles and still went with fucking papyrus",
    likes: 18491,
  },
  {
    id: 2,
    name: "Patrick Willems",
    image: "https://a.ltrbxd.com/resized/avatar/upload/2/6/7/4/1/9/shard/avtr-0-80-0-80-crop.jpg?v=a856408a78",
    rating: 4.5,
    number_comment_reply: 162,
    comment:
      "I don’t want to reduce this movie to just its technical aspects because I think the storytelling is genuinely pretty great but…I don’t know how they did this. Like watching the scenes where a live action human is running around the jungle with big blue aliens and I know the whole world is digital and the aliens are digital but I can’t see a single seam. Is the live action guy shot on a green screen? Is he actually just animated? How is none of this real? How is that water not real? Or is some of it real? I don’t get it. In this time where we’re used to vfx doing anything, nothing has really impressed us in years, but this? This is fucking impressive. Also Sigourney Weaver as her own teen alien daughter is such a wild move and she’s so great. Jim you madman.",
    likes: 12123,
  },
  {
    id: 3,
    name: "the film drunk",
    image:
      "https://a.ltrbxd.com/resized/avatar/twitter/1/2/7/3/1/1/1/shard/http___pbs.twimg.com_profile_images_1571602042879365120_ghpMDAQT-0-80-0-80-crop.jpg?v=f62659ab1b",
    rating: 4,
    number_comment_reply: 47,
    comment: "Leaving Pandora and coming back into our shit reality after the movie ends top 10 saddest moments",
    likes: 11338,
  },
];
const recent_reviews = [
  {
    id: 1,
    name: "scissorhands69",
    image: "https://a.ltrbxd.com/resized/avatar/upload/9/0/3/3/0/1/9/shard/avtr-0-80-0-80-crop.jpg?v=43eef58889",
    rating: 2.5,
    comment: "the graphics were either rlly shitty or drop dead gorgeous and I honestly loved that",
  },
  {
    id: 2,
    name: "charlie_apple",
    image: "https://s.ltrbxd.com/static/img/avatar80.74798e0d.png",
    rating: 3.5,
    comment:
      "amazing visuals, cool word building and really feels like your there on the planet. story was a bit basic but saved by interesting visuals and overall spectacle",
  },
  {
    id: 3,
    name: "hughenden",
    image: "https://a.ltrbxd.com/resized/avatar/upload/9/0/3/2/9/0/1/shard/avtr-0-80-0-80-crop.jpg?v=8de0d7917d",
    rating: 5,
    comment:
      "My favorite film of 2022 I loved every second of it the cgi is gorgeous but a Dora is more beautiful than ever so many great characters I never really like kids in movies but these ones stole the show or me amazing can’t wait for the 3 one",
  },
];
const related_films = [
  {
    id: 1,
    image:
      "https://a.ltrbxd.com/resized/sm/upload/1p/mh/li/l2/b7nR3eKeTOwHPKmDLUWunIGasKo-0-230-0-345-crop.jpg?v=0bb5ec98ec",
    url: "https://letterboxd.com/film/avatar/",
  },
  {
    id: 2,
    image: "https://a.ltrbxd.com/resized/film-poster/7/0/0/0/7/70007-avatar-3-0-230-0-345-crop.jpg?v=1aec45e4be",
    url: "https://letterboxd.com/film/avatar-3/",
  },
  {
    id: 3,
    image: "https://a.ltrbxd.com/resized/film-poster/1/5/3/5/9/3/153593-avatar-4-0-230-0-345-crop.jpg?v=2f9bb2d0b4",
    url: "https://letterboxd.com/film/avatar-4/",
  },
  {
    id: 4,
    image: "https://a.ltrbxd.com/resized/film-poster/3/2/7/6/8/0/327680-avatar-5-0-230-0-345-crop.jpg?v=97fcab3aed",
    url: "https://letterboxd.com/film/avatar-5/",
  },
];
const similar_films = [
  {
    id: 1,
    image:
      "https://a.ltrbxd.com/resized/sm/upload/t1/n6/d1/k6/g2mqdMU3jaz6uEosF5aqJgbw7e9-0-230-0-345-crop.jpg?v=f105fa4be0",
    url: "https://letterboxd.com/film/star-wars-the-force-awakens/",
  },
  {
    id: 2,
    image:
      "https://a.ltrbxd.com/resized/sm/upload/wx/hm/hf/14/uKnhbfNt1ZR2TdoZpdn7vSNZlhX-0-230-0-345-crop.jpg?v=3bdae194cc",
    url: "https://letterboxd.com/film/man-of-steel/",
  },
  {
    id: 3,
    image:
      "https://a.ltrbxd.com/resized/sm/upload/8x/qv/nm/63/ijQHiImv16vNSeZQsmih04kwn0C-0-230-0-345-crop.jpg?v=fa3e7ba9ed",
    url: "https://letterboxd.com/film/war-for-the-planet-of-the-apes/",
  },
  {
    id: 4,
    image:
      "https://a.ltrbxd.com/resized/film-poster/3/0/9/1/0/7/309107-godzilla-king-of-the-monsters-0-230-0-345-crop.jpg?v=d6625b756a",
    url: "https://letterboxd.com/film/godzilla-king-of-the-monsters-2019/",
  },
  {
    id: 5,
    image:
      "https://a.ltrbxd.com/resized/sm/upload/nx/8b/vs/gc/cDbNAY0KM84cxXhmj8f0dLWza3t-0-230-0-345-crop.jpg?v=49eed12751",
    url: "https://letterboxd.com/film/dune-2021/",
  },
  {
    id: 6,
    image: "https://a.ltrbxd.com/resized/film-poster/2/2/5/0/6/0/225060-aquaman-0-230-0-345-crop.jpg?v=a5a1c0b649",
    url: "https://letterboxd.com/film/aquaman-2018/",
  },
];
const mentioned_by = [
  {
    id: 1,
    image: "https://a.ltrbxd.com/resized/avatar/upload/3/8/2/7/5/9/7/shard/avtr-0-144-0-144-crop.jpg?v=4f9db81da9",
    url: "https://letterboxd.com/theextracredits/story/95th-academy-awards-the-2023-oscar-predictions/",
    story_by: "Story by The Extra Credits",
  },
  {
    id: 2,
    image: "https://a.ltrbxd.com/resized/avatar/upload/3/8/2/7/5/9/7/shard/avtr-0-144-0-144-crop.jpg?v=4f9db81da9",
    url: "https://letterboxd.com/theextracredits/story/95th-academy-awards-the-2023-oscar-predictions/",
    story_by: "Story by The Extra Credits",
  },
  {
    id: 3,
    image: "https://a.ltrbxd.com/resized/avatar/upload/2/2/9/5/8/shard/avtr-0-144-0-144-crop.jpg?v=de4fa3c56b",
    url: "https://letterboxd.com/curzon/story/avatar-the-way-of-water-review-james-cameron/",
    story_by: "Story by Curzon",
  },
  {
    id: 4,
    image: "https://a.ltrbxd.com/resized/avatar/upload/2/2/9/5/8/shard/avtr-0-144-0-144-crop.jpg?v=de4fa3c56b",
    url: "https://letterboxd.com/curzon/story/avatar-the-way-of-water-review-james-cameron/",
    story_by: "Story by Curzon",
  },
  {
    id: 5,
    image: "https://a.ltrbxd.com/resized/avatar/upload/7/6/9/4/9/1/6/shard/avtr-0-144-0-144-crop.jpg?v=bc17dace66",
    url: "https://letterboxd.com/michtheater/story/whats-playing-this-week-jan-13-19/",
    story_by: "Story by The Michigan Theater",
  },
  {
    id: 6,
    image: "https://a.ltrbxd.com/resized/avatar/upload/8/2/0/4/9/1/6/shard/avtr-0-144-0-144-crop.jpg?v=037202a6dc",
    url: "https://letterboxd.com/filmmagasinet/story/tilbake-til-pandora-kan-du-holde-pusten-like/",
    story_by: "Story by Filmmagasinet",
  },
  {
    id: 7,
    image: "https://a.ltrbxd.com/resized/avatar/upload/7/6/9/4/9/1/6/shard/avtr-0-144-0-144-crop.jpg?v=bc17dace66",
    url: "https://letterboxd.com/michtheater/story/whats-playing-this-week-jan-13-19/",
    story_by: "Story by The Michigan Theater",
  },
  {
    id: 8,
    image: "https://a.ltrbxd.com/resized/avatar/upload/7/8/4/2/3/1/7/shard/avtr-0-144-0-144-crop.jpg?v=b395d4d59d",
    url: "https://letterboxd.com/broadlyspecific/story/avatar-the-way-of-water-review-the-shaky/",
    story_by: "Story by Broadly Specific",
  },
];
const Populer_list = [
  {
    id: 1,
    image: Populer_List_Image1,
    url: "https://letterboxd.com/etolkin/list/filmlist:28697007/",
    title: "🐉🎭✨ 𝕍𝕀𝕊𝕌𝔸𝕃𝕃𝕐 𝙸𝙽𝚂𝙰𝙽𝙴👹🧞‍♀️👁️",
    user_image:
      "https://a.ltrbxd.com/resized/avatar/twitter/1/6/3/7/4/8/4/shard/http___pbs.twimg.com_profile_images_825988154196840450_kcksfwve-0-32-0-32-crop.jpg?v=2abcc7bbc7",
    user_name: "Emma Tolkin",
    user_link: "https://letterboxd.com/etolkin/",
    total_film: 707,
    likes: 43000,
    comments: 429,
    description:
      "Asked Twitter “What’s the most visually insane movie you’ve ever seen?” Adding your answers! Am I missing your favorite hallucinogenic,…",
  },
  {
    id: 2,
    image: Populer_List_Image2,
    url: "https://letterboxd.com/crew/list/2023-oscars-all-nominated-films/",
    title: "2023 Oscars — All Nominated Films",
    user_image: "https://a.ltrbxd.com/resized/avatar/upload/3/2/0/1/2/shard/avtr-0-32-0-32-crop.jpg?v=a2177210db",
    user_name: "Letterboxd",
    user_link: "https://letterboxd.com/crew/",
    total_film: 54,
    likes: 16000,
    comments: 180,
    description:
      "All nominated films across all key categories for the 95th annual Academy Awards 2023. The Oscars will be held on…",
  },
  {
    id: 3,
    image: Populer_List_Image3,
    url: "https://letterboxd.com/tediously_brief/list/what-is-reality/",
    title: "what is reality?",
    user_image: "https://a.ltrbxd.com/resized/avatar/upload/3/4/9/3/1/7/0/shard/avtr-0-32-0-32-crop.jpg?v=919bcd2e5b",
    user_name: "michelle grondine",
    user_link: "https://letterboxd.com/tediously_brief/",
    total_film: 1492,
    likes: 41000,
    comments: 206,
    description:
      "meditations, ruminations, and explorations on the nature of reality and existence. includes experimentation with form and manipulation of perceived reality.…",
  },
];

const FilmDetail = () => {
  const film_detail = {
    name: "avatar2",
    title: "Avatar: The Way of Water",
    director: "2022 Directed by James Cameron",
    description:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure",
    subtitle: "RETURN TO PANDORA.",
    image: AvatarGirl,
    likes: 256000,
    appear: 139000,
    views: 749000,
  };
  const calculate_rating = (number) => {
    var star = "";
    var int_number = parseInt(number);
    var redundancy = number - int_number;
    for (var n = 0; n < int_number; n++) {
      star += "★";
    }
    redundancy > 0 ? (star += "½") : (star += "");
    return star;
  };
  const calculate_last_item = (id, class_default) => {
    var class_name = class_default;
    var id_last = 0;
    Populer_reviews.map((review_item, index) => {
      if (index === Populer_reviews.length - 1) {
        id_last = index;
      }
    });
    if (id == id_last + 1) {
      class_name += " last_item";
    }
    return class_name;
  };
  return (
    <div className="root" style={{ backgroundColor: "#14181c" }}>
      <div className="banner">
        <div className="before_banner"></div>
      </div>
      <div id="content">
        <div className="content_left">
          <img style={{ borderRadius: 10 }} src={film_detail.image} alt="" />
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "13px",
              width: 230,
              margin: "16px 0 30px 0",
            }}
          >
            <RemoveRedEyeRoundedIcon style={{ fontSize: "18px", color: "#00c030" }}></RemoveRedEyeRoundedIcon>{" "}
            {film_detail.views / 1000}K &nbsp;
            <GridViewSharpIcon style={{ fontSize: "18px", color: "#40bcf4" }}></GridViewSharpIcon>
            {film_detail.appear / 1000}K &nbsp;
            <FavoriteIcon style={{ fontSize: "18px", color: "#ff9010" }}></FavoriteIcon>
            {film_detail.likes / 1000}K
          </p>
          <div className="watch_panel">
            <div className="watch_header">
              <h3 class="watch_header_title">Where to watch</h3>
              <a href="">
                <SmartDisplayIcon style={{ marginRight: 3 }}></SmartDisplayIcon>Trailer
              </a>
            </div>
            <div className="services">
              <img src="https://s.ltrbxd.com/static/img/brands/amazon.92a626e2.png" alt="" />
              <a
                className="services_title"
                href="https://www.amazon.com/dp/B002VPE1B6?tag=letterboxd-20&linkCode=osi&th=1&psc=1&language=en_US"
              >
                Amazon US
              </a>
              <a
                className="services_option"
                href="https://www.amazon.com/dp/B002VPE1B6?tag=letterboxd-20&linkCode=osi&th=1&psc=1&language=en_US"
              >
                DISC
              </a>
            </div>
            <div className="other_message">
              <a href="https://letterboxd.com/pro/">
                Go <span className="pro">PRO</span> to customize this list
              </a>
            </div>
            <div className="all_services">
              <a className="all" href="https://letterboxd.com/film/avatar-the-way-of-water/watch/">
                All services...
              </a>
              <a className="justwatch" href="https://www.justwatch.com/">
                JustWatch
              </a>
            </div>
          </div>
        </div>
        <div className="content_right">
          <div className="content_right_film">
            <h1 style={{ margin: 0 }}>{film_detail.title}</h1>
            <p>{film_detail.director}</p>
          </div>
          <div className="content_right_description">
            <div style={{ flex: 2, marginRight: 40 }}>
              <div>
                <h3>{film_detail.subtitle}</h3>
                <p style={{ marginTop: 10 }}>{film_detail.description}</p>
              </div>
            </div>
            <div style={{ flex: 1 }} className="description_review">
              <div>
                <div className="box_share" style={{ borderBottom: "1px solid #2c3440", borderRadius: "5px 5px 0 0" }}>
                  Sign in to log, rate or review
                </div>
                <div className="box_share" style={{ borderRadius: "0 0 5px 5px" }}>
                  Share
                </div>
              </div>
              <div style={{ maxWidth: "100%", marginTop: 8 }}>
                <img style={{ width: "227px" }} src={ratingImg} alt="" />
              </div>
            </div>
          </div>
          <div className="tabbed-content">
            <div style={{ flex: 2 }}>
              <ul className="cast_list_title">
                <li className="cast_chose">CAST</li>
                <li>CREW</li>
                <li>DETAILS</li>
                <li>GENRES</li>
              </ul>
              <div className="cast_list">
                {Cast.map((cast_item) => (
                  <a href="">{cast_item}</a>
                ))}
              </div>
            </div>
            <div style={{ flex: 1 }}></div>
          </div>
          <div style={{ margin: "30px 0" }}>
            <p className="text-link text-footer">
              192&nbsp;mins &nbsp; More at
              <a href="" className="micro_button">
                IMDb
              </a>
              <a href="" className="micro_button">
                TMDb
              </a>
            </p>
          </div>
          <div className="cart_summary">
            <img
              src="https://a.ltrbxd.com/resized/sm/upload/t9/q5/dj/9a/Journal%20header%205-620-620-348-348-crop-fill.jpg?k=ecccb7d256"
              alt=""
            />
            <div className="cart_summary_title">
              <p>
                NEWS The Letterboxd crew rounds up our favorite first-time watches of 2022.<b> READ POST</b>
              </p>
            </div>
          </div>
          <div className="populer_reviews reviews">
            <div className="tag_reviews">
              <p>POPULER REVIEWS</p>
              <p>MORE</p>
            </div>
            {Populer_reviews.map((review_item, i) => (
              <div className={calculate_last_item(review_item.id, "review_item")}>
                <div className="div_img">
                  <img src={review_item.image} alt="" />
                </div>
                <div className="title_review">
                  <p className="attribution">
                    Review by <b>{review_item.name}</b>{" "}
                    <span className="rating_green rated-7"> {calculate_rating(review_item.rating)}</span>{" "}
                    <ChatBubbleIcon fontSize="13px" style={{ lineHeight: "19.5px" }}></ChatBubbleIcon>{" "}
                    {review_item.number_comment_reply}
                  </p>
                  <p className="comment">{review_item.comment}</p>
                  <p className="like_link">
                    <FavoriteIcon fontSize="19px"></FavoriteIcon>
                    {review_item.likes} likes
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="recent_reviews reviews">
            <div className="tag_reviews">
              <p>RECENT REVIEWS</p>
              <p>MORE</p>
            </div>
            {recent_reviews.map((review_item, i) => (
              <div className={calculate_last_item(review_item.id, "review_item")}>
                <div className="div_img">
                  <img src={review_item.image} alt="" />
                </div>
                <div className="title_review">
                  <p className="attribution">
                    Review by <b>{review_item.name}</b>{" "}
                    <span className="rating_green rated-7"> {calculate_rating(review_item.rating)}</span>
                  </p>
                  <p className="comment">{review_item.comment}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="related_films reviews">
            <div className="tag_reviews">
              <p>RELATED FILMS</p>
              <p></p>
            </div>
            <div className="related_film_list film_list">
              {related_films.map((related_film_item) => (
                <a href={related_film_item.url} target="_blank">
                  <img className="image_form" src={related_film_item.image}></img>
                </a>
              ))}
            </div>
          </div>
          <div className="similar_films reviews">
            <div className="tag_reviews">
              <p>SILIMAR FILMS</p>
              <p>ALL</p>
            </div>
            <div className="similar_film_list film_list">
              {similar_films.map((similar_film_item) => (
                <a href={similar_film_item.url} target="_blank">
                  <img className="image_form" src={similar_film_item.image}></img>
                </a>
              ))}
            </div>
          </div>
          <div className="mentioned_by reviews">
            <div className="tag_reviews">
              <p>MENTIONED BY</p>
              <p></p>
            </div>
            <div className="story">
              {mentioned_by.map((mentioned_item) => (
                <div className="story_item">
                  <a href={mentioned_item.url} target="_blank">
                    <img className="image_story" src={mentioned_item.image}></img>
                  </a>
                  <StorageRoundedIcon
                    style={{
                      backgroundColor: "#4c60dc",
                      position: "absolute",
                      zIndex: 1,
                      top: 0,
                      right: 0,
                      borderRadius: 12,
                      fontSize: 22,
                    }}
                  ></StorageRoundedIcon>
                </div>
              ))}
            </div>
          </div>
          <div className="populer_list reviews">
            <div className="tag_reviews">
              <p>POPULER LIST</p>
              <p>MORE</p>
            </div>
            <div>
              {Populer_list.map((populer_list_item) => (
                <div className={calculate_last_item(populer_list_item.id, "populer_list_item")}>
                  <div className="populer_list_img">
                    <a href={populer_list_item.url}>
                      <img src={populer_list_item.image} alt="" />
                    </a>
                  </div>
                  <div className="populer_list_content">
                    <p style={{ color: "#fff" }}>
                      <b>{populer_list_item.title}</b>
                    </p>
                    <p style={{ margin: "5px 0", fontSize: 14, display: "flex", alignItems: "center" }}>
                      <img className="img_user" src={populer_list_item.user_image} alt="" /> &nbsp;{" "}
                      <b>{populer_list_item.user_name}</b> &nbsp; {populer_list_item.total_film} films &nbsp;{" "}
                      <span>
                        <FavoriteIcon fontSize="19px"></FavoriteIcon>
                        {populer_list_item.likes / 1000}K
                      </span>{" "}
                      &nbsp;{" "}
                      <span>
                        <ChatBubbleIcon fontSize="13px" style={{ lineHeight: "19.5px" }}></ChatBubbleIcon>
                        {populer_list_item.comments}
                      </span>
                    </p>
                    <p>{populer_list_item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="clear"></div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="clear"></div>
      </div>
      <footer style={{ backgroundColor: "#14181c", paddingTop: 2800 }}>
        {/*{*/}
        {/*    console.log(document.getElementById('content'))*/}
        {/*}*/}
      </footer>
      <div></div>
    </div>
  );
};
export default FilmDetail;
