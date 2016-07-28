import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { Input, Button } from 'react-bootstrap';
import ImageToCanvas from 'imagetocanvas';
import Filters from '../tools/filters';
import request from 'superagent';

module.exports = React.createClass({
  getInitialState() {
    return {
      imageLoaded: false
    };
  },

  componentDidMount(){
    this.refs.imageCanvas.style.display="none";
    this.refs.spinner.style.display="none";
  },

  putImage(img, orientation){
    var canvas = this.refs.imageCanvas;
    var ctx = canvas.getContext("2d");
    let w = img.width;
    let h = img.height;
    var scaleW = w / 300;
    var scaleH = h / 400;
    let tempCanvas = document.createElement('canvas');
    let tempCtx = tempCanvas.getContext('2d');
    canvas.width = w/scaleW < 300 ? w/scaleW : 300;
    canvas.height = h/scaleH < 400 ? h/scaleH : 400;
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    tempCtx.drawImage(img, 0, 0, w/scaleW, h/scaleH); 
    ImageToCanvas.drawCanvas(canvas, this.toPng(tempCanvas), orientation, scaleW, scaleH);
    this.refs.imageCanvas.style.display="block";
    this.refs.imageCanvas.style.width= w/scaleW + "px";
    this.refs.imageCanvas.style.height= h/scaleH + "px";
  },

  toImg(encodedData) {
    var imgElement = document.createElement('img');
    imgElement.src = encodedData;
    return imgElement;
  },

  toPng(canvas){
    var img = document.createElement('img');
    img.src = canvas.toDataURL('image/png');
    return img;
  },

  takePhoto(event){
    let camera = this.refs.camera,
      files = event.target.files,
      file, w, h, mpImg, orientation;
    let canvas = this.refs.imageCanvas;
    if (files && files.length > 0) {
      file = files[0];
      var fileReader = new FileReader();
      var putImage = this.putImage;
      fileReader.onload = (event)=> {
        var img = new Image();
        img.src=event.target.result;
        try {
          ImageToCanvas.getExifOrientation(ImageToCanvas.toBlob(img.src), (orientation)=> {
            putImage(img, orientation);
          });
        }
        catch (e){
          console.log(e);
          this.putImage(img, 1);
        }
      }
      fileReader.readAsDataURL(file);
      this.setState({imageLoaded:true});
    }

  },

  applyGrayscale(){
    let canvas = this.refs.imageCanvas;
    let ctx=canvas.getContext("2d");
    let pixels = Filters.grayscale( ctx.getImageData(0,0,canvas.width,canvas.height), {});
    ctx.putImageData(pixels, 0, 0);
  },

  applyThreshold(threshold){
    let canvas = this.refs.imageCanvas;
    let ctx=canvas.getContext("2d");
    let pixels = Filters.threshold(ctx.getImageData(0,0,canvas.width,canvas.height), threshold);
    ctx.putImageData(pixels, 0, 0);
  },

  applyBrightness(adjustment){
    let canvas = this.refs.imageCanvas;
    let ctx=canvas.getContext("2d");
    let pixels = Filters.brightness(ctx.getImageData(0,0,canvas.width,canvas.height), adjustment);
    ctx.putImageData(pixels, 0, 0);
  },

  saveImage(){
    let canvas = this.refs.imageCanvas;
    document.body.style.opacity=0.4;
    this.refs.spinner.style.display="block";
    this.refs.imageCanvas.style.display="none";

    var dataURL = canvas.toDataURL();

    new Promise((resolve, reject)=>{
      request
      .post('/upload')
      .send({ image: dataURL, username: this.props.username })
      .set('Accept', 'application/json')
      .end((err, res)=>{
        console.log(err);
        if(err){
          reject(err)
        }
        if(res.err){
          reject(res.err);
        }
        resolve(res);
      });
    }).then((res)=>{
      const result = JSON.parse(res.text);
      console.log(result);
      this.props.uploadImage(result.secure_url,this.props.username);
      this.props.history.pushState(null,'stream');
      document.body.style.opacity=1.0;
    });
  },

  render(){
    const inputClass= classNames({
      hidden: this.state.imageLoaded
    });
    const grayScaleButton= classNames({
      hidden: !this.state.imageLoaded,
      "filter-button-grayscale": true
    });
    const thresholdButton= classNames({
      hidden: !this.state.imageLoaded,
      "filter-button-threshold": true
    });
    const brightnessButton= classNames({
      hidden: !this.state.imageLoaded,
      "filter-button-brightness": true
    });
    const saveButton= classNames({
      hidden: !this.state.imageLoaded,
      "filter-button-save": true
    });
    return <div>
      <Button className={grayScaleButton} onClick={this.applyGrayscale}>Grayscale</Button>
      <Button className={thresholdButton} onClick={this.applyThreshold.bind(null,128)}>Threshold</Button>
      <Button className={brightnessButton} onClick={this.applyBrightness.bind(null,40)}>Brighter</Button>
      <Button className={saveButton} bsStyle="success" onClick={this.saveImage}>Save Image</Button>
      <div className={inputClass}>
        <Input type="file" label="Camera"  onChange={this.takePhoto}
        help="Click to snap a photo or select an image from your photo roll" 
        ref="camera" accept="image/*" />
    </div>
    <div className="spinner" ref="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>

    <div className="canvas">
      <canvas ref="imageCanvas" id="imageCanvas">
        Your browser does not support the HTML5 canvas tag.
      </canvas>
    </div>

  </div>
  }
});
