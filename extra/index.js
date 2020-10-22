import {createDimondShape,triangle} from './patterns';
import {hasPermission,validateUsers} from './utils';


createDimondShape(2);
triangle(5);

import {permissions , user} from './constants';
let result = hasPermission(permissions.getUsers, 'head-trainer', 'Delete');
console.log(result);

validateUsers(user);
