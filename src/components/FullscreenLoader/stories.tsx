import { Story, Meta } from '@storybook/react/types-6-0'
import FullscreenLoader, { IFullscreenLoaderProps } from '.'

export default {
  title: 'FullscreenLoader',
  component: FullscreenLoader
} as Meta

export const Default: Story<IFullscreenLoaderProps> = args => (
  <FullscreenLoader {...args} />
)
