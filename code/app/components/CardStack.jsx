import React, { PropTypes } from 'react';

import Card from './Card.jsx';

import World from './World.jsx';
import IconText from './IconText.jsx';
import Workflow from './Workflow.jsx';

export default class CardStack extends React.Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    redirect: PropTypes.bool
  }

  static defaultProps = {
    messages: [
      'Responsive Design',
      'Customizable Theme',
      'Reusable Components'
    ],
    redirect: false
  }

  render() {
    const messages = this.props.messages;

    const renderMessages = messages.map(message =>
      <Card key={message} message><h3>{message}</h3></Card>
    );

    const gridClass = 'grid grid-gutters grid-full grid-flex-cells large-grid-fit u-textCenter';

    return (
      <div>
        {!this.props.redirect ? <h1>ReactSpeed UI Components</h1> : ''}
        <div className={gridClass}>
          <Card><Workflow /></Card>
          <Card>
            <IconText
              className="warning-text"
              icon="css3"
              size="4x"
              text="ReactSpeed UI is efficient. CSS 4.6KB Gzip, 21KB Minified."
            />
          </Card>
        </div>

        <div className={gridClass}>
          <Card>
            <p>Responsive forms</p>
            <div className="input">
              <span className="input-label">Name</span>
              <input className="input-field" placeholder="Placeholder for name" />
            </div>
            <div className="input">
              <input className="input-field" placeholder="Just a field" />
            </div>
          </Card>
          <Card>
            <p>Buttons</p>
            <button className="button default">Default</button>
            <button className="button primary">Primary</button>
            <button className="button secondary">Secondary</button>
            <button className="button danger">Danger</button>
            <button className="button success">Success</button>
            <button className="button warning">Warning</button>
            <button className="button golden">Golden</button>
          </Card>
        </div>

        <div className={gridClass}>
          <Card>
            <IconText
              className="warning-text"
              icon="database"
              size="4x"
              text="Firebase React Integration"
            />
          </Card>
          <Card><World /></Card>
          <Card>
            <IconText
              className="primary-text"
              icon="globe"
              size="4x"
              text="Nine Component Creation Strategies"
            />
          </Card>
        </div>

        <div className={gridClass}>
          {renderMessages}
        </div>
      </div>
    );
  }
}
