this.Form = React.createClass({

  render: function(){
    fields = this.props.field;
    return (
      <div className="list-block inset">
        <ul>
          {
            React.Children.map( this.props.children, ( child )=> <div><hr/><li> {child} </li></div>)
          }
        </ul>
        <p><a className="button button-round button-fill button-big">Save Patient</a></p>
      </div>
    )
  }
});
  
Form.Input = React.createClass({
  getInitialState: function(){
    return {
      value: ""
    };
  },

  handleChange: function( event ){
    return this.setState({ value: event.target.value });
  },

  render: function(){
    var { title, ...inputProps } = this.props;
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
});

Form.Radio = React.createClass({
  getInitialState: function(){
    return {
      selected: this.props.selected
    };
  },

  handleChange: function( event ){
    this.setState({ selected: event.target.value });
  },

  render: function(){
    var { title, selected, ...rest } = this.props;
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
});


Form.Checkbox = React.createClass({
  getInitialState: function(){
    return {
      checked: false
    }
  },

  handleChange: function( event ){
    this.setState({ checked: event.target.value });
  },

  render: function(){
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
});
    
