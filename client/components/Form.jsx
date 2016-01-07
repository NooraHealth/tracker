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

class Radio extends React.Component {

  constructor( props ){
    super(props);
    this.state = {
      checked: this.props.selected
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange( event ){
    this.setState({ checked: event.target.value });
  }

  render(){
    var { title, checked, ...rest } = this.props;
    console.log("Rendering");
    return (
      <label className="label-radio item-content">
        <input { ...rest } onChange={ this.handleChange } type="radio" checked={ this.state.checked } />
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

  handleChange( event ){
    this.setState({ checked: !this.state.checked });
  }

  render(){
    var { title, ...inputProps } = this.props;
    console.log("Is checked?:", this.state.checked);
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
this.Form.Radio = Radio;
this.Form.Checkbox = Checkbox;


