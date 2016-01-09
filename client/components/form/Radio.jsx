
class RadioGroup extends BaseComponent {

  constructor( props ){
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  handleChange( i , event ){
    that = this
    this.setState({ value: that.refs['radio-'+i].props.value});
    //React.Children.map( this.props.children, function( child, index ){
      //radio = that.refs['radio-' + index];
      //if( index == i ) {
        //radio.setState({checked: true});
      //} else {
        //radio.setState({checked: false});
      //}
    //});
  }

  render(){
    that = this
    console.log("Rerenderign", this.state);
    clonesWithRefs = React.Children.map( this.props.children, function( child, i ){
      var checked = false;
      console.log('child', child.props);
      if(child.props.value == that.state.value){
        checked = true;
      } 
      return React.addons.cloneWithProps( child, {
        ref: 'radio-'+i,
        checked: checked,
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
    var title = this.props.title;
    var checked = this.props.checked;
    var onChange = this.props.onChange;
    console.log("I am a radio btn rendering!", this.props);
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
