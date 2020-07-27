export const activate = ({ classList }) => (classList.add('active'));
export const deActivate = ({ classList }) => (classList.remove('active'));
export const hideElement = ({ style }) => style.display = 'none';
export const showElement = ({ style }) => style.display = 'block';