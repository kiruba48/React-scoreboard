import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';
import Icon from './Icon';

class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool,
  };

  render() {
    const {
      name,
      id,
      index,
      score,
      removePlayer,
      changeScore,
      isHighScore,
    } = this.props;
    return (
      <div className='player'>
        <span className='player-name'>
          <button className='remove-player' onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon isHighScore={isHighScore} />
          {name}
        </span>

        <Counter score={score} changeScore={changeScore} index={index} />
      </div>
    );
  }
}

export default Player;
