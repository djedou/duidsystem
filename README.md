# duidSystem : Djedou UI Design System
  
  __duidSystem__ est un Système de Design d'Interface Utilisateur pour les projects en React. La plupart des composants duidSystem correspondent aux tags HTML. Les composants react naissent et meurent, les composants duidSystem naissent et meurent avec leur style approprié.

## Comment installer  

### DuidHtml  

`npm install duidsystem-duidhtml`  

## Exemple d'utilisation

```  javascript
import React, {Component} from "react";
import Form from "duidsystem-duidhtml/Form";
import DuidStyle from "duidsystem-duidhtml/DuidStyle";


class Main extends Component{

    render(){ 
        return(
            <div>
                <Form 
                    style = "test"
                >
                <p>djed form</p> 
                </Form>
                <DuidStyle>{`
                    .test{
                        color: blue;
                    }
                    
                `}</DuidStyle>
            </div>
        )
    }
}

export default Main;

```  

## Comment styler les composants duidsystem  

### Première Methode : `DuidStyle`  
  

```  javascript
import React, {Component} from "react";
import Form from "duidsystem-duidhtml/Form";
import DuidStyle from "duidsystem-duidhtml/DuidStyle";


class Main extends Component{

    render(){ 
        return(
            <div>
                <Form 
                    style = "test"
                >
                <p>djed form</p> 
                </Form>
                <DuidStyle>{`
                    .test{
                        color: blue;
                    }
                    
                `}</DuidStyle>
            </div>
        )
    }
}

export default Main;

```  

### Deuxième Methode : `@material-ui/styles`  

Vous pouvez utiliser [@material-ui/styles](https://material-ui.com/fr/styles/basics/) pour styler les composants duidsystem.

 

```  javascript
import React, {Component} from "react";
import Form from "duidsystem-duidhtml/Form";
import { withStyles } from '@material-ui/styles';


const styles = {
    root: {
    color: 'red',
    },
};


class Main extends Component{

    render(){ 
        const {classes} = this.props;
        return(
            <div>
                <Form 
                    style = {classes.root}
                >
                <p>djed form</p> 
                </Form>
            </div>
        )
    }
}

export default withStyles(styles)(Main);

```  

 ## NB:  
  
 * Le composant `DuidStyle` a une portée globale  
 
## Documentation
[duidsystem: Djedou UI Design System](https://djedou.github.io/duidsystem/)
