import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { RouteAdmin, RouteMain, RouteUser } from './template';
import { adminRouter, mainRouter, userRouter } from './config';

function renderMainRouter(listRouter) {
	return listRouter.map((router, index) => {
		return <RouteMain {...router} key={index} />;
	});
}
function renderAdminRouter(listRouter) {
	return listRouter.map((router, index) => {
		return <RouteAdmin {...router} key={index} />;
	});
}

function renderUserRouter(listRouter) {
	return listRouter.map((router, index) => {
		return <RouteUser {...router} key={index} />;
	});
}

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					{renderMainRouter(mainRouter)}
					{/* {renderAdminRouter(adminRouter)} */}
					{renderUserRouter(userRouter)}
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
