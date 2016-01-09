
class RadioGroup extends BaseComponent {

  constructor( props ){
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  handleChange( i , event ){
    that = this
    console.log(this.refs['radio-'+i]);
    this.setState({ value: this.refs['radio-'+i].props.option.value});
  }

  render(){
    that = this
    options = this.props.options.map( function( option, i ){
      var checked = false;
      var ref = 'radio-' + i;
      if(option.value == that.state.value){
        checked = true;
      } 

      return < Form.RadioGroup.Radio
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
}

RadioGroup.propTypes = {
  options: React.PropTypes.array,
  value: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(Radio),
    React.PropTypes.arrayOf(React.PropTypes.instanceOf(Radio))
  ])
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
