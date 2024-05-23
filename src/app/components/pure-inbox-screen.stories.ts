import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { TaskModule } from './task.module';

import { Store, NgxsModule } from '@ngxs/store';
import { TasksState } from '../state/task.state';
import { CommonModule } from '@angular/common';

export default {
  title: 'PureInboxScreen',
  component: PureInboxScreenComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  ],
} as Meta;

const Template: Story<PureInboxScreenComponent> = (args) => ({
  component: PureInboxScreenComponent,
  props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};
