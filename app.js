class Channel extends React.Component {
	onClick() {
		console.log('foobar', this.props.name);
	}

	render() {
		return (
			<li onClick={this.onClick.bind(this)}>{this.props.name}</li>
		)
	}	
}

class ChannelList extends React.Component {
	render() {
		return (
			<ul><Channel name='Hardware Support'/></ul>
		)
	}
}

ReactDOM.render(<ChannelList/>, document.getElementById('app'));