import React, { Component } from 'react';

import { Button, InputBase } from '@material-ui/core/';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab/'
import { VolumeMute, CurrentAc, HandSaw, TriangleOutline, Minus } from 'mdi-material-ui';

class TrackOptions extends Component {

  render() {
    return (
      <div className="TrackControl">
        { this.props.rowIndex !== 0
          ? <Button variant="contained" size="medium" onClick={() => this.props.onDeleteTrack(this.props.rowIndex)}
              style={{marginRight: 10, backgroundColor: '#f5f5f5', fontWeight: 500}}
            >
              Track&nbsp; <Minus />
            </Button>
          : <div style={{width: 120}}/>}
        <InputBase value={this.props.options.title} className="trackTitle"
          inputProps={{ style: { fontSize: 16, padding: "6px 3px 5px", backgroundColor: "#f5f5f5" } }}
          onChange={(event) => this.props.onTrackOptionChange(this.props.rowIndex, 'title', event.target.value)}
        />
        <ToggleButtonGroup size="small" exclusive={true}
          value={this.props.options.wave}
          onChange={(e, val) => this.props.onTrackOptionChange(this.props.rowIndex, 'wave', val)}
        >
          <ToggleButton size="small" value='sine'>
            <CurrentAc />
          </ToggleButton>
          <ToggleButton size="small" value='triangle'>
            <TriangleOutline />
          </ToggleButton>
          <ToggleButton size="small" value='saw'>
            <HandSaw />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup size="small" style={{ marginLeft: 10 }}>
          <ToggleButton size="small"
            selected={this.props.options.mute}
            value='mute' onClick={() => this.props.onTrackOptionChange(this.props.rowIndex, 'mute', '')}
          >
            <VolumeMute />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    )
  }
}

export default TrackOptions;
