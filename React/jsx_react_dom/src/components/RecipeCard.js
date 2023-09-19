import React from 'react';
import { Col, Card, Divider, Row, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Rating from './Rating';
const { Paragraph } = Typography;

const RecipeCard = ({ recipe }) => {
	const { title, prepTime, cookTime, description, rating } = recipe;
	return (
		<Col span={8}>
			<Card title={title} style={{ height: 310 }}>
				<Row gutter={[0, 80]}>
					<Col span={24} align="center">
						<Rating score={rating} />
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<RightOutlined type="shopping" /> Prep: {prepTime} m
					</Col>
					<Col span={12}>
						<RightOutlined type="fire" /> Cook: {cookTime} m
					</Col>
				</Row>
				<Divider />
				<Row>
					<Col span={24} align="left">
						<Paragraph style={{ fontSize: 12 }}>{description}</Paragraph>
					</Col>
				</Row>
			</Card>
		</Col>
	);
};

export default RecipeCard;
