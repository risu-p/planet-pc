export const workerScript = () => {
  self.addEventListener(
    "message",
    function (event) {
      postMessage(`Got a message "${event.data}" from the main thread`);
    },
    false
  );
};
