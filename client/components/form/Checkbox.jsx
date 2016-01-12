
var Checkbox = React.createClass({
  mixins: [ GetValueLink ],

  propTypes: {
    title: React.PropTypes.string,
    valueLink: React.PropTypes.shape({
      value: React.PropTypes.string,
      requestChange: React.PropTypes.func
    })
  },

  defaultProps(){
    return {
      title: "",
      valueLink: null
    } 
  },

  handleChange( event ){
    console.log("here is the event");
    console.log(event);
    this._getValueLink(this.props).requestChange(event.target.value);
  },
  
  render(){
    console.log("Rerendering the checkbox", this.state);
    var { title, valueLink, handleChange, ...inputProps } = this.props;
    return (
      <label className="label-checkbox item-content">
        <input { ...inputProps } checkedLink={ valueLink } onChange={ handleChange } type="checkbox"/>
        <div className="item-media">
          <i className="icon icon-form-checkbox"></i>
        </div>
        <div className="item-inner">
          <div className="item-title">{ title }</div>
        </div>
      </label>
    );
  }
});

this.Form.Checkbox = Checkbox;
