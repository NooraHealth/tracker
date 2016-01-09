
class RadioGroup extends BaseComponent {

  constructor( props ){
    super(props);
  }

  handleChange( i , event ){
    that = this
    React.Children.map( this.props.children, function( child, index ){
      radio = that.refs['radio-' + index];
      if( index == i ) {
        radio.setState({checked: true});
      } else {
        radio.setState({checked: false});
      }
    });
  }

  render(){
    that = this
    clonesWithRefs = React.Children.map( this.props.children, function( child, i ){
      return React.addons.cloneWithProps( child, {
        ref: 'radio-'+i,
        onChange: that.handleChange.bind(that, i)
      });
    });

    return (
      <div>
        { clonesWithRefs }
      </div>
  
    )
  }
}

RadioGroup.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(Radio),
    React.PropTypes.arrayOf(React.PropTypes.instanceOf(Radio))
  ])
}

class Radio extends BaseComponent {

  constructor( props ){
    super(props);
    this.state = {
      checked: this.props.checked
    }
  }

  isSelected(){
    return this.state.checked;
  }

  render(){
    var title = this.props.title;
    var checked = this.state.checked;
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
  title: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func
};

this.Form.RadioGroup = RadioGroup
this.Form.RadioGroup.Radio = Radio
