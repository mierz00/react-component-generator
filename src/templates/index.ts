export function createPureFunc(componentName: string) {
  return `
  import React from 'react'
  import './styles.scss'


  const ${componentName} = ({}) => (
    <div></div>
  );
  
  export default ${componentName}
  `;
}

export function createClass(componentName: string) {
  return `
    import React from 'react'
    import './styles.scss'
  
    class ${componentName} extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
  
        };
      }
  
      render() {
        return (
          <div className="${componentName}-container">
          </div>
        );
      }
    }
  
    export default ${componentName}
    `;
}

export function createSCSS(componentName: string) {
  return `
        .${componentName}-container {

        }
    `;
}

export function createRNPureFunc(componentName: string) {
  return `
  import React from 'react'
  import { View } from 'react-native'
  import styles from './styles'


  const ${componentName} = ({}) => (
    <View style={styles.container}> 

    </View>
  );
  
  export default ${componentName}
  `;
}

export function createRNClass(componentName: string) {
  return `
  import React from 'react'
  import { View } from 'react-native'
  import styles from './styles'
  
    class ${componentName} extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
  
        };
      }
  
      render() {
        return (
          <View style={styles.container}>
          </View> 
        );
      }
    }
  
    export default ${componentName}
    `;
}

export function createRNStyles(componentName: string) {
  return `
  import { StyleSheet } from 'react-native'

  export default StyleSheet.create({
    container: {

    }
  })
    `;
}
