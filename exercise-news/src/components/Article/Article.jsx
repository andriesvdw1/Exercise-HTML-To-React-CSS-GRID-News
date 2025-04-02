import React from "react";
import "./Article.css";
function Article() {
  const articles = [
    {
      id: 1,
      heading: "New React Version Released",
      category: "Technology",
      active: true,
      text: "React 19 brings several performance improvements, new hooks, and developer tooling upgrades. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan fermentum massa, non iaculis lorem. Proin at lorem at mauris lacinia feugiat. Nullam vitae mauris justo. Curabitur laoreet, elit at volutpat lacinia, magna tellus porttitor nisl, vel tincidunt felis justo nec augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non augue non risus convallis porttitor. Integer tincidunt eros at neque lobortis, a dignissim leo ultrices. In sed libero vel est pulvinar placerat.",
    },
    {
      id: 2,
      heading: "Global Markets See Uptrend",
      category: "Business",
      active: true,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum lacus nec ipsum convallis, nec lacinia metus porta. Sed hendrerit purus sed porta lacinia. Nullam sed libero nec magna mattis congue. Integer vitae facilisis justo. Morbi et turpis non mi fermentum cursus. Sed sed tincidunt mauris. Suspendisse potenti. In scelerisque, ante eu viverra mattis, justo arcu imperdiet nulla, a vestibulum sem eros non augue.",
    },
    {
      id: 3,
      heading: "Breakthrough in Renewable Energy",
      category: "Technology",
      active: true,
      text: "Scientists have made a breakthrough in solar energy that could significantly reduce costs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec turpis vitae risus congue convallis. Duis tincidunt mi in lectus fringilla, at facilisis arcu volutpat. Praesent sed nulla nulla. Sed bibendum elit nec leo mattis, in dictum justo tincidunt. Aenean convallis nulla at ex pulvinar viverra. Suspendisse potenti. Curabitur at ultrices risus. Phasellus congue libero vel magna efficitur, in pulvinar neque feugiat.",
    },
    {
      id: 4,
      heading: "Champions League Finals Results",
      category: "Sports",
      active: true,
      text: "The Champions League final concluded with a thrilling penalty shootout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut magna a felis ultrices convallis. Suspendisse euismod faucibus est, eget fermentum ex ultricies in. Proin sit amet ligula vitae turpis rhoncus dignissim nec sed augue. Integer convallis tellus id finibus tincidunt. Aliquam erat volutpat. Maecenas at orci magna. Vivamus blandit enim vel velit suscipit porta. Integer cursus facilisis facilisis. In hac habitasse platea dictumst.",
    },
    {
      id: 5,
      heading: "Local Startup Raises $10M",
      category: "Business",
      active: true,
      text: "A tech startup based in Cape Town has secured $10 million in Series A funding. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in sapien vehicula, faucibus leo sed, lacinia lectus. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ut ante nunc. Cras finibus magna at augue dictum, ut sodales tortor cursus. Nulla facilisi. Integer quis sapien non tortor pulvinar dictum. Fusce suscipit sem et urna iaculis, nec dapibus justo fermentum.",
    },
    {
      id: 6,
      heading: "Olympics 2024 Preparation Update",
      category: "Sports",
      active: false,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at mauris et nunc sodales suscipit. Vivamus accumsan, magna et fermentum scelerisque, magna sem luctus nisl, non fermentum tortor lacus vitae risus. Suspendisse potenti. Etiam fermentum finibus odio, vel feugiat dolor imperdiet at. Integer in mi nec nisl fermentum placerat. Aliquam erat volutpat. Nullam efficitur, lorem nec convallis fermentum, metus nunc congue augue, nec laoreet odio turpis in mi.",
    },
  ];
  return (
    <>
      <section>
        {articles
          .filter((article) => article.category === "Technology")
          .map((article) => (
            <article key={article.id}>
              <h1>{article.heading}</h1>
              <span>Category: {article.category}</span>
              <span>Active: {article.active}</span>
              <p>{article.text}</p>
            </article>
          ))}
      </section>

      <section>
        {articles
          .filter((article) => article.category === "Business")
          .map((article) => (
            <article key={article.id}>
              <h1>{article.heading}</h1>
              <span>Category: {article.category}</span>
              <span>Active: {article.active}</span>
              <p>{article.text}</p>
            </article>
          ))}
      </section>
      <section>
        {articles
          .filter((article) => article.category === "Sports")
          .map((article) => (
            <article key={article.id}>
              <h1>{article.heading}</h1>
              <span>Category: {article.category}</span>
              <span>Active: {article.active}</span>
              <p>{article.text}</p>
            </article>
          ))}
      </section>
    </>
  );
}

export default Article;
