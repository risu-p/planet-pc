export const workerScript = () => {
  self.addEventListener(
    "message",
    function (event) {
      self.postMessage(`Got a message "${event.data}" from the main thread`);
    },
    false
  );
};
