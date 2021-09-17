import { Story, Meta } from '@storybook/react/types-6-0'
import Header, { IHeaderProps } from '.'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Default: Story<IHeaderProps> = args => <Header {...args} />

Default.args = {}
