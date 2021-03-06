# duidSystem : Djedou UI Design System
  
  __duidSystem__ is a customizable component library to build faster, beautiful, and more accessible React applications.  

## How to install  

`npm install duidsystem`  

## Example

```  javascript

import { Container, Row, Col } from 'duidsystem/layout';

function App() {
	return (
		<Container styles={styles} classes={["sm"/*,"djed"*/]}>
			<Row xs={'auto'} styles={rowStyles} md={3} lg={2} classes={["row_cols_auto"]}>
				<Col md={'auto'} sm={3}>
					Aman
				</Col>
			</Row>
			<Row>
				<Col styles={colStyles} classes={["col_sm"]} sm={8}>sm=8</Col>
				<Col sm={4}>sm=4</Col>
			</Row>
			<Row>
				<Col sm>sm=true</Col>
				<Col sm>sm=true</Col>
				<Col sm>sm=true</Col>
			</Row>
			<Row>
				<Col span="true">span</Col>
				<Col span="true">span</Col>
				<Col span="true">span</Col>
			</Row>
		</Container>
	);
}

const styles = {
    sm: {
      //color: 'red',
      //backgroundColor: 'blue'
    },
    djed: {
      color: 'blue',
      backgroundColor: 'yellow'
    }
};

const rowStyles = {
	row_cols_auto: {
		color: 'blue',
		backgroundColor: 'green'
	}
}

const colStyles = {
	col_sm_8: {
		'@media (min-width: 576px)': {
			display: 'flex',
			color: 'blue',
			backgroundColor: 'green',
			justifyContent: 'center',
			//alignItems: 'center'
		}
	}
}

export default App;

```  
## How to style duidSystem Components  

### I. Modify a predefined class  
```col_sm_8``` is a predefined class of component ```Col```  

```  javascript

import { Container, Row, Col } from 'duidsystem/layout';

function App() {
	return (
		<Container>
			<Row>
				<Col styles={colStyles} classes={["col_sm_8"]}>A predefined class is modified here</Col>
				<Col sm={4}>sm=4</Col>
			</Row>
		</Container>
	);
}

const colStyles = {
	col_sm_8: {
		'@media (min-width: 576px)': {
			display: 'flex',
			color: 'blue',
			backgroundColor: 'green',
			justifyContent: 'center',
		}
	}
}

export default App;

```  

### II. Create a new class for your style  

```  javascript

import { Container, Row, Col } from 'duidsystem/layout';

function App() {
	return (
		<Container styles={styles} classes={["djed"]}>
			<Row>
				<Col md={'auto'} sm={3}>
					Aman
				</Col>
			</Row>
		</Container>
	);
}

const styles = {
    djed: {
      color: 'blue',
      backgroundColor: 'yellow'
    }
}

export default App;

``` 
## Documentation
[duidsystem: Djedou UI Design System](https://djedou.github.io/duidsystem/)
