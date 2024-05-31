export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_Dp_WesyC.mjs').then(n => n.g);

export { page };
