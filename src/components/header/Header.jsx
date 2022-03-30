import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <h1 id="headerTitle">My Blog</h1>
        {/*<span className="headerTitleSm">My</span>
        <span className="headerTitleLg">BLOG</span>*/}
      </div>
      <img
        className="headerImg"
        src="https://media.istockphoto.com/photos/colorful-background-picture-id1280385511?b=1&k=20&m=1280385511&s=170667a&w=0&h=4-KMkIqgyw2gTBMTBbYZVZoidwRsWZzr3q0xyUDYhas="
        alt=""
      />
    </div>
  );
}
