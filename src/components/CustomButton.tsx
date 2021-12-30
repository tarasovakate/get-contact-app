import { ReactNode } from 'react';
import { Button } from 'react-bootstrap';

type Props = {
	children: ReactNode;
	isLoading?: boolean;
	handleClick?: () => void;
};

const CustomButton = ({ children, isLoading, handleClick }: Props) => {
	return (
		<div className="d-grid gap-2 m-3">
			<Button
				variant="primary"
				size="lg"
				disabled={isLoading}
				onClick={!isLoading ? handleClick : undefined}
			>
				{children}
			</Button>
		</div>
	);
};

export default CustomButton;
