import React, {useState, useCallback} from 'react';

import { Button, Modal, TextField, Typography } from '@material-ui/core/';
import Dropzone, {useDropzone} from 'react-dropzone';

import { getModalStyle, useStyles } from '../modals';

export default function LoadModal(props) {
  const [modalStyle] = useState(getModalStyle);
  const [text, setText] = useState('');
  const classes = useStyles();

  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader()

    reader.onabort = () => alert("File reading aborted");
    reader.onerror = () => alert("File reading has failed");
    reader.onload = () => {
      // Might be a good idea to do error checking here... (check if valid json)
      setText(reader.result);
    }

    acceptedFiles.forEach(file => reader.readAsText(file));
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: ".json"})

  return (
    <Modal
      open={props.open}
    >
      <div style={modalStyle} className={classes.paper}>
        <Typography variant="h6">
          Load Composition
        </Typography>
        <Typography variant="subtitle1">
          Paste JSON below
        </Typography>
        <TextField
          label="Input" multiline className={classes.textField}
          rows="7" value={text} margin="normal" variant="filled"
          onChange={(e) => setText(e.target.value)}
        />
        <Typography variant="subtitle1">
          Or
        </Typography>
        <div {...getRootProps()} className={"LoadModalFileZone"}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop a file here, or click to select file</p>
        </div>
        <br />
        <div className="modalActions">
          <Button variant="contained" style={{marginRight: 10}} onClick={props.toggleLoadModal}>Cancel</Button>
          <Button variant="contained" onClick={() => props.onLoadJson(text)}>Load</Button>
        </div>
      </div>
    </Modal>
  );
};
