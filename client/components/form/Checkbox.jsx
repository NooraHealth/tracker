
var Checkbox = React.createClass({

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
  
  render(){
    var { title, valueLink, ...inputProps } = this.props;
    console.log("valuelink:,", valueLink);
    return (
      <label className="label-checkbox item-content">
        <input { ...inputProps } checkedLink={ valueLink } type="checkbox"/>
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
