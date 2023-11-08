import React from 'react';
import { createRoot } from "react-dom/client";


/**
 * 渲染子应用
 */
function Render(props) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="subapp-viewport" />
    </>
  );
}

export default function render({ loading }) {
  // 为提供的创建一个 React 根container并返回根。
  const root = createRoot(document.querySelector('#root'));
  // const root = createRoot(container ? container.querySelector('#root') : document.querySelector('#root'));

  root.render(<Render loading={loading} />);
}
