import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayer from './addPlayer';

class App extends Component {
  state = {
    players: [
      {
        name: 'Kiruba',
        score: 0,
        id: 1,
      },
      {
        name: 'Karan',
        score: 0,
        id: 2,
      },
      {
        name: 'Ruta',
        score: 0,
        id: 3,
      },
      {
        name: 'Rezi',
        score: 0,
        id: 4,
      },
    ],
  };

  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  // get high score for crown
  getHighScore = () => {
    const scores = this.state.players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <div className='scoreboard'>
        <Header title='Scoreboard' players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            id={player.id}
            index={index}
            score={player.score}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
            isHighScore={highScore === player.score}
          />
        ))}

        <AddPlayer addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
