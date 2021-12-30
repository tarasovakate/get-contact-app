import { CheckCircleFilled, DeleteFilled } from '@ant-design/icons';
import { FC } from 'react';
import { Col, FloatingLabel, Form, ListGroup, Row } from 'react-bootstrap';

const Filters: FC = () => {


	return (
		<div className="filters">
			<div className="mb-3">
				<div className="mb-3">
					<h4>Include Tags:</h4>
					<ListGroup>
						<ListGroup.Item action>
							Tag
							<div className="icons">
								<DeleteFilled />
								<CheckCircleFilled />
							</div>
						</ListGroup.Item>
						<ListGroup.Item action>
							Friend
							<div className="icons">
								<DeleteFilled />
								<CheckCircleFilled />
							</div>
						</ListGroup.Item>
						<ListGroup.Item action>
							Greetings
							<div className="icons">
								<DeleteFilled />
								<CheckCircleFilled />
							</div>
						</ListGroup.Item>
						<ListGroup.Item action>
							Greetings
							<div className="icons">
								<DeleteFilled />
								<CheckCircleFilled />
							</div>
						</ListGroup.Item>
						<ListGroup.Item action />
					</ListGroup>
				</div>
				<div className="mb-3">
					<h4>Exclude Tags:</h4>
					<ListGroup>
						<ListGroup.Item action>
							Tag
							<div className="icons">
								<DeleteFilled />
								<CheckCircleFilled />
							</div>
						</ListGroup.Item>
						<ListGroup.Item action>
							Friend
							<div className="icons">
								<DeleteFilled />
								<CheckCircleFilled />
							</div>
						</ListGroup.Item>
						<ListGroup.Item action>
							Greetings
							<div className="icons">
								<DeleteFilled />
								<CheckCircleFilled />
							</div>
						</ListGroup.Item>
						<ListGroup.Item action>
							Greetings
							<div className="icons">
								<DeleteFilled />
								<CheckCircleFilled />
							</div>
						</ListGroup.Item>
						<ListGroup.Item action />
					</ListGroup>
				</div>
			</div>

			<div className="message">
				<div className="mb-3">
					<h4 className="mb-2">Message Sent:</h4>
					<Row className="g-2">
						<Col md>
							<FloatingLabel controlId="floatingInputGrid" label="Min">
								<Form.Control type="email" placeholder="name@example.com" />
							</FloatingLabel>
						</Col>
						<Col md>
							<FloatingLabel controlId="floatingInputGrid" label="Max">
								<Form.Control type="email" placeholder="name@example.com" />
							</FloatingLabel>
						</Col>
					</Row>
				</div>
				<div className="message__received">
					<h4>Message Received:</h4>
					<Row className="g-2">
						<Col md>
							<FloatingLabel controlId="floatingInputGrid" label="Min">
								<Form.Control type="email" placeholder="name@example.com" />
							</FloatingLabel>
						</Col>
						<Col md>
							<FloatingLabel controlId="floatingInputGrid" label="Max">
								<Form.Control type="email" placeholder="name@example.com" />
							</FloatingLabel>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Filters;
