import React, { Component } from 'react'
import styled from 'styled-components'


export default class Row extends Component {
	constructor(props) {
		super(props)

		this.state = {
			position: (props.static && 'static !important') || (props.absolute && 'absolute !important') || 'relative !important'
		}

		this.table = null
	}

	componentDidMount() {
		if (this.props.align) this.table.setAttribute('align', this.props.align)
	}

	render() {
		const StyledTable = styled.table`
			position: ${this.state.position && this.state.position};
			width: ${this.props.width ? this.props.width + '  !important' : 'auto'};
			height: ${this.props.height ? this.props.height + '  !important' : 'auto'};
			background-color: ${this.props.backgroundColor ? this.props.backgroundColor + '  !important' : ''};
			background-image: ${this.props.backgroundImage ? "url('" + this.props.backgroundImage + "');" + '  !important' : ''};
			background-repeat: ${this.props.backgroundRepeat ? this.props.backgroundRepeat + '  !important' : 'no-repeat'};
			background-size: ${this.props.backgroundSize ? this.props.backgroundSize + '  !important' : 'contain'};
		`

		const StyledRow = styled.tr`
			position: ${this.state.position && this.state.position};
			background-color: ${this.props.backgroundColor ? this.props.backgroundColor + '  !important' : ''};
			background-image: ${this.props.backgroundImage ? "url('" + this.props.backgroundImage + "');" + '  !important' : ''};
			background-repeat: ${this.props.backgroundRepeat ? this.props.backgroundRepeat + '  !important' : 'no-repeat'};
		`

		const WIDTH = (this.props.width !== undefined) ? this.props.width.split('px')[0] : ''
		const HEIGHT = (this.props.height !== undefined) ? this.props.height.split('px')[0] : ''

		return (
			<StyledTable width={WIDTH} height={HEIGHT} innerRef={((table) => this.table = table)} border="0" cellPadding="0" cellSpacing="0">
				<tbody>
					<StyledRow>
						{this.props.children}
					</StyledRow>
				</tbody>
			</StyledTable>
		)
	}
}

