###
# Input Class
###
this.Form = React.createClass
  render: ()->
    <div class="list-block inset">
      <ul>
        {@.state.formFields.map
        <hr/>
        <li></li>
      </ul>
      <p><a class="button button-round button-fill button-big">Save Patient</a></p>
    </div>
  
Form.NumberInput = React.createClass
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
            <input { ...inputProps } value={ value } onChange={ @handleChange } type="number"/>
          </div>
        </div>
      </div>
    )

Form.Radio = React.createClass
  render: ()->
    { title, ...inputProps } = @.props
    return (
      <label className="label-radio item-content">
        <input { ...inputProps } type="radio"  />
        <div className="item-media">
          <i className="icon icon-form-radio"></i>
        </div>
        <div className="item-inner">
          <div className="item-title">{ title }</div>
        </div>
      </label>
    )


Form.Checkbox = React.createClass
  render: ()->
    { title, ...inputProps } = @.props
    return (
      <label className="label-checkbox item-content">
        <input { ...inputProps } type="checkbox" />
        <div className="item-media">
          <i className="icon icon-form-checkbox"></i>
        </div>
        <div className="item-inner">
          <div className="item-title">{ title }</div>
        </div>
      </label>
    )
    
