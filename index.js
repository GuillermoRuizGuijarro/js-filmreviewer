class viewIndex {
  constructor() {
    this.btnMakeReview = $('#btnMakeReview');
    this.btnMakeReview.on('click', this.showMakeReview);

    this.btnGetRecommendation = $('#btnGetRecommendation');
    this.btnGetRecommendation.on('click', this.showGetRecommendation);
  }

  showMakeReview() {
    console.log('hello');
    window.open('https://js-filmreviewer.stackblitz.io/Views/Reviews/reviews');
    //location.replace("./Views/Reviews/reviews")
  }

  showGetRecommendation() {
    console.log('adios');
    window.open('https://js-filmreviewer.stackblitz.io/index2');
  }
}

objViewIndex = new viewIndex();
