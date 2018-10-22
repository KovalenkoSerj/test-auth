import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';


ReactDOM.render(
	<Row>
		<Col span={6} offset={9}>
			<Provider store={ store }>
				<App />
			</Provider>
		</Col>
	</Row>,
	document.getElementById('root')
);


