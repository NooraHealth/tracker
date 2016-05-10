var TabGroup = React.createClass({
  mixins: [],

  propTypes: {
    tabs: React.PropTypes.arrayOf({
      tab: React.PropTypes.shape({
        active: React.PropTypes.bool.isRequired,
        content: React.PropTypes.node.isRequired,
        header: React.PropTypes.string.isRequired
      }) 
    })
  },

  defaultProps(){
    return{
      tabs: []
    }
  },

  getInitialState(){ return {} },
  render(){ return null }

});

var Tab = React.createClass({
  mixins: [],
  propTypes: {},
  defaultProps(){return{}},
  getInitialState(){return{}},
  render(){
     
  }
});

this.TabGroup = TabGroup;
