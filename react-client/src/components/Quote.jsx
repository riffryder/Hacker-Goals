import React from 'react';
import $ from 'jquery';

const quoteDiv = {
  textAlign: 'center',
  backgroundColor: 'white',
  fontStyle: 'italic',
  border: '2px solid black',
  padding: '15px',
  marginBottom: '20px',
  font: 'Cambria',
  fontSize: '17px'
}

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
      // console.log(quotesArr);
      this.setState({
        quotes: quotesArr
      })
      this.selectRandomQuote(this.state.quotes);
      // console.log('CURRENT STATE', this.state);
    })
  }

  selectRandomQuote(quotesArr) {
    var quotesArrLength = this.state.quotes.length;
    var randomIndex = Math.ceil(Math.random() * (quotesArrLength - 1));
    var splitQuote = quotesArr[randomIndex].quote.split('\n')[0];
    // console.log(quotesArr[randomIndex]);
    this.setState({
      quote: splitQuote,
      author: quotesArr[randomIndex].author
    })
  }

  render() {
    return (
      <div>
        <div style={quoteDiv}>
          {this.state.quote}<br />
          <span>{'-' + this.state.author}</span>
        </div>
      </div>
    )
  }
}

export default Quote;