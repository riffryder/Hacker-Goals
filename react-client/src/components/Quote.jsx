import React from 'react';
import $ from 'jquery';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quote: '',
      author: ''
    }
  }

  componentDidMount() {
    $.get('/quote')
    .then((quotesArr) => {
      console.log(quotesArr);
      this.setState({
        quotes: quotesArr
      })
      this.selectRandomQuote(this.state.quotes);
      console.log('CURRENT STATE', this.state);
    })
  }

  selectRandomQuote(quotesArr) {
    var quotesArrLength = this.state.quotes.length;
    var randomIndex = Math.ceil(Math.random() * (quotesArrLength - 1));
    var splitQuote = quotesArr[randomIndex].quote.split('\n')[0];
    console.log(quotesArr[randomIndex]);
    this.setState({
      quote: splitQuote,
      author: quotesArr[randomIndex].author
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.quote}
        </div>
        <span>
          {this.state.author}
        </span>
      </div>
    )
  }
}

export default Quote;