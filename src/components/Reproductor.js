import React, {Component} from 'react';
import ReactHowler from 'react-howler';

class Reproductor extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      playing: false,
      volume: 1.0
    };
    this.togglePlay = this.togglePlay.bind(this);
   
  }

  togglePlay() {
    this.setState({ playing: !this.state.playing });
  }


  render() {
    return (
      <div className="mt-4">
         <ReactHowler
          src={'http://streamall.alsolnet.com:443/ayacuchofm'}
          playing={this.state.playing}
          volume={this.state.volume}
        />
        <span onClick={this.togglePlay} data-toggle="tooltip" data-placement="top" title="Escuchanos!">{this.state.playing ? <img alt="pause" width={160} height={160} src="assets/images/pausena.svg"/> : <img alt="play" width={160} height={160} src="assets/images/playb.png"/> }</span>
        <div className='volume ml-3'>
          <label className="">
            <span className='slider-container'>
              <input
                type='range'
                min='0'
                max='1'
                step='.05'
                value={this.state.volume}
                onChange={e => this.setState({volume: parseFloat(e.target.value)})}
                style={{verticalAlign: 'bottom'}}
              />
            </span>
            
          </label>
        </div>
      </div>
    );
  }
}


export default Reproductor;
