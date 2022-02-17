/* 存下与 shared worker 连接了的所有端口 */
const portPool = [];

/* 连接事件触发 */
self.onconnect = function (e) {
  console.log("worker内：连接事件触发");

  const port = e.ports[0];
  // 将 port 添加到 portPool 中
  portPool.push(port);

  port.addEventListener("message", (e) => {
    console.log(`worker 接收到了消息：${e.data}`);
    if (e.data === "Close") {
      // 关闭连接，移除对应 port
      const index = portPool.findIndex((p) => p === port);
      portPool.splice(index, 1);
      port.close();
      // 广播，连接数量
      boardcast(portPool.length);
    }
  });
  port.start();

  //   port.onmessage = (e) => {
  //     console.log(`worker 接收到了消息：${e.data}`);
  //     if (e.data === "Close") {
  //       // 关闭连接，移除对应 port
  //       const index = portPool.findIndex((p) => p === port);
  //       portPool.splice(index, 1);
  //       port.close();
  //       // 广播，连接数量
  //       boardcast(portPool.length);
  //     }
  //   };

  // 广播，连接数量
  boardcast(portPool.length);
};

/* 向当前所有连接了的 port 广播消息 */
function boardcast(message) {
  portPool.forEach((port) => {
    port.postMessage(message);
  });
}
