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

this.Form.Input = Input;
