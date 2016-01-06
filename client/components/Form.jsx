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
      selected: this.props.selected
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange( event ){
    console.log("Radio button change!@");
    console.log("This 1 satet", this.state.selected);
    this.setState({ selected: !this.state.selected });
    console.log("This satet", this.state.selected);
  }

  render(){
    var { title, selected, ...rest } = this.props;
    console.log("Rendering");
    return (
      <label className="label-radio item-content">
        <input { ...rest } onChange={ this.handleChange } type="radio" selected={ this.state.selected } />
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
    this.setState({ checked: event.target.value });
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
this.Form.Radio = Radio;
this.Form.Checkbox = Checkbox;


