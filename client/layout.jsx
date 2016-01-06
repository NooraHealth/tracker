this.MainLayout = React.createClass({
  render: function(){
    return (
      <div>
        <header>
          { this.props.header }
        </header>
        <main>
          { this.props.content }
        </main>
      </div>
    )
  }
});
