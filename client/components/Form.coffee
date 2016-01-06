###
# Input Class
###
this.Form = React.createClass
  render: ()->
    fields = this.props.field
    return (
      <div class="list-block inset">
        <ul>
          {
            React.Children.map( this.props.children, ( child )-> return <hr/><li> {child} </li>)
          }
        </ul>
        <p><a class="button button-round button-fill button-big">Save Patient</a></p>
      </div>
    )
  
Form.Input = React.createClass
  getInitialState: ()->
    return {
      value: ""
    }

  handleChange: ( event )->
    @.setState { value: event.target.value }

  render: ()->
    { title, ...inputProps } = @.props
    value = @.state.value
    return (
      <div className="item-content">
        <div className="item-media"><i className={ icon }></i></div>
        <div className="item-inner">
          <div className="item-input">
            <input { ...inputProps } value={ value } onChange={ @handleChange } />
          </div>
        </div>
      </div>
    )

Form.Radio = React.createClass
  getInitialState: ()->
    return {
      selected: @.props.selected
    }

  handleChange: ( event )->
    @.setState { selected: event.target.value }

  render: ()->
    { title, selected, ...rest } = @.props
    return (
      <label className="label-radio item-content">
        <input { ...rest } onChange={ @handleChange } type="radio" selected={ @.state.selected } />
        <div className="item-media">
          <i className="icon icon-form-radio"></i>
        </div>
        <div className="item-inner">
          <div className="item-title">{ title }</div>
        </div>
      </label>
    )


Form.Checkbox = React.createClass
  getInitialState: ()->
    return {
      checked: false
    }

  handleChange: ( event )->
    @.setState { checked: event.target.value }

  render: ()->
    { title, ...inputProps } = @.props
    checked = @.state.checked
    return (
      <label className="label-checkbox item-content">
        <input { ...inputProps } onChange={ @handleChange } type="checkbox" checked={ checked }/>
        <div className="item-media">
          <i className="icon icon-form-checkbox"></i>
        </div>
        <div className="item-inner">
          <div className="item-title">{ title }</div>
        </div>
      </label>
    )
    
