declare module trendObject {
  export interface RelatedArticle {
      url: string;
      title: string;
      type: string;
  }
  export interface RootObject {
    url: string;
    name: string;
    bodyHTML: string;
    questions: string[];
    articles: string[];
    relatedArticles: RelatedArticle[];
  }
}
