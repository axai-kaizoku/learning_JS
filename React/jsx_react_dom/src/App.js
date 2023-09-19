import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Recipes from './components/Recipes';
import AddRecipe from './components/AddRecipe';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Menu, Col } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Header, Footer } = Layout;

const App = () => {
	return (
		<Router>
			<Layout>
				<Header className="header">
					<Col span={6}>
						<h1 className="app-title">iCanCook!</h1>
					</Col>
					<Col span={10}>
						<Menu mode="horizontal" theme="dark" className="header-menu">
							<Menu.Item key="1">
								<Link to="/">
									<RightOutlined type="home" />
									Home
								</Link>
							</Menu.Item>
							<Menu.Item key="2">
								<Link to="/about">
									<RightOutlined type="team" />
									About
								</Link>
							</Menu.Item>
							<Menu.Item key="3">
								<Link to="/recipes">
									<RightOutlined type="fire" />
									Recipes
								</Link>
							</Menu.Item>
							<Menu.Item key="4">
								<Link to="/addrecipe">
									<RightOutlined type="edit" />
									Add a Recipe
								</Link>
							</Menu.Item>
						</Menu>
					</Col>
					<Col span={8} align="end">
						<Menu mode="horizontal" theme="dark" className="header-menu">
							<Menu.Item key="1">
								<Link to="/login">
									<RightOutlined type="login" />
									Login
								</Link>
							</Menu.Item>
						</Menu>
					</Col>
				</Header>
				<Layout className="content-box">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/recipes">
							<Recipes />
						</Route>
						<Route path="/addrecipe">
							<AddRecipe />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
					</Switch>
				</Layout>
				<Footer>
					<Text type="secondary">
						© The Good Food Company. All Rights Reserved
					</Text>
				</Footer>
			</Layout>
		</Router>
	);
};

export default App;
