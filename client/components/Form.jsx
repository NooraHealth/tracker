 class FormComponent extends React.Component {

  constructor( props ){
    super(props);
  }

  render(){
    onSubmit = this.props.onSubmit;
    return (
      <div className="list-block inset">
        <ul>
          {
            React.Children.map( this.props.children, ( child )=> <div><hr/><li> {child} </li></div>)
          }
        </ul>
        <p><a className="button button-round button-fill button-big" onClick={ onSubmit }>Save Patient</a></p>
      </div>
    )
  }
}
  
class Input extends React.Component {

  constructor( props ){
    super(props);
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange( event ){
    return this.setState({ value: event.target.value });
  }

  render(){
    var { title, icon, ...inputProps } = this.props;
    console.log(icon);
    var value = this.state.value;
    return (
      <div className="item-content">
        <div className="item-media"><i className={ icon }></i></div>
        <div className="item-inner">
          <div className="item-input">
            <input { ...inputProps } value={ value } onChange={ this.handleChange } />
          </div>
        </div>
      </div>
    );
  }
}

class RadioGroup extends React.Component {

  constructor( props ){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange( childIndex , event ){
    console.log( "i", childIndex );
    React.Children.forEach( this.props.children, function( child, i ) {
      console.log("Child");
      console.log(child);
      if( childIndex != i ) {
        child.setProps({checked: false});
      }
    });
  }

  render(){
    children = React.Children.map( this.props.children, function( child, i ){
      return React.addons.cloneWithProps(child, {
        ref: 'radio-'+i
      });
    });
    return (
      <div onChange={ this.handleChange }>
        {
          React.Children.map
        }
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

  handleChange( event ){
    this.setState({ checked: !this.state.checked });
  }

  render(){
    var { title, name, ...rest } = this.props;
    var checked = this.state.checked;
    return (
      <label className="label-radio item-content">
        <input { ...rest } onChange={ this.handleChange } type="radio" checked={ checked } />
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


class Checkbox extends React.Component {
  constructor( props ){
    super(props);
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  isChecked(){
    return this.state.checked;
  }

  handleChange( event ){
    this.setState({ checked: !this.state.checked });
  }

  render(){
    var { title, ...inputProps } = this.props;
    var checked = this.state.checked;
    return (
      <label className="label-checkbox item-content">
        <input { ...inputProps } onChange={ this.handleChange } type="checkbox" checked={ checked }/>
        <div className="item-media">
          <i className="icon icon-form-checkbox"></i>
        </div>
        <div className="item-inner">
          <div className="item-title">{ title }</div>
        </div>
      </label>
    );
  }
};
    
this.Form = FormComponent;
this.Form.Input = Input;
this.Form.RadioGroup = RadioGroup
this.Form.Radio = Radio;
this.Form.Checkbox = Checkbox;


