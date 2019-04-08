import React, { Component } from 'react'
import styled from 'styled-components'


export default class RowSeparator extends Component {
	constructor(props) {
		super(props)

		this.state = {
			position: (props.static && 'static !important') || (props.absolute && 'absolute !important') || 'relative !important'
		}

		this.table = null
	}

	render() {
		const RowSeparatorTable = styled.table`
			position: ${this.state.position && this.state.position};
			text-align: ${this.props.align ? this.props.align : 'left'};
			vertical-align: ${this.props.verticalAlign ? props.verticalAlign : 'top' };
			border-collapse: separate;
		`

		const RowSeparatorCell = styled.td`
			display: ${this.props.display ? this.props.display : 'block'};
			top: ${this.props.top ? this.props.top : 'auto'};
			left: ${this.props.left ? this.props.left : 'auto'};
			right: ${this.props.right ? this.props.right : 'auto'};
			bottom: ${this.props.bottom ? this.props.bottom : 'auto'};
			width: ${this.props.width ? this.props.width : 'auto'};
			height: ${this.props.height ? this.props.height : 'auto'};
		`

		const WIDTH = (this.props.width !== undefined) ? this.props.width.split('px')[0] : ''
		const HEIGHT = (this.props.height !== undefined) ? this.props.height.split('px')[0] : ''

		return (
			<RowSeparatorTable width={WIDTH} height={HEIGHT} innerRef={((table) => this.table = table)} border="0" cellPadding="0" cellSpacing="0">
				<tbody>
					<tr>
						<RowSeparatorCell>
							{this.props.children}
						</RowSeparatorCell>
					</tr>
				</tbody>
			</RowSeparatorTable>
		)
	}
}

