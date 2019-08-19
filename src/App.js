import {
  createElement,
  Component
} from 'react';

class App extends Component {
  render() {
    const h1 = createElement('h1', null, 'これは一つ目のアプリです。');
    return h1;
  }
}

export default App;
