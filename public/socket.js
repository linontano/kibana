import { map } from 'lodash';
import io from 'socket.io-client';
import chrome from 'ui/chrome';
import { functionsRegistry } from '../common/lib/functions';

const basePath = chrome.getBasePath();
export const socket = io(undefined, { path: `${basePath}/socket.io` });

socket.on('getFunctionList', () => {
  socket.emit('functionList', map(functionsRegistry.toJS(), 'name'));
});
