/**
 * Parse a message into a content and an optional system message.
 * message format should be `[system] content` or `[system]content` or `content`.
 * @param message The message to parse.
 * @returns The parsed message.
 * @example
 * parseMessage("[system] content"); // { content: "content", system: "system" }
 * parseMessage("[system]content"); // { content: "content", system: "system" }
 * parseMessage("content"); // { content: "content" }
 * parseMessage(""); // { content: "" }
 * parseMessage(" "); // { content: " " }
 */
export function parseMessage(message: string): {
  content: string;
  system?: string;
} {
  const hasSystem = message.startsWith("[") && message.includes("]");
  if (hasSystem) {
    const system = message.substring(1, message.indexOf("]"));
    const content = message.substring(message.indexOf("]") + 1).trim();

    return {
      content,
      system,
    };
  }

  return {
    content: message,
  };
}
