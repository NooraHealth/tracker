
var RadioGroup = React.createClass({
  propTypes: {
    options: React.PropTypes.array,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    valueLink: React.PropTypes.shape({
      value: React.PropTypes.string.isRequired,
      requestChange: React.PropTypes.func.isRequired
    }),
    children: React.PropTypes.oneOfType([
      React.PropTypes.instanceOf(Radio),
      React.PropTypes.arrayOf(React.PropTypes.instanceOf(Radio))
    ])
  },

  defaultProps(){
    return {
      options: [],
      value: "",
      onChange: function() {},
      valueLink: null
    }
  },

  getInitialState(){ return null },

  handleChange( i , event ){
    this._getValueLink(this.props).requestChange(this.refs['radio-'+i].props.option.value);
  },

  _getValueLink( props ) {
    return props.valueLink || {
      value: props.value,
      requestChange: props.onChange
    }
  },

  componentWillReceiveProps(nextProps) {
    var currentValueLink = this._getValueLink(this.props),
        nextValueLink = this._getValueLink(nextProps);
    
    console.log("Will the component reload?", currentValueLink);
    console.log(nextValueLink);
    if (currentValueLink.value !== nextValueLink.value) {
      var node = jQuery(this.getDOMNode());
      node.val(nextValueLink.value);
      node.change();
    }
  },

  render(){
    that = this
    options = this.props.options.map( function( option, i ){
      var checked = false;
      var ref = 'radio-' + i;
      if(option.value == that._getValueLink(that.props).value){
        checked = true;
      } 

      return < Form.RadioGroup.Radio
        key={ ref }
        option={ option }
        ref={ ref }
        checked= { checked }
        onChange={ that.handleChange.bind(that, i) }
      />
    });

    return (
      <div>
        { options }
      </div>
  
    )
  }
});

RadioGroup.propTypes = {
}

class Radio extends BaseComponent {

  constructor( props ){
    super(props);
  }

  render(){
    var title = this.props.option.title;
    var checked = this.props.checked;
    var onChange = this.props.onChange;
    return (
      <label className="label-radio item-content">
        <input type="radio" onChange={ onChange } checked={ checked } />
        <div className="item-media">
          <i className="icon icon-form-radio"></i>
        </div>
        <div className="item-inner">
          <div className="item-title">{ title }</div>
        </div>
      </label>
    );
  }
}

Radio.propTypes = {
  option: React.PropTypes.object.isRequired,
  checked: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func
};

this.Form.RadioGroup = RadioGroup
this.Form.RadioGroup.Radio = Radio
