import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core/';

import Typography from '@material-ui/core/Typography';
import { ChevronUp, Plus, ContentSave,  Upload } from 'mdi-material-ui';

import EditorPanel from './editor-panel';
import TrackTimeline from './track-timeline';
import TrackControls from './track-controls';

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: "#ffa4a2"
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 600
  },
  details: {
    wdith: "100%",
    backgroundColor: "black",
    padding: 0
  }
});

class Editor extends Component {

  render() {
    const { classes } = this.props;
    const trackTimelines = [];
    let selectedSegmentData = null;

    this.props.timelines.forEach((tl, index) => {
      tl.segments.forEach((segment) => {
        if (segment.id === this.props.selectedSegmentId) selectedSegmentData = segment
      });
      trackTimelines.push(
        <div key={index} className="EditorRow">
          <TrackControls
            options={tl.options}
            onTrackDataChange={this.props.onTrackDataChange}
            index={index}
          />
          <TrackTimeline
            segments={tl.segments}
            selectedSegmentId={this.props.selectedSegmentId}
            onSegmentSelection={this.props.onSegmentSelection}
            onSegmentRearrange={this.props.onSegmentRearrange}
            onAddSegment={this.props.onAddSegment}
            index={index}
          />
        </div>
      );
    });

    return (
      <ExpansionPanel defaultExpanded={true} classes={{root: classes.root}}>
        <ExpansionPanelSummary expandIcon={<ChevronUp />}>
          <Typography className={classes.heading}>Timeline Editor</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails classes={{root: classes.details}}>
          <div className="Editor">
            <div className="EditorOptions">
              <Button
                variant="contained" size="medium"
                style={{backgroundColor: '#f5f5f5', fontWeight: 600}}
              >
                Track&nbsp;<Plus />
              </Button>
              <div style={{ flexGrow: 1 }}></div>
              <Button
                variant="contained" size="medium"
                style={{backgroundColor: '#f5f5f5', fontWeight: 600}}
              >
                Load&nbsp;<Upload />
              </Button>
              <Button
                variant="contained" size="medium"
                style={{backgroundColor: '#f5f5f5', fontWeight: 600}}
              >
                Save&nbsp;<ContentSave />
              </Button>
            </div>
            {trackTimelines}
            { selectedSegmentData
              ? <EditorPanel
                  title={selectedSegmentData.title}
                  expression={selectedSegmentData.expression}
                  length={selectedSegmentData.length}
                  volume={selectedSegmentData.volume}
                  onDataChange={this.props.onDataChange}
                  onDeleteSegment={this.props.onDeleteSegment}
                />
              : <div className="EmptyEditorPanel"/>
              }
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

}

export default withStyles(styles)(Editor);
