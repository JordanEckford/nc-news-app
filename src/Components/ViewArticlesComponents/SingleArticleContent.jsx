export const SingleArticleContent = ({ singleArticle }) => {
 return (
  <>
   <h1 className="single-article-title">{singleArticle.title}</h1>
   <h2 className="single-article-topic">Topic: {singleArticle.topic}</h2>
   <img className="single-article-img" src={singleArticle.article_img_url} alt={`Stock image relating to ${singleArticle.title}`} />
   <p className="single-article-body">{singleArticle.body}</p>
  </>
 );
};
