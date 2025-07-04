import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

const connections: Record<string, HubConnection> = {};

function getOrCreateConnection(hubUrl: string): HubConnection {
  if (!connections[hubUrl]) {
    const conn = new HubConnectionBuilder()
      .withUrl(hubUrl)
      .withAutomaticReconnect()
      .build();
    connections[hubUrl] = conn;
  }
  return connections[hubUrl];
}

async function startConnection(hubUrl: string) {
  const conn = getOrCreateConnection(hubUrl);
  if (conn.state !== "Connected") {
    await conn.start();
  }
  return conn;
}

function addEventHandler(hubUrl: string, event: string, handler: (...args: any[]) => void) {
  const conn = getOrCreateConnection(hubUrl);
  conn.on(event, handler);
}

function stopConnection(hubUrl: string) {
  const conn = connections[hubUrl];
  if (conn) {
    conn.stop();
    delete connections[hubUrl];
  }
}

export const signalRService = {
  addEventHandler,
  startConnection,
  stopConnection
}
