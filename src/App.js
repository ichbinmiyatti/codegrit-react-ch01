import React, {
  Component
} from 'react';

class App extends Component {
  render() {
    const sentence = `これは一つ目のアプリです。今日は${this.props.currentTime}です。`;
    return React.createElement('h1', null, sentence);
  }
}

export default App;
