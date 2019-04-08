import React, { Component } from 'react'
import styled from 'styled-components'


export default class Background extends Component {
	constructor(props) {
		super(props)

		this.table = null
	}

	componentDidMount() {
		this.table.setAttribute('align', this.props.align)
	}

	render() {
		const StyledTable = styled.table`
			background-color: ${this.props.color && this.props.color};
		`

		const WIDTH = (this.props.width !== undefined) ? this.props.width.split('px')[0] : ''
		const HEIGHT = (this.props.height !== undefined) ? this.props.height.split('px')[0] : ''

		return (
			<StyledTable width={WIDTH} height={HEIGHT} innerRef={((table) => this.table = table)} border="0" cellPadding="0" cellSpacing="0">
				<tbody>
					<tr>
						<td width={WIDTH}>
							{this.props.children}
						</td>
					</tr>
				</tbody>
			</StyledTable>
		)
	}
}

