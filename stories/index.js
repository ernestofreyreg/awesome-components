import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import {ScreenFrame, PageFrame, Button } from '../src/index'

storiesOf('Button', module)
  .add('simple text', () => <Button title='Hello Button' onClick={action('clicked Hello Button')} />)
  .add('with some emoji', () => <Button title='😀 😎 👍 💯' onClick={action('clicked Emojis')} />)
  .add('urgent text prefix', () => <Button title='!Cancel' onClick={action('clicked !Cancel')} />)
  .add('urgent text sufix', () => <Button title='Cancel!' onClick={action('clicked Cancel!')} />)

storiesOf('Layout', module)
  .add('ScreenFrame', () => <ScreenFrame>ScreenFrame</ScreenFrame>)

storiesOf('Layout', module)
  .add('PageFrame', () => <ScreenFrame><PageFrame>PageFrame</PageFrame></ScreenFrame>)
