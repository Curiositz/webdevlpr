import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <article class="article">
        <div class="article-info">
          <h1>${entry.getIn(["data", "title"], null)}</h1>
          <div class="meta-article">
            <span class="meta-date">
              <time>${
                format(
                  entry.getIn(["data", "date"], new Date()),
                  "d/L/yyyy"
                )
              }</time>
            </span>
            <span class="meta-tags"><span class="date-tags-separator">—</span>
              ${
                entry.getIn(["data", "tags"], []).map(
                  tag =>
                    html`
                      <a href="#" class="meta-tag" rel="tag">${tag}</a>
                    `
                )
              }
            </span>
          </div>
        </div>

        <p>${entry.getIn(["data", "summary"], "")}</p>

        ${this.props.widgetFor("body")}

        <nav>
          <a href="#">← Blog index</a>
        </nav>
          
      </article>
    `;
  }
});

export default Post;
