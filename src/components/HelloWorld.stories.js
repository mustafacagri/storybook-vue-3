import HelloWorld from './HelloWorld.vue'

// import { action } from '@storybook/addon-actions'

export default {
  component: HelloWorld,
  title: 'HelloWorld'
}

export const Default = {
  args: {
    msg: 'Hello World'
  }
}

export const Test = {
  args: {
    msg: 'This is a test message'
  }
}
