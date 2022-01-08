import React from 'react'
import { View, Text, FlatList } from 'react-native'
import AppText from '../../../Components/AppText'
import { text } from '../../../Styles/text'
import { list } from './list'
import { DataTable } from 'react-native-paper';

export default function index() {

	return (
		<View style={{
			width: "100%",
			height: "100%",
			padding: 100
		}}>
			<DataTable>
				<DataTable.Header>
					<DataTable.Title>Name</DataTable.Title>
					<DataTable.Title numeric>Age</DataTable.Title>
					<DataTable.Title>Description</DataTable.Title>
				</DataTable.Header>

				{
					list.map(item => (
						<DataTable.Row key={item._id}>
							<DataTable.Cell>{item.name}</DataTable.Cell>
							<DataTable.Cell numeric>{item.age}</DataTable.Cell>
							<DataTable.Cell>{item.description}</DataTable.Cell>
						</DataTable.Row>
					))
				}
			</DataTable>
		</View>
	)
}

const Header = () => <View style={{
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: "100%",
}}>
	<AppText style={text.h4} otherStyle={{ width: '20%' }}>Name</AppText>
	<AppText style={text.h4} otherStyle={{ width: '10%' }}>Age</AppText>
	<AppText style={text.h4} otherStyle={{ width: '70%' }}>Description</AppText>
</View>

const Item = ({item}) => <View style={{
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: "100%",
	borderTopWidth: 1.5,
}}>
	<AppText style={text.h6} otherStyle={{ width: '20%' }}>{item.name}</AppText>
	<AppText style={text.h6} otherStyle={{ width: '10%' }}>{item.age}</AppText>
	<AppText style={text.h6} otherStyle={{ width: '70%' }}>{item.description}</AppText>
</View>