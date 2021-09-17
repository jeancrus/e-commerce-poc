import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { IButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<IButtonProps> = args => {
  const { children } = args

  return <Button {...args}>{children}</Button>
}

Default.args = {
  children: 'Botão teste'
}
