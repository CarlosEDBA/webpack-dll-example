import React, { Component } from 'react'
import styled from 'styled-components'


export default class CellSeparator extends Component {
	constructor(props) {
		super(props)

		this.state = {
			position: (props.static && 'static !important') || (props.absolute && 'absolute !important') || 'relative !important'
		}

		this.table = null
	}

	render() {
		const StyledCell = styled.td`
			display: table-cell;
			position: ${this.state.position && this.state.position};
			width: ${this.props.width ? this.props.width : 'auto'};
			height: ${this.props.height ? this.props.height : 'auto'};
		`

		const CellSeparatorTable = styled.table`
			border-collapse: separate;
		`

		const CellSeparatorCell = styled.td`
			display: ${this.props.display ? this.props.display : 'block'};
			position: ${this.state.position && this.state.position};
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
			<StyledCell width={WIDTH} height={HEIGHT}>
				<CellSeparatorTable width={WIDTH} height={HEIGHT} innerRef={((table) => this.table = table)} border="0" cellPadding="0" cellSpacing="0">
					<tbody>
						<tr>
							<CellSeparatorCell>
								{this.props.children}
							</CellSeparatorCell>
						</tr>
					</tbody>
				</CellSeparatorTable>
			</StyledCell>
		)
	}
}

