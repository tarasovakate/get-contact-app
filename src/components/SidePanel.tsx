import { FC, useEffect, useState } from 'react';
import { AlignRightOutlined } from '@ant-design/icons';
import CustomButton from './CustomButton';
import Filters from './Filters';
import {ItemsList} from "../interface/Items";

function simulateNetworkRequest() {
	return new Promise((resolve) => setTimeout(resolve, 2000));
}

interface Props {
	items: ItemsList
}


const SidePanel: FC<Props> = ({items}) => {
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (isLoading) {
			simulateNetworkRequest().then(() => {
				setLoading(false);
			});
		}
	}, [isLoading]);

	const handleClick = () => setLoading(true);

	return (
		<div className="side-panel">
			<div className="side-panel__header">
				<AlignRightOutlined />
				<h4>Audience</h4>
				<p>{items.length} Contacts</p>
			</div>

			<Filters/>

			<CustomButton handleClick={handleClick} isLoading={isLoading}>
				{isLoading ? 'Saving…' : 'Save Filters'}
			</CustomButton>
		</div>
	);
};

export default SidePanel;
