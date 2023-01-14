export default class NewsApiService {
  constructor() {
    this.squery = "";
  }
  fetchArticles() {
    console.log(this);
    const options = {
      headers: {
        Authorization: "dd6409698a7c48b38fdfcffb0234ebfc",
      },
    };

    fetch(
      `https://newsapi.org/v2/everything?q=${this.squery}&language=en&pageSize=10&page=1`,
      options
    )
      .then((r) => r.json())
      .then(console.log);
  }

  get netquery() {
    return this.squery;
  }

  set netquery(newQuery) {
    this.squery = newQuery;
  }
}
