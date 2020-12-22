import React from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
import API from '../../Utils/API';
import { Button } from '@material-ui/core';

class SketchExample extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
    hex: ""
  };

  componentDidMount() {
    API.getColor().then(color => {
        console.log(color);
        this.setState({ 
            hex: color.data.color
        });
    })
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    console.log(color.hex);
    this.setState({ color: color.rgb, hex: color.hex })
  };

  handleSave = () => {
    API.storeColor(this.state.hex).then(color => console.log('Color change!'))
  }

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '100%',
          borderRadius: '2px',
          //background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
          background: `${this.state.hex}`
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div style={{display: 'flex', justifyContent:'center'}}>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }

        <Button style={{marginLeft: '1em'}} variant='contained' onClick={ this.handleSave }>Save</Button>

      </div>
    )
  }
}

export default SketchExample