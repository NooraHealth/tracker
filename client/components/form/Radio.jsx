
class RadioGroup extends React.Component {

  constructor( props ){
    super(props);
  }

  handleChange( i , event ){
    console.log( "i", i );
    console.log(this.refs);
    console.log(this.refs['radio-'+ i]);
    //React.Children.forEach( this.props.children, function( child, i ) {
      //console.log("Child");
      //console.log(child);
      //if( childIndex != i ) {
        //child.setProps({checked: false});
      //}
    //});
  }

  render(){
    that = this
    clonesWithRefs = React.Children.map( this.props.children, function( child, i ){
      console.log(that.handleChange);
      return React.addons.cloneWithProps( child, {
        ref: 'radio-'+i,
        onChange: that.handleChange.bind(that, i)
      });
    });
    console.log(clonesWithRefs);
    return (
      <div>
        { clonesWithRefs }
      </div>
  
    )
  }
}

class Radio extends React.Component {

  constructor( props ){
    super(props);
    this.state = {
      checked: this.props.checked
    }
    this.handleChange = this.handleChange.bind(this);
  }

  isSelected(){
    return this.state.checked;
  }

  render(){
    var { title, name, ...rest } = this.props;
    var checked = this.state.checked;
    return (
      <label className="label-radio item-content">
        <input { ...rest } type="radio" checked={ checked } />
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

this.Form.RadioGroup = RadioGroup
this.Form.RadioGroup.Radio = Radio
