
class Checkbox extends BaseComponent {
  constructor( props ){
    super(props);
    this.state = {
      checked: false
    }
    this._bind('handleChange');
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

this.Form.Checkbox = Checkbox;
