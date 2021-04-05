import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import reducers, { namespace } from './states';
import CrmContainer from './components/CrmContainer/CrmContainer.Container';

const PLUGIN_NAME = 'CrmContainerPlugin';

export default class CrmContainerPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
   task = {}
  init(flex: typeof Flex, manager: Flex.Manager) {
    const self = this
    this.registerReducers(manager);
    flex.Actions.addListener("afterAcceptTask", async function(reservation) {
      self.task = {...reservation.task}
      debugger
     
    })
    const options: Flex.ContentFragmentProps = { sortOrder: -1 };
    flex.CRMContainer
      .Content
      .replace(<CrmContainer  key="CrmContainerPlugin-component" />, options);

      
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  private registerReducers(manager: Flex.Manager) {
    if (!manager.store.addReducer) {
      // tslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${Flex.VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
