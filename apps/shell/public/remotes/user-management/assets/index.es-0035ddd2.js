import { _ as __vitePreload } from './preload-helper-1a9bd443.js';
import { u as user_mf_2_management__loadShare__vue__loadShare__ } from './user_mf_2_management__loadShare__vue__loadShare__-e47a04a9.js';
import { u as user_mf_2_management__loadShare__vue_mf_2_router__loadShare__ } from './user_mf_2_management__loadShare__vue_mf_2_router__loadShare__-8996c67b.js';
import { u as user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__ } from './user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__-a098f897.js';
import './user_mf_2_management__mf_v__runtimeInit__mf_v__-df04a86b.js';

class CrossTabLock {
  lockKey;
  lockTtl;
  guid;
  verifyDelay;
  constructor({ lockKey, lockTtl = 15e3, guid, verifyDelay = 80 }) {
    this.lockKey = lockKey;
    this.lockTtl = lockTtl;
    this.guid = guid;
    this.verifyDelay = verifyDelay;
  }
  getLock() {
    const val = localStorage.getItem(this.lockKey);
    if (!val)
      return null;
    try {
      return JSON.parse(val);
    } catch {
      return null;
    }
  }
  isLocked() {
    const lock2 = this.getLock();
    if (!lock2)
      return false;
    return Date.now() - lock2.ts < this.lockTtl;
  }
  async acquire() {
    const now = Date.now();
    localStorage.setItem(this.lockKey, JSON.stringify({ tabId: this.guid, ts: now }));
    await new Promise((res2) => setTimeout(res2, this.verifyDelay));
    const lock2 = this.getLock();
    return lock2 && lock2.tabId === this.guid && Date.now() - lock2.ts < this.lockTtl;
  }
  release() {
    const lock2 = this.getLock();
    if (lock2 && lock2.tabId === this.guid) {
      localStorage.removeItem(this.lockKey);
    }
  }
  async waitForUnlock(timeout = this.lockTtl) {
    let waited = 0;
    while (this.isLocked()) {
      await new Promise((r) => setTimeout(r, 200));
      waited += 200;
      if (waited > timeout)
        return false;
    }
    return true;
  }
  isLockedPublic() {
    return this.isLocked();
  }
}
class HttpError extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
   *
   * @param {string} errorMessage A descriptive error message.
   * @param {number} statusCode The HTTP status code represented by this error.
   */
  constructor(errorMessage, statusCode) {
    const trueProto = new.target.prototype;
    super(`${errorMessage}: Status code '${statusCode}'`);
    this.statusCode = statusCode;
    this.__proto__ = trueProto;
  }
}
class TimeoutError extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(errorMessage = "A timeout occurred.") {
    const trueProto = new.target.prototype;
    super(errorMessage);
    this.__proto__ = trueProto;
  }
}
class AbortError extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(errorMessage = "An abort occurred.") {
    const trueProto = new.target.prototype;
    super(errorMessage);
    this.__proto__ = trueProto;
  }
}
class UnsupportedTransportError extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(message, transport) {
    const trueProto = new.target.prototype;
    super(message);
    this.transport = transport;
    this.errorType = "UnsupportedTransportError";
    this.__proto__ = trueProto;
  }
}
class DisabledTransportError extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(message, transport) {
    const trueProto = new.target.prototype;
    super(message);
    this.transport = transport;
    this.errorType = "DisabledTransportError";
    this.__proto__ = trueProto;
  }
}
class FailedToStartTransportError extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(message, transport) {
    const trueProto = new.target.prototype;
    super(message);
    this.transport = transport;
    this.errorType = "FailedToStartTransportError";
    this.__proto__ = trueProto;
  }
}
class FailedToNegotiateWithServerError extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(message) {
    const trueProto = new.target.prototype;
    super(message);
    this.errorType = "FailedToNegotiateWithServerError";
    this.__proto__ = trueProto;
  }
}
class AggregateErrors extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
   *
   * @param {string} message A descriptive error message.
   * @param {Error[]} innerErrors The collection of errors this error is aggregating.
   */
  constructor(message, innerErrors) {
    const trueProto = new.target.prototype;
    super(message);
    this.innerErrors = innerErrors;
    this.__proto__ = trueProto;
  }
}
class HttpResponse {
  constructor(statusCode, statusText, content) {
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.content = content;
  }
}
class HttpClient {
  get(url2, options) {
    return this.send({
      ...options,
      method: "GET",
      url: url2
    });
  }
  post(url2, options) {
    return this.send({
      ...options,
      method: "POST",
      url: url2
    });
  }
  delete(url2, options) {
    return this.send({
      ...options,
      method: "DELETE",
      url: url2
    });
  }
  /** Gets all cookies that apply to the specified URL.
   *
   * @param url The URL that the cookies are valid for.
   * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
   */
  // @ts-ignore
  getCookieString(url2) {
    return "";
  }
}
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["Trace"] = 0] = "Trace";
  LogLevel2[LogLevel2["Debug"] = 1] = "Debug";
  LogLevel2[LogLevel2["Information"] = 2] = "Information";
  LogLevel2[LogLevel2["Warning"] = 3] = "Warning";
  LogLevel2[LogLevel2["Error"] = 4] = "Error";
  LogLevel2[LogLevel2["Critical"] = 5] = "Critical";
  LogLevel2[LogLevel2["None"] = 6] = "None";
})(LogLevel || (LogLevel = {}));
class NullLogger {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(_logLevel, _message) {
  }
}
NullLogger.instance = new NullLogger();
const VERSION = "8.0.7";
class Arg {
  static isRequired(val, name) {
    if (val === null || val === void 0) {
      throw new Error(`The '${name}' argument is required.`);
    }
  }
  static isNotEmpty(val, name) {
    if (!val || val.match(/^\s*$/)) {
      throw new Error(`The '${name}' argument should not be empty.`);
    }
  }
  static isIn(val, values, name) {
    if (!(val in values)) {
      throw new Error(`Unknown ${name} value: ${val}.`);
    }
  }
}
class Platform {
  // react-native has a window but no document so we should check both
  static get isBrowser() {
    return !Platform.isNode && typeof window === "object" && typeof window.document === "object";
  }
  // WebWorkers don't have a window object so the isBrowser check would fail
  static get isWebWorker() {
    return !Platform.isNode && typeof self === "object" && "importScripts" in self;
  }
  // react-native has a window but no document
  static get isReactNative() {
    return !Platform.isNode && typeof window === "object" && typeof window.document === "undefined";
  }
  // Node apps shouldn't have a window object, but WebWorkers don't either
  // so we need to check for both WebWorker and window
  static get isNode() {
    return typeof process !== "undefined" && process.release && process.release.name === "node";
  }
}
function getDataDetail(data2, includeContent) {
  let detail = "";
  if (isArrayBuffer(data2)) {
    detail = `Binary data of length ${data2.byteLength}`;
    if (includeContent) {
      detail += `. Content: '${formatArrayBuffer(data2)}'`;
    }
  } else if (typeof data2 === "string") {
    detail = `String data of length ${data2.length}`;
    if (includeContent) {
      detail += `. Content: '${data2}'`;
    }
  }
  return detail;
}
function formatArrayBuffer(data2) {
  const view = new Uint8Array(data2);
  let str = "";
  view.forEach((num) => {
    const pad = num < 16 ? "0" : "";
    str += `0x${pad}${num.toString(16)} `;
  });
  return str.substr(0, str.length - 1);
}
function isArrayBuffer(val) {
  return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  val.constructor && val.constructor.name === "ArrayBuffer");
}
async function sendMessage(logger2, transportName, httpClient, url2, content, options) {
  const headers = {};
  const [name, value] = getUserAgentHeader();
  headers[name] = value;
  logger2.log(LogLevel.Trace, `(${transportName} transport) sending data. ${getDataDetail(content, options.logMessageContent)}.`);
  const responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
  const response = await httpClient.post(url2, {
    content,
    headers: { ...headers, ...options.headers },
    responseType,
    timeout: options.timeout,
    withCredentials: options.withCredentials
  });
  logger2.log(LogLevel.Trace, `(${transportName} transport) request complete. Response status: ${response.statusCode}.`);
}
function createLogger$1(logger2) {
  if (logger2 === void 0) {
    return new ConsoleLogger(LogLevel.Information);
  }
  if (logger2 === null) {
    return NullLogger.instance;
  }
  if (logger2.log !== void 0) {
    return logger2;
  }
  return new ConsoleLogger(logger2);
}
class SubjectSubscription {
  constructor(subject, observer) {
    this._subject = subject;
    this._observer = observer;
  }
  dispose() {
    const index2 = this._subject.observers.indexOf(this._observer);
    if (index2 > -1) {
      this._subject.observers.splice(index2, 1);
    }
    if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
      this._subject.cancelCallback().catch((_) => {
      });
    }
  }
}
class ConsoleLogger {
  constructor(minimumLogLevel) {
    this._minLevel = minimumLogLevel;
    this.out = console;
  }
  log(logLevel, message) {
    if (logLevel >= this._minLevel) {
      const msg = `[${( new Date()).toISOString()}] ${LogLevel[logLevel]}: ${message}`;
      switch (logLevel) {
        case LogLevel.Critical:
        case LogLevel.Error:
          this.out.error(msg);
          break;
        case LogLevel.Warning:
          this.out.warn(msg);
          break;
        case LogLevel.Information:
          this.out.info(msg);
          break;
        default:
          this.out.log(msg);
          break;
      }
    }
  }
}
function getUserAgentHeader() {
  let userAgentHeaderName = "X-SignalR-User-Agent";
  if (Platform.isNode) {
    userAgentHeaderName = "User-Agent";
  }
  return [userAgentHeaderName, constructUserAgent(VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
}
function constructUserAgent(version, os, runtime2, runtimeVersion) {
  let userAgent = "Microsoft SignalR/";
  const majorAndMinor = version.split(".");
  userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
  userAgent += ` (${version}; `;
  if (os && os !== "") {
    userAgent += `${os}; `;
  } else {
    userAgent += "Unknown OS; ";
  }
  userAgent += `${runtime2}`;
  if (runtimeVersion) {
    userAgent += `; ${runtimeVersion}`;
  } else {
    userAgent += "; Unknown Runtime Version";
  }
  userAgent += ")";
  return userAgent;
}
function getOsName() {
  if (Platform.isNode) {
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  } else {
    return "";
  }
}
function getRuntimeVersion() {
  if (Platform.isNode) {
    return process.versions.node;
  }
  return void 0;
}
function getRuntime() {
  if (Platform.isNode) {
    return "NodeJS";
  } else {
    return "Browser";
  }
}
function getErrorString(e) {
  if (e.stack) {
    return e.stack;
  } else if (e.message) {
    return e.message;
  }
  return `${e}`;
}
function getGlobalThis() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("could not find global");
}
class FetchHttpClient extends HttpClient {
  constructor(logger2) {
    super();
    this._logger = logger2;
    if (typeof fetch === "undefined" || Platform.isNode) {
      const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
      this._jar = new (requireFunc("tough-cookie")).CookieJar();
      if (typeof fetch === "undefined") {
        this._fetchType = requireFunc("node-fetch");
      } else {
        this._fetchType = fetch;
      }
      this._fetchType = requireFunc("fetch-cookie")(this._fetchType, this._jar);
    } else {
      this._fetchType = fetch.bind(getGlobalThis());
    }
    if (typeof AbortController === "undefined") {
      const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
      this._abortControllerType = requireFunc("abort-controller");
    } else {
      this._abortControllerType = AbortController;
    }
  }
  /** @inheritDoc */
  async send(request) {
    if (request.abortSignal && request.abortSignal.aborted) {
      throw new AbortError();
    }
    if (!request.method) {
      throw new Error("No method defined.");
    }
    if (!request.url) {
      throw new Error("No url defined.");
    }
    const abortController = new this._abortControllerType();
    let error2;
    if (request.abortSignal) {
      request.abortSignal.onabort = () => {
        abortController.abort();
        error2 = new AbortError();
      };
    }
    let timeoutId = null;
    if (request.timeout) {
      const msTimeout = request.timeout;
      timeoutId = setTimeout(() => {
        abortController.abort();
        this._logger.log(LogLevel.Warning, `Timeout from HTTP request.`);
        error2 = new TimeoutError();
      }, msTimeout);
    }
    if (request.content === "") {
      request.content = void 0;
    }
    if (request.content) {
      request.headers = request.headers || {};
      if (isArrayBuffer(request.content)) {
        request.headers["Content-Type"] = "application/octet-stream";
      } else {
        request.headers["Content-Type"] = "text/plain;charset=UTF-8";
      }
    }
    let response;
    try {
      response = await this._fetchType(request.url, {
        body: request.content,
        cache: "no-cache",
        credentials: request.withCredentials === true ? "include" : "same-origin",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          ...request.headers
        },
        method: request.method,
        mode: "cors",
        redirect: "follow",
        signal: abortController.signal
      });
    } catch (e) {
      if (error2) {
        throw error2;
      }
      this._logger.log(LogLevel.Warning, `Error from HTTP request. ${e}.`);
      throw e;
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (request.abortSignal) {
        request.abortSignal.onabort = null;
      }
    }
    if (!response.ok) {
      const errorMessage = await deserializeContent(response, "text");
      throw new HttpError(errorMessage || response.statusText, response.status);
    }
    const content = deserializeContent(response, request.responseType);
    const payload = await content;
    return new HttpResponse(response.status, response.statusText, payload);
  }
  getCookieString(url2) {
    let cookies = "";
    if (Platform.isNode && this._jar) {
      this._jar.getCookies(url2, (e, c) => cookies = c.join("; "));
    }
    return cookies;
  }
}
function deserializeContent(response, responseType) {
  let content;
  switch (responseType) {
    case "arraybuffer":
      content = response.arrayBuffer();
      break;
    case "text":
      content = response.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${responseType} is not supported.`);
    default:
      content = response.text();
      break;
  }
  return content;
}
class XhrHttpClient extends HttpClient {
  constructor(logger2) {
    super();
    this._logger = logger2;
  }
  /** @inheritDoc */
  send(request) {
    if (request.abortSignal && request.abortSignal.aborted) {
      return Promise.reject(new AbortError());
    }
    if (!request.method) {
      return Promise.reject(new Error("No method defined."));
    }
    if (!request.url) {
      return Promise.reject(new Error("No url defined."));
    }
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(request.method, request.url, true);
      xhr.withCredentials = request.withCredentials === void 0 ? true : request.withCredentials;
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      if (request.content === "") {
        request.content = void 0;
      }
      if (request.content) {
        if (isArrayBuffer(request.content)) {
          xhr.setRequestHeader("Content-Type", "application/octet-stream");
        } else {
          xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        }
      }
      const headers = request.headers;
      if (headers) {
        Object.keys(headers).forEach((header) => {
          xhr.setRequestHeader(header, headers[header]);
        });
      }
      if (request.responseType) {
        xhr.responseType = request.responseType;
      }
      if (request.abortSignal) {
        request.abortSignal.onabort = () => {
          xhr.abort();
          reject(new AbortError());
        };
      }
      if (request.timeout) {
        xhr.timeout = request.timeout;
      }
      xhr.onload = () => {
        if (request.abortSignal) {
          request.abortSignal.onabort = null;
        }
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(new HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
        } else {
          reject(new HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
        }
      };
      xhr.onerror = () => {
        this._logger.log(LogLevel.Warning, `Error from HTTP request. ${xhr.status}: ${xhr.statusText}.`);
        reject(new HttpError(xhr.statusText, xhr.status));
      };
      xhr.ontimeout = () => {
        this._logger.log(LogLevel.Warning, `Timeout from HTTP request.`);
        reject(new TimeoutError());
      };
      xhr.send(request.content);
    });
  }
}
class DefaultHttpClient extends HttpClient {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(logger2) {
    super();
    if (typeof fetch !== "undefined" || Platform.isNode) {
      this._httpClient = new FetchHttpClient(logger2);
    } else if (typeof XMLHttpRequest !== "undefined") {
      this._httpClient = new XhrHttpClient(logger2);
    } else {
      throw new Error("No usable HttpClient found.");
    }
  }
  /** @inheritDoc */
  send(request) {
    if (request.abortSignal && request.abortSignal.aborted) {
      return Promise.reject(new AbortError());
    }
    if (!request.method) {
      return Promise.reject(new Error("No method defined."));
    }
    if (!request.url) {
      return Promise.reject(new Error("No url defined."));
    }
    return this._httpClient.send(request);
  }
  getCookieString(url2) {
    return this._httpClient.getCookieString(url2);
  }
}
class TextMessageFormat {
  static write(output) {
    return `${output}${TextMessageFormat.RecordSeparator}`;
  }
  static parse(input) {
    if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
      throw new Error("Message is incomplete.");
    }
    const messages = input.split(TextMessageFormat.RecordSeparator);
    messages.pop();
    return messages;
  }
}
TextMessageFormat.RecordSeparatorCode = 30;
TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
class HandshakeProtocol {
  // Handshake request is always JSON
  writeHandshakeRequest(handshakeRequest) {
    return TextMessageFormat.write(JSON.stringify(handshakeRequest));
  }
  parseHandshakeResponse(data2) {
    let messageData;
    let remainingData;
    if (isArrayBuffer(data2)) {
      const binaryData = new Uint8Array(data2);
      const separatorIndex = binaryData.indexOf(TextMessageFormat.RecordSeparatorCode);
      if (separatorIndex === -1) {
        throw new Error("Message is incomplete.");
      }
      const responseLength = separatorIndex + 1;
      messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
      remainingData = binaryData.byteLength > responseLength ? binaryData.slice(responseLength).buffer : null;
    } else {
      const textData = data2;
      const separatorIndex = textData.indexOf(TextMessageFormat.RecordSeparator);
      if (separatorIndex === -1) {
        throw new Error("Message is incomplete.");
      }
      const responseLength = separatorIndex + 1;
      messageData = textData.substring(0, responseLength);
      remainingData = textData.length > responseLength ? textData.substring(responseLength) : null;
    }
    const messages = TextMessageFormat.parse(messageData);
    const response = JSON.parse(messages[0]);
    if (response.type) {
      throw new Error("Expected a handshake response from the server.");
    }
    const responseMessage = response;
    return [remainingData, responseMessage];
  }
}
var MessageType;
(function(MessageType2) {
  MessageType2[MessageType2["Invocation"] = 1] = "Invocation";
  MessageType2[MessageType2["StreamItem"] = 2] = "StreamItem";
  MessageType2[MessageType2["Completion"] = 3] = "Completion";
  MessageType2[MessageType2["StreamInvocation"] = 4] = "StreamInvocation";
  MessageType2[MessageType2["CancelInvocation"] = 5] = "CancelInvocation";
  MessageType2[MessageType2["Ping"] = 6] = "Ping";
  MessageType2[MessageType2["Close"] = 7] = "Close";
  MessageType2[MessageType2["Ack"] = 8] = "Ack";
  MessageType2[MessageType2["Sequence"] = 9] = "Sequence";
})(MessageType || (MessageType = {}));
class Subject {
  constructor() {
    this.observers = [];
  }
  next(item) {
    for (const observer of this.observers) {
      observer.next(item);
    }
  }
  error(err) {
    for (const observer of this.observers) {
      if (observer.error) {
        observer.error(err);
      }
    }
  }
  complete() {
    for (const observer of this.observers) {
      if (observer.complete) {
        observer.complete();
      }
    }
  }
  subscribe(observer) {
    this.observers.push(observer);
    return new SubjectSubscription(this, observer);
  }
}
class MessageBuffer {
  constructor(protocol, connection, bufferSize) {
    this._bufferSize = 1e5;
    this._messages = [];
    this._totalMessageCount = 0;
    this._waitForSequenceMessage = false;
    this._nextReceivingSequenceId = 1;
    this._latestReceivedSequenceId = 0;
    this._bufferedByteCount = 0;
    this._reconnectInProgress = false;
    this._protocol = protocol;
    this._connection = connection;
    this._bufferSize = bufferSize;
  }
  async _send(message) {
    const serializedMessage = this._protocol.writeMessage(message);
    let backpressurePromise = Promise.resolve();
    if (this._isInvocationMessage(message)) {
      this._totalMessageCount++;
      let backpressurePromiseResolver = () => {
      };
      let backpressurePromiseRejector = () => {
      };
      if (isArrayBuffer(serializedMessage)) {
        this._bufferedByteCount += serializedMessage.byteLength;
      } else {
        this._bufferedByteCount += serializedMessage.length;
      }
      if (this._bufferedByteCount >= this._bufferSize) {
        backpressurePromise = new Promise((resolve, reject) => {
          backpressurePromiseResolver = resolve;
          backpressurePromiseRejector = reject;
        });
      }
      this._messages.push(new BufferedItem(serializedMessage, this._totalMessageCount, backpressurePromiseResolver, backpressurePromiseRejector));
    }
    try {
      if (!this._reconnectInProgress) {
        await this._connection.send(serializedMessage);
      }
    } catch {
      this._disconnected();
    }
    await backpressurePromise;
  }
  _ack(ackMessage) {
    let newestAckedMessage = -1;
    for (let index2 = 0; index2 < this._messages.length; index2++) {
      const element = this._messages[index2];
      if (element._id <= ackMessage.sequenceId) {
        newestAckedMessage = index2;
        if (isArrayBuffer(element._message)) {
          this._bufferedByteCount -= element._message.byteLength;
        } else {
          this._bufferedByteCount -= element._message.length;
        }
        element._resolver();
      } else if (this._bufferedByteCount < this._bufferSize) {
        element._resolver();
      } else {
        break;
      }
    }
    if (newestAckedMessage !== -1) {
      this._messages = this._messages.slice(newestAckedMessage + 1);
    }
  }
  _shouldProcessMessage(message) {
    if (this._waitForSequenceMessage) {
      if (message.type !== MessageType.Sequence) {
        return false;
      } else {
        this._waitForSequenceMessage = false;
        return true;
      }
    }
    if (!this._isInvocationMessage(message)) {
      return true;
    }
    const currentId = this._nextReceivingSequenceId;
    this._nextReceivingSequenceId++;
    if (currentId <= this._latestReceivedSequenceId) {
      if (currentId === this._latestReceivedSequenceId) {
        this._ackTimer();
      }
      return false;
    }
    this._latestReceivedSequenceId = currentId;
    this._ackTimer();
    return true;
  }
  _resetSequence(message) {
    if (message.sequenceId > this._nextReceivingSequenceId) {
      this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
      return;
    }
    this._nextReceivingSequenceId = message.sequenceId;
  }
  _disconnected() {
    this._reconnectInProgress = true;
    this._waitForSequenceMessage = true;
  }
  async _resend() {
    const sequenceId = this._messages.length !== 0 ? this._messages[0]._id : this._totalMessageCount + 1;
    await this._connection.send(this._protocol.writeMessage({ type: MessageType.Sequence, sequenceId }));
    const messages = this._messages;
    for (const element of messages) {
      await this._connection.send(element._message);
    }
    this._reconnectInProgress = false;
  }
  _dispose(error2) {
    error2 !== null && error2 !== void 0 ? error2 : error2 = new Error("Unable to reconnect to server.");
    for (const element of this._messages) {
      element._rejector(error2);
    }
  }
  _isInvocationMessage(message) {
    switch (message.type) {
      case MessageType.Invocation:
      case MessageType.StreamItem:
      case MessageType.Completion:
      case MessageType.StreamInvocation:
      case MessageType.CancelInvocation:
        return true;
      case MessageType.Close:
      case MessageType.Sequence:
      case MessageType.Ping:
      case MessageType.Ack:
        return false;
    }
  }
  _ackTimer() {
    if (this._ackTimerHandle === void 0) {
      this._ackTimerHandle = setTimeout(async () => {
        try {
          if (!this._reconnectInProgress) {
            await this._connection.send(this._protocol.writeMessage({ type: MessageType.Ack, sequenceId: this._latestReceivedSequenceId }));
          }
        } catch {
        }
        clearTimeout(this._ackTimerHandle);
        this._ackTimerHandle = void 0;
      }, 1e3);
    }
  }
}
class BufferedItem {
  constructor(message, id, resolver, rejector) {
    this._message = message;
    this._id = id;
    this._resolver = resolver;
    this._rejector = rejector;
  }
}
const DEFAULT_TIMEOUT_IN_MS = 30 * 1e3;
const DEFAULT_PING_INTERVAL_IN_MS = 15 * 1e3;
const DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE = 1e5;
var HubConnectionState;
(function(HubConnectionState2) {
  HubConnectionState2["Disconnected"] = "Disconnected";
  HubConnectionState2["Connecting"] = "Connecting";
  HubConnectionState2["Connected"] = "Connected";
  HubConnectionState2["Disconnecting"] = "Disconnecting";
  HubConnectionState2["Reconnecting"] = "Reconnecting";
})(HubConnectionState || (HubConnectionState = {}));
class HubConnection {
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(connection, logger2, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
    return new HubConnection(connection, logger2, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize);
  }
  constructor(connection, logger2, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
    this._nextKeepAlive = 0;
    this._freezeEventListener = () => {
      this._logger.log(LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    };
    Arg.isRequired(connection, "connection");
    Arg.isRequired(logger2, "logger");
    Arg.isRequired(protocol, "protocol");
    this.serverTimeoutInMilliseconds = serverTimeoutInMilliseconds !== null && serverTimeoutInMilliseconds !== void 0 ? serverTimeoutInMilliseconds : DEFAULT_TIMEOUT_IN_MS;
    this.keepAliveIntervalInMilliseconds = keepAliveIntervalInMilliseconds !== null && keepAliveIntervalInMilliseconds !== void 0 ? keepAliveIntervalInMilliseconds : DEFAULT_PING_INTERVAL_IN_MS;
    this._statefulReconnectBufferSize = statefulReconnectBufferSize !== null && statefulReconnectBufferSize !== void 0 ? statefulReconnectBufferSize : DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE;
    this._logger = logger2;
    this._protocol = protocol;
    this.connection = connection;
    this._reconnectPolicy = reconnectPolicy;
    this._handshakeProtocol = new HandshakeProtocol();
    this.connection.onreceive = (data2) => this._processIncomingData(data2);
    this.connection.onclose = (error2) => this._connectionClosed(error2);
    this._callbacks = {};
    this._methods = {};
    this._closedCallbacks = [];
    this._reconnectingCallbacks = [];
    this._reconnectedCallbacks = [];
    this._invocationId = 0;
    this._receivedHandshakeResponse = false;
    this._connectionState = HubConnectionState.Disconnected;
    this._connectionStarted = false;
    this._cachedPingMessage = this._protocol.writeMessage({ type: MessageType.Ping });
  }
  /** Indicates the state of the {@link HubConnection} to the server. */
  get state() {
    return this._connectionState;
  }
  /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
   *  in the disconnected state or if the negotiation step was skipped.
   */
  get connectionId() {
    return this.connection ? this.connection.connectionId || null : null;
  }
  /** Indicates the url of the {@link HubConnection} to the server. */
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  /**
   * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
   * Reconnecting states.
   * @param {string} url The url to connect to.
   */
  set baseUrl(url2) {
    if (this._connectionState !== HubConnectionState.Disconnected && this._connectionState !== HubConnectionState.Reconnecting) {
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    }
    if (!url2) {
      throw new Error("The HubConnection url must be a valid url.");
    }
    this.connection.baseUrl = url2;
  }
  /** Starts the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
   */
  start() {
    this._startPromise = this._startWithStateTransitions();
    return this._startPromise;
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== HubConnectionState.Disconnected) {
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    }
    this._connectionState = HubConnectionState.Connecting;
    this._logger.log(LogLevel.Debug, "Starting HubConnection.");
    try {
      await this._startInternal();
      if (Platform.isBrowser) {
        window.document.addEventListener("freeze", this._freezeEventListener);
      }
      this._connectionState = HubConnectionState.Connected;
      this._connectionStarted = true;
      this._logger.log(LogLevel.Debug, "HubConnection connected successfully.");
    } catch (e) {
      this._connectionState = HubConnectionState.Disconnected;
      this._logger.log(LogLevel.Debug, `HubConnection failed to start successfully because of error '${e}'.`);
      return Promise.reject(e);
    }
  }
  async _startInternal() {
    this._stopDuringStartError = void 0;
    this._receivedHandshakeResponse = false;
    const handshakePromise = new Promise((resolve, reject) => {
      this._handshakeResolver = resolve;
      this._handshakeRejecter = reject;
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      let version = this._protocol.version;
      if (!this.connection.features.reconnect) {
        version = 1;
      }
      const handshakeRequest = {
        protocol: this._protocol.name,
        version
      };
      this._logger.log(LogLevel.Debug, "Sending handshake request.");
      await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(handshakeRequest));
      this._logger.log(LogLevel.Information, `Using HubProtocol '${this._protocol.name}'.`);
      this._cleanupTimeout();
      this._resetTimeoutPeriod();
      this._resetKeepAliveInterval();
      await handshakePromise;
      if (this._stopDuringStartError) {
        throw this._stopDuringStartError;
      }
      const useStatefulReconnect = this.connection.features.reconnect || false;
      if (useStatefulReconnect) {
        this._messageBuffer = new MessageBuffer(this._protocol, this.connection, this._statefulReconnectBufferSize);
        this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer);
        this.connection.features.resend = () => {
          if (this._messageBuffer) {
            return this._messageBuffer._resend();
          }
        };
      }
      if (!this.connection.features.inherentKeepAlive) {
        await this._sendMessage(this._cachedPingMessage);
      }
    } catch (e) {
      this._logger.log(LogLevel.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`);
      this._cleanupTimeout();
      this._cleanupPingTimer();
      await this.connection.stop(e);
      throw e;
    }
  }
  /** Stops the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
   */
  async stop() {
    const startPromise = this._startPromise;
    this.connection.features.reconnect = false;
    this._stopPromise = this._stopInternal();
    await this._stopPromise;
    try {
      await startPromise;
    } catch (e) {
    }
  }
  _stopInternal(error2) {
    if (this._connectionState === HubConnectionState.Disconnected) {
      this._logger.log(LogLevel.Debug, `Call to HubConnection.stop(${error2}) ignored because it is already in the disconnected state.`);
      return Promise.resolve();
    }
    if (this._connectionState === HubConnectionState.Disconnecting) {
      this._logger.log(LogLevel.Debug, `Call to HttpConnection.stop(${error2}) ignored because the connection is already in the disconnecting state.`);
      return this._stopPromise;
    }
    const state = this._connectionState;
    this._connectionState = HubConnectionState.Disconnecting;
    this._logger.log(LogLevel.Debug, "Stopping HubConnection.");
    if (this._reconnectDelayHandle) {
      this._logger.log(LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
      clearTimeout(this._reconnectDelayHandle);
      this._reconnectDelayHandle = void 0;
      this._completeClose();
      return Promise.resolve();
    }
    if (state === HubConnectionState.Connected) {
      this._sendCloseMessage();
    }
    this._cleanupTimeout();
    this._cleanupPingTimer();
    this._stopDuringStartError = error2 || new AbortError("The connection was stopped before the hub handshake could complete.");
    return this.connection.stop(error2);
  }
  async _sendCloseMessage() {
    try {
      await this._sendWithProtocol(this._createCloseMessage());
    } catch {
    }
  }
  /** Invokes a streaming hub method on the server using the specified name and arguments.
   *
   * @typeparam T The type of the items returned by the server.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
   */
  stream(methodName, ...args) {
    const [streams, streamIds] = this._replaceStreamingParams(args);
    const invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds);
    let promiseQueue;
    const subject = new Subject();
    subject.cancelCallback = () => {
      const cancelInvocation = this._createCancelInvocation(invocationDescriptor.invocationId);
      delete this._callbacks[invocationDescriptor.invocationId];
      return promiseQueue.then(() => {
        return this._sendWithProtocol(cancelInvocation);
      });
    };
    this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error2) => {
      if (error2) {
        subject.error(error2);
        return;
      } else if (invocationEvent) {
        if (invocationEvent.type === MessageType.Completion) {
          if (invocationEvent.error) {
            subject.error(new Error(invocationEvent.error));
          } else {
            subject.complete();
          }
        } else {
          subject.next(invocationEvent.item);
        }
      }
    };
    promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e) => {
      subject.error(e);
      delete this._callbacks[invocationDescriptor.invocationId];
    });
    this._launchStreams(streams, promiseQueue);
    return subject;
  }
  _sendMessage(message) {
    this._resetKeepAliveInterval();
    return this.connection.send(message);
  }
  /**
   * Sends a js object to the server.
   * @param message The js object to serialize and send.
   */
  _sendWithProtocol(message) {
    if (this._messageBuffer) {
      return this._messageBuffer._send(message);
    } else {
      return this._sendMessage(this._protocol.writeMessage(message));
    }
  }
  /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
   *
   * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
   * be processing the invocation.
   *
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
   */
  send(methodName, ...args) {
    const [streams, streamIds] = this._replaceStreamingParams(args);
    const sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));
    this._launchStreams(streams, sendPromise);
    return sendPromise;
  }
  /** Invokes a hub method on the server using the specified name and arguments.
   *
   * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
   * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
   * resolving the Promise.
   *
   * @typeparam T The expected return type.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
   */
  invoke(methodName, ...args) {
    const [streams, streamIds] = this._replaceStreamingParams(args);
    const invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);
    const p = new Promise((resolve, reject) => {
      this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error2) => {
        if (error2) {
          reject(error2);
          return;
        } else if (invocationEvent) {
          if (invocationEvent.type === MessageType.Completion) {
            if (invocationEvent.error) {
              reject(new Error(invocationEvent.error));
            } else {
              resolve(invocationEvent.result);
            }
          } else {
            reject(new Error(`Unexpected message type: ${invocationEvent.type}`));
          }
        }
      };
      const promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e) => {
        reject(e);
        delete this._callbacks[invocationDescriptor.invocationId];
      });
      this._launchStreams(streams, promiseQueue);
    });
    return p;
  }
  on(methodName, newMethod) {
    if (!methodName || !newMethod) {
      return;
    }
    methodName = methodName.toLowerCase();
    if (!this._methods[methodName]) {
      this._methods[methodName] = [];
    }
    if (this._methods[methodName].indexOf(newMethod) !== -1) {
      return;
    }
    this._methods[methodName].push(newMethod);
  }
  off(methodName, method) {
    if (!methodName) {
      return;
    }
    methodName = methodName.toLowerCase();
    const handlers = this._methods[methodName];
    if (!handlers) {
      return;
    }
    if (method) {
      const removeIdx = handlers.indexOf(method);
      if (removeIdx !== -1) {
        handlers.splice(removeIdx, 1);
        if (handlers.length === 0) {
          delete this._methods[methodName];
        }
      }
    } else {
      delete this._methods[methodName];
    }
  }
  /** Registers a handler that will be invoked when the connection is closed.
   *
   * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
   */
  onclose(callback) {
    if (callback) {
      this._closedCallbacks.push(callback);
    }
  }
  /** Registers a handler that will be invoked when the connection starts reconnecting.
   *
   * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
   */
  onreconnecting(callback) {
    if (callback) {
      this._reconnectingCallbacks.push(callback);
    }
  }
  /** Registers a handler that will be invoked when the connection successfully reconnects.
   *
   * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
   */
  onreconnected(callback) {
    if (callback) {
      this._reconnectedCallbacks.push(callback);
    }
  }
  _processIncomingData(data2) {
    this._cleanupTimeout();
    if (!this._receivedHandshakeResponse) {
      data2 = this._processHandshakeResponse(data2);
      this._receivedHandshakeResponse = true;
    }
    if (data2) {
      const messages = this._protocol.parseMessages(data2, this._logger);
      for (const message of messages) {
        if (this._messageBuffer && !this._messageBuffer._shouldProcessMessage(message)) {
          continue;
        }
        switch (message.type) {
          case MessageType.Invocation:
            this._invokeClientMethod(message).catch((e) => {
              this._logger.log(LogLevel.Error, `Invoke client method threw error: ${getErrorString(e)}`);
            });
            break;
          case MessageType.StreamItem:
          case MessageType.Completion: {
            const callback = this._callbacks[message.invocationId];
            if (callback) {
              if (message.type === MessageType.Completion) {
                delete this._callbacks[message.invocationId];
              }
              try {
                callback(message);
              } catch (e) {
                this._logger.log(LogLevel.Error, `Stream callback threw error: ${getErrorString(e)}`);
              }
            }
            break;
          }
          case MessageType.Ping:
            break;
          case MessageType.Close: {
            this._logger.log(LogLevel.Information, "Close message received from server.");
            const error2 = message.error ? new Error("Server returned an error on close: " + message.error) : void 0;
            if (message.allowReconnect === true) {
              this.connection.stop(error2);
            } else {
              this._stopPromise = this._stopInternal(error2);
            }
            break;
          }
          case MessageType.Ack:
            if (this._messageBuffer) {
              this._messageBuffer._ack(message);
            }
            break;
          case MessageType.Sequence:
            if (this._messageBuffer) {
              this._messageBuffer._resetSequence(message);
            }
            break;
          default:
            this._logger.log(LogLevel.Warning, `Invalid message type: ${message.type}.`);
            break;
        }
      }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(data2) {
    let responseMessage;
    let remainingData;
    try {
      [remainingData, responseMessage] = this._handshakeProtocol.parseHandshakeResponse(data2);
    } catch (e) {
      const message = "Error parsing handshake response: " + e;
      this._logger.log(LogLevel.Error, message);
      const error2 = new Error(message);
      this._handshakeRejecter(error2);
      throw error2;
    }
    if (responseMessage.error) {
      const message = "Server returned handshake error: " + responseMessage.error;
      this._logger.log(LogLevel.Error, message);
      const error2 = new Error(message);
      this._handshakeRejecter(error2);
      throw error2;
    } else {
      this._logger.log(LogLevel.Debug, "Server handshake complete.");
    }
    this._handshakeResolver();
    return remainingData;
  }
  _resetKeepAliveInterval() {
    if (this.connection.features.inherentKeepAlive) {
      return;
    }
    this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds;
    this._cleanupPingTimer();
  }
  _resetTimeoutPeriod() {
    if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
      this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds);
      if (this._pingServerHandle === void 0) {
        let nextPing = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
        if (nextPing < 0) {
          nextPing = 0;
        }
        this._pingServerHandle = setTimeout(async () => {
          if (this._connectionState === HubConnectionState.Connected) {
            try {
              await this._sendMessage(this._cachedPingMessage);
            } catch {
              this._cleanupPingTimer();
            }
          }
        }, nextPing);
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  serverTimeout() {
    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
  }
  async _invokeClientMethod(invocationMessage) {
    const methodName = invocationMessage.target.toLowerCase();
    const methods = this._methods[methodName];
    if (!methods) {
      this._logger.log(LogLevel.Warning, `No client method with the name '${methodName}' found.`);
      if (invocationMessage.invocationId) {
        this._logger.log(LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
        await this._sendWithProtocol(this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null));
      }
      return;
    }
    const methodsCopy = methods.slice();
    const expectsResponse = invocationMessage.invocationId ? true : false;
    let res2;
    let exception;
    let completionMessage;
    for (const m of methodsCopy) {
      try {
        const prevRes = res2;
        res2 = await m.apply(this, invocationMessage.arguments);
        if (expectsResponse && res2 && prevRes) {
          this._logger.log(LogLevel.Error, `Multiple results provided for '${methodName}'. Sending error to server.`);
          completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `Client provided multiple results.`, null);
        }
        exception = void 0;
      } catch (e) {
        exception = e;
        this._logger.log(LogLevel.Error, `A callback for the method '${methodName}' threw error '${e}'.`);
      }
    }
    if (completionMessage) {
      await this._sendWithProtocol(completionMessage);
    } else if (expectsResponse) {
      if (exception) {
        completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `${exception}`, null);
      } else if (res2 !== void 0) {
        completionMessage = this._createCompletionMessage(invocationMessage.invocationId, null, res2);
      } else {
        this._logger.log(LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
        completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null);
      }
      await this._sendWithProtocol(completionMessage);
    } else {
      if (res2) {
        this._logger.log(LogLevel.Error, `Result given for '${methodName}' method but server is not expecting a result.`);
      }
    }
  }
  _connectionClosed(error2) {
    this._logger.log(LogLevel.Debug, `HubConnection.connectionClosed(${error2}) called while in state ${this._connectionState}.`);
    this._stopDuringStartError = this._stopDuringStartError || error2 || new AbortError("The underlying connection was closed before the hub handshake could complete.");
    if (this._handshakeResolver) {
      this._handshakeResolver();
    }
    this._cancelCallbacksWithError(error2 || new Error("Invocation canceled due to the underlying connection being closed."));
    this._cleanupTimeout();
    this._cleanupPingTimer();
    if (this._connectionState === HubConnectionState.Disconnecting) {
      this._completeClose(error2);
    } else if (this._connectionState === HubConnectionState.Connected && this._reconnectPolicy) {
      this._reconnect(error2);
    } else if (this._connectionState === HubConnectionState.Connected) {
      this._completeClose(error2);
    }
  }
  _completeClose(error2) {
    if (this._connectionStarted) {
      this._connectionState = HubConnectionState.Disconnected;
      this._connectionStarted = false;
      if (this._messageBuffer) {
        this._messageBuffer._dispose(error2 !== null && error2 !== void 0 ? error2 : new Error("Connection closed."));
        this._messageBuffer = void 0;
      }
      if (Platform.isBrowser) {
        window.document.removeEventListener("freeze", this._freezeEventListener);
      }
      try {
        this._closedCallbacks.forEach((c) => c.apply(this, [error2]));
      } catch (e) {
        this._logger.log(LogLevel.Error, `An onclose callback called with error '${error2}' threw error '${e}'.`);
      }
    }
  }
  async _reconnect(error2) {
    const reconnectStartTime = Date.now();
    let previousReconnectAttempts = 0;
    let retryError = error2 !== void 0 ? error2 : new Error("Attempting to reconnect due to a unknown error.");
    let nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
    if (nextRetryDelay === null) {
      this._logger.log(LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
      this._completeClose(error2);
      return;
    }
    this._connectionState = HubConnectionState.Reconnecting;
    if (error2) {
      this._logger.log(LogLevel.Information, `Connection reconnecting because of error '${error2}'.`);
    } else {
      this._logger.log(LogLevel.Information, "Connection reconnecting.");
    }
    if (this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((c) => c.apply(this, [error2]));
      } catch (e) {
        this._logger.log(LogLevel.Error, `An onreconnecting callback called with error '${error2}' threw error '${e}'.`);
      }
      if (this._connectionState !== HubConnectionState.Reconnecting) {
        this._logger.log(LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    while (nextRetryDelay !== null) {
      this._logger.log(LogLevel.Information, `Reconnect attempt number ${previousReconnectAttempts} will start in ${nextRetryDelay} ms.`);
      await new Promise((resolve) => {
        this._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
      });
      this._reconnectDelayHandle = void 0;
      if (this._connectionState !== HubConnectionState.Reconnecting) {
        this._logger.log(LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        await this._startInternal();
        this._connectionState = HubConnectionState.Connected;
        this._logger.log(LogLevel.Information, "HubConnection reconnected successfully.");
        if (this._reconnectedCallbacks.length !== 0) {
          try {
            this._reconnectedCallbacks.forEach((c) => c.apply(this, [this.connection.connectionId]));
          } catch (e) {
            this._logger.log(LogLevel.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
          }
        }
        return;
      } catch (e) {
        this._logger.log(LogLevel.Information, `Reconnect attempt failed because of error '${e}'.`);
        if (this._connectionState !== HubConnectionState.Reconnecting) {
          this._logger.log(LogLevel.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`);
          if (this._connectionState === HubConnectionState.Disconnecting) {
            this._completeClose();
          }
          return;
        }
        retryError = e instanceof Error ? e : new Error(e.toString());
        nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
      }
    }
    this._logger.log(LogLevel.Information, `Reconnect retries have been exhausted after ${Date.now() - reconnectStartTime} ms and ${previousReconnectAttempts} failed attempts. Connection disconnecting.`);
    this._completeClose();
  }
  _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds,
        previousRetryCount,
        retryReason
      });
    } catch (e) {
      this._logger.log(LogLevel.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${previousRetryCount}, ${elapsedMilliseconds}) threw error '${e}'.`);
      return null;
    }
  }
  _cancelCallbacksWithError(error2) {
    const callbacks = this._callbacks;
    this._callbacks = {};
    Object.keys(callbacks).forEach((key) => {
      const callback = callbacks[key];
      try {
        callback(null, error2);
      } catch (e) {
        this._logger.log(LogLevel.Error, `Stream 'error' callback called with '${error2}' threw error: ${getErrorString(e)}`);
      }
    });
  }
  _cleanupPingTimer() {
    if (this._pingServerHandle) {
      clearTimeout(this._pingServerHandle);
      this._pingServerHandle = void 0;
    }
  }
  _cleanupTimeout() {
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle);
    }
  }
  _createInvocation(methodName, args, nonblocking, streamIds) {
    if (nonblocking) {
      if (streamIds.length !== 0) {
        return {
          arguments: args,
          streamIds,
          target: methodName,
          type: MessageType.Invocation
        };
      } else {
        return {
          arguments: args,
          target: methodName,
          type: MessageType.Invocation
        };
      }
    } else {
      const invocationId = this._invocationId;
      this._invocationId++;
      if (streamIds.length !== 0) {
        return {
          arguments: args,
          invocationId: invocationId.toString(),
          streamIds,
          target: methodName,
          type: MessageType.Invocation
        };
      } else {
        return {
          arguments: args,
          invocationId: invocationId.toString(),
          target: methodName,
          type: MessageType.Invocation
        };
      }
    }
  }
  _launchStreams(streams, promiseQueue) {
    if (streams.length === 0) {
      return;
    }
    if (!promiseQueue) {
      promiseQueue = Promise.resolve();
    }
    for (const streamId in streams) {
      streams[streamId].subscribe({
        complete: () => {
          promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId)));
        },
        error: (err) => {
          let message;
          if (err instanceof Error) {
            message = err.message;
          } else if (err && err.toString) {
            message = err.toString();
          } else {
            message = "Unknown error";
          }
          promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId, message)));
        },
        next: (item) => {
          promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createStreamItemMessage(streamId, item)));
        }
      });
    }
  }
  _replaceStreamingParams(args) {
    const streams = [];
    const streamIds = [];
    for (let i = 0; i < args.length; i++) {
      const argument = args[i];
      if (this._isObservable(argument)) {
        const streamId = this._invocationId;
        this._invocationId++;
        streams[streamId] = argument;
        streamIds.push(streamId.toString());
        args.splice(i, 1);
      }
    }
    return [streams, streamIds];
  }
  _isObservable(arg) {
    return arg && arg.subscribe && typeof arg.subscribe === "function";
  }
  _createStreamInvocation(methodName, args, streamIds) {
    const invocationId = this._invocationId;
    this._invocationId++;
    if (streamIds.length !== 0) {
      return {
        arguments: args,
        invocationId: invocationId.toString(),
        streamIds,
        target: methodName,
        type: MessageType.StreamInvocation
      };
    } else {
      return {
        arguments: args,
        invocationId: invocationId.toString(),
        target: methodName,
        type: MessageType.StreamInvocation
      };
    }
  }
  _createCancelInvocation(id) {
    return {
      invocationId: id,
      type: MessageType.CancelInvocation
    };
  }
  _createStreamItemMessage(id, item) {
    return {
      invocationId: id,
      item,
      type: MessageType.StreamItem
    };
  }
  _createCompletionMessage(id, error2, result) {
    if (error2) {
      return {
        error: error2,
        invocationId: id,
        type: MessageType.Completion
      };
    }
    return {
      invocationId: id,
      result,
      type: MessageType.Completion
    };
  }
  _createCloseMessage() {
    return { type: MessageType.Close };
  }
}
const DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2e3, 1e4, 3e4, null];
class DefaultReconnectPolicy {
  constructor(retryDelays) {
    this._retryDelays = retryDelays !== void 0 ? [...retryDelays, null] : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
  }
  nextRetryDelayInMilliseconds(retryContext) {
    return this._retryDelays[retryContext.previousRetryCount];
  }
}
class HeaderNames {
}
HeaderNames.Authorization = "Authorization";
HeaderNames.Cookie = "Cookie";
class AccessTokenHttpClient extends HttpClient {
  constructor(innerClient, accessTokenFactory) {
    super();
    this._innerClient = innerClient;
    this._accessTokenFactory = accessTokenFactory;
  }
  async send(request) {
    let allowRetry = true;
    if (this._accessTokenFactory && (!this._accessToken || request.url && request.url.indexOf("/negotiate?") > 0)) {
      allowRetry = false;
      this._accessToken = await this._accessTokenFactory();
    }
    this._setAuthorizationHeader(request);
    const response = await this._innerClient.send(request);
    if (allowRetry && response.statusCode === 401 && this._accessTokenFactory) {
      this._accessToken = await this._accessTokenFactory();
      this._setAuthorizationHeader(request);
      return await this._innerClient.send(request);
    }
    return response;
  }
  _setAuthorizationHeader(request) {
    if (!request.headers) {
      request.headers = {};
    }
    if (this._accessToken) {
      request.headers[HeaderNames.Authorization] = `Bearer ${this._accessToken}`;
    } else if (this._accessTokenFactory) {
      if (request.headers[HeaderNames.Authorization]) {
        delete request.headers[HeaderNames.Authorization];
      }
    }
  }
  getCookieString(url2) {
    return this._innerClient.getCookieString(url2);
  }
}
var HttpTransportType;
(function(HttpTransportType2) {
  HttpTransportType2[HttpTransportType2["None"] = 0] = "None";
  HttpTransportType2[HttpTransportType2["WebSockets"] = 1] = "WebSockets";
  HttpTransportType2[HttpTransportType2["ServerSentEvents"] = 2] = "ServerSentEvents";
  HttpTransportType2[HttpTransportType2["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (HttpTransportType = {}));
var TransferFormat;
(function(TransferFormat2) {
  TransferFormat2[TransferFormat2["Text"] = 1] = "Text";
  TransferFormat2[TransferFormat2["Binary"] = 2] = "Binary";
})(TransferFormat || (TransferFormat = {}));
let AbortController$1 = class AbortController2 {
  constructor() {
    this._isAborted = false;
    this.onabort = null;
  }
  abort() {
    if (!this._isAborted) {
      this._isAborted = true;
      if (this.onabort) {
        this.onabort();
      }
    }
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
};
class LongPollingTransport {
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(httpClient, logger2, options) {
    this._httpClient = httpClient;
    this._logger = logger2;
    this._pollAbort = new AbortController$1();
    this._options = options;
    this._running = false;
    this.onreceive = null;
    this.onclose = null;
  }
  async connect(url2, transferFormat) {
    Arg.isRequired(url2, "url");
    Arg.isRequired(transferFormat, "transferFormat");
    Arg.isIn(transferFormat, TransferFormat, "transferFormat");
    this._url = url2;
    this._logger.log(LogLevel.Trace, "(LongPolling transport) Connecting.");
    if (transferFormat === TransferFormat.Binary && (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    }
    const [name, value] = getUserAgentHeader();
    const headers = { [name]: value, ...this._options.headers };
    const pollOptions = {
      abortSignal: this._pollAbort.signal,
      headers,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    if (transferFormat === TransferFormat.Binary) {
      pollOptions.responseType = "arraybuffer";
    }
    const pollUrl = `${url2}&_=${Date.now()}`;
    this._logger.log(LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
    const response = await this._httpClient.get(pollUrl, pollOptions);
    if (response.statusCode !== 200) {
      this._logger.log(LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
      this._closeError = new HttpError(response.statusText || "", response.statusCode);
      this._running = false;
    } else {
      this._running = true;
    }
    this._receiving = this._poll(this._url, pollOptions);
  }
  async _poll(url2, pollOptions) {
    try {
      while (this._running) {
        try {
          const pollUrl = `${url2}&_=${Date.now()}`;
          this._logger.log(LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
          const response = await this._httpClient.get(pollUrl, pollOptions);
          if (response.statusCode === 204) {
            this._logger.log(LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
            this._running = false;
          } else if (response.statusCode !== 200) {
            this._logger.log(LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
            this._closeError = new HttpError(response.statusText || "", response.statusCode);
            this._running = false;
          } else {
            if (response.content) {
              this._logger.log(LogLevel.Trace, `(LongPolling transport) data received. ${getDataDetail(response.content, this._options.logMessageContent)}.`);
              if (this.onreceive) {
                this.onreceive(response.content);
              }
            } else {
              this._logger.log(LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
            }
          }
        } catch (e) {
          if (!this._running) {
            this._logger.log(LogLevel.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
          } else {
            if (e instanceof TimeoutError) {
              this._logger.log(LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
            } else {
              this._closeError = e;
              this._running = false;
            }
          }
        }
      }
    } finally {
      this._logger.log(LogLevel.Trace, "(LongPolling transport) Polling complete.");
      if (!this.pollAborted) {
        this._raiseOnClose();
      }
    }
  }
  async send(data2) {
    if (!this._running) {
      return Promise.reject(new Error("Cannot send until the transport is connected"));
    }
    return sendMessage(this._logger, "LongPolling", this._httpClient, this._url, data2, this._options);
  }
  async stop() {
    this._logger.log(LogLevel.Trace, "(LongPolling transport) Stopping polling.");
    this._running = false;
    this._pollAbort.abort();
    try {
      await this._receiving;
      this._logger.log(LogLevel.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const headers = {};
      const [name, value] = getUserAgentHeader();
      headers[name] = value;
      const deleteOptions = {
        headers: { ...headers, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      };
      let error2;
      try {
        await this._httpClient.delete(this._url, deleteOptions);
      } catch (err) {
        error2 = err;
      }
      if (error2) {
        if (error2 instanceof HttpError) {
          if (error2.statusCode === 404) {
            this._logger.log(LogLevel.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.");
          } else {
            this._logger.log(LogLevel.Trace, `(LongPolling transport) Error sending a DELETE request: ${error2}`);
          }
        }
      } else {
        this._logger.log(LogLevel.Trace, "(LongPolling transport) DELETE request accepted.");
      }
    } finally {
      this._logger.log(LogLevel.Trace, "(LongPolling transport) Stop finished.");
      this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let logMessage = "(LongPolling transport) Firing onclose event.";
      if (this._closeError) {
        logMessage += " Error: " + this._closeError;
      }
      this._logger.log(LogLevel.Trace, logMessage);
      this.onclose(this._closeError);
    }
  }
}
class ServerSentEventsTransport {
  constructor(httpClient, accessToken, logger2, options) {
    this._httpClient = httpClient;
    this._accessToken = accessToken;
    this._logger = logger2;
    this._options = options;
    this.onreceive = null;
    this.onclose = null;
  }
  async connect(url2, transferFormat) {
    Arg.isRequired(url2, "url");
    Arg.isRequired(transferFormat, "transferFormat");
    Arg.isIn(transferFormat, TransferFormat, "transferFormat");
    this._logger.log(LogLevel.Trace, "(SSE transport) Connecting.");
    this._url = url2;
    if (this._accessToken) {
      url2 += (url2.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`;
    }
    return new Promise((resolve, reject) => {
      let opened = false;
      if (transferFormat !== TransferFormat.Text) {
        reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let eventSource;
      if (Platform.isBrowser || Platform.isWebWorker) {
        eventSource = new this._options.EventSource(url2, { withCredentials: this._options.withCredentials });
      } else {
        const cookies = this._httpClient.getCookieString(url2);
        const headers = {};
        headers.Cookie = cookies;
        const [name, value] = getUserAgentHeader();
        headers[name] = value;
        eventSource = new this._options.EventSource(url2, { withCredentials: this._options.withCredentials, headers: { ...headers, ...this._options.headers } });
      }
      try {
        eventSource.onmessage = (e) => {
          if (this.onreceive) {
            try {
              this._logger.log(LogLevel.Trace, `(SSE transport) data received. ${getDataDetail(e.data, this._options.logMessageContent)}.`);
              this.onreceive(e.data);
            } catch (error2) {
              this._close(error2);
              return;
            }
          }
        };
        eventSource.onerror = (e) => {
          if (opened) {
            this._close();
          } else {
            reject(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
          }
        };
        eventSource.onopen = () => {
          this._logger.log(LogLevel.Information, `SSE connected to ${this._url}`);
          this._eventSource = eventSource;
          opened = true;
          resolve();
        };
      } catch (e) {
        reject(e);
        return;
      }
    });
  }
  async send(data2) {
    if (!this._eventSource) {
      return Promise.reject(new Error("Cannot send until the transport is connected"));
    }
    return sendMessage(this._logger, "SSE", this._httpClient, this._url, data2, this._options);
  }
  stop() {
    this._close();
    return Promise.resolve();
  }
  _close(e) {
    if (this._eventSource) {
      this._eventSource.close();
      this._eventSource = void 0;
      if (this.onclose) {
        this.onclose(e);
      }
    }
  }
}
class WebSocketTransport {
  constructor(httpClient, accessTokenFactory, logger2, logMessageContent, webSocketConstructor, headers) {
    this._logger = logger2;
    this._accessTokenFactory = accessTokenFactory;
    this._logMessageContent = logMessageContent;
    this._webSocketConstructor = webSocketConstructor;
    this._httpClient = httpClient;
    this.onreceive = null;
    this.onclose = null;
    this._headers = headers;
  }
  async connect(url2, transferFormat) {
    Arg.isRequired(url2, "url");
    Arg.isRequired(transferFormat, "transferFormat");
    Arg.isIn(transferFormat, TransferFormat, "transferFormat");
    this._logger.log(LogLevel.Trace, "(WebSockets transport) Connecting.");
    let token2;
    if (this._accessTokenFactory) {
      token2 = await this._accessTokenFactory();
    }
    return new Promise((resolve, reject) => {
      url2 = url2.replace(/^http/, "ws");
      let webSocket;
      const cookies = this._httpClient.getCookieString(url2);
      let opened = false;
      if (Platform.isNode || Platform.isReactNative) {
        const headers = {};
        const [name, value] = getUserAgentHeader();
        headers[name] = value;
        if (token2) {
          headers[HeaderNames.Authorization] = `Bearer ${token2}`;
        }
        if (cookies) {
          headers[HeaderNames.Cookie] = cookies;
        }
        webSocket = new this._webSocketConstructor(url2, void 0, {
          headers: { ...headers, ...this._headers }
        });
      } else {
        if (token2) {
          url2 += (url2.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token2)}`;
        }
      }
      if (!webSocket) {
        webSocket = new this._webSocketConstructor(url2);
      }
      if (transferFormat === TransferFormat.Binary) {
        webSocket.binaryType = "arraybuffer";
      }
      webSocket.onopen = (_event) => {
        this._logger.log(LogLevel.Information, `WebSocket connected to ${url2}.`);
        this._webSocket = webSocket;
        opened = true;
        resolve();
      };
      webSocket.onerror = (event) => {
        let error2 = null;
        if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
          error2 = event.error;
        } else {
          error2 = "There was an error with the transport";
        }
        this._logger.log(LogLevel.Information, `(WebSockets transport) ${error2}.`);
      };
      webSocket.onmessage = (message) => {
        this._logger.log(LogLevel.Trace, `(WebSockets transport) data received. ${getDataDetail(message.data, this._logMessageContent)}.`);
        if (this.onreceive) {
          try {
            this.onreceive(message.data);
          } catch (error2) {
            this._close(error2);
            return;
          }
        }
      };
      webSocket.onclose = (event) => {
        if (opened) {
          this._close(event);
        } else {
          let error2 = null;
          if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
            error2 = event.error;
          } else {
            error2 = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.";
          }
          reject(new Error(error2));
        }
      };
    });
  }
  send(data2) {
    if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
      this._logger.log(LogLevel.Trace, `(WebSockets transport) sending data. ${getDataDetail(data2, this._logMessageContent)}.`);
      this._webSocket.send(data2);
      return Promise.resolve();
    }
    return Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    if (this._webSocket) {
      this._close(void 0);
    }
    return Promise.resolve();
  }
  _close(event) {
    if (this._webSocket) {
      this._webSocket.onclose = () => {
      };
      this._webSocket.onmessage = () => {
      };
      this._webSocket.onerror = () => {
      };
      this._webSocket.close();
      this._webSocket = void 0;
    }
    this._logger.log(LogLevel.Trace, "(WebSockets transport) socket closed.");
    if (this.onclose) {
      if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1e3)) {
        this.onclose(new Error(`WebSocket closed with status code: ${event.code} (${event.reason || "no reason given"}).`));
      } else if (event instanceof Error) {
        this.onclose(event);
      } else {
        this.onclose();
      }
    }
  }
  _isCloseEvent(event) {
    return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
  }
}
const MAX_REDIRECTS = 100;
class HttpConnection {
  constructor(url2, options = {}) {
    this._stopPromiseResolver = () => {
    };
    this.features = {};
    this._negotiateVersion = 1;
    Arg.isRequired(url2, "url");
    this._logger = createLogger$1(options.logger);
    this.baseUrl = this._resolveUrl(url2);
    options = options || {};
    options.logMessageContent = options.logMessageContent === void 0 ? false : options.logMessageContent;
    if (typeof options.withCredentials === "boolean" || options.withCredentials === void 0) {
      options.withCredentials = options.withCredentials === void 0 ? true : options.withCredentials;
    } else {
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    }
    options.timeout = options.timeout === void 0 ? 100 * 1e3 : options.timeout;
    let webSocketModule = null;
    let eventSourceModule = null;
    if (Platform.isNode && typeof require !== "undefined") {
      const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
      webSocketModule = requireFunc("ws");
      eventSourceModule = requireFunc("eventsource");
    }
    if (!Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
      options.WebSocket = WebSocket;
    } else if (Platform.isNode && !options.WebSocket) {
      if (webSocketModule) {
        options.WebSocket = webSocketModule;
      }
    }
    if (!Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
      options.EventSource = EventSource;
    } else if (Platform.isNode && !options.EventSource) {
      if (typeof eventSourceModule !== "undefined") {
        options.EventSource = eventSourceModule;
      }
    }
    this._httpClient = new AccessTokenHttpClient(options.httpClient || new DefaultHttpClient(this._logger), options.accessTokenFactory);
    this._connectionState = "Disconnected";
    this._connectionStarted = false;
    this._options = options;
    this.onreceive = null;
    this.onclose = null;
  }
  async start(transferFormat) {
    transferFormat = transferFormat || TransferFormat.Binary;
    Arg.isIn(transferFormat, TransferFormat, "transferFormat");
    this._logger.log(LogLevel.Debug, `Starting connection with transfer format '${TransferFormat[transferFormat]}'.`);
    if (this._connectionState !== "Disconnected") {
      return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
    }
    this._connectionState = "Connecting";
    this._startInternalPromise = this._startInternal(transferFormat);
    await this._startInternalPromise;
    if (this._connectionState === "Disconnecting") {
      const message = "Failed to start the HttpConnection before stop() was called.";
      this._logger.log(LogLevel.Error, message);
      await this._stopPromise;
      return Promise.reject(new AbortError(message));
    } else if (this._connectionState !== "Connected") {
      const message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      this._logger.log(LogLevel.Error, message);
      return Promise.reject(new AbortError(message));
    }
    this._connectionStarted = true;
  }
  send(data2) {
    if (this._connectionState !== "Connected") {
      return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
    }
    if (!this._sendQueue) {
      this._sendQueue = new TransportSendQueue(this.transport);
    }
    return this._sendQueue.send(data2);
  }
  async stop(error2) {
    if (this._connectionState === "Disconnected") {
      this._logger.log(LogLevel.Debug, `Call to HttpConnection.stop(${error2}) ignored because the connection is already in the disconnected state.`);
      return Promise.resolve();
    }
    if (this._connectionState === "Disconnecting") {
      this._logger.log(LogLevel.Debug, `Call to HttpConnection.stop(${error2}) ignored because the connection is already in the disconnecting state.`);
      return this._stopPromise;
    }
    this._connectionState = "Disconnecting";
    this._stopPromise = new Promise((resolve) => {
      this._stopPromiseResolver = resolve;
    });
    await this._stopInternal(error2);
    await this._stopPromise;
  }
  async _stopInternal(error2) {
    this._stopError = error2;
    try {
      await this._startInternalPromise;
    } catch (e) {
    }
    if (this.transport) {
      try {
        await this.transport.stop();
      } catch (e) {
        this._logger.log(LogLevel.Error, `HttpConnection.transport.stop() threw error '${e}'.`);
        this._stopConnection();
      }
      this.transport = void 0;
    } else {
      this._logger.log(LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
    }
  }
  async _startInternal(transferFormat) {
    let url2 = this.baseUrl;
    this._accessTokenFactory = this._options.accessTokenFactory;
    this._httpClient._accessTokenFactory = this._accessTokenFactory;
    try {
      if (this._options.skipNegotiation) {
        if (this._options.transport === HttpTransportType.WebSockets) {
          this.transport = this._constructTransport(HttpTransportType.WebSockets);
          await this._startTransport(url2, transferFormat);
        } else {
          throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
        }
      } else {
        let negotiateResponse = null;
        let redirects = 0;
        do {
          negotiateResponse = await this._getNegotiationResponse(url2);
          if (this._connectionState === "Disconnecting" || this._connectionState === "Disconnected") {
            throw new AbortError("The connection was stopped during negotiation.");
          }
          if (negotiateResponse.error) {
            throw new Error(negotiateResponse.error);
          }
          if (negotiateResponse.ProtocolVersion) {
            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
          }
          if (negotiateResponse.url) {
            url2 = negotiateResponse.url;
          }
          if (negotiateResponse.accessToken) {
            const accessToken = negotiateResponse.accessToken;
            this._accessTokenFactory = () => accessToken;
            this._httpClient._accessToken = accessToken;
            this._httpClient._accessTokenFactory = void 0;
          }
          redirects++;
        } while (negotiateResponse.url && redirects < MAX_REDIRECTS);
        if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
          throw new Error("Negotiate redirection limit exceeded.");
        }
        await this._createTransport(url2, this._options.transport, negotiateResponse, transferFormat);
      }
      if (this.transport instanceof LongPollingTransport) {
        this.features.inherentKeepAlive = true;
      }
      if (this._connectionState === "Connecting") {
        this._logger.log(LogLevel.Debug, "The HttpConnection connected successfully.");
        this._connectionState = "Connected";
      }
    } catch (e) {
      this._logger.log(LogLevel.Error, "Failed to start the connection: " + e);
      this._connectionState = "Disconnected";
      this.transport = void 0;
      this._stopPromiseResolver();
      return Promise.reject(e);
    }
  }
  async _getNegotiationResponse(url2) {
    const headers = {};
    const [name, value] = getUserAgentHeader();
    headers[name] = value;
    const negotiateUrl = this._resolveNegotiateUrl(url2);
    this._logger.log(LogLevel.Debug, `Sending negotiation request: ${negotiateUrl}.`);
    try {
      const response = await this._httpClient.post(negotiateUrl, {
        content: "",
        headers: { ...headers, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      });
      if (response.statusCode !== 200) {
        return Promise.reject(new Error(`Unexpected status code returned from negotiate '${response.statusCode}'`));
      }
      const negotiateResponse = JSON.parse(response.content);
      if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
        negotiateResponse.connectionToken = negotiateResponse.connectionId;
      }
      if (negotiateResponse.useStatefulReconnect && this._options._useStatefulReconnect !== true) {
        return Promise.reject(new FailedToNegotiateWithServerError("Client didn't negotiate Stateful Reconnect but the server did."));
      }
      return negotiateResponse;
    } catch (e) {
      let errorMessage = "Failed to complete negotiation with the server: " + e;
      if (e instanceof HttpError) {
        if (e.statusCode === 404) {
          errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
        }
      }
      this._logger.log(LogLevel.Error, errorMessage);
      return Promise.reject(new FailedToNegotiateWithServerError(errorMessage));
    }
  }
  _createConnectUrl(url2, connectionToken) {
    if (!connectionToken) {
      return url2;
    }
    return url2 + (url2.indexOf("?") === -1 ? "?" : "&") + `id=${connectionToken}`;
  }
  async _createTransport(url2, requestedTransport, negotiateResponse, requestedTransferFormat) {
    let connectUrl = this._createConnectUrl(url2, negotiateResponse.connectionToken);
    if (this._isITransport(requestedTransport)) {
      this._logger.log(LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
      this.transport = requestedTransport;
      await this._startTransport(connectUrl, requestedTransferFormat);
      this.connectionId = negotiateResponse.connectionId;
      return;
    }
    const transportExceptions = [];
    const transports = negotiateResponse.availableTransports || [];
    let negotiate = negotiateResponse;
    for (const endpoint of transports) {
      const transportOrError = this._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, (negotiate === null || negotiate === void 0 ? void 0 : negotiate.useStatefulReconnect) === true);
      if (transportOrError instanceof Error) {
        transportExceptions.push(`${endpoint.transport} failed:`);
        transportExceptions.push(transportOrError);
      } else if (this._isITransport(transportOrError)) {
        this.transport = transportOrError;
        if (!negotiate) {
          try {
            negotiate = await this._getNegotiationResponse(url2);
          } catch (ex) {
            return Promise.reject(ex);
          }
          connectUrl = this._createConnectUrl(url2, negotiate.connectionToken);
        }
        try {
          await this._startTransport(connectUrl, requestedTransferFormat);
          this.connectionId = negotiate.connectionId;
          return;
        } catch (ex) {
          this._logger.log(LogLevel.Error, `Failed to start the transport '${endpoint.transport}': ${ex}`);
          negotiate = void 0;
          transportExceptions.push(new FailedToStartTransportError(`${endpoint.transport} failed: ${ex}`, HttpTransportType[endpoint.transport]));
          if (this._connectionState !== "Connecting") {
            const message = "Failed to select transport before stop() was called.";
            this._logger.log(LogLevel.Debug, message);
            return Promise.reject(new AbortError(message));
          }
        }
      }
    }
    if (transportExceptions.length > 0) {
      return Promise.reject(new AggregateErrors(`Unable to connect to the server with any of the available transports. ${transportExceptions.join(" ")}`, transportExceptions));
    }
    return Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(transport) {
    switch (transport) {
      case HttpTransportType.WebSockets:
        if (!this._options.WebSocket) {
          throw new Error("'WebSocket' is not supported in your environment.");
        }
        return new WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case HttpTransportType.ServerSentEvents:
        if (!this._options.EventSource) {
          throw new Error("'EventSource' is not supported in your environment.");
        }
        return new ServerSentEventsTransport(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
      case HttpTransportType.LongPolling:
        return new LongPollingTransport(this._httpClient, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${transport}.`);
    }
  }
  _startTransport(url2, transferFormat) {
    this.transport.onreceive = this.onreceive;
    if (this.features.reconnect) {
      this.transport.onclose = async (e) => {
        let callStop = false;
        if (this.features.reconnect) {
          try {
            this.features.disconnected();
            await this.transport.connect(url2, transferFormat);
            await this.features.resend();
          } catch {
            callStop = true;
          }
        } else {
          this._stopConnection(e);
          return;
        }
        if (callStop) {
          this._stopConnection(e);
        }
      };
    } else {
      this.transport.onclose = (e) => this._stopConnection(e);
    }
    return this.transport.connect(url2, transferFormat);
  }
  _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, useStatefulReconnect) {
    const transport = HttpTransportType[endpoint.transport];
    if (transport === null || transport === void 0) {
      this._logger.log(LogLevel.Debug, `Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
      return new Error(`Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
    } else {
      if (transportMatches(requestedTransport, transport)) {
        const transferFormats = endpoint.transferFormats.map((s) => TransferFormat[s]);
        if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
          if (transport === HttpTransportType.WebSockets && !this._options.WebSocket || transport === HttpTransportType.ServerSentEvents && !this._options.EventSource) {
            this._logger.log(LogLevel.Debug, `Skipping transport '${HttpTransportType[transport]}' because it is not supported in your environment.'`);
            return new UnsupportedTransportError(`'${HttpTransportType[transport]}' is not supported in your environment.`, transport);
          } else {
            this._logger.log(LogLevel.Debug, `Selecting transport '${HttpTransportType[transport]}'.`);
            try {
              this.features.reconnect = transport === HttpTransportType.WebSockets ? useStatefulReconnect : void 0;
              return this._constructTransport(transport);
            } catch (ex) {
              return ex;
            }
          }
        } else {
          this._logger.log(LogLevel.Debug, `Skipping transport '${HttpTransportType[transport]}' because it does not support the requested transfer format '${TransferFormat[requestedTransferFormat]}'.`);
          return new Error(`'${HttpTransportType[transport]}' does not support ${TransferFormat[requestedTransferFormat]}.`);
        }
      } else {
        this._logger.log(LogLevel.Debug, `Skipping transport '${HttpTransportType[transport]}' because it was disabled by the client.`);
        return new DisabledTransportError(`'${HttpTransportType[transport]}' is disabled by the client.`, transport);
      }
    }
  }
  _isITransport(transport) {
    return transport && typeof transport === "object" && "connect" in transport;
  }
  _stopConnection(error2) {
    this._logger.log(LogLevel.Debug, `HttpConnection.stopConnection(${error2}) called while in state ${this._connectionState}.`);
    this.transport = void 0;
    error2 = this._stopError || error2;
    this._stopError = void 0;
    if (this._connectionState === "Disconnected") {
      this._logger.log(LogLevel.Debug, `Call to HttpConnection.stopConnection(${error2}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting") {
      this._logger.log(LogLevel.Warning, `Call to HttpConnection.stopConnection(${error2}) was ignored because the connection is still in the connecting state.`);
      throw new Error(`HttpConnection.stopConnection(${error2}) was called while the connection is still in the connecting state.`);
    }
    if (this._connectionState === "Disconnecting") {
      this._stopPromiseResolver();
    }
    if (error2) {
      this._logger.log(LogLevel.Error, `Connection disconnected with error '${error2}'.`);
    } else {
      this._logger.log(LogLevel.Information, "Connection disconnected.");
    }
    if (this._sendQueue) {
      this._sendQueue.stop().catch((e) => {
        this._logger.log(LogLevel.Error, `TransportSendQueue.stop() threw error '${e}'.`);
      });
      this._sendQueue = void 0;
    }
    this.connectionId = void 0;
    this._connectionState = "Disconnected";
    if (this._connectionStarted) {
      this._connectionStarted = false;
      try {
        if (this.onclose) {
          this.onclose(error2);
        }
      } catch (e) {
        this._logger.log(LogLevel.Error, `HttpConnection.onclose(${error2}) threw error '${e}'.`);
      }
    }
  }
  _resolveUrl(url2) {
    if (url2.lastIndexOf("https://", 0) === 0 || url2.lastIndexOf("http://", 0) === 0) {
      return url2;
    }
    if (!Platform.isBrowser) {
      throw new Error(`Cannot resolve '${url2}'.`);
    }
    const aTag = window.document.createElement("a");
    aTag.href = url2;
    this._logger.log(LogLevel.Information, `Normalizing '${url2}' to '${aTag.href}'.`);
    return aTag.href;
  }
  _resolveNegotiateUrl(url2) {
    const negotiateUrl = new URL(url2);
    if (negotiateUrl.pathname.endsWith("/")) {
      negotiateUrl.pathname += "negotiate";
    } else {
      negotiateUrl.pathname += "/negotiate";
    }
    const searchParams = new URLSearchParams(negotiateUrl.searchParams);
    if (!searchParams.has("negotiateVersion")) {
      searchParams.append("negotiateVersion", this._negotiateVersion.toString());
    }
    if (searchParams.has("useStatefulReconnect")) {
      if (searchParams.get("useStatefulReconnect") === "true") {
        this._options._useStatefulReconnect = true;
      }
    } else if (this._options._useStatefulReconnect === true) {
      searchParams.append("useStatefulReconnect", "true");
    }
    negotiateUrl.search = searchParams.toString();
    return negotiateUrl.toString();
  }
}
function transportMatches(requestedTransport, actualTransport) {
  return !requestedTransport || (actualTransport & requestedTransport) !== 0;
}
class TransportSendQueue {
  constructor(_transport) {
    this._transport = _transport;
    this._buffer = [];
    this._executing = true;
    this._sendBufferedData = new PromiseSource();
    this._transportResult = new PromiseSource();
    this._sendLoopPromise = this._sendLoop();
  }
  send(data2) {
    this._bufferData(data2);
    if (!this._transportResult) {
      this._transportResult = new PromiseSource();
    }
    return this._transportResult.promise;
  }
  stop() {
    this._executing = false;
    this._sendBufferedData.resolve();
    return this._sendLoopPromise;
  }
  _bufferData(data2) {
    if (this._buffer.length && typeof this._buffer[0] !== typeof data2) {
      throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof data2}`);
    }
    this._buffer.push(data2);
    this._sendBufferedData.resolve();
  }
  async _sendLoop() {
    while (true) {
      await this._sendBufferedData.promise;
      if (!this._executing) {
        if (this._transportResult) {
          this._transportResult.reject("Connection stopped.");
        }
        break;
      }
      this._sendBufferedData = new PromiseSource();
      const transportResult = this._transportResult;
      this._transportResult = void 0;
      const data2 = typeof this._buffer[0] === "string" ? this._buffer.join("") : TransportSendQueue._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        await this._transport.send(data2);
        transportResult.resolve();
      } catch (error2) {
        transportResult.reject(error2);
      }
    }
  }
  static _concatBuffers(arrayBuffers) {
    const totalLength = arrayBuffers.map((b) => b.byteLength).reduce((a, b) => a + b);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const item of arrayBuffers) {
      result.set(new Uint8Array(item), offset);
      offset += item.byteLength;
    }
    return result.buffer;
  }
}
class PromiseSource {
  constructor() {
    this.promise = new Promise((resolve, reject) => [this._resolver, this._rejecter] = [resolve, reject]);
  }
  resolve() {
    this._resolver();
  }
  reject(reason) {
    this._rejecter(reason);
  }
}
const JSON_HUB_PROTOCOL_NAME = "json";
class JsonHubProtocol {
  constructor() {
    this.name = JSON_HUB_PROTOCOL_NAME;
    this.version = 2;
    this.transferFormat = TransferFormat.Text;
  }
  /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
   *
   * @param {string} input A string containing the serialized representation.
   * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
   */
  parseMessages(input, logger2) {
    if (typeof input !== "string") {
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    }
    if (!input) {
      return [];
    }
    if (logger2 === null) {
      logger2 = NullLogger.instance;
    }
    const messages = TextMessageFormat.parse(input);
    const hubMessages = [];
    for (const message of messages) {
      const parsedMessage = JSON.parse(message);
      if (typeof parsedMessage.type !== "number") {
        throw new Error("Invalid payload.");
      }
      switch (parsedMessage.type) {
        case MessageType.Invocation:
          this._isInvocationMessage(parsedMessage);
          break;
        case MessageType.StreamItem:
          this._isStreamItemMessage(parsedMessage);
          break;
        case MessageType.Completion:
          this._isCompletionMessage(parsedMessage);
          break;
        case MessageType.Ping:
          break;
        case MessageType.Close:
          break;
        case MessageType.Ack:
          this._isAckMessage(parsedMessage);
          break;
        case MessageType.Sequence:
          this._isSequenceMessage(parsedMessage);
          break;
        default:
          logger2.log(LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
          continue;
      }
      hubMessages.push(parsedMessage);
    }
    return hubMessages;
  }
  /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
   *
   * @param {HubMessage} message The message to write.
   * @returns {string} A string containing the serialized representation of the message.
   */
  writeMessage(message) {
    return TextMessageFormat.write(JSON.stringify(message));
  }
  _isInvocationMessage(message) {
    this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
    if (message.invocationId !== void 0) {
      this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
    }
  }
  _isStreamItemMessage(message) {
    this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
    if (message.item === void 0) {
      throw new Error("Invalid payload for StreamItem message.");
    }
  }
  _isCompletionMessage(message) {
    if (message.result && message.error) {
      throw new Error("Invalid payload for Completion message.");
    }
    if (!message.result && message.error) {
      this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
    }
    this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
  }
  _isAckMessage(message) {
    if (typeof message.sequenceId !== "number") {
      throw new Error("Invalid SequenceId for Ack message.");
    }
  }
  _isSequenceMessage(message) {
    if (typeof message.sequenceId !== "number") {
      throw new Error("Invalid SequenceId for Sequence message.");
    }
  }
  _assertNotEmptyString(value, errorMessage) {
    if (typeof value !== "string" || value === "") {
      throw new Error(errorMessage);
    }
  }
}
const LogLevelNameMapping = {
  trace: LogLevel.Trace,
  debug: LogLevel.Debug,
  info: LogLevel.Information,
  information: LogLevel.Information,
  warn: LogLevel.Warning,
  warning: LogLevel.Warning,
  error: LogLevel.Error,
  critical: LogLevel.Critical,
  none: LogLevel.None
};
function parseLogLevel(name) {
  const mapping = LogLevelNameMapping[name.toLowerCase()];
  if (typeof mapping !== "undefined") {
    return mapping;
  } else {
    throw new Error(`Unknown log level: ${name}`);
  }
}
class HubConnectionBuilder {
  configureLogging(logging) {
    Arg.isRequired(logging, "logging");
    if (isLogger(logging)) {
      this.logger = logging;
    } else if (typeof logging === "string") {
      const logLevel = parseLogLevel(logging);
      this.logger = new ConsoleLogger(logLevel);
    } else {
      this.logger = new ConsoleLogger(logging);
    }
    return this;
  }
  withUrl(url2, transportTypeOrOptions) {
    Arg.isRequired(url2, "url");
    Arg.isNotEmpty(url2, "url");
    this.url = url2;
    if (typeof transportTypeOrOptions === "object") {
      this.httpConnectionOptions = { ...this.httpConnectionOptions, ...transportTypeOrOptions };
    } else {
      this.httpConnectionOptions = {
        ...this.httpConnectionOptions,
        transport: transportTypeOrOptions
      };
    }
    return this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(protocol) {
    Arg.isRequired(protocol, "protocol");
    this.protocol = protocol;
    return this;
  }
  withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
    if (this.reconnectPolicy) {
      throw new Error("A reconnectPolicy has already been set.");
    }
    if (!retryDelaysOrReconnectPolicy) {
      this.reconnectPolicy = new DefaultReconnectPolicy();
    } else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
      this.reconnectPolicy = new DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
    } else {
      this.reconnectPolicy = retryDelaysOrReconnectPolicy;
    }
    return this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withServerTimeout(milliseconds) {
    Arg.isRequired(milliseconds, "milliseconds");
    this._serverTimeoutInMilliseconds = milliseconds;
    return this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withKeepAliveInterval(milliseconds) {
    Arg.isRequired(milliseconds, "milliseconds");
    this._keepAliveIntervalInMilliseconds = milliseconds;
    return this;
  }
  /** Enables and configures options for the Stateful Reconnect feature.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withStatefulReconnect(options) {
    if (this.httpConnectionOptions === void 0) {
      this.httpConnectionOptions = {};
    }
    this.httpConnectionOptions._useStatefulReconnect = true;
    this._statefulReconnectBufferSize = options === null || options === void 0 ? void 0 : options.bufferSize;
    return this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const httpConnectionOptions = this.httpConnectionOptions || {};
    if (httpConnectionOptions.logger === void 0) {
      httpConnectionOptions.logger = this.logger;
    }
    if (!this.url) {
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    }
    const connection = new HttpConnection(this.url, httpConnectionOptions);
    return HubConnection.create(connection, this.logger || NullLogger.instance, this.protocol || new JsonHubProtocol(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
  }
}
function isLogger(logger2) {
  return logger2.log !== void 0;
}
const connections = {};
function getOrCreateConnection(hubUrl) {
  if (!connections[hubUrl]) {
    const conn = new HubConnectionBuilder().withUrl(hubUrl).withAutomaticReconnect().build();
    connections[hubUrl] = conn;
  }
  return connections[hubUrl];
}
async function startConnection(hubUrl) {
  const conn = getOrCreateConnection(hubUrl);
  if (conn.state !== "Connected") {
    await conn.start();
  }
  return conn;
}
function addEventHandler(hubUrl, event, handler) {
  const conn = getOrCreateConnection(hubUrl);
  conn.on(event, handler);
}
function stopConnection(hubUrl) {
  const conn = connections[hubUrl];
  if (conn) {
    conn.stop();
    delete connections[hubUrl];
  }
}
const signalRService = {
  addEventHandler,
  startConnection,
  stopConnection
};
const router = user_mf_2_management__loadShare__vue_mf_2_router__loadShare__.createRouter({
  history: user_mf_2_management__loadShare__vue_mf_2_router__loadShare__.createWebHistory("/"),
  routes: []
});
let setRoutesFunc = null;
function setBeforeEach(func) {
  router.beforeEach((to, from, next) => {
    func(to, from, next);
  });
}
function setAfterEach(func) {
  router.afterEach((to, from, next) => {
    func(to, from, next);
  });
}
function currentRoute() {
  return router.currentRoute.value;
}
async function setSetRoutes(func) {
  setRoutesFunc = func;
  if (authService.isLoggedIn.value)
    await func();
}
async function setRoutes() {
  if (setRoutesFunc)
    await setRoutesFunc();
}
const routingService = {
  router,
  setRoutes,
  setBeforeEach,
  currentRoute,
  setAfterEach,
  setSetRoutes
};
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
const errorBus = mitt();
console.log("init");
const lock$1 = new CrossTabLock({
  lockKey: "auth_refresh_lock",
  guid: "fetch-service",
  lockTtl: 15e3
});
async function fetchService(url2, method = "GET", headers = {}, body, skipAuth = false) {
  try {
    return await tryFetch(url2, method, headers, body, skipAuth);
  } catch (error2) {
    if (error2 instanceof Error && error2.message.includes("401") && !skipAuth) {
      if (lock$1.isLockedPublic()) {
        await lock$1.waitForUnlock();
        let newToken = authService.getToken();
        if (newToken) {
          return await tryFetch(url2, method, headers, body);
        }
      }
      const refreshed = await authService.tryRefreshToken();
      if (refreshed) {
        return await tryFetch(url2, method, headers, body);
      } else {
        authService.logout();
        throw new Error("Session expired, please log in again.");
      }
    }
    throw error2;
  }
}
async function tryFetch(url2, method = "GET", headers = {}, body, skipAuth = false) {
  const finalHeaders = {
    "Content-Type": "application/json",
    "Accept": "*/*",
    ...!skipAuth && authService.getToken() ? { "Authorization": "Bearer " + authService.getToken() } : {},
    ...headers
  };
  const options = {
    method,
    headers: finalHeaders,
    credentials: "include"
  };
  if (body && method !== "GET") {
    options.body = JSON.stringify(body);
  }
  try {
    const response = await fetch(url2.toString(), options);
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Unauthorized access: 401");
      }
      const errorText = await response.json();
      throw new Error(`${errorText.message}`);
    }
    if (response.status === 204)
      return {};
    let res2 = await response.json();
    if (res2.messages?.length) {
      console.log(res2.messages[0]);
      errorBus.emit("error", res2.messages[0].code ?? "An unknown error occurred");
      return {};
    } else
      return res2;
  } catch (error2) {
    throw error2;
  }
}
const translations = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
const translationDataSource = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
const currentLangId = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
async function loadTranslations(langId) {
  try {
    if (!translationDataSource.value) {
      translationDataSource.value = new DataSource({
        name: "utl/translations",
        method: "GET",
        isRealDS: true,
        skipAuth: true
      });
    }
    translationDataSource.value.getQueryParams = () => ({ langId });
    const response = await translationDataSource.value.retrieveData();
    response.data.forEach((t) => {
      t.languageId = langId;
    });
    translations.value.splice(0, translations.value.length, ...response.data);
    currentLangId.value = langId;
  } catch (error2) {
    console.error("Failed to load translations:", error2);
    translations.value = [];
  }
}
async function setLanguage(langId) {
  if (currentLangId.value !== langId) {
    await loadTranslations(langId).catch((error2) => console.error("Error loading translations:", error2));
  }
}
function translate(key, returnKeyIfNull = true) {
  const match = translations.value.find((t) => t.key === key);
  return match?.value || (returnKeyIfNull ? key : "");
}
const translationService = {
  loadTranslations,
  translate,
  translations,
  setLanguage
};
function isObject$1(val) {
  return val && typeof val === "object" && !Array.isArray(val);
}
function deepTranslate(obj, pathParts, translateFn) {
  if (!obj)
    return;
  const [currentKey, ...restPath] = pathParts;
  if (Array.isArray(obj)) {
    for (const item of obj) {
      deepTranslate(item, pathParts, translateFn);
    }
    return;
  }
  if (restPath.length === 0) {
    if (currentKey in obj && typeof obj[currentKey] === "string") {
      obj[currentKey] = translateFn(obj[currentKey]);
    }
  } else {
    const next = obj[currentKey];
    if (Array.isArray(next)) {
      for (const item of next) {
        deepTranslate(item, restPath, translateFn);
      }
    } else if (isObject$1(next)) {
      deepTranslate(next, restPath, translateFn);
    }
  }
}
class DataSource {
  name;
  method;
  cacheEnabled;
  dataSourceToRemoveFromCache;
  isRealDS = false;
  baseUrl = "https://localhost:7241/";
  skipAuth = false;
  getUrlParams;
  getQueryParams;
  getBodyParams;
  urlParams = null;
  queryParams = null;
  bodyParams = null;
  translatableResponseFields = [];
  constructor(options) {
    this.name = options.name;
    this.method = options.method;
    this.skipAuth = options.skipAuth ?? false;
    this.cacheEnabled = options.cacheEnabled ?? false;
    this.isRealDS = options.isRealDS ?? false;
    this.baseUrl = options.baseUrl ?? this.baseUrl;
    this.getUrlParams = options.getUrlParams;
    this.getQueryParams = options.getQueryParams;
    this.getBodyParams = options.getBodyParams;
    this.translatableResponseFields = options.translatableResponseFields ?? [];
  }
  setUrlParams() {
    this.urlParams = this.getUrlParams ? this.getUrlParams() : null;
  }
  setQueryParams() {
    this.queryParams = this.getQueryParams ? this.getQueryParams() : null;
  }
  setBodyParams() {
    this.bodyParams = this.getBodyParams ? this.getBodyParams() : null;
  }
  async applyTranslation(result) {
    if (!result || !this.translatableResponseFields.length)
      return result;
    const cloned = structuredClone(result);
    for (const path2 of this.translatableResponseFields) {
      const parts = path2.split(".");
      deepTranslate(cloned, parts, translationService.translate);
    }
    return cloned;
  }
  async retrieveData(onSuccess, onError) {
    this.setUrlParams();
    this.setQueryParams();
    this.setBodyParams();
    let url2 = this.baseUrl;
    let body;
    if (this.isRealDS) {
      url2 += this.name;
      if (this.urlParams) {
        Object.keys(this.urlParams).forEach((param) => {
          url2 = url2.replace(`{${param}}`, this.urlParams[param]);
        });
      }
      if (this.queryParams) {
        const queryString = Object.entries(this.queryParams).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
        if (queryString)
          url2 += `?${queryString}`;
      }
      body = this.bodyParams;
    } else {
      url2 += "utl";
      body = {
        name: this.name,
        urlParams: this.getUrlParams?.() ?? null,
        queryParams: this.getQueryParams?.() ?? null,
        bodyParams: this.getBodyParams?.() ?? null
      };
    }
    try {
      const result = await fetchService(
        url2,
        this.isRealDS ? this.method : "POST",
        {},
        body,
        this.skipAuth
      );
      const translatedResult = await this.applyTranslation(result);
      if (onSuccess)
        onSuccess(translatedResult);
      return translatedResult;
    } catch (err) {
      if (onError)
        onError(err);
      return void 0;
    }
  }
}
const appSettings = user_mf_2_management__loadShare__vue__loadShare__.ref({});
const userSettings = user_mf_2_management__loadShare__vue__loadShare__.ref({});
const activeModules = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
const languages = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
const dateTimeFormats = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
const decimalSeperators = user_mf_2_management__loadShare__vue__loadShare__.ref([]);
user_mf_2_management__loadShare__vue__loadShare__.computed(() => userSettings.value?.language?.id ?? appSettings.value?.language?.id ?? 1);
user_mf_2_management__loadShare__vue__loadShare__.computed(() => userSettings.value?.dateFormat?.id ?? appSettings.value?.dateFormat?.id ?? 1);
user_mf_2_management__loadShare__vue__loadShare__.computed(() => userSettings.value?.decimalSeperator?.id ?? appSettings.value?.decimalSeperator?.id ?? 1);
const modulesDataSource = new DataSource({
  name: "utl/modules",
  method: "GET",
  isRealDS: true,
  skipAuth: true
});
const applicationSettingsDataSource = new DataSource({
  name: "utl/applicationSettings",
  method: "GET",
  isRealDS: true,
  skipAuth: true
});
const languagesDataSource = new DataSource({
  name: "utl/languages",
  method: "GET",
  isRealDS: true,
  skipAuth: true
});
const dateTimeFormatsDataSource = new DataSource({
  name: "utl/dateTimeFormats",
  method: "GET",
  isRealDS: true,
  skipAuth: true
});
const decimalSeperatorsDataSource = new DataSource({
  name: "utl/decimalSeperators",
  method: "GET",
  isRealDS: true,
  skipAuth: true
});
async function setUserSettings(languageId2, dateTimeFormatId, decimalSeperatorId) {
  userSettings.value.language = languages.value.find((l) => l.id == languageId2);
  userSettings.value.dateFormat = dateTimeFormats.value.find((l) => l.id == dateTimeFormatId);
  userSettings.value.decimalSeperator = decimalSeperators.value.find((l) => l.id == decimalSeperatorId);
  await translationService.setLanguage(languageId2 ?? userSettings.value.language?.id ?? appSettings.value.language?.id ?? 1);
}
async function setAppSettings(languageId2, dateTimeFormatId, decimalSeperatorId) {
  appSettings.value.language = languages.value.find((l) => l.id == languageId2);
  appSettings.value.dateFormat = dateTimeFormats.value.find((l) => l.id == dateTimeFormatId);
  appSettings.value.decimalSeperator = decimalSeperators.value.find((l) => l.id == decimalSeperatorId);
  if (!userSettings.value.language)
    await translationService.setLanguage(languageId2 ?? appSettings.value.language?.id ?? appSettings.value.language?.id ?? 1);
}
async function loadApplicationSettings() {
  try {
    modulesDataSource.retrieveData((res2) => {
      activeModules.value = res2.data ?? [];
    });
    applicationSettingsDataSource.retrieveData((res2) => {
      appSettings.value = res2.data ?? {};
      translationService.setLanguage(appSettings.value.language?.id ?? 1);
    });
    languagesDataSource.retrieveData((res2) => {
      languages.value = res2.data ?? [];
    });
    dateTimeFormatsDataSource.retrieveData((res2) => {
      dateTimeFormats.value = res2.data ?? [];
    });
    decimalSeperatorsDataSource.retrieveData((res2) => {
      decimalSeperators.value = res2.data ?? [];
    });
  } catch (error2) {
    console.error("Failed to load application settings:", error2);
    appSettings.value = {};
    languages.value = [];
    dateTimeFormats.value = [];
    decimalSeperators.value = [];
  }
}
loadApplicationSettings();
const settingsService = {
  appSettings,
  languages,
  dateTimeFormats,
  decimalSeperators,
  setUserSettings,
  setAppSettings,
  userSettings,
  activeModules
};
const PAGE_GUID = crypto.randomUUID();
const token = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
const username = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
const defaultPage = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
const languageId = user_mf_2_management__loadShare__vue__loadShare__.ref(null);
const isLoaded$1 = user_mf_2_management__loadShare__vue__loadShare__.ref(false);
const loadedCallbacks = [];
const isDomainUser = user_mf_2_management__loadShare__vue__loadShare__.ref(false);
const isLoggedIn = user_mf_2_management__loadShare__vue__loadShare__.computed(() => !!token.value);
const currentUser = user_mf_2_management__loadShare__vue__loadShare__.computed(() => username.value);
const userDefaultPage = user_mf_2_management__loadShare__vue__loadShare__.computed(() => defaultPage.value);
const isUserDomain = user_mf_2_management__loadShare__vue__loadShare__.computed(() => isDomainUser.value);
const authChannel = new BroadcastChannel("auth_channel");
const lock = new CrossTabLock({
  lockKey: "auth_refresh_lock",
  lockTtl: 15 * 1e3,
  guid: PAGE_GUID,
  verifyDelay: 80
});
let refreshPromise = null;
const loginDataSource = new DataSource({
  name: "auth/login",
  method: "POST",
  isRealDS: true,
  getBodyParams: () => loginCredentials.value,
  skipAuth: true
});
const logoutDataSource = new DataSource({
  name: "auth/logout",
  method: "POST",
  isRealDS: true
});
const loginCredentials = user_mf_2_management__loadShare__vue__loadShare__.ref({ username: "", password: "" });
function broadcastAuthEvent(event, data2 = { guid: PAGE_GUID }) {
  authChannel.postMessage({ event, ...data2 });
}
async function saveAuth(skipTriggeringEvents = false) {
  await routingService.setRoutes();
  if (routingService.router.currentRoute.value.path == "/login") {
    const redirectPath = routingService.router?.currentRoute.value.query.redirect;
    if (redirectPath) {
      routingService.router?.push(redirectPath);
    } else if (routingService.router) {
      routingService.router.push(authService.userDefaultPage.value || "/");
    }
  }
  if (!skipTriggeringEvents)
    authChannel.postMessage({ event: "login", jwt: token.value, langId: languageId.value, homePage: defaultPage.value });
}
function getToken() {
  return token.value;
}
function onLoaded(cb2) {
  if (isLoaded$1.value)
    cb2();
  loadedCallbacks.push(cb2);
}
async function login(user, pass, success, error2) {
  try {
    loginCredentials.value = { username: user, password: pass };
    const result = await loginDataSource.retrieveData(
      (res2) => {
        success(res2);
      },
      (err) => {
        error2(err);
      }
    );
    if (!result)
      return;
    const { token: jwt, username: usrName, homePage, isDomainUser: isDomain, languageId: langId } = result;
    token.value = jwt;
    username.value = usrName;
    defaultPage.value = homePage;
    languageId.value = langId;
    isDomainUser.value = isDomain;
    await settingsService.setUserSettings(languageId.value, null, null);
    await markLoaded();
    await saveAuth();
    success(result);
  } catch (err) {
    console.error("Login error:", err);
    error2(err);
  }
}
async function tryRefreshToken() {
  let waited = 0;
  while (true) {
    const acquired = await lock.acquire();
    if (acquired)
      break;
    await lock.waitForUnlock();
    waited += 200;
    if (getToken())
      return true;
    if (waited > 15e3)
      return false;
  }
  authChannel.postMessage({ event: "refresh_started" });
  if (refreshPromise) {
    lock.release();
    return refreshPromise;
  }
  refreshPromise = (async () => {
    try {
      const res2 = await fetch("https://localhost:7241/auth/refresh", {
        method: "POST",
        credentials: "include"
      });
      if (!res2.ok) {
        authChannel.postMessage({ event: "refresh_failed" });
        lock.release();
        return false;
      }
      const { token: jwt, username: usrName, homePage, isDomainUser: isDomain, languageId: langId } = await res2.json();
      let oldToken = token.value;
      token.value = jwt;
      username.value = usrName;
      defaultPage.value = homePage;
      isDomainUser.value = isDomain;
      languageId.value = langId;
      await settingsService.setUserSettings(languageId.value, null, null);
      if (!oldToken) {
        await markLoaded();
        await saveAuth(true);
      }
      authChannel.postMessage({ event: "refresh_done", jwt: token.value });
      lock.release();
      return true;
    } catch (err) {
      authChannel.postMessage({ event: "refresh_failed" });
      lock.release();
      return false;
    } finally {
      refreshPromise = null;
    }
  })();
  return await refreshPromise;
}
async function autologout(skipTriggeringEvents = false) {
  if (!skipTriggeringEvents) {
    broadcastAuthEvent("autoLogout");
    await tryOnlyOneTabLogout();
  }
  logoutBase();
  redirectToLogin(true);
}
async function tryOnlyOneTabLogout() {
  if (await lock.acquire()) {
    try {
      await logoutDataSource.retrieveData();
    } finally {
      lock.release();
    }
  }
}
function logoutBase() {
  token.value = null;
  username.value = null;
  defaultPage.value = null;
  isLoaded$1.value = false;
  languageId.value = settingsService.appSettings.value.language?.id ?? null;
  translationService.setLanguage(settingsService.appSettings.value.language?.id ?? 1);
}
async function logout(skipTriggeringEvents = false) {
  if (!skipTriggeringEvents) {
    try {
      await tryOnlyOneTabLogout();
    } catch {
      logoutBase();
      if (!skipTriggeringEvents)
        broadcastAuthEvent("logout");
      redirectToLogin(false);
    }
  }
  logoutBase();
  if (!skipTriggeringEvents)
    broadcastAuthEvent("logout");
  redirectToLogin(false);
}
function redirectToLogin(query) {
  const currentRoute2 = routingService.router?.currentRoute.value ?? null;
  if (currentRoute2?.path !== "/login") {
    if (query)
      routingService.router?.push({ path: "/login", query: { redirect: currentRoute2?.fullPath } });
    else
      routingService.router?.push({ path: "/login" });
  }
}
async function markLoaded() {
  isLoaded$1.value = true;
  while (loadedCallbacks.length) {
    await loadedCallbacks.pop()?.();
  }
}
(async () => {
  await tryRefreshToken();
  await initializeSignalR();
})();
authChannel.onmessage = async (msg) => {
  const { event, jwt, langId, homePage } = msg.data;
  if (event === "refresh_done") {
    token.value = jwt;
  }
  if (token.value && (event === "logout" || event === "autoLogout")) {
    setTimeout(() => {
      logoutBase();
      redirectToLogin(event === "autoLogout");
    }, 100);
  }
  if (event === "login") {
    if (!token.value) {
      token.value = jwt;
      languageId.value = langId;
      defaultPage.value = homePage;
      await settingsService.setUserSettings(languageId.value, null, null);
      await markLoaded();
      saveAuth(true);
    }
  }
};
async function initializeSignalR() {
  await signalRService.startConnection("https://localhost:7241/pageshub");
  signalRService.addEventHandler("https://localhost:7241/pageshub", "RefreshPages", async () => {
    saveAuth();
  });
  signalRService.addEventHandler("https://localhost:7241/pageshub", "LockUser", async (obj) => {
    if (authService.currentUser.value?.toLowerCase() == obj.username.toLowerCase()) {
      logout();
    }
  });
}
const authService = {
  isLoggedIn,
  currentUser,
  userDefaultPage,
  username,
  login,
  logout,
  autologout,
  getToken,
  tryRefreshToken,
  onLoaded,
  isUserDomain
};
class Entity {
  dataSource;
  entityCode;
  views;
  subEntities;
  module;
  constructor(options) {
    this.dataSource = options.dataSource;
    this.entityCode = options.entityCode;
    this.module = options.module;
    this.views = options.views ?? {};
    this.subEntities = options.subEntities ?? {};
  }
  getData() {
    return this.dataSource.retrieveData();
  }
  getActions() {
    this.module.moduleActionsDS.getQueryParams = () => ({
      RecordTypeCode: this.entityCode
    });
    return this.module.moduleActionsDS.retrieveData();
  }
}
class View {
  dataSource;
  constructor(options) {
    this.dataSource = options.dataSource;
  }
  getData() {
    return this.dataSource.retrieveData();
  }
}
let Module$1 = class Module2 {
  moduleActionsDS;
  moduleActionFormsDS;
  moduleDynamicFiltersDS;
  moduleESignDS;
  constructor(options) {
    this.moduleActionsDS = options.moduleActionsDS;
    this.moduleActionFormsDS = options.moduleActionFormsDS;
  }
};
var VisualizationType = /* @__PURE__ */ ((VisualizationType2) => {
  VisualizationType2[VisualizationType2["Value0"] = 0] = "Value0";
  VisualizationType2[VisualizationType2["Value1"] = 1] = "Value1";
  VisualizationType2[VisualizationType2["Value2"] = 2] = "Value2";
  VisualizationType2[VisualizationType2["Value3"] = 3] = "Value3";
  VisualizationType2[VisualizationType2["Value4"] = 4] = "Value4";
  VisualizationType2[VisualizationType2["Value5"] = 5] = "Value5";
  VisualizationType2[VisualizationType2["Value6"] = 6] = "Value6";
  VisualizationType2[VisualizationType2["Value7"] = 7] = "Value7";
  VisualizationType2[VisualizationType2["Value8"] = 8] = "Value8";
  VisualizationType2[VisualizationType2["Value9"] = 9] = "Value9";
  VisualizationType2[VisualizationType2["Value10"] = 10] = "Value10";
  VisualizationType2[VisualizationType2["Value11"] = 11] = "Value11";
  VisualizationType2[VisualizationType2["Value12"] = 12] = "Value12";
  VisualizationType2[VisualizationType2["Value13"] = 13] = "Value13";
  VisualizationType2[VisualizationType2["Value14"] = 14] = "Value14";
  VisualizationType2[VisualizationType2["Value15"] = 15] = "Value15";
  VisualizationType2[VisualizationType2["Value16"] = 16] = "Value16";
  VisualizationType2[VisualizationType2["Value17"] = 17] = "Value17";
  VisualizationType2[VisualizationType2["Value18"] = 18] = "Value18";
  VisualizationType2[VisualizationType2["Value19"] = 19] = "Value19";
  VisualizationType2[VisualizationType2["Value20"] = 20] = "Value20";
  VisualizationType2[VisualizationType2["Value21"] = 21] = "Value21";
  VisualizationType2[VisualizationType2["Value22"] = 22] = "Value22";
  VisualizationType2[VisualizationType2["Value23"] = 23] = "Value23";
  VisualizationType2[VisualizationType2["Value24"] = 24] = "Value24";
  VisualizationType2[VisualizationType2["Value25"] = 25] = "Value25";
  VisualizationType2[VisualizationType2["Value26"] = 26] = "Value26";
  VisualizationType2[VisualizationType2["Value27"] = 27] = "Value27";
  VisualizationType2[VisualizationType2["Value28"] = 28] = "Value28";
  VisualizationType2[VisualizationType2["Value29"] = 29] = "Value29";
  VisualizationType2[VisualizationType2["Value30"] = 30] = "Value30";
  VisualizationType2[VisualizationType2["Value31"] = 31] = "Value31";
  VisualizationType2[VisualizationType2["Value32"] = 32] = "Value32";
  VisualizationType2[VisualizationType2["Value33"] = 33] = "Value33";
  VisualizationType2[VisualizationType2["Value34"] = 34] = "Value34";
  return VisualizationType2;
})(VisualizationType || {});
class EndPointAction {
  dataSource;
  constructor(endpoint) {
    let method = endpoint.split(";")[0];
    let name = endpoint.slice(method.length + 2);
    this.dataSource = new DataSource({
      name,
      method,
      isRealDS: true
    });
  }
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var runtime = {};
var runtime_cjs = {};
var index_cjs$3 = {};
var index_cjs$2 = {};
var polyfills_cjs$1 = {};
function _extends$2() {
  _extends$2 = Object.assign || function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        if (Object.prototype.hasOwnProperty.call(source, key))
          target[key] = source[key];
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _object_without_properties_loose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
polyfills_cjs$1._extends = _extends$2;
polyfills_cjs$1._object_without_properties_loose = _object_without_properties_loose;
var index_cjs$1 = {};
var polyfills_cjs = {};
function _extends$1() {
  _extends$1 = Object.assign || function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        if (Object.prototype.hasOwnProperty.call(source, key))
          target[key] = source[key];
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
polyfills_cjs._ = _extends$1;
var polyfills$1 = polyfills_cjs;
const FederationModuleManifest = "federation-manifest.json";
const MANIFEST_EXT = ".json";
const BROWSER_LOG_KEY = "FEDERATION_DEBUG";
const NameTransformSymbol = {
  AT: "@",
  HYPHEN: "-",
  SLASH: "/"
};
const NameTransformMap = {
  [NameTransformSymbol.AT]: "scope_",
  [NameTransformSymbol.HYPHEN]: "_",
  [NameTransformSymbol.SLASH]: "__"
};
const EncodedNameTransformMap = {
  [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
  [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
  [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
};
const SEPARATOR = ":";
const ManifestFileName = "mf-manifest.json";
const StatsFileName = "mf-stats.json";
const MFModuleType = {
  NPM: "npm",
  APP: "app"
};
const MODULE_DEVTOOL_IDENTIFIER = "__MF_DEVTOOLS_MODULE_INFO__";
const ENCODE_NAME_PREFIX = "ENCODE_NAME_PREFIX";
const TEMP_DIR = ".federation";
const MFPrefetchCommon = {
  identifier: "MFDataPrefetch",
  globalKey: "__PREFETCH__",
  library: "mf-data-prefetch",
  exportsKey: "__PREFETCH_EXPORTS__",
  fileName: "bootstrap.js"
};
var ContainerPlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
var ContainerReferencePlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
var ModuleFederationPlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
var SharePlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
function isBrowserEnv() {
  return typeof window !== "undefined" && typeof window.document !== "undefined";
}
function isReactNativeEnv() {
  var _navigator;
  return typeof navigator !== "undefined" && ((_navigator = navigator) == null ? void 0 : _navigator.product) === "ReactNative";
}
function isBrowserDebug() {
  try {
    if (isBrowserEnv() && window.localStorage) {
      return Boolean(localStorage.getItem(BROWSER_LOG_KEY));
    }
  } catch (error2) {
    return false;
  }
  return false;
}
function isDebugMode() {
  if (typeof process !== "undefined" && process.env && process.env["FEDERATION_DEBUG"]) {
    return Boolean(process.env["FEDERATION_DEBUG"]);
  }
  if (typeof FEDERATION_DEBUG !== "undefined" && Boolean(FEDERATION_DEBUG)) {
    return true;
  }
  return isBrowserDebug();
}
const getProcessEnv = function() {
  return typeof process !== "undefined" && process.env ? process.env : {};
};
const LOG_CATEGORY$1 = "[ Federation Runtime ]";
const parseEntry = (str, devVerOrUrl, separator = SEPARATOR) => {
  const strSplit = str.split(separator);
  const devVersionOrUrl = getProcessEnv()["NODE_ENV"] === "development" && devVerOrUrl;
  const defaultVersion = "*";
  const isEntry = (s) => s.startsWith("http") || s.includes(MANIFEST_EXT);
  if (strSplit.length >= 2) {
    let [name, ...versionOrEntryArr] = strSplit;
    if (str.startsWith(separator)) {
      name = strSplit.slice(0, 2).join(separator);
      versionOrEntryArr = [
        devVersionOrUrl || strSplit.slice(2).join(separator)
      ];
    }
    let versionOrEntry = devVersionOrUrl || versionOrEntryArr.join(separator);
    if (isEntry(versionOrEntry)) {
      return {
        name,
        entry: versionOrEntry
      };
    } else {
      return {
        name,
        version: versionOrEntry || defaultVersion
      };
    }
  } else if (strSplit.length === 1) {
    const [name] = strSplit;
    if (devVersionOrUrl && isEntry(devVersionOrUrl)) {
      return {
        name,
        entry: devVersionOrUrl
      };
    }
    return {
      name,
      version: devVersionOrUrl || defaultVersion
    };
  } else {
    throw `Invalid entry value: ${str}`;
  }
};
const composeKeyWithSeparator = function(...args) {
  if (!args.length) {
    return "";
  }
  return args.reduce((sum, cur) => {
    if (!cur) {
      return sum;
    }
    if (!sum) {
      return cur;
    }
    return `${sum}${SEPARATOR}${cur}`;
  }, "");
};
const encodeName = function(name, prefix = "", withExt = false) {
  try {
    const ext = withExt ? ".js" : "";
    return `${prefix}${name.replace(new RegExp(`${NameTransformSymbol.AT}`, "g"), NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`, "g"), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`, "g"), NameTransformMap[NameTransformSymbol.SLASH])}${ext}`;
  } catch (err) {
    throw err;
  }
};
const decodeName = function(name, prefix, withExt) {
  try {
    let decodedName = name;
    if (prefix) {
      if (!decodedName.startsWith(prefix)) {
        return decodedName;
      }
      decodedName = decodedName.replace(new RegExp(prefix, "g"), "");
    }
    decodedName = decodedName.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);
    if (withExt) {
      decodedName = decodedName.replace(".js", "");
    }
    return decodedName;
  } catch (err) {
    throw err;
  }
};
const generateExposeFilename = (exposeName, withExt) => {
  if (!exposeName) {
    return "";
  }
  let expose = exposeName;
  if (expose === ".") {
    expose = "default_export";
  }
  if (expose.startsWith("./")) {
    expose = expose.replace("./", "");
  }
  return encodeName(expose, "__federation_expose_", withExt);
};
const generateShareFilename = (pkgName, withExt) => {
  if (!pkgName) {
    return "";
  }
  return encodeName(pkgName, "__federation_shared_", withExt);
};
const getResourceUrl = (module, sourceUrl) => {
  if ("getPublicPath" in module) {
    let publicPath;
    if (!module.getPublicPath.startsWith("function")) {
      publicPath = new Function(module.getPublicPath)();
    } else {
      publicPath = new Function("return " + module.getPublicPath)()();
    }
    return `${publicPath}${sourceUrl}`;
  } else if ("publicPath" in module) {
    if (!isBrowserEnv() && !isReactNativeEnv() && "ssrPublicPath" in module) {
      return `${module.ssrPublicPath}${sourceUrl}`;
    }
    return `${module.publicPath}${sourceUrl}`;
  } else {
    console.warn("Cannot get resource URL. If in debug mode, please ignore.", module, sourceUrl);
    return "";
  }
};
const assert$1 = (condition, msg) => {
  if (!condition) {
    error$1(msg);
  }
};
const error$1 = (msg) => {
  throw new Error(`${LOG_CATEGORY$1}: ${msg}`);
};
const warn$1 = (msg) => {
  console.warn(`${LOG_CATEGORY$1}: ${msg}`);
};
function safeToString(info) {
  try {
    return JSON.stringify(info, null, 2);
  } catch (e) {
    return "";
  }
}
const VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;
function isRequiredVersion(str) {
  return VERSION_PATTERN_REGEXP.test(str);
}
const simpleJoinRemoteEntry = (rPath, rName) => {
  if (!rPath) {
    return rName;
  }
  const transformPath = (str) => {
    if (str === ".") {
      return "";
    }
    if (str.startsWith("./")) {
      return str.replace("./", "");
    }
    if (str.startsWith("/")) {
      const strWithoutSlash = str.slice(1);
      if (strWithoutSlash.endsWith("/")) {
        return strWithoutSlash.slice(0, -1);
      }
      return strWithoutSlash;
    }
    return str;
  };
  const transformedPath = transformPath(rPath);
  if (!transformedPath) {
    return rName;
  }
  if (transformedPath.endsWith("/")) {
    return `${transformedPath}${rName}`;
  }
  return `${transformedPath}/${rName}`;
};
function inferAutoPublicPath(url2) {
  return url2.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
}
function generateSnapshotFromManifest(manifest, options = {}) {
  var _manifest_metaData, _manifest_metaData1;
  const { remotes = {}, overrides = {}, version } = options;
  let remoteSnapshot;
  const getPublicPath = () => {
    if ("publicPath" in manifest.metaData) {
      if (manifest.metaData.publicPath === "auto" && version) {
        return inferAutoPublicPath(version);
      }
      return manifest.metaData.publicPath;
    } else {
      return manifest.metaData.getPublicPath;
    }
  };
  const overridesKeys = Object.keys(overrides);
  let remotesInfo = {};
  if (!Object.keys(remotes).length) {
    var _manifest_remotes;
    remotesInfo = ((_manifest_remotes = manifest.remotes) == null ? void 0 : _manifest_remotes.reduce((res2, next) => {
      let matchedVersion;
      const name = next.federationContainerName;
      if (overridesKeys.includes(name)) {
        matchedVersion = overrides[name];
      } else {
        if ("version" in next) {
          matchedVersion = next.version;
        } else {
          matchedVersion = next.entry;
        }
      }
      res2[name] = {
        matchedVersion
      };
      return res2;
    }, {})) || {};
  }
  Object.keys(remotes).forEach((key) => remotesInfo[key] = {
    // overrides will override dependencies
    matchedVersion: overridesKeys.includes(key) ? overrides[key] : remotes[key]
  });
  const { remoteEntry: { path: remoteEntryPath, name: remoteEntryName, type: remoteEntryType }, types: remoteTypes, buildInfo: { buildVersion }, globalName, ssrRemoteEntry } = manifest.metaData;
  const { exposes } = manifest;
  let basicRemoteSnapshot = {
    version: version ? version : "",
    buildVersion,
    globalName,
    remoteEntry: simpleJoinRemoteEntry(remoteEntryPath, remoteEntryName),
    remoteEntryType,
    remoteTypes: simpleJoinRemoteEntry(remoteTypes.path, remoteTypes.name),
    remoteTypesZip: remoteTypes.zip || "",
    remoteTypesAPI: remoteTypes.api || "",
    remotesInfo,
    shared: manifest == null ? void 0 : manifest.shared.map((item) => ({
      assets: item.assets,
      sharedName: item.name,
      version: item.version
    })),
    modules: exposes == null ? void 0 : exposes.map((expose) => ({
      moduleName: expose.name,
      modulePath: expose.path,
      assets: expose.assets
    }))
  };
  if ((_manifest_metaData = manifest.metaData) == null ? void 0 : _manifest_metaData.prefetchInterface) {
    const prefetchInterface = manifest.metaData.prefetchInterface;
    basicRemoteSnapshot = polyfills$1._({}, basicRemoteSnapshot, {
      prefetchInterface
    });
  }
  if ((_manifest_metaData1 = manifest.metaData) == null ? void 0 : _manifest_metaData1.prefetchEntry) {
    const { path: path2, name, type } = manifest.metaData.prefetchEntry;
    basicRemoteSnapshot = polyfills$1._({}, basicRemoteSnapshot, {
      prefetchEntry: simpleJoinRemoteEntry(path2, name),
      prefetchEntryType: type
    });
  }
  if ("publicPath" in manifest.metaData) {
    remoteSnapshot = polyfills$1._({}, basicRemoteSnapshot, {
      publicPath: getPublicPath(),
      ssrPublicPath: manifest.metaData.ssrPublicPath
    });
  } else {
    remoteSnapshot = polyfills$1._({}, basicRemoteSnapshot, {
      getPublicPath: getPublicPath()
    });
  }
  if (ssrRemoteEntry) {
    const fullSSRRemoteEntry = simpleJoinRemoteEntry(ssrRemoteEntry.path, ssrRemoteEntry.name);
    remoteSnapshot.ssrRemoteEntry = fullSSRRemoteEntry;
    remoteSnapshot.ssrRemoteEntryType = ssrRemoteEntry.type || "commonjs-module";
  }
  return remoteSnapshot;
}
function isManifestProvider(moduleInfo) {
  if ("remoteEntry" in moduleInfo && moduleInfo.remoteEntry.includes(MANIFEST_EXT)) {
    return true;
  } else {
    return false;
  }
}
const PREFIX = "[ Module Federation ]";
let Logger = class Logger2 {
  setPrefix(prefix) {
    this.prefix = prefix;
  }
  log(...args) {
    console.log(this.prefix, ...args);
  }
  warn(...args) {
    console.log(this.prefix, ...args);
  }
  error(...args) {
    console.log(this.prefix, ...args);
  }
  success(...args) {
    console.log(this.prefix, ...args);
  }
  info(...args) {
    console.log(this.prefix, ...args);
  }
  ready(...args) {
    console.log(this.prefix, ...args);
  }
  debug(...args) {
    if (isDebugMode()) {
      console.log(this.prefix, ...args);
    }
  }
  constructor(prefix) {
    this.prefix = prefix;
  }
};
function createLogger(prefix) {
  return new Logger(prefix);
}
const logger$1 = createLogger(PREFIX);
async function safeWrapper$1(callback, disableWarn) {
  try {
    const res2 = await callback();
    return res2;
  } catch (e) {
    !disableWarn && warn$1(e);
    return;
  }
}
function isStaticResourcesEqual$1(url1, url2) {
  const REG_EXP = /^(https?:)?\/\//i;
  const relativeUrl1 = url1.replace(REG_EXP, "").replace(/\/$/, "");
  const relativeUrl2 = url2.replace(REG_EXP, "").replace(/\/$/, "");
  return relativeUrl1 === relativeUrl2;
}
function createScript(info) {
  let script2 = null;
  let needAttach = true;
  let timeout = 2e4;
  let timeoutId;
  const scripts = document.getElementsByTagName("script");
  for (let i = 0; i < scripts.length; i++) {
    const s = scripts[i];
    const scriptSrc = s.getAttribute("src");
    if (scriptSrc && isStaticResourcesEqual$1(scriptSrc, info.url)) {
      script2 = s;
      needAttach = false;
      break;
    }
  }
  if (!script2) {
    const attrs2 = info.attrs;
    script2 = document.createElement("script");
    script2.type = (attrs2 == null ? void 0 : attrs2["type"]) === "module" ? "module" : "text/javascript";
    let createScriptRes = void 0;
    if (info.createScriptHook) {
      createScriptRes = info.createScriptHook(info.url, info.attrs);
      if (createScriptRes instanceof HTMLScriptElement) {
        script2 = createScriptRes;
      } else if (typeof createScriptRes === "object") {
        if ("script" in createScriptRes && createScriptRes.script) {
          script2 = createScriptRes.script;
        }
        if ("timeout" in createScriptRes && createScriptRes.timeout) {
          timeout = createScriptRes.timeout;
        }
      }
    }
    if (!script2.src) {
      script2.src = info.url;
    }
    if (attrs2 && !createScriptRes) {
      Object.keys(attrs2).forEach((name) => {
        if (script2) {
          if (name === "async" || name === "defer") {
            script2[name] = attrs2[name];
          } else if (!script2.getAttribute(name)) {
            script2.setAttribute(name, attrs2[name]);
          }
        }
      });
    }
  }
  const onScriptComplete = async (prev, event) => {
    clearTimeout(timeoutId);
    const onScriptCompleteCallback = () => {
      if ((event == null ? void 0 : event.type) === "error") {
        (info == null ? void 0 : info.onErrorCallback) && (info == null ? void 0 : info.onErrorCallback(event));
      } else {
        (info == null ? void 0 : info.cb) && (info == null ? void 0 : info.cb());
      }
    };
    if (script2) {
      script2.onerror = null;
      script2.onload = null;
      safeWrapper$1(() => {
        const { needDeleteScript = true } = info;
        if (needDeleteScript) {
          (script2 == null ? void 0 : script2.parentNode) && script2.parentNode.removeChild(script2);
        }
      });
      if (prev && typeof prev === "function") {
        const result = prev(event);
        if (result instanceof Promise) {
          const res2 = await result;
          onScriptCompleteCallback();
          return res2;
        }
        onScriptCompleteCallback();
        return result;
      }
    }
    onScriptCompleteCallback();
  };
  script2.onerror = onScriptComplete.bind(null, script2.onerror);
  script2.onload = onScriptComplete.bind(null, script2.onload);
  timeoutId = setTimeout(() => {
    onScriptComplete(null, new Error(`Remote script "${info.url}" time-outed.`));
  }, timeout);
  return {
    script: script2,
    needAttach
  };
}
function createLink(info) {
  let link = null;
  let needAttach = true;
  const links = document.getElementsByTagName("link");
  for (let i = 0; i < links.length; i++) {
    const l = links[i];
    const linkHref = l.getAttribute("href");
    const linkRel = l.getAttribute("rel");
    if (linkHref && isStaticResourcesEqual$1(linkHref, info.url) && linkRel === info.attrs["rel"]) {
      link = l;
      needAttach = false;
      break;
    }
  }
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("href", info.url);
    let createLinkRes = void 0;
    const attrs2 = info.attrs;
    if (info.createLinkHook) {
      createLinkRes = info.createLinkHook(info.url, attrs2);
      if (createLinkRes instanceof HTMLLinkElement) {
        link = createLinkRes;
      }
    }
    if (attrs2 && !createLinkRes) {
      Object.keys(attrs2).forEach((name) => {
        if (link && !link.getAttribute(name)) {
          link.setAttribute(name, attrs2[name]);
        }
      });
    }
  }
  const onLinkComplete = (prev, event) => {
    const onLinkCompleteCallback = () => {
      if ((event == null ? void 0 : event.type) === "error") {
        (info == null ? void 0 : info.onErrorCallback) && (info == null ? void 0 : info.onErrorCallback(event));
      } else {
        (info == null ? void 0 : info.cb) && (info == null ? void 0 : info.cb());
      }
    };
    if (link) {
      link.onerror = null;
      link.onload = null;
      safeWrapper$1(() => {
        const { needDeleteLink = true } = info;
        if (needDeleteLink) {
          (link == null ? void 0 : link.parentNode) && link.parentNode.removeChild(link);
        }
      });
      if (prev) {
        const res2 = prev(event);
        onLinkCompleteCallback();
        return res2;
      }
    }
    onLinkCompleteCallback();
  };
  link.onerror = onLinkComplete.bind(null, link.onerror);
  link.onload = onLinkComplete.bind(null, link.onload);
  return {
    link,
    needAttach
  };
}
function loadScript(url2, info) {
  const { attrs: attrs2 = {}, createScriptHook } = info;
  return new Promise((resolve, reject) => {
    const { script: script2, needAttach } = createScript({
      url: url2,
      cb: resolve,
      onErrorCallback: reject,
      attrs: polyfills$1._({
        fetchpriority: "high"
      }, attrs2),
      createScriptHook,
      needDeleteScript: true
    });
    needAttach && document.head.appendChild(script2);
  });
}
function importNodeModule(name) {
  if (!name) {
    throw new Error("import specifier is required");
  }
  const importModule = new Function("name", `return import(name)`);
  return importModule(name).then((res2) => res2).catch((error2) => {
    console.error(`Error importing module ${name}:`, error2);
    throw error2;
  });
}
const loadNodeFetch = async () => {
  const fetchModule = await importNodeModule("node-fetch");
  return fetchModule.default || fetchModule;
};
const lazyLoaderHookFetch = async (input, init2, loaderHook2) => {
  const hook = (url2, init3) => {
    return loaderHook2.lifecycle.fetch.emit(url2, init3);
  };
  const res2 = await hook(input, init2 || {});
  if (!res2 || !(res2 instanceof Response)) {
    const fetchFunction = typeof fetch === "undefined" ? await loadNodeFetch() : fetch;
    return fetchFunction(input, init2 || {});
  }
  return res2;
};
const createScriptNode = typeof ENV_TARGET === "undefined" || ENV_TARGET !== "web" ? (url, cb, attrs, loaderHook) => {
  if (loaderHook == null ? void 0 : loaderHook.createScriptHook) {
    const hookResult = loaderHook.createScriptHook(url);
    if (hookResult && typeof hookResult === "object" && "url" in hookResult) {
      url = hookResult.url;
    }
  }
  let urlObj;
  try {
    urlObj = new URL(url);
  } catch (e) {
    console.error("Error constructing URL:", e);
    cb(new Error(`Invalid URL: ${e}`));
    return;
  }
  const getFetch = async () => {
    if (loaderHook == null ? void 0 : loaderHook.fetch) {
      return (input, init2) => lazyLoaderHookFetch(input, init2, loaderHook);
    }
    return typeof fetch === "undefined" ? loadNodeFetch() : fetch;
  };
  const handleScriptFetch = async (f, urlObj) => {
    try {
      var _vm_constants;
      const res = await f(urlObj.href);
      const data = await res.text();
      const [path, vm] = await Promise.all([
        importNodeModule("path"),
        importNodeModule("vm")
      ]);
      const scriptContext = {
        exports: {},
        module: {
          exports: {}
        }
      };
      const urlDirname = urlObj.pathname.split("/").slice(0, -1).join("/");
      const filename = path.basename(urlObj.pathname);
      var _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER;
      const script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}
})`, {
        filename,
        importModuleDynamically: (_vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER = (_vm_constants = vm.constants) == null ? void 0 : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) != null ? _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER : importNodeModule
      });
      script.runInThisContext()(scriptContext.exports, scriptContext.module, eval("require"), urlDirname, filename);
      const exportedInterface = scriptContext.module.exports || scriptContext.exports;
      if (attrs && exportedInterface && attrs["globalName"]) {
        const container = exportedInterface[attrs["globalName"]] || exportedInterface;
        cb(void 0, container);
        return;
      }
      cb(void 0, exportedInterface);
    } catch (e) {
      cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
    }
  };
  getFetch().then(async (f2) => {
    if ((attrs == null ? void 0 : attrs["type"]) === "esm" || (attrs == null ? void 0 : attrs["type"]) === "module") {
      return loadModule(urlObj.href, {
        fetch: f2,
        vm: await importNodeModule("vm")
      }).then(async (module) => {
        await module.evaluate();
        cb(void 0, module.namespace);
      }).catch((e) => {
        cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
      });
    }
    handleScriptFetch(f2, urlObj);
  }).catch((err) => {
    cb(err);
  });
} : (url2, cb2, attrs2, loaderHook2) => {
  cb2(new Error("createScriptNode is disabled in non-Node.js environment"));
};
const loadScriptNode = typeof ENV_TARGET === "undefined" || ENV_TARGET !== "web" ? (url2, info) => {
  return new Promise((resolve, reject) => {
    createScriptNode(url2, (error2, scriptContext2) => {
      if (error2) {
        reject(error2);
      } else {
        var _info_attrs, _info_attrs1;
        const remoteEntryKey = (info == null ? void 0 : (_info_attrs = info.attrs) == null ? void 0 : _info_attrs["globalName"]) || `__FEDERATION_${info == null ? void 0 : (_info_attrs1 = info.attrs) == null ? void 0 : _info_attrs1["name"]}:custom__`;
        const entryExports = globalThis[remoteEntryKey] = scriptContext2;
        resolve(entryExports);
      }
    }, info.attrs, info.loaderHook);
  });
} : (url2, info) => {
  throw new Error("loadScriptNode is disabled in non-Node.js environment");
};
async function loadModule(url2, options) {
  const { fetch: fetch1, vm: vm2 } = options;
  const response = await fetch1(url2);
  const code = await response.text();
  const module = new vm2.SourceTextModule(code, {
    // @ts-ignore
    importModuleDynamically: async (specifier, script2) => {
      const resolvedUrl = new URL(specifier, url2).href;
      return loadModule(resolvedUrl, options);
    }
  });
  await module.link(async (specifier) => {
    const resolvedUrl = new URL(specifier, url2).href;
    const module2 = await loadModule(resolvedUrl, options);
    return module2;
  });
  return module;
}
function normalizeOptions(enableDefault, defaultOptions, key) {
  return function(options) {
    if (options === false) {
      return false;
    }
    if (typeof options === "undefined") {
      if (enableDefault) {
        return defaultOptions;
      } else {
        return false;
      }
    }
    if (options === true) {
      return defaultOptions;
    }
    if (options && typeof options === "object") {
      return polyfills$1._({}, defaultOptions, options);
    }
    throw new Error(`Unexpected type for \`${key}\`, expect boolean/undefined/object, got: ${typeof options}`);
  };
}
const createModuleFederationConfig = (options) => {
  return options;
};
index_cjs$1.BROWSER_LOG_KEY = BROWSER_LOG_KEY;
index_cjs$1.ENCODE_NAME_PREFIX = ENCODE_NAME_PREFIX;
index_cjs$1.EncodedNameTransformMap = EncodedNameTransformMap;
index_cjs$1.FederationModuleManifest = FederationModuleManifest;
index_cjs$1.MANIFEST_EXT = MANIFEST_EXT;
index_cjs$1.MFModuleType = MFModuleType;
index_cjs$1.MFPrefetchCommon = MFPrefetchCommon;
index_cjs$1.MODULE_DEVTOOL_IDENTIFIER = MODULE_DEVTOOL_IDENTIFIER;
index_cjs$1.ManifestFileName = ManifestFileName;
index_cjs$1.NameTransformMap = NameTransformMap;
index_cjs$1.NameTransformSymbol = NameTransformSymbol;
index_cjs$1.SEPARATOR = SEPARATOR;
index_cjs$1.StatsFileName = StatsFileName;
index_cjs$1.TEMP_DIR = TEMP_DIR;
index_cjs$1.assert = assert$1;
index_cjs$1.composeKeyWithSeparator = composeKeyWithSeparator;
index_cjs$1.containerPlugin = ContainerPlugin;
index_cjs$1.containerReferencePlugin = ContainerReferencePlugin;
index_cjs$1.createLink = createLink;
index_cjs$1.createLogger = createLogger;
index_cjs$1.createModuleFederationConfig = createModuleFederationConfig;
index_cjs$1.createScript = createScript;
index_cjs$1.createScriptNode = createScriptNode;
index_cjs$1.decodeName = decodeName;
index_cjs$1.encodeName = encodeName;
index_cjs$1.error = error$1;
index_cjs$1.generateExposeFilename = generateExposeFilename;
index_cjs$1.generateShareFilename = generateShareFilename;
index_cjs$1.generateSnapshotFromManifest = generateSnapshotFromManifest;
index_cjs$1.getProcessEnv = getProcessEnv;
index_cjs$1.getResourceUrl = getResourceUrl;
index_cjs$1.inferAutoPublicPath = inferAutoPublicPath;
index_cjs$1.isBrowserEnv = isBrowserEnv;
index_cjs$1.isDebugMode = isDebugMode;
index_cjs$1.isManifestProvider = isManifestProvider;
index_cjs$1.isReactNativeEnv = isReactNativeEnv;
index_cjs$1.isRequiredVersion = isRequiredVersion;
index_cjs$1.isStaticResourcesEqual = isStaticResourcesEqual$1;
index_cjs$1.loadScript = loadScript;
index_cjs$1.loadScriptNode = loadScriptNode;
index_cjs$1.logger = logger$1;
index_cjs$1.moduleFederationPlugin = ModuleFederationPlugin;
index_cjs$1.normalizeOptions = normalizeOptions;
index_cjs$1.parseEntry = parseEntry;
index_cjs$1.safeToString = safeToString;
index_cjs$1.safeWrapper = safeWrapper$1;
index_cjs$1.sharePlugin = SharePlugin;
index_cjs$1.simpleJoinRemoteEntry = simpleJoinRemoteEntry;
index_cjs$1.warn = warn$1;
var index_cjs = {};
const RUNTIME_001 = "RUNTIME-001";
const RUNTIME_002 = "RUNTIME-002";
const RUNTIME_003 = "RUNTIME-003";
const RUNTIME_004 = "RUNTIME-004";
const RUNTIME_005 = "RUNTIME-005";
const RUNTIME_006 = "RUNTIME-006";
const RUNTIME_007 = "RUNTIME-007";
const RUNTIME_008 = "RUNTIME-008";
const TYPE_001 = "TYPE-001";
const BUILD_001 = "BUILD-001";
const BUILD_002 = "BUILD-002";
const getDocsUrl = (errorCode) => {
  const type = errorCode.split("-")[0].toLowerCase();
  return `View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/${type}/${errorCode}`;
};
const getShortErrorMsg = (errorCode, errorDescMap2, args, originalErrorMsg) => {
  const msg = [
    `${[
      errorDescMap2[errorCode]
    ]} #${errorCode}`
  ];
  args && msg.push(`args: ${JSON.stringify(args)}`);
  msg.push(getDocsUrl(errorCode));
  originalErrorMsg && msg.push(`Original Error Message:
 ${originalErrorMsg}`);
  return msg.join("\n");
};
function _extends() {
  _extends = Object.assign || function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        if (Object.prototype.hasOwnProperty.call(source, key))
          target[key] = source[key];
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
const runtimeDescMap = {
  [RUNTIME_001]: "Failed to get remoteEntry exports.",
  [RUNTIME_002]: 'The remote entry interface does not contain "init"',
  [RUNTIME_003]: "Failed to get manifest.",
  [RUNTIME_004]: "Failed to locate remote.",
  [RUNTIME_005]: "Invalid loadShareSync function call from bundler runtime",
  [RUNTIME_006]: "Invalid loadShareSync function call from runtime",
  [RUNTIME_007]: "Failed to get remote snapshot.",
  [RUNTIME_008]: "Failed to load script resources."
};
const typeDescMap = {
  [TYPE_001]: "Failed to generate type declaration. Execute the below cmd to reproduce and fix the error."
};
const buildDescMap = {
  [BUILD_001]: "Failed to find expose module.",
  [BUILD_002]: "PublicPath is required in prod mode."
};
const errorDescMap = _extends({}, runtimeDescMap, typeDescMap, buildDescMap);
index_cjs.BUILD_001 = BUILD_001;
index_cjs.BUILD_002 = BUILD_002;
index_cjs.RUNTIME_001 = RUNTIME_001;
index_cjs.RUNTIME_002 = RUNTIME_002;
index_cjs.RUNTIME_003 = RUNTIME_003;
index_cjs.RUNTIME_004 = RUNTIME_004;
index_cjs.RUNTIME_005 = RUNTIME_005;
index_cjs.RUNTIME_006 = RUNTIME_006;
index_cjs.RUNTIME_007 = RUNTIME_007;
index_cjs.RUNTIME_008 = RUNTIME_008;
index_cjs.TYPE_001 = TYPE_001;
index_cjs.buildDescMap = buildDescMap;
index_cjs.errorDescMap = errorDescMap;
index_cjs.getShortErrorMsg = getShortErrorMsg;
index_cjs.runtimeDescMap = runtimeDescMap;
index_cjs.typeDescMap = typeDescMap;
var polyfills = polyfills_cjs$1;
var sdk = index_cjs$1;
var errorCodes = index_cjs;
const LOG_CATEGORY = "[ Federation Runtime ]";
const logger = sdk.createLogger(LOG_CATEGORY);
function assert(condition, msg) {
  if (!condition) {
    error(msg);
  }
}
function error(msg) {
  if (msg instanceof Error) {
    msg.message = `${LOG_CATEGORY}: ${msg.message}`;
    throw msg;
  }
  throw new Error(`${LOG_CATEGORY}: ${msg}`);
}
function warn(msg) {
  if (msg instanceof Error) {
    msg.message = `${LOG_CATEGORY}: ${msg.message}`;
    logger.warn(msg);
  } else {
    logger.warn(msg);
  }
}
function addUniqueItem(arr, item) {
  if (arr.findIndex((name) => name === item) === -1) {
    arr.push(item);
  }
  return arr;
}
function getFMId(remoteInfo) {
  if ("version" in remoteInfo && remoteInfo.version) {
    return `${remoteInfo.name}:${remoteInfo.version}`;
  } else if ("entry" in remoteInfo && remoteInfo.entry) {
    return `${remoteInfo.name}:${remoteInfo.entry}`;
  } else {
    return `${remoteInfo.name}`;
  }
}
function isRemoteInfoWithEntry(remote) {
  return typeof remote.entry !== "undefined";
}
function isPureRemoteEntry(remote) {
  return !remote.entry.includes(".json");
}
async function safeWrapper(callback, disableWarn) {
  try {
    const res2 = await callback();
    return res2;
  } catch (e) {
    !disableWarn && warn(e);
    return;
  }
}
function isObject(val) {
  return val && typeof val === "object";
}
const objectToString = Object.prototype.toString;
function isPlainObject(val) {
  return objectToString.call(val) === "[object Object]";
}
function isStaticResourcesEqual(url1, url2) {
  const REG_EXP = /^(https?:)?\/\//i;
  const relativeUrl1 = url1.replace(REG_EXP, "").replace(/\/$/, "");
  const relativeUrl2 = url2.replace(REG_EXP, "").replace(/\/$/, "");
  return relativeUrl1 === relativeUrl2;
}
function arrayOptions(options) {
  return Array.isArray(options) ? options : [
    options
  ];
}
function getRemoteEntryInfoFromSnapshot(snapshot) {
  const defaultRemoteEntryInfo = {
    url: "",
    type: "global",
    globalName: ""
  };
  if (sdk.isBrowserEnv() || sdk.isReactNativeEnv()) {
    return "remoteEntry" in snapshot ? {
      url: snapshot.remoteEntry,
      type: snapshot.remoteEntryType,
      globalName: snapshot.globalName
    } : defaultRemoteEntryInfo;
  }
  if ("ssrRemoteEntry" in snapshot) {
    return {
      url: snapshot.ssrRemoteEntry || defaultRemoteEntryInfo.url,
      type: snapshot.ssrRemoteEntryType || defaultRemoteEntryInfo.type,
      globalName: snapshot.globalName
    };
  }
  return defaultRemoteEntryInfo;
}
const processModuleAlias = (name, subPath) => {
  let moduleName;
  if (name.endsWith("/")) {
    moduleName = name.slice(0, -1);
  } else {
    moduleName = name;
  }
  if (subPath.startsWith(".")) {
    subPath = subPath.slice(1);
  }
  moduleName = moduleName + subPath;
  return moduleName;
};
const CurrentGlobal = typeof globalThis === "object" ? globalThis : window;
const nativeGlobal = (() => {
  try {
    return document.defaultView;
  } catch (e) {
    return CurrentGlobal;
  }
})();
const Global = nativeGlobal;
function definePropertyGlobalVal(target, key, val) {
  Object.defineProperty(target, key, {
    value: val,
    configurable: false,
    writable: true
  });
}
function includeOwnProperty(target, key) {
  return Object.hasOwnProperty.call(target, key);
}
if (!includeOwnProperty(CurrentGlobal, "__GLOBAL_LOADING_REMOTE_ENTRY__")) {
  definePropertyGlobalVal(CurrentGlobal, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
}
const globalLoading = CurrentGlobal.__GLOBAL_LOADING_REMOTE_ENTRY__;
function setGlobalDefaultVal(target) {
  var _target___FEDERATION__, _target___FEDERATION__1, _target___FEDERATION__2, _target___FEDERATION__3, _target___FEDERATION__4, _target___FEDERATION__5;
  if (includeOwnProperty(target, "__VMOK__") && !includeOwnProperty(target, "__FEDERATION__")) {
    definePropertyGlobalVal(target, "__FEDERATION__", target.__VMOK__);
  }
  if (!includeOwnProperty(target, "__FEDERATION__")) {
    definePropertyGlobalVal(target, "__FEDERATION__", {
      __GLOBAL_PLUGIN__: [],
      __INSTANCES__: [],
      moduleInfo: {},
      __SHARE__: {},
      __MANIFEST_LOADING__: {},
      __PRELOADED_MAP__: /* @__PURE__ */ new Map()
    });
    definePropertyGlobalVal(target, "__VMOK__", target.__FEDERATION__);
  }
  var ___GLOBAL_PLUGIN__;
  (___GLOBAL_PLUGIN__ = (_target___FEDERATION__ = target.__FEDERATION__).__GLOBAL_PLUGIN__) != null ? ___GLOBAL_PLUGIN__ : _target___FEDERATION__.__GLOBAL_PLUGIN__ = [];
  var ___INSTANCES__;
  (___INSTANCES__ = (_target___FEDERATION__1 = target.__FEDERATION__).__INSTANCES__) != null ? ___INSTANCES__ : _target___FEDERATION__1.__INSTANCES__ = [];
  var _moduleInfo;
  (_moduleInfo = (_target___FEDERATION__2 = target.__FEDERATION__).moduleInfo) != null ? _moduleInfo : _target___FEDERATION__2.moduleInfo = {};
  var ___SHARE__;
  (___SHARE__ = (_target___FEDERATION__3 = target.__FEDERATION__).__SHARE__) != null ? ___SHARE__ : _target___FEDERATION__3.__SHARE__ = {};
  var ___MANIFEST_LOADING__;
  (___MANIFEST_LOADING__ = (_target___FEDERATION__4 = target.__FEDERATION__).__MANIFEST_LOADING__) != null ? ___MANIFEST_LOADING__ : _target___FEDERATION__4.__MANIFEST_LOADING__ = {};
  var ___PRELOADED_MAP__;
  (___PRELOADED_MAP__ = (_target___FEDERATION__5 = target.__FEDERATION__).__PRELOADED_MAP__) != null ? ___PRELOADED_MAP__ : _target___FEDERATION__5.__PRELOADED_MAP__ = /* @__PURE__ */ new Map();
}
setGlobalDefaultVal(CurrentGlobal);
setGlobalDefaultVal(nativeGlobal);
function resetFederationGlobalInfo() {
  CurrentGlobal.__FEDERATION__.__GLOBAL_PLUGIN__ = [];
  CurrentGlobal.__FEDERATION__.__INSTANCES__ = [];
  CurrentGlobal.__FEDERATION__.moduleInfo = {};
  CurrentGlobal.__FEDERATION__.__SHARE__ = {};
  CurrentGlobal.__FEDERATION__.__MANIFEST_LOADING__ = {};
  Object.keys(globalLoading).forEach((key) => {
    delete globalLoading[key];
  });
}
function setGlobalFederationInstance(FederationInstance2) {
  CurrentGlobal.__FEDERATION__.__INSTANCES__.push(FederationInstance2);
}
function getGlobalFederationConstructor() {
  return CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
}
function setGlobalFederationConstructor(FederationConstructor, isDebug = sdk.isDebugMode()) {
  if (isDebug) {
    CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = FederationConstructor;
    CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.16.0";
  }
}
function getInfoWithoutType(target, key) {
  if (typeof key === "string") {
    const keyRes = target[key];
    if (keyRes) {
      return {
        value: target[key],
        key
      };
    } else {
      const targetKeys = Object.keys(target);
      for (const targetKey of targetKeys) {
        const [targetTypeOrName, _] = targetKey.split(":");
        const nKey = `${targetTypeOrName}:${key}`;
        const typeWithKeyRes = target[nKey];
        if (typeWithKeyRes) {
          return {
            value: typeWithKeyRes,
            key: nKey
          };
        }
      }
      return {
        value: void 0,
        key
      };
    }
  } else {
    throw new Error("key must be string");
  }
}
const getGlobalSnapshot = () => nativeGlobal.__FEDERATION__.moduleInfo;
const getTargetSnapshotInfoByModuleInfo = (moduleInfo, snapshot) => {
  const moduleKey = getFMId(moduleInfo);
  const getModuleInfo = getInfoWithoutType(snapshot, moduleKey).value;
  if (getModuleInfo && !getModuleInfo.version && "version" in moduleInfo && moduleInfo["version"]) {
    getModuleInfo.version = moduleInfo["version"];
  }
  if (getModuleInfo) {
    return getModuleInfo;
  }
  if ("version" in moduleInfo && moduleInfo["version"]) {
    const { version } = moduleInfo, resModuleInfo = polyfills._object_without_properties_loose(moduleInfo, [
      "version"
    ]);
    const moduleKeyWithoutVersion = getFMId(resModuleInfo);
    const getModuleInfoWithoutVersion = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, moduleKeyWithoutVersion).value;
    if ((getModuleInfoWithoutVersion == null ? void 0 : getModuleInfoWithoutVersion.version) === version) {
      return getModuleInfoWithoutVersion;
    }
  }
  return;
};
const getGlobalSnapshotInfoByModuleInfo = (moduleInfo) => getTargetSnapshotInfoByModuleInfo(moduleInfo, nativeGlobal.__FEDERATION__.moduleInfo);
const setGlobalSnapshotInfoByModuleInfo = (remoteInfo, moduleDetailInfo) => {
  const moduleKey = getFMId(remoteInfo);
  nativeGlobal.__FEDERATION__.moduleInfo[moduleKey] = moduleDetailInfo;
  return nativeGlobal.__FEDERATION__.moduleInfo;
};
const addGlobalSnapshot = (moduleInfos) => {
  nativeGlobal.__FEDERATION__.moduleInfo = polyfills._extends({}, nativeGlobal.__FEDERATION__.moduleInfo, moduleInfos);
  return () => {
    const keys = Object.keys(moduleInfos);
    for (const key of keys) {
      delete nativeGlobal.__FEDERATION__.moduleInfo[key];
    }
  };
};
const getRemoteEntryExports = (name, globalName) => {
  const remoteEntryKey = globalName || `__FEDERATION_${name}:custom__`;
  const entryExports = CurrentGlobal[remoteEntryKey];
  return {
    remoteEntryKey,
    entryExports
  };
};
const registerGlobalPlugins = (plugins) => {
  const { __GLOBAL_PLUGIN__ } = nativeGlobal.__FEDERATION__;
  plugins.forEach((plugin) => {
    if (__GLOBAL_PLUGIN__.findIndex((p) => p.name === plugin.name) === -1) {
      __GLOBAL_PLUGIN__.push(plugin);
    } else {
      warn(`The plugin ${plugin.name} has been registered.`);
    }
  });
};
const getGlobalHostPlugins = () => nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__;
const getPreloaded = (id) => CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.get(id);
const setPreloaded = (id) => CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.set(id, true);
const DEFAULT_SCOPE = "default";
const DEFAULT_REMOTE_TYPE = "global";
const buildIdentifier = "[0-9A-Za-z-]+";
const build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`;
const numericIdentifier = "0|[1-9]\\d*";
const numericIdentifierLoose = "[0-9]+";
const nonNumericIdentifier = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
const preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`;
const preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`;
const preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`;
const preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`;
const xRangeIdentifier = `${numericIdentifier}|x|X|\\*`;
const xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`;
const hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`;
const mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`;
const loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`;
const gtlt = "((?:<|>)?=?)";
const comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`;
const loneTilde = "(?:~>?)";
const tildeTrim = `(\\s*)${loneTilde}\\s+`;
const loneCaret = "(?:\\^)";
const caretTrim = `(\\s*)${loneCaret}\\s+`;
const star = "(<|>)?=?\\s*\\*";
const caret = `^${loneCaret}${xRangePlain}$`;
const mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`;
const fullPlain = `v?${mainVersion}${preRelease}?${build}?`;
const tilde = `^${loneTilde}${xRangePlain}$`;
const xRange = `^${gtlt}\\s*${xRangePlain}$`;
const comparator = `^${gtlt}\\s*(${fullPlain})$|^$`;
const gte0 = "^\\s*>=\\s*0.0.0\\s*$";
function parseRegex(source) {
  return new RegExp(source);
}
function isXVersion(version) {
  return !version || version.toLowerCase() === "x" || version === "*";
}
function pipe(...fns) {
  return (x) => fns.reduce((v, f2) => f2(v), x);
}
function extractComparator(comparatorString) {
  return comparatorString.match(parseRegex(comparator));
}
function combineVersion(major, minor, patch, preRelease2) {
  const mainVersion2 = `${major}.${minor}.${patch}`;
  if (preRelease2) {
    return `${mainVersion2}-${preRelease2}`;
  }
  return mainVersion2;
}
function parseHyphen(range) {
  return range.replace(parseRegex(hyphenRange), (_range, from, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease) => {
    if (isXVersion(fromMajor)) {
      from = "";
    } else if (isXVersion(fromMinor)) {
      from = `>=${fromMajor}.0.0`;
    } else if (isXVersion(fromPatch)) {
      from = `>=${fromMajor}.${fromMinor}.0`;
    } else {
      from = `>=${from}`;
    }
    if (isXVersion(toMajor)) {
      to = "";
    } else if (isXVersion(toMinor)) {
      to = `<${Number(toMajor) + 1}.0.0-0`;
    } else if (isXVersion(toPatch)) {
      to = `<${toMajor}.${Number(toMinor) + 1}.0-0`;
    } else if (toPreRelease) {
      to = `<=${toMajor}.${toMinor}.${toPatch}-${toPreRelease}`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  });
}
function parseComparatorTrim(range) {
  return range.replace(parseRegex(comparatorTrim), "$1$2$3");
}
function parseTildeTrim(range) {
  return range.replace(parseRegex(tildeTrim), "$1~");
}
function parseCaretTrim(range) {
  return range.replace(parseRegex(caretTrim), "$1^");
}
function parseCarets(range) {
  return range.trim().split(/\s+/).map((rangeVersion) => rangeVersion.replace(parseRegex(caret), (_, major, minor, patch, preRelease2) => {
    if (isXVersion(major)) {
      return "";
    } else if (isXVersion(minor)) {
      return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
    } else if (isXVersion(patch)) {
      if (major === "0") {
        return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
      } else {
        return `>=${major}.${minor}.0 <${Number(major) + 1}.0.0-0`;
      }
    } else if (preRelease2) {
      if (major === "0") {
        if (minor === "0") {
          return `>=${major}.${minor}.${patch}-${preRelease2} <${major}.${minor}.${Number(patch) + 1}-0`;
        } else {
          return `>=${major}.${minor}.${patch}-${preRelease2} <${major}.${Number(minor) + 1}.0-0`;
        }
      } else {
        return `>=${major}.${minor}.${patch}-${preRelease2} <${Number(major) + 1}.0.0-0`;
      }
    } else {
      if (major === "0") {
        if (minor === "0") {
          return `>=${major}.${minor}.${patch} <${major}.${minor}.${Number(patch) + 1}-0`;
        } else {
          return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
        }
      }
      return `>=${major}.${minor}.${patch} <${Number(major) + 1}.0.0-0`;
    }
  })).join(" ");
}
function parseTildes(range) {
  return range.trim().split(/\s+/).map((rangeVersion) => rangeVersion.replace(parseRegex(tilde), (_, major, minor, patch, preRelease2) => {
    if (isXVersion(major)) {
      return "";
    } else if (isXVersion(minor)) {
      return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
    } else if (isXVersion(patch)) {
      return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
    } else if (preRelease2) {
      return `>=${major}.${minor}.${patch}-${preRelease2} <${major}.${Number(minor) + 1}.0-0`;
    }
    return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
  })).join(" ");
}
function parseXRanges(range) {
  return range.split(/\s+/).map((rangeVersion) => rangeVersion.trim().replace(parseRegex(xRange), (ret, gtlt2, major, minor, patch, preRelease2) => {
    const isXMajor = isXVersion(major);
    const isXMinor = isXMajor || isXVersion(minor);
    const isXPatch = isXMinor || isXVersion(patch);
    if (gtlt2 === "=" && isXPatch) {
      gtlt2 = "";
    }
    preRelease2 = "";
    if (isXMajor) {
      if (gtlt2 === ">" || gtlt2 === "<") {
        return "<0.0.0-0";
      } else {
        return "*";
      }
    } else if (gtlt2 && isXPatch) {
      if (isXMinor) {
        minor = 0;
      }
      patch = 0;
      if (gtlt2 === ">") {
        gtlt2 = ">=";
        if (isXMinor) {
          major = Number(major) + 1;
          minor = 0;
          patch = 0;
        } else {
          minor = Number(minor) + 1;
          patch = 0;
        }
      } else if (gtlt2 === "<=") {
        gtlt2 = "<";
        if (isXMinor) {
          major = Number(major) + 1;
        } else {
          minor = Number(minor) + 1;
        }
      }
      if (gtlt2 === "<") {
        preRelease2 = "-0";
      }
      return `${gtlt2 + major}.${minor}.${patch}${preRelease2}`;
    } else if (isXMinor) {
      return `>=${major}.0.0${preRelease2} <${Number(major) + 1}.0.0-0`;
    } else if (isXPatch) {
      return `>=${major}.${minor}.0${preRelease2} <${major}.${Number(minor) + 1}.0-0`;
    }
    return ret;
  })).join(" ");
}
function parseStar(range) {
  return range.trim().replace(parseRegex(star), "");
}
function parseGTE0(comparatorString) {
  return comparatorString.trim().replace(parseRegex(gte0), "");
}
function compareAtom(rangeAtom, versionAtom) {
  rangeAtom = Number(rangeAtom) || rangeAtom;
  versionAtom = Number(versionAtom) || versionAtom;
  if (rangeAtom > versionAtom) {
    return 1;
  }
  if (rangeAtom === versionAtom) {
    return 0;
  }
  return -1;
}
function comparePreRelease(rangeAtom, versionAtom) {
  const { preRelease: rangePreRelease } = rangeAtom;
  const { preRelease: versionPreRelease } = versionAtom;
  if (rangePreRelease === void 0 && Boolean(versionPreRelease)) {
    return 1;
  }
  if (Boolean(rangePreRelease) && versionPreRelease === void 0) {
    return -1;
  }
  if (rangePreRelease === void 0 && versionPreRelease === void 0) {
    return 0;
  }
  for (let i = 0, n = rangePreRelease.length; i <= n; i++) {
    const rangeElement = rangePreRelease[i];
    const versionElement = versionPreRelease[i];
    if (rangeElement === versionElement) {
      continue;
    }
    if (rangeElement === void 0 && versionElement === void 0) {
      return 0;
    }
    if (!rangeElement) {
      return 1;
    }
    if (!versionElement) {
      return -1;
    }
    return compareAtom(rangeElement, versionElement);
  }
  return 0;
}
function compareVersion(rangeAtom, versionAtom) {
  return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);
}
function eq(rangeAtom, versionAtom) {
  return rangeAtom.version === versionAtom.version;
}
function compare(rangeAtom, versionAtom) {
  switch (rangeAtom.operator) {
    case "":
    case "=":
      return eq(rangeAtom, versionAtom);
    case ">":
      return compareVersion(rangeAtom, versionAtom) < 0;
    case ">=":
      return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;
    case "<":
      return compareVersion(rangeAtom, versionAtom) > 0;
    case "<=":
      return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;
    case void 0: {
      return true;
    }
    default:
      return false;
  }
}
function parseComparatorString(range) {
  return pipe(
    // handle caret
    // ^ --> * (any, kinda silly)
    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
    // ^1.2.3 --> >=1.2.3 <2.0.0-0
    // ^1.2.0 --> >=1.2.0 <2.0.0-0
    parseCarets,
    // handle tilde
    // ~, ~> --> * (any, kinda silly)
    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
    parseTildes,
    parseXRanges,
    parseStar
  )(range);
}
function parseRange(range) {
  return pipe(
    // handle hyphenRange
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    parseHyphen,
    // handle trim comparator
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    parseComparatorTrim,
    // handle trim tilde
    // `~ 1.2.3` => `~1.2.3`
    parseTildeTrim,
    // handle trim caret
    // `^ 1.2.3` => `^1.2.3`
    parseCaretTrim
  )(range.trim()).split(/\s+/).join(" ");
}
function satisfy(version, range) {
  if (!version) {
    return false;
  }
  const extractedVersion = extractComparator(version);
  if (!extractedVersion) {
    return false;
  }
  const [, versionOperator, , versionMajor, versionMinor, versionPatch, versionPreRelease] = extractedVersion;
  const versionAtom = {
    operator: versionOperator,
    version: combineVersion(versionMajor, versionMinor, versionPatch, versionPreRelease),
    major: versionMajor,
    minor: versionMinor,
    patch: versionPatch,
    preRelease: versionPreRelease == null ? void 0 : versionPreRelease.split(".")
  };
  const orRanges = range.split("||");
  for (const orRange of orRanges) {
    const trimmedOrRange = orRange.trim();
    if (!trimmedOrRange) {
      return true;
    }
    if (trimmedOrRange === "*" || trimmedOrRange === "x") {
      return true;
    }
    try {
      const parsedSubRange = parseRange(trimmedOrRange);
      if (!parsedSubRange.trim()) {
        return true;
      }
      const parsedComparatorString = parsedSubRange.split(" ").map((rangeVersion) => parseComparatorString(rangeVersion)).join(" ");
      if (!parsedComparatorString.trim()) {
        return true;
      }
      const comparators = parsedComparatorString.split(/\s+/).map((comparator2) => parseGTE0(comparator2)).filter(Boolean);
      if (comparators.length === 0) {
        continue;
      }
      let subRangeSatisfied = true;
      for (const comparator2 of comparators) {
        const extractedComparator = extractComparator(comparator2);
        if (!extractedComparator) {
          subRangeSatisfied = false;
          break;
        }
        const [, rangeOperator, , rangeMajor, rangeMinor, rangePatch, rangePreRelease] = extractedComparator;
        const rangeAtom = {
          operator: rangeOperator,
          version: combineVersion(rangeMajor, rangeMinor, rangePatch, rangePreRelease),
          major: rangeMajor,
          minor: rangeMinor,
          patch: rangePatch,
          preRelease: rangePreRelease == null ? void 0 : rangePreRelease.split(".")
        };
        if (!compare(rangeAtom, versionAtom)) {
          subRangeSatisfied = false;
          break;
        }
      }
      if (subRangeSatisfied) {
        return true;
      }
    } catch (e) {
      console.error(`[semver] Error processing range part "${trimmedOrRange}":`, e);
      continue;
    }
  }
  return false;
}
function formatShare(shareArgs, from, name, shareStrategy) {
  let get;
  if ("get" in shareArgs) {
    get = shareArgs.get;
  } else if ("lib" in shareArgs) {
    get = () => Promise.resolve(shareArgs.lib);
  } else {
    get = () => Promise.resolve(() => {
      throw new Error(`Can not get shared '${name}'!`);
    });
  }
  var _shareArgs_version, _shareArgs_scope, _shareArgs_strategy;
  return polyfills._extends({
    deps: [],
    useIn: [],
    from,
    loading: null
  }, shareArgs, {
    shareConfig: polyfills._extends({
      requiredVersion: `^${shareArgs.version}`,
      singleton: false,
      eager: false,
      strictVersion: false
    }, shareArgs.shareConfig),
    get,
    loaded: (shareArgs == null ? void 0 : shareArgs.loaded) || "lib" in shareArgs ? true : void 0,
    version: (_shareArgs_version = shareArgs.version) != null ? _shareArgs_version : "0",
    scope: Array.isArray(shareArgs.scope) ? shareArgs.scope : [
      (_shareArgs_scope = shareArgs.scope) != null ? _shareArgs_scope : "default"
    ],
    strategy: ((_shareArgs_strategy = shareArgs.strategy) != null ? _shareArgs_strategy : shareStrategy) || "version-first"
  });
}
function formatShareConfigs(globalOptions, userOptions) {
  const shareArgs = userOptions.shared || {};
  const from = userOptions.name;
  const shareInfos = Object.keys(shareArgs).reduce((res2, pkgName) => {
    const arrayShareArgs = arrayOptions(shareArgs[pkgName]);
    res2[pkgName] = res2[pkgName] || [];
    arrayShareArgs.forEach((shareConfig) => {
      res2[pkgName].push(formatShare(shareConfig, from, pkgName, userOptions.shareStrategy));
    });
    return res2;
  }, {});
  const shared = polyfills._extends({}, globalOptions.shared);
  Object.keys(shareInfos).forEach((shareKey) => {
    if (!shared[shareKey]) {
      shared[shareKey] = shareInfos[shareKey];
    } else {
      shareInfos[shareKey].forEach((newUserSharedOptions) => {
        const isSameVersion = shared[shareKey].find((sharedVal) => sharedVal.version === newUserSharedOptions.version);
        if (!isSameVersion) {
          shared[shareKey].push(newUserSharedOptions);
        }
      });
    }
  });
  return {
    shared,
    shareInfos
  };
}
function versionLt(a, b) {
  const transformInvalidVersion = (version) => {
    const isNumberVersion = !Number.isNaN(Number(version));
    if (isNumberVersion) {
      const splitArr = version.split(".");
      let validVersion = version;
      for (let i = 0; i < 3 - splitArr.length; i++) {
        validVersion += ".0";
      }
      return validVersion;
    }
    return version;
  };
  if (satisfy(transformInvalidVersion(a), `<=${transformInvalidVersion(b)}`)) {
    return true;
  } else {
    return false;
  }
}
const findVersion = (shareVersionMap, cb2) => {
  const callback = cb2 || function(prev, cur) {
    return versionLt(prev, cur);
  };
  return Object.keys(shareVersionMap).reduce((prev, cur) => {
    if (!prev) {
      return cur;
    }
    if (callback(prev, cur)) {
      return cur;
    }
    if (prev === "0") {
      return cur;
    }
    return prev;
  }, 0);
};
const isLoaded = (shared) => {
  return Boolean(shared.loaded) || typeof shared.lib === "function";
};
const isLoading = (shared) => {
  return Boolean(shared.loading);
};
function findSingletonVersionOrderByVersion(shareScopeMap, scope, pkgName) {
  const versions = shareScopeMap[scope][pkgName];
  const callback = function(prev, cur) {
    return !isLoaded(versions[prev]) && versionLt(prev, cur);
  };
  return findVersion(shareScopeMap[scope][pkgName], callback);
}
function findSingletonVersionOrderByLoaded(shareScopeMap, scope, pkgName) {
  const versions = shareScopeMap[scope][pkgName];
  const callback = function(prev, cur) {
    const isLoadingOrLoaded = (shared) => {
      return isLoaded(shared) || isLoading(shared);
    };
    if (isLoadingOrLoaded(versions[cur])) {
      if (isLoadingOrLoaded(versions[prev])) {
        return Boolean(versionLt(prev, cur));
      } else {
        return true;
      }
    }
    if (isLoadingOrLoaded(versions[prev])) {
      return false;
    }
    return versionLt(prev, cur);
  };
  return findVersion(shareScopeMap[scope][pkgName], callback);
}
function getFindShareFunction(strategy) {
  if (strategy === "loaded-first") {
    return findSingletonVersionOrderByLoaded;
  }
  return findSingletonVersionOrderByVersion;
}
function getRegisteredShare(localShareScopeMap, pkgName, shareInfo, resolveShare) {
  if (!localShareScopeMap) {
    return;
  }
  const { shareConfig, scope = DEFAULT_SCOPE, strategy } = shareInfo;
  const scopes = Array.isArray(scope) ? scope : [
    scope
  ];
  for (const sc of scopes) {
    if (shareConfig && localShareScopeMap[sc] && localShareScopeMap[sc][pkgName]) {
      const { requiredVersion } = shareConfig;
      const findShareFunction = getFindShareFunction(strategy);
      const maxOrSingletonVersion = findShareFunction(localShareScopeMap, sc, pkgName);
      const defaultResolver = () => {
        if (shareConfig.singleton) {
          if (typeof requiredVersion === "string" && !satisfy(maxOrSingletonVersion, requiredVersion)) {
            const msg = `Version ${maxOrSingletonVersion} from ${maxOrSingletonVersion && localShareScopeMap[sc][pkgName][maxOrSingletonVersion].from} of shared singleton module ${pkgName} does not satisfy the requirement of ${shareInfo.from} which needs ${requiredVersion})`;
            if (shareConfig.strictVersion) {
              error(msg);
            } else {
              warn(msg);
            }
          }
          return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
        } else {
          if (requiredVersion === false || requiredVersion === "*") {
            return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
          }
          if (satisfy(maxOrSingletonVersion, requiredVersion)) {
            return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
          }
          for (const [versionKey, versionValue] of Object.entries(localShareScopeMap[sc][pkgName])) {
            if (satisfy(versionKey, requiredVersion)) {
              return versionValue;
            }
          }
        }
      };
      const params = {
        shareScopeMap: localShareScopeMap,
        scope: sc,
        pkgName,
        version: maxOrSingletonVersion,
        GlobalFederation: Global.__FEDERATION__,
        resolver: defaultResolver
      };
      const resolveShared = resolveShare.emit(params) || params;
      return resolveShared.resolver();
    }
  }
}
function getGlobalShareScope() {
  return Global.__FEDERATION__.__SHARE__;
}
function getTargetSharedOptions(options) {
  const { pkgName, extraOptions, shareInfos } = options;
  const defaultResolver = (sharedOptions) => {
    if (!sharedOptions) {
      return void 0;
    }
    const shareVersionMap = {};
    sharedOptions.forEach((shared) => {
      shareVersionMap[shared.version] = shared;
    });
    const callback = function(prev, cur) {
      return !isLoaded(shareVersionMap[prev]) && versionLt(prev, cur);
    };
    const maxVersion = findVersion(shareVersionMap, callback);
    return shareVersionMap[maxVersion];
  };
  var _extraOptions_resolver;
  const resolver = (_extraOptions_resolver = extraOptions == null ? void 0 : extraOptions.resolver) != null ? _extraOptions_resolver : defaultResolver;
  return Object.assign({}, resolver(shareInfos[pkgName]), extraOptions == null ? void 0 : extraOptions.customShareInfo);
}
const ShareUtils = {
  getRegisteredShare,
  getGlobalShareScope
};
const GlobalUtils = {
  Global,
  nativeGlobal,
  resetFederationGlobalInfo,
  setGlobalFederationInstance,
  getGlobalFederationConstructor,
  setGlobalFederationConstructor,
  getInfoWithoutType,
  getGlobalSnapshot,
  getTargetSnapshotInfoByModuleInfo,
  getGlobalSnapshotInfoByModuleInfo,
  setGlobalSnapshotInfoByModuleInfo,
  addGlobalSnapshot,
  getRemoteEntryExports,
  registerGlobalPlugins,
  getGlobalHostPlugins,
  getPreloaded,
  setPreloaded
};
var helpers = {
  global: GlobalUtils,
  share: ShareUtils
};
function getBuilderId$1() {
  return typeof FEDERATION_BUILD_IDENTIFIER !== "undefined" ? FEDERATION_BUILD_IDENTIFIER : "";
}
function matchRemoteWithNameAndExpose(remotes, id) {
  for (const remote of remotes) {
    const isNameMatched = id.startsWith(remote.name);
    let expose = id.replace(remote.name, "");
    if (isNameMatched) {
      if (expose.startsWith("/")) {
        const pkgNameOrAlias = remote.name;
        expose = `.${expose}`;
        return {
          pkgNameOrAlias,
          expose,
          remote
        };
      } else if (expose === "") {
        return {
          pkgNameOrAlias: remote.name,
          expose: ".",
          remote
        };
      }
    }
    const isAliasMatched = remote.alias && id.startsWith(remote.alias);
    let exposeWithAlias = remote.alias && id.replace(remote.alias, "");
    if (remote.alias && isAliasMatched) {
      if (exposeWithAlias && exposeWithAlias.startsWith("/")) {
        const pkgNameOrAlias = remote.alias;
        exposeWithAlias = `.${exposeWithAlias}`;
        return {
          pkgNameOrAlias,
          expose: exposeWithAlias,
          remote
        };
      } else if (exposeWithAlias === "") {
        return {
          pkgNameOrAlias: remote.alias,
          expose: ".",
          remote
        };
      }
    }
  }
  return;
}
function matchRemote(remotes, nameOrAlias) {
  for (const remote of remotes) {
    const isNameMatched = nameOrAlias === remote.name;
    if (isNameMatched) {
      return remote;
    }
    const isAliasMatched = remote.alias && nameOrAlias === remote.alias;
    if (isAliasMatched) {
      return remote;
    }
  }
  return;
}
function registerPlugins$1(plugins, hookInstances) {
  const globalPlugins = getGlobalHostPlugins();
  if (globalPlugins.length > 0) {
    globalPlugins.forEach((plugin) => {
      if (plugins == null ? void 0 : plugins.find((item) => item.name !== plugin.name)) {
        plugins.push(plugin);
      }
    });
  }
  if (plugins && plugins.length > 0) {
    plugins.forEach((plugin) => {
      hookInstances.forEach((hookInstance) => {
        hookInstance.applyPlugin(plugin);
      });
    });
  }
  return plugins;
}
const importCallback = ".then(callbacks[0]).catch(callbacks[1])";
async function loadEsmEntry({ entry, remoteEntryExports }) {
  return new Promise((resolve, reject) => {
    try {
      if (!remoteEntryExports) {
        if (typeof FEDERATION_ALLOW_NEW_FUNCTION !== "undefined") {
          new Function("callbacks", `import("${entry}")${importCallback}`)([
            resolve,
            reject
          ]);
        } else {
          __vitePreload(() => import(
            /* webpackIgnore: true */
            /* @vite-ignore */
            entry
          ),true?[]:void 0).then(resolve).catch(reject);
        }
      } else {
        resolve(remoteEntryExports);
      }
    } catch (e) {
      reject(e);
    }
  });
}
async function loadSystemJsEntry({ entry, remoteEntryExports }) {
  return new Promise((resolve, reject) => {
    try {
      if (!remoteEntryExports) {
        if (typeof __system_context__ === "undefined") {
          System.import(entry).then(resolve).catch(reject);
        } else {
          new Function("callbacks", `System.import("${entry}")${importCallback}`)([
            resolve,
            reject
          ]);
        }
      } else {
        resolve(remoteEntryExports);
      }
    } catch (e) {
      reject(e);
    }
  });
}
function handleRemoteEntryLoaded(name, globalName, entry) {
  const { remoteEntryKey, entryExports } = getRemoteEntryExports(name, globalName);
  assert(entryExports, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_001, errorCodes.runtimeDescMap, {
    remoteName: name,
    remoteEntryUrl: entry,
    remoteEntryKey
  }));
  return entryExports;
}
async function loadEntryScript({ name, globalName, entry, loaderHook: loaderHook2 }) {
  const { entryExports: remoteEntryExports } = getRemoteEntryExports(name, globalName);
  if (remoteEntryExports) {
    return remoteEntryExports;
  }
  return sdk.loadScript(entry, {
    attrs: {},
    createScriptHook: (url2, attrs2) => {
      const res2 = loaderHook2.lifecycle.createScript.emit({
        url: url2,
        attrs: attrs2
      });
      if (!res2)
        return;
      if (res2 instanceof HTMLScriptElement) {
        return res2;
      }
      if ("script" in res2 || "timeout" in res2) {
        return res2;
      }
      return;
    }
  }).then(() => {
    return handleRemoteEntryLoaded(name, globalName, entry);
  }).catch((e) => {
    assert(void 0, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_008, errorCodes.runtimeDescMap, {
      remoteName: name,
      resourceUrl: entry
    }));
    throw e;
  });
}
async function loadEntryDom({ remoteInfo, remoteEntryExports, loaderHook: loaderHook2 }) {
  const { entry, entryGlobalName: globalName, name, type } = remoteInfo;
  switch (type) {
    case "esm":
    case "module":
      return loadEsmEntry({
        entry,
        remoteEntryExports
      });
    case "system":
      return loadSystemJsEntry({
        entry,
        remoteEntryExports
      });
    default:
      return loadEntryScript({
        entry,
        globalName,
        name,
        loaderHook: loaderHook2
      });
  }
}
async function loadEntryNode({ remoteInfo, loaderHook: loaderHook2 }) {
  const { entry, entryGlobalName: globalName, name, type } = remoteInfo;
  const { entryExports: remoteEntryExports } = getRemoteEntryExports(name, globalName);
  if (remoteEntryExports) {
    return remoteEntryExports;
  }
  return sdk.loadScriptNode(entry, {
    attrs: {
      name,
      globalName,
      type
    },
    loaderHook: {
      createScriptHook: (url2, attrs2 = {}) => {
        const res2 = loaderHook2.lifecycle.createScript.emit({
          url: url2,
          attrs: attrs2
        });
        if (!res2)
          return;
        if ("url" in res2) {
          return res2;
        }
        return;
      }
    }
  }).then(() => {
    return handleRemoteEntryLoaded(name, globalName, entry);
  }).catch((e) => {
    throw e;
  });
}
function getRemoteEntryUniqueKey(remoteInfo) {
  const { entry, name } = remoteInfo;
  return sdk.composeKeyWithSeparator(name, entry);
}
async function getRemoteEntry({ origin, remoteEntryExports, remoteInfo }) {
  const uniqueKey = getRemoteEntryUniqueKey(remoteInfo);
  if (remoteEntryExports) {
    return remoteEntryExports;
  }
  if (!globalLoading[uniqueKey]) {
    const loadEntryHook = origin.remoteHandler.hooks.lifecycle.loadEntry;
    const loaderHook2 = origin.loaderHook;
    globalLoading[uniqueKey] = loadEntryHook.emit({
      loaderHook: loaderHook2,
      remoteInfo,
      remoteEntryExports
    }).then((res2) => {
      if (res2) {
        return res2;
      }
      const isWebEnvironment = typeof ENV_TARGET !== "undefined" ? ENV_TARGET === "web" : sdk.isBrowserEnv();
      return isWebEnvironment ? loadEntryDom({
        remoteInfo,
        remoteEntryExports,
        loaderHook: loaderHook2
      }) : loadEntryNode({
        remoteInfo,
        loaderHook: loaderHook2
      });
    });
  }
  return globalLoading[uniqueKey];
}
function getRemoteInfo(remote) {
  return polyfills._extends({}, remote, {
    entry: "entry" in remote ? remote.entry : "",
    type: remote.type || DEFAULT_REMOTE_TYPE,
    entryGlobalName: remote.entryGlobalName || remote.name,
    shareScope: remote.shareScope || DEFAULT_SCOPE
  });
}
let Module = class Module3 {
  async getEntry() {
    if (this.remoteEntryExports) {
      return this.remoteEntryExports;
    }
    let remoteEntryExports;
    try {
      remoteEntryExports = await getRemoteEntry({
        origin: this.host,
        remoteInfo: this.remoteInfo,
        remoteEntryExports: this.remoteEntryExports
      });
    } catch (err) {
      const uniqueKey = getRemoteEntryUniqueKey(this.remoteInfo);
      remoteEntryExports = await this.host.loaderHook.lifecycle.loadEntryError.emit({
        getRemoteEntry,
        origin: this.host,
        remoteInfo: this.remoteInfo,
        remoteEntryExports: this.remoteEntryExports,
        globalLoading,
        uniqueKey
      });
    }
    assert(remoteEntryExports, `remoteEntryExports is undefined 
 ${sdk.safeToString(this.remoteInfo)}`);
    this.remoteEntryExports = remoteEntryExports;
    return this.remoteEntryExports;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async get(id, expose, options, remoteSnapshot) {
    const { loadFactory = true } = options || {
      loadFactory: true
    };
    const remoteEntryExports = await this.getEntry();
    if (!this.inited) {
      const localShareScopeMap = this.host.shareScopeMap;
      const shareScopeKeys = Array.isArray(this.remoteInfo.shareScope) ? this.remoteInfo.shareScope : [
        this.remoteInfo.shareScope
      ];
      if (!shareScopeKeys.length) {
        shareScopeKeys.push("default");
      }
      shareScopeKeys.forEach((shareScopeKey) => {
        if (!localShareScopeMap[shareScopeKey]) {
          localShareScopeMap[shareScopeKey] = {};
        }
      });
      const shareScope = localShareScopeMap[shareScopeKeys[0]];
      const initScope = [];
      const remoteEntryInitOptions = {
        version: this.remoteInfo.version || "",
        shareScopeKeys: Array.isArray(this.remoteInfo.shareScope) ? shareScopeKeys : this.remoteInfo.shareScope || "default"
      };
      Object.defineProperty(remoteEntryInitOptions, "shareScopeMap", {
        value: localShareScopeMap,
        // remoteEntryInitOptions will be traversed and assigned during container init, ,so this attribute is not allowed to be traversed
        enumerable: false
      });
      const initContainerOptions = await this.host.hooks.lifecycle.beforeInitContainer.emit({
        shareScope,
        // @ts-ignore shareScopeMap will be set by Object.defineProperty
        remoteEntryInitOptions,
        initScope,
        remoteInfo: this.remoteInfo,
        origin: this.host
      });
      if (typeof (remoteEntryExports == null ? void 0 : remoteEntryExports.init) === "undefined") {
        error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_002, errorCodes.runtimeDescMap, {
          hostName: this.host.name,
          remoteName: this.remoteInfo.name,
          remoteEntryUrl: this.remoteInfo.entry,
          remoteEntryKey: this.remoteInfo.entryGlobalName
        }));
      }
      await remoteEntryExports.init(initContainerOptions.shareScope, initContainerOptions.initScope, initContainerOptions.remoteEntryInitOptions);
      await this.host.hooks.lifecycle.initContainer.emit(polyfills._extends({}, initContainerOptions, {
        id,
        remoteSnapshot,
        remoteEntryExports
      }));
    }
    this.lib = remoteEntryExports;
    this.inited = true;
    let moduleFactory;
    moduleFactory = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
      remoteEntryExports,
      expose,
      moduleInfo: this.remoteInfo
    });
    if (!moduleFactory) {
      moduleFactory = await remoteEntryExports.get(expose);
    }
    assert(moduleFactory, `${getFMId(this.remoteInfo)} remote don't export ${expose}.`);
    const symbolName = processModuleAlias(this.remoteInfo.name, expose);
    const wrapModuleFactory = this.wraperFactory(moduleFactory, symbolName);
    if (!loadFactory) {
      return wrapModuleFactory;
    }
    const exposeContent = await wrapModuleFactory();
    return exposeContent;
  }
  wraperFactory(moduleFactory, id) {
    function defineModuleId(res2, id2) {
      if (res2 && typeof res2 === "object" && Object.isExtensible(res2) && !Object.getOwnPropertyDescriptor(res2, Symbol.for("mf_module_id"))) {
        Object.defineProperty(res2, Symbol.for("mf_module_id"), {
          value: id2,
          enumerable: false
        });
      }
    }
    if (moduleFactory instanceof Promise) {
      return async () => {
        const res2 = await moduleFactory();
        defineModuleId(res2, id);
        return res2;
      };
    } else {
      return () => {
        const res2 = moduleFactory();
        defineModuleId(res2, id);
        return res2;
      };
    }
  }
  constructor({ remoteInfo, host }) {
    this.inited = false;
    this.lib = void 0;
    this.remoteInfo = remoteInfo;
    this.host = host;
  }
};
class SyncHook {
  on(fn) {
    if (typeof fn === "function") {
      this.listeners.add(fn);
    }
  }
  once(fn) {
    const self2 = this;
    this.on(function wrapper(...args) {
      self2.remove(wrapper);
      return fn.apply(null, args);
    });
  }
  emit(...data2) {
    let result;
    if (this.listeners.size > 0) {
      this.listeners.forEach((fn) => {
        result = fn(...data2);
      });
    }
    return result;
  }
  remove(fn) {
    this.listeners.delete(fn);
  }
  removeAll() {
    this.listeners.clear();
  }
  constructor(type) {
    this.type = "";
    this.listeners = /* @__PURE__ */ new Set();
    if (type) {
      this.type = type;
    }
  }
}
class AsyncHook extends SyncHook {
  emit(...data2) {
    let result;
    const ls = Array.from(this.listeners);
    if (ls.length > 0) {
      let i = 0;
      const call = (prev) => {
        if (prev === false) {
          return false;
        } else if (i < ls.length) {
          return Promise.resolve(ls[i++].apply(null, data2)).then(call);
        } else {
          return prev;
        }
      };
      result = call();
    }
    return Promise.resolve(result);
  }
}
function checkReturnData(originalData, returnedData) {
  if (!isObject(returnedData)) {
    return false;
  }
  if (originalData !== returnedData) {
    for (const key in originalData) {
      if (!(key in returnedData)) {
        return false;
      }
    }
  }
  return true;
}
class SyncWaterfallHook extends SyncHook {
  emit(data2) {
    if (!isObject(data2)) {
      error(`The data for the "${this.type}" hook should be an object.`);
    }
    for (const fn of this.listeners) {
      try {
        const tempData = fn(data2);
        if (checkReturnData(data2, tempData)) {
          data2 = tempData;
        } else {
          this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
          break;
        }
      } catch (e) {
        warn(e);
        this.onerror(e);
      }
    }
    return data2;
  }
  constructor(type) {
    super(), this.onerror = error;
    this.type = type;
  }
}
class AsyncWaterfallHook extends SyncHook {
  emit(data2) {
    if (!isObject(data2)) {
      error(`The response data for the "${this.type}" hook must be an object.`);
    }
    const ls = Array.from(this.listeners);
    if (ls.length > 0) {
      let i = 0;
      const processError = (e) => {
        warn(e);
        this.onerror(e);
        return data2;
      };
      const call = (prevData) => {
        if (checkReturnData(data2, prevData)) {
          data2 = prevData;
          if (i < ls.length) {
            try {
              return Promise.resolve(ls[i++](data2)).then(call, processError);
            } catch (e) {
              return processError(e);
            }
          }
        } else {
          this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
        }
        return data2;
      };
      return Promise.resolve(call(data2));
    }
    return Promise.resolve(data2);
  }
  constructor(type) {
    super(), this.onerror = error;
    this.type = type;
  }
}
class PluginSystem {
  applyPlugin(plugin) {
    assert(isPlainObject(plugin), "Plugin configuration is invalid.");
    const pluginName = plugin.name;
    assert(pluginName, "A name must be provided by the plugin.");
    if (!this.registerPlugins[pluginName]) {
      this.registerPlugins[pluginName] = plugin;
      Object.keys(this.lifecycle).forEach((key) => {
        const pluginLife = plugin[key];
        if (pluginLife) {
          this.lifecycle[key].on(pluginLife);
        }
      });
    }
  }
  removePlugin(pluginName) {
    assert(pluginName, "A name is required.");
    const plugin = this.registerPlugins[pluginName];
    assert(plugin, `The plugin "${pluginName}" is not registered.`);
    Object.keys(plugin).forEach((key) => {
      if (key !== "name") {
        this.lifecycle[key].remove(plugin[key]);
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-shadow
  inherit({ lifecycle, registerPlugins: registerPlugins2 }) {
    Object.keys(lifecycle).forEach((hookName) => {
      assert(!this.lifecycle[hookName], `The hook "${hookName}" has a conflict and cannot be inherited.`);
      this.lifecycle[hookName] = lifecycle[hookName];
    });
    Object.keys(registerPlugins2).forEach((pluginName) => {
      assert(!this.registerPlugins[pluginName], `The plugin "${pluginName}" has a conflict and cannot be inherited.`);
      this.applyPlugin(registerPlugins2[pluginName]);
    });
  }
  constructor(lifecycle) {
    this.registerPlugins = {};
    this.lifecycle = lifecycle;
    this.lifecycleKeys = Object.keys(lifecycle);
  }
}
function defaultPreloadArgs(preloadConfig) {
  return polyfills._extends({
    resourceCategory: "sync",
    share: true,
    depsRemote: true,
    prefetchInterface: false
  }, preloadConfig);
}
function formatPreloadArgs(remotes, preloadArgs) {
  return preloadArgs.map((args) => {
    const remoteInfo = matchRemote(remotes, args.nameOrAlias);
    assert(remoteInfo, `Unable to preload ${args.nameOrAlias} as it is not included in ${!remoteInfo && sdk.safeToString({
      remoteInfo,
      remotes
    })}`);
    return {
      remote: remoteInfo,
      preloadConfig: defaultPreloadArgs(args)
    };
  });
}
function normalizePreloadExposes(exposes) {
  if (!exposes) {
    return [];
  }
  return exposes.map((expose) => {
    if (expose === ".") {
      return expose;
    }
    if (expose.startsWith("./")) {
      return expose.replace("./", "");
    }
    return expose;
  });
}
function preloadAssets(remoteInfo, host, assets, useLinkPreload = true) {
  const { cssAssets, jsAssetsWithoutEntry, entryAssets } = assets;
  if (host.options.inBrowser) {
    entryAssets.forEach((asset) => {
      const { moduleInfo } = asset;
      const module = host.moduleCache.get(remoteInfo.name);
      if (module) {
        getRemoteEntry({
          origin: host,
          remoteInfo: moduleInfo,
          remoteEntryExports: module.remoteEntryExports
        });
      } else {
        getRemoteEntry({
          origin: host,
          remoteInfo: moduleInfo,
          remoteEntryExports: void 0
        });
      }
    });
    if (useLinkPreload) {
      const defaultAttrs = {
        rel: "preload",
        as: "style"
      };
      cssAssets.forEach((cssUrl) => {
        const { link: cssEl, needAttach } = sdk.createLink({
          url: cssUrl,
          cb: () => {
          },
          attrs: defaultAttrs,
          createLinkHook: (url2, attrs2) => {
            const res2 = host.loaderHook.lifecycle.createLink.emit({
              url: url2,
              attrs: attrs2
            });
            if (res2 instanceof HTMLLinkElement) {
              return res2;
            }
            return;
          }
        });
        needAttach && document.head.appendChild(cssEl);
      });
    } else {
      const defaultAttrs = {
        rel: "stylesheet",
        type: "text/css"
      };
      cssAssets.forEach((cssUrl) => {
        const { link: cssEl, needAttach } = sdk.createLink({
          url: cssUrl,
          cb: () => {
          },
          attrs: defaultAttrs,
          createLinkHook: (url2, attrs2) => {
            const res2 = host.loaderHook.lifecycle.createLink.emit({
              url: url2,
              attrs: attrs2
            });
            if (res2 instanceof HTMLLinkElement) {
              return res2;
            }
            return;
          },
          needDeleteLink: false
        });
        needAttach && document.head.appendChild(cssEl);
      });
    }
    if (useLinkPreload) {
      const defaultAttrs = {
        rel: "preload",
        as: "script"
      };
      jsAssetsWithoutEntry.forEach((jsUrl) => {
        const { link: linkEl, needAttach } = sdk.createLink({
          url: jsUrl,
          cb: () => {
          },
          attrs: defaultAttrs,
          createLinkHook: (url2, attrs2) => {
            const res2 = host.loaderHook.lifecycle.createLink.emit({
              url: url2,
              attrs: attrs2
            });
            if (res2 instanceof HTMLLinkElement) {
              return res2;
            }
            return;
          }
        });
        needAttach && document.head.appendChild(linkEl);
      });
    } else {
      const defaultAttrs = {
        fetchpriority: "high",
        type: (remoteInfo == null ? void 0 : remoteInfo.type) === "module" ? "module" : "text/javascript"
      };
      jsAssetsWithoutEntry.forEach((jsUrl) => {
        const { script: scriptEl, needAttach } = sdk.createScript({
          url: jsUrl,
          cb: () => {
          },
          attrs: defaultAttrs,
          createScriptHook: (url2, attrs2) => {
            const res2 = host.loaderHook.lifecycle.createScript.emit({
              url: url2,
              attrs: attrs2
            });
            if (res2 instanceof HTMLScriptElement) {
              return res2;
            }
            return;
          },
          needDeleteScript: true
        });
        needAttach && document.head.appendChild(scriptEl);
      });
    }
  }
}
function assignRemoteInfo(remoteInfo, remoteSnapshot) {
  const remoteEntryInfo = getRemoteEntryInfoFromSnapshot(remoteSnapshot);
  if (!remoteEntryInfo.url) {
    error(`The attribute remoteEntry of ${remoteInfo.name} must not be undefined.`);
  }
  let entryUrl = sdk.getResourceUrl(remoteSnapshot, remoteEntryInfo.url);
  if (!sdk.isBrowserEnv() && !entryUrl.startsWith("http")) {
    entryUrl = `https:${entryUrl}`;
  }
  remoteInfo.type = remoteEntryInfo.type;
  remoteInfo.entryGlobalName = remoteEntryInfo.globalName;
  remoteInfo.entry = entryUrl;
  remoteInfo.version = remoteSnapshot.version;
  remoteInfo.buildVersion = remoteSnapshot.buildVersion;
}
function snapshotPlugin() {
  return {
    name: "snapshot-plugin",
    async afterResolve(args) {
      const { remote, pkgNameOrAlias, expose, origin, remoteInfo, id } = args;
      if (!isRemoteInfoWithEntry(remote) || !isPureRemoteEntry(remote)) {
        const { remoteSnapshot, globalSnapshot } = await origin.snapshotHandler.loadRemoteSnapshotInfo({
          moduleInfo: remote,
          id
        });
        assignRemoteInfo(remoteInfo, remoteSnapshot);
        const preloadOptions = {
          remote,
          preloadConfig: {
            nameOrAlias: pkgNameOrAlias,
            exposes: [
              expose
            ],
            resourceCategory: "sync",
            share: false,
            depsRemote: false
          }
        };
        const assets = await origin.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
          origin,
          preloadOptions,
          remoteInfo,
          remote,
          remoteSnapshot,
          globalSnapshot
        });
        if (assets) {
          preloadAssets(remoteInfo, origin, assets, false);
        }
        return polyfills._extends({}, args, {
          remoteSnapshot
        });
      }
      return args;
    }
  };
}
function splitId(id) {
  const splitInfo = id.split(":");
  if (splitInfo.length === 1) {
    return {
      name: splitInfo[0],
      version: void 0
    };
  } else if (splitInfo.length === 2) {
    return {
      name: splitInfo[0],
      version: splitInfo[1]
    };
  } else {
    return {
      name: splitInfo[1],
      version: splitInfo[2]
    };
  }
}
function traverseModuleInfo(globalSnapshot, remoteInfo, traverse, isRoot, memo = {}, remoteSnapshot) {
  const id = getFMId(remoteInfo);
  const { value: snapshotValue } = getInfoWithoutType(globalSnapshot, id);
  const effectiveRemoteSnapshot = remoteSnapshot || snapshotValue;
  if (effectiveRemoteSnapshot && !sdk.isManifestProvider(effectiveRemoteSnapshot)) {
    traverse(effectiveRemoteSnapshot, remoteInfo, isRoot);
    if (effectiveRemoteSnapshot.remotesInfo) {
      const remoteKeys = Object.keys(effectiveRemoteSnapshot.remotesInfo);
      for (const key of remoteKeys) {
        if (memo[key]) {
          continue;
        }
        memo[key] = true;
        const subRemoteInfo = splitId(key);
        const remoteValue = effectiveRemoteSnapshot.remotesInfo[key];
        traverseModuleInfo(globalSnapshot, {
          name: subRemoteInfo.name,
          version: remoteValue.matchedVersion
        }, traverse, false, memo, void 0);
      }
    }
  }
}
const isExisted = (type, url2) => {
  return document.querySelector(`${type}[${type === "link" ? "href" : "src"}="${url2}"]`);
};
function generatePreloadAssets(origin, preloadOptions, remote, globalSnapshot, remoteSnapshot) {
  const cssAssets = [];
  const jsAssets = [];
  const entryAssets = [];
  const loadedSharedJsAssets = /* @__PURE__ */ new Set();
  const loadedSharedCssAssets = /* @__PURE__ */ new Set();
  const { options } = origin;
  const { preloadConfig: rootPreloadConfig } = preloadOptions;
  const { depsRemote } = rootPreloadConfig;
  const memo = {};
  traverseModuleInfo(globalSnapshot, remote, (moduleInfoSnapshot, remoteInfo, isRoot) => {
    let preloadConfig;
    if (isRoot) {
      preloadConfig = rootPreloadConfig;
    } else {
      if (Array.isArray(depsRemote)) {
        const findPreloadConfig = depsRemote.find((remoteConfig) => {
          if (remoteConfig.nameOrAlias === remoteInfo.name || remoteConfig.nameOrAlias === remoteInfo.alias) {
            return true;
          }
          return false;
        });
        if (!findPreloadConfig) {
          return;
        }
        preloadConfig = defaultPreloadArgs(findPreloadConfig);
      } else if (depsRemote === true) {
        preloadConfig = rootPreloadConfig;
      } else {
        return;
      }
    }
    const remoteEntryUrl = sdk.getResourceUrl(moduleInfoSnapshot, getRemoteEntryInfoFromSnapshot(moduleInfoSnapshot).url);
    if (remoteEntryUrl) {
      entryAssets.push({
        name: remoteInfo.name,
        moduleInfo: {
          name: remoteInfo.name,
          entry: remoteEntryUrl,
          type: "remoteEntryType" in moduleInfoSnapshot ? moduleInfoSnapshot.remoteEntryType : "global",
          entryGlobalName: "globalName" in moduleInfoSnapshot ? moduleInfoSnapshot.globalName : remoteInfo.name,
          shareScope: "",
          version: "version" in moduleInfoSnapshot ? moduleInfoSnapshot.version : void 0
        },
        url: remoteEntryUrl
      });
    }
    let moduleAssetsInfo = "modules" in moduleInfoSnapshot ? moduleInfoSnapshot.modules : [];
    const normalizedPreloadExposes = normalizePreloadExposes(preloadConfig.exposes);
    if (normalizedPreloadExposes.length && "modules" in moduleInfoSnapshot) {
      var _moduleInfoSnapshot_modules;
      moduleAssetsInfo = moduleInfoSnapshot == null ? void 0 : (_moduleInfoSnapshot_modules = moduleInfoSnapshot.modules) == null ? void 0 : _moduleInfoSnapshot_modules.reduce((assets, moduleAssetInfo) => {
        if ((normalizedPreloadExposes == null ? void 0 : normalizedPreloadExposes.indexOf(moduleAssetInfo.moduleName)) !== -1) {
          assets.push(moduleAssetInfo);
        }
        return assets;
      }, []);
    }
    function handleAssets(assets) {
      const assetsRes = assets.map((asset) => sdk.getResourceUrl(moduleInfoSnapshot, asset));
      if (preloadConfig.filter) {
        return assetsRes.filter(preloadConfig.filter);
      }
      return assetsRes;
    }
    if (moduleAssetsInfo) {
      const assetsLength = moduleAssetsInfo.length;
      for (let index2 = 0; index2 < assetsLength; index2++) {
        const assetsInfo = moduleAssetsInfo[index2];
        const exposeFullPath = `${remoteInfo.name}/${assetsInfo.moduleName}`;
        origin.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
          id: assetsInfo.moduleName === "." ? remoteInfo.name : exposeFullPath,
          name: remoteInfo.name,
          remoteSnapshot: moduleInfoSnapshot,
          preloadConfig,
          remote: remoteInfo,
          origin
        });
        const preloaded = getPreloaded(exposeFullPath);
        if (preloaded) {
          continue;
        }
        if (preloadConfig.resourceCategory === "all") {
          cssAssets.push(...handleAssets(assetsInfo.assets.css.async));
          cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
          jsAssets.push(...handleAssets(assetsInfo.assets.js.async));
          jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
        } else if (preloadConfig.resourceCategory = "sync") {
          cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
          jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
        }
        setPreloaded(exposeFullPath);
      }
    }
  }, true, memo, remoteSnapshot);
  if (remoteSnapshot.shared) {
    const collectSharedAssets = (shareInfo, snapshotShared) => {
      const registeredShared = getRegisteredShare(origin.shareScopeMap, snapshotShared.sharedName, shareInfo, origin.sharedHandler.hooks.lifecycle.resolveShare);
      if (registeredShared && typeof registeredShared.lib === "function") {
        snapshotShared.assets.js.sync.forEach((asset) => {
          loadedSharedJsAssets.add(asset);
        });
        snapshotShared.assets.css.sync.forEach((asset) => {
          loadedSharedCssAssets.add(asset);
        });
      }
    };
    remoteSnapshot.shared.forEach((shared) => {
      var _options_shared;
      const shareInfos = (_options_shared = options.shared) == null ? void 0 : _options_shared[shared.sharedName];
      if (!shareInfos) {
        return;
      }
      const sharedOptions = shared.version ? shareInfos.find((s) => s.version === shared.version) : shareInfos;
      if (!sharedOptions) {
        return;
      }
      const arrayShareInfo = arrayOptions(sharedOptions);
      arrayShareInfo.forEach((s) => {
        collectSharedAssets(s, shared);
      });
    });
  }
  const needPreloadJsAssets = jsAssets.filter((asset) => !loadedSharedJsAssets.has(asset) && !isExisted("script", asset));
  const needPreloadCssAssets = cssAssets.filter((asset) => !loadedSharedCssAssets.has(asset) && !isExisted("link", asset));
  return {
    cssAssets: needPreloadCssAssets,
    jsAssetsWithoutEntry: needPreloadJsAssets,
    entryAssets: entryAssets.filter((entry) => !isExisted("script", entry.url))
  };
}
const generatePreloadAssetsPlugin = function() {
  return {
    name: "generate-preload-assets-plugin",
    async generatePreloadAssets(args) {
      const { origin, preloadOptions, remoteInfo, remote, globalSnapshot, remoteSnapshot } = args;
      if (!sdk.isBrowserEnv()) {
        return {
          cssAssets: [],
          jsAssetsWithoutEntry: [],
          entryAssets: []
        };
      }
      if (isRemoteInfoWithEntry(remote) && isPureRemoteEntry(remote)) {
        return {
          cssAssets: [],
          jsAssetsWithoutEntry: [],
          entryAssets: [
            {
              name: remote.name,
              url: remote.entry,
              moduleInfo: {
                name: remoteInfo.name,
                entry: remote.entry,
                type: remoteInfo.type || "global",
                entryGlobalName: "",
                shareScope: ""
              }
            }
          ]
        };
      }
      assignRemoteInfo(remoteInfo, remoteSnapshot);
      const assets = generatePreloadAssets(origin, preloadOptions, remoteInfo, globalSnapshot, remoteSnapshot);
      return assets;
    }
  };
};
function getGlobalRemoteInfo(moduleInfo, origin) {
  const hostGlobalSnapshot = getGlobalSnapshotInfoByModuleInfo({
    name: origin.name,
    version: origin.options.version
  });
  const globalRemoteInfo = hostGlobalSnapshot && "remotesInfo" in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, moduleInfo.name).value;
  if (globalRemoteInfo && globalRemoteInfo.matchedVersion) {
    return {
      hostGlobalSnapshot,
      globalSnapshot: getGlobalSnapshot(),
      remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
        name: moduleInfo.name,
        version: globalRemoteInfo.matchedVersion
      })
    };
  }
  return {
    hostGlobalSnapshot: void 0,
    globalSnapshot: getGlobalSnapshot(),
    remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
      name: moduleInfo.name,
      version: "version" in moduleInfo ? moduleInfo.version : void 0
    })
  };
}
class SnapshotHandler {
  // eslint-disable-next-line max-lines-per-function
  async loadRemoteSnapshotInfo({ moduleInfo, id, expose }) {
    const { options } = this.HostInstance;
    await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
      options,
      moduleInfo
    });
    let hostSnapshot = getGlobalSnapshotInfoByModuleInfo({
      name: this.HostInstance.options.name,
      version: this.HostInstance.options.version
    });
    if (!hostSnapshot) {
      hostSnapshot = {
        version: this.HostInstance.options.version || "",
        remoteEntry: "",
        remotesInfo: {}
      };
      addGlobalSnapshot({
        [this.HostInstance.options.name]: hostSnapshot
      });
    }
    if (hostSnapshot && "remotesInfo" in hostSnapshot && !getInfoWithoutType(hostSnapshot.remotesInfo, moduleInfo.name).value) {
      if ("version" in moduleInfo || "entry" in moduleInfo) {
        hostSnapshot.remotesInfo = polyfills._extends({}, hostSnapshot == null ? void 0 : hostSnapshot.remotesInfo, {
          [moduleInfo.name]: {
            matchedVersion: "version" in moduleInfo ? moduleInfo.version : moduleInfo.entry
          }
        });
      }
    }
    const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);
    const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({
      options,
      moduleInfo,
      hostGlobalSnapshot,
      remoteSnapshot,
      globalSnapshot
    });
    let mSnapshot;
    let gSnapshot;
    if (globalRemoteSnapshot) {
      if (sdk.isManifestProvider(globalRemoteSnapshot)) {
        const remoteEntry = sdk.isBrowserEnv() ? globalRemoteSnapshot.remoteEntry : globalRemoteSnapshot.ssrRemoteEntry || globalRemoteSnapshot.remoteEntry || "";
        const moduleSnapshot = await this.getManifestJson(remoteEntry, moduleInfo, {});
        const globalSnapshotRes2 = setGlobalSnapshotInfoByModuleInfo(polyfills._extends({}, moduleInfo, {
          // The global remote may be overridden
          // Therefore, set the snapshot key to the global address of the actual request
          entry: remoteEntry
        }), moduleSnapshot);
        mSnapshot = moduleSnapshot;
        gSnapshot = globalSnapshotRes2;
      } else {
        const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo,
          remoteSnapshot: globalRemoteSnapshot,
          from: "global"
        });
        mSnapshot = remoteSnapshotRes;
        gSnapshot = globalSnapshotRes;
      }
    } else {
      if (isRemoteInfoWithEntry(moduleInfo)) {
        const moduleSnapshot = await this.getManifestJson(moduleInfo.entry, moduleInfo, {});
        const globalSnapshotRes2 = setGlobalSnapshotInfoByModuleInfo(moduleInfo, moduleSnapshot);
        const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo,
          remoteSnapshot: moduleSnapshot,
          from: "global"
        });
        mSnapshot = remoteSnapshotRes;
        gSnapshot = globalSnapshotRes2;
      } else {
        error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_007, errorCodes.runtimeDescMap, {
          hostName: moduleInfo.name,
          hostVersion: moduleInfo.version,
          globalSnapshot: JSON.stringify(globalSnapshotRes)
        }));
      }
    }
    await this.hooks.lifecycle.afterLoadSnapshot.emit({
      id,
      host: this.HostInstance,
      options,
      moduleInfo,
      remoteSnapshot: mSnapshot
    });
    return {
      remoteSnapshot: mSnapshot,
      globalSnapshot: gSnapshot
    };
  }
  getGlobalRemoteInfo(moduleInfo) {
    return getGlobalRemoteInfo(moduleInfo, this.HostInstance);
  }
  async getManifestJson(manifestUrl, moduleInfo, extraOptions) {
    const getManifest = async () => {
      let manifestJson = this.manifestCache.get(manifestUrl);
      if (manifestJson) {
        return manifestJson;
      }
      try {
        let res2 = await this.loaderHook.lifecycle.fetch.emit(manifestUrl, {});
        if (!res2 || !(res2 instanceof Response)) {
          res2 = await fetch(manifestUrl, {});
        }
        manifestJson = await res2.json();
      } catch (err) {
        manifestJson = await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
          id: manifestUrl,
          error: err,
          from: "runtime",
          lifecycle: "afterResolve",
          origin: this.HostInstance
        });
        if (!manifestJson) {
          delete this.manifestLoading[manifestUrl];
          error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_003, errorCodes.runtimeDescMap, {
            manifestUrl,
            moduleName: moduleInfo.name,
            hostName: this.HostInstance.options.name
          }, `${err}`));
        }
      }
      assert(manifestJson.metaData && manifestJson.exposes && manifestJson.shared, `${manifestUrl} is not a federation manifest`);
      this.manifestCache.set(manifestUrl, manifestJson);
      return manifestJson;
    };
    const asyncLoadProcess = async () => {
      const manifestJson = await getManifest();
      const remoteSnapshot = sdk.generateSnapshotFromManifest(manifestJson, {
        version: manifestUrl
      });
      const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
        options: this.HostInstance.options,
        moduleInfo,
        manifestJson,
        remoteSnapshot,
        manifestUrl,
        from: "manifest"
      });
      return remoteSnapshotRes;
    };
    if (!this.manifestLoading[manifestUrl]) {
      this.manifestLoading[manifestUrl] = asyncLoadProcess().then((res2) => res2);
    }
    return this.manifestLoading[manifestUrl];
  }
  constructor(HostInstance) {
    this.loadingHostSnapshot = null;
    this.manifestCache = /* @__PURE__ */ new Map();
    this.hooks = new PluginSystem({
      beforeLoadRemoteSnapshot: new AsyncHook("beforeLoadRemoteSnapshot"),
      loadSnapshot: new AsyncWaterfallHook("loadGlobalSnapshot"),
      loadRemoteSnapshot: new AsyncWaterfallHook("loadRemoteSnapshot"),
      afterLoadSnapshot: new AsyncWaterfallHook("afterLoadSnapshot")
    });
    this.manifestLoading = Global.__FEDERATION__.__MANIFEST_LOADING__;
    this.HostInstance = HostInstance;
    this.loaderHook = HostInstance.loaderHook;
  }
}
class SharedHandler {
  // register shared in shareScopeMap
  registerShared(globalOptions, userOptions) {
    const { shareInfos, shared } = formatShareConfigs(globalOptions, userOptions);
    const sharedKeys = Object.keys(shareInfos);
    sharedKeys.forEach((sharedKey) => {
      const sharedVals = shareInfos[sharedKey];
      sharedVals.forEach((sharedVal) => {
        const registeredShared = getRegisteredShare(this.shareScopeMap, sharedKey, sharedVal, this.hooks.lifecycle.resolveShare);
        if (!registeredShared && sharedVal && sharedVal.lib) {
          this.setShared({
            pkgName: sharedKey,
            lib: sharedVal.lib,
            get: sharedVal.get,
            loaded: true,
            shared: sharedVal,
            from: userOptions.name
          });
        }
      });
    });
    return {
      shareInfos,
      shared
    };
  }
  async loadShare(pkgName, extraOptions) {
    const { host } = this;
    const shareInfo = getTargetSharedOptions({
      pkgName,
      extraOptions,
      shareInfos: host.options.shared
    });
    if (shareInfo == null ? void 0 : shareInfo.scope) {
      await Promise.all(shareInfo.scope.map(async (shareScope) => {
        await Promise.all(this.initializeSharing(shareScope, {
          strategy: shareInfo.strategy
        }));
        return;
      }));
    }
    const loadShareRes = await this.hooks.lifecycle.beforeLoadShare.emit({
      pkgName,
      shareInfo,
      shared: host.options.shared,
      origin: host
    });
    const { shareInfo: shareInfoRes } = loadShareRes;
    assert(shareInfoRes, `Cannot find ${pkgName} Share in the ${host.options.name}. Please ensure that the ${pkgName} Share parameters have been injected`);
    const registeredShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
    const addUseIn = (shared) => {
      if (!shared.useIn) {
        shared.useIn = [];
      }
      addUniqueItem(shared.useIn, host.options.name);
    };
    if (registeredShared && registeredShared.lib) {
      addUseIn(registeredShared);
      return registeredShared.lib;
    } else if (registeredShared && registeredShared.loading && !registeredShared.loaded) {
      const factory = await registeredShared.loading;
      registeredShared.loaded = true;
      if (!registeredShared.lib) {
        registeredShared.lib = factory;
      }
      addUseIn(registeredShared);
      return factory;
    } else if (registeredShared) {
      const asyncLoadProcess = async () => {
        const factory = await registeredShared.get();
        shareInfoRes.lib = factory;
        shareInfoRes.loaded = true;
        addUseIn(shareInfoRes);
        const gShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
        if (gShared) {
          gShared.lib = factory;
          gShared.loaded = true;
        }
        return factory;
      };
      const loading = asyncLoadProcess();
      this.setShared({
        pkgName,
        loaded: false,
        shared: registeredShared,
        from: host.options.name,
        lib: null,
        loading
      });
      return loading;
    } else {
      if (extraOptions == null ? void 0 : extraOptions.customShareInfo) {
        return false;
      }
      const asyncLoadProcess = async () => {
        const factory = await shareInfoRes.get();
        shareInfoRes.lib = factory;
        shareInfoRes.loaded = true;
        addUseIn(shareInfoRes);
        const gShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
        if (gShared) {
          gShared.lib = factory;
          gShared.loaded = true;
        }
        return factory;
      };
      const loading = asyncLoadProcess();
      this.setShared({
        pkgName,
        loaded: false,
        shared: shareInfoRes,
        from: host.options.name,
        lib: null,
        loading
      });
      return loading;
    }
  }
  /**
  * This function initializes the sharing sequence (executed only once per share scope).
  * It accepts one argument, the name of the share scope.
  * If the share scope does not exist, it creates one.
  */
  // eslint-disable-next-line @typescript-eslint/member-ordering
  initializeSharing(shareScopeName = DEFAULT_SCOPE, extraOptions) {
    const { host } = this;
    const from = extraOptions == null ? void 0 : extraOptions.from;
    const strategy = extraOptions == null ? void 0 : extraOptions.strategy;
    let initScope = extraOptions == null ? void 0 : extraOptions.initScope;
    const promises = [];
    if (from !== "build") {
      const { initTokens } = this;
      if (!initScope)
        initScope = [];
      let initToken = initTokens[shareScopeName];
      if (!initToken)
        initToken = initTokens[shareScopeName] = {
          from: this.host.name
        };
      if (initScope.indexOf(initToken) >= 0)
        return promises;
      initScope.push(initToken);
    }
    const shareScope = this.shareScopeMap;
    const hostName = host.options.name;
    if (!shareScope[shareScopeName]) {
      shareScope[shareScopeName] = {};
    }
    const scope = shareScope[shareScopeName];
    const register = (name, shared) => {
      var _activeVersion_shareConfig;
      const { version, eager } = shared;
      scope[name] = scope[name] || {};
      const versions = scope[name];
      const activeVersion = versions[version];
      const activeVersionEager = Boolean(activeVersion && (activeVersion.eager || ((_activeVersion_shareConfig = activeVersion.shareConfig) == null ? void 0 : _activeVersion_shareConfig.eager)));
      if (!activeVersion || activeVersion.strategy !== "loaded-first" && !activeVersion.loaded && (Boolean(!eager) !== !activeVersionEager ? eager : hostName > activeVersion.from)) {
        versions[version] = shared;
      }
    };
    const initFn = (mod) => mod && mod.init && mod.init(shareScope[shareScopeName], initScope);
    const initRemoteModule = async (key) => {
      const { module } = await host.remoteHandler.getRemoteModuleAndOptions({
        id: key
      });
      if (module.getEntry) {
        let remoteEntryExports;
        try {
          remoteEntryExports = await module.getEntry();
        } catch (error2) {
          remoteEntryExports = await host.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
            id: key,
            error: error2,
            from: "runtime",
            lifecycle: "beforeLoadShare",
            origin: host
          });
        }
        if (!module.inited) {
          await initFn(remoteEntryExports);
          module.inited = true;
        }
      }
    };
    Object.keys(host.options.shared).forEach((shareName) => {
      const sharedArr = host.options.shared[shareName];
      sharedArr.forEach((shared) => {
        if (shared.scope.includes(shareScopeName)) {
          register(shareName, shared);
        }
      });
    });
    if (host.options.shareStrategy === "version-first" || strategy === "version-first") {
      host.options.remotes.forEach((remote) => {
        if (remote.shareScope === shareScopeName) {
          promises.push(initRemoteModule(remote.name));
        }
      });
    }
    return promises;
  }
  // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
  // 1. If the loaded shared already exists globally, then it will be reused
  // 2. If lib exists in local shared, it will be used directly
  // 3. If the local get returns something other than Promise, then it will be used directly
  loadShareSync(pkgName, extraOptions) {
    const { host } = this;
    const shareInfo = getTargetSharedOptions({
      pkgName,
      extraOptions,
      shareInfos: host.options.shared
    });
    if (shareInfo == null ? void 0 : shareInfo.scope) {
      shareInfo.scope.forEach((shareScope) => {
        this.initializeSharing(shareScope, {
          strategy: shareInfo.strategy
        });
      });
    }
    const registeredShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfo, this.hooks.lifecycle.resolveShare);
    const addUseIn = (shared) => {
      if (!shared.useIn) {
        shared.useIn = [];
      }
      addUniqueItem(shared.useIn, host.options.name);
    };
    if (registeredShared) {
      if (typeof registeredShared.lib === "function") {
        addUseIn(registeredShared);
        if (!registeredShared.loaded) {
          registeredShared.loaded = true;
          if (registeredShared.from === host.options.name) {
            shareInfo.loaded = true;
          }
        }
        return registeredShared.lib;
      }
      if (typeof registeredShared.get === "function") {
        const module = registeredShared.get();
        if (!(module instanceof Promise)) {
          addUseIn(registeredShared);
          this.setShared({
            pkgName,
            loaded: true,
            from: host.options.name,
            lib: module,
            shared: registeredShared
          });
          return module;
        }
      }
    }
    if (shareInfo.lib) {
      if (!shareInfo.loaded) {
        shareInfo.loaded = true;
      }
      return shareInfo.lib;
    }
    if (shareInfo.get) {
      const module = shareInfo.get();
      if (module instanceof Promise) {
        const errorCode = (extraOptions == null ? void 0 : extraOptions.from) === "build" ? errorCodes.RUNTIME_005 : errorCodes.RUNTIME_006;
        throw new Error(errorCodes.getShortErrorMsg(errorCode, errorCodes.runtimeDescMap, {
          hostName: host.options.name,
          sharedPkgName: pkgName
        }));
      }
      shareInfo.lib = module;
      this.setShared({
        pkgName,
        loaded: true,
        from: host.options.name,
        lib: shareInfo.lib,
        shared: shareInfo
      });
      return shareInfo.lib;
    }
    throw new Error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_006, errorCodes.runtimeDescMap, {
      hostName: host.options.name,
      sharedPkgName: pkgName
    }));
  }
  initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
    const { host } = this;
    this.shareScopeMap[scopeName] = shareScope;
    this.hooks.lifecycle.initContainerShareScopeMap.emit({
      shareScope,
      options: host.options,
      origin: host,
      scopeName,
      hostShareScopeMap: extraOptions.hostShareScopeMap
    });
  }
  setShared({ pkgName, shared, from, lib, loading, loaded, get }) {
    const { version, scope = "default" } = shared, shareInfo = polyfills._object_without_properties_loose(shared, [
      "version",
      "scope"
    ]);
    const scopes = Array.isArray(scope) ? scope : [
      scope
    ];
    scopes.forEach((sc) => {
      if (!this.shareScopeMap[sc]) {
        this.shareScopeMap[sc] = {};
      }
      if (!this.shareScopeMap[sc][pkgName]) {
        this.shareScopeMap[sc][pkgName] = {};
      }
      if (!this.shareScopeMap[sc][pkgName][version]) {
        this.shareScopeMap[sc][pkgName][version] = polyfills._extends({
          version,
          scope: [
            "default"
          ]
        }, shareInfo, {
          lib,
          loaded,
          loading
        });
        if (get) {
          this.shareScopeMap[sc][pkgName][version].get = get;
        }
        return;
      }
      const registeredShared = this.shareScopeMap[sc][pkgName][version];
      if (loading && !registeredShared.loading) {
        registeredShared.loading = loading;
      }
    });
  }
  _setGlobalShareScopeMap(hostOptions) {
    const globalShareScopeMap = getGlobalShareScope();
    const identifier = hostOptions.id || hostOptions.name;
    if (identifier && !globalShareScopeMap[identifier]) {
      globalShareScopeMap[identifier] = this.shareScopeMap;
    }
  }
  constructor(host) {
    this.hooks = new PluginSystem({
      afterResolve: new AsyncWaterfallHook("afterResolve"),
      beforeLoadShare: new AsyncWaterfallHook("beforeLoadShare"),
      // not used yet
      loadShare: new AsyncHook(),
      resolveShare: new SyncWaterfallHook("resolveShare"),
      // maybe will change, temporarily for internal use only
      initContainerShareScopeMap: new SyncWaterfallHook("initContainerShareScopeMap")
    });
    this.host = host;
    this.shareScopeMap = {};
    this.initTokens = {};
    this._setGlobalShareScopeMap(host.options);
  }
}
class RemoteHandler {
  formatAndRegisterRemote(globalOptions, userOptions) {
    const userRemotes = userOptions.remotes || [];
    return userRemotes.reduce((res2, remote) => {
      this.registerRemote(remote, res2, {
        force: false
      });
      return res2;
    }, globalOptions.remotes);
  }
  setIdToRemoteMap(id, remoteMatchInfo) {
    const { remote, expose } = remoteMatchInfo;
    const { name, alias } = remote;
    this.idToRemoteMap[id] = {
      name: remote.name,
      expose
    };
    if (alias && id.startsWith(name)) {
      const idWithAlias = id.replace(name, alias);
      this.idToRemoteMap[idWithAlias] = {
        name: remote.name,
        expose
      };
      return;
    }
    if (alias && id.startsWith(alias)) {
      const idWithName = id.replace(alias, name);
      this.idToRemoteMap[idWithName] = {
        name: remote.name,
        expose
      };
    }
  }
  // eslint-disable-next-line max-lines-per-function
  // eslint-disable-next-line @typescript-eslint/member-ordering
  async loadRemote(id, options) {
    const { host } = this;
    try {
      const { loadFactory = true } = options || {
        loadFactory: true
      };
      const { module, moduleOptions, remoteMatchInfo } = await this.getRemoteModuleAndOptions({
        id
      });
      const { pkgNameOrAlias, remote, expose, id: idRes, remoteSnapshot } = remoteMatchInfo;
      const moduleOrFactory = await module.get(idRes, expose, options, remoteSnapshot);
      const moduleWrapper = await this.hooks.lifecycle.onLoad.emit({
        id: idRes,
        pkgNameOrAlias,
        expose,
        exposeModule: loadFactory ? moduleOrFactory : void 0,
        exposeModuleFactory: loadFactory ? void 0 : moduleOrFactory,
        remote,
        options: moduleOptions,
        moduleInstance: module,
        origin: host
      });
      this.setIdToRemoteMap(id, remoteMatchInfo);
      if (typeof moduleWrapper === "function") {
        return moduleWrapper;
      }
      return moduleOrFactory;
    } catch (error2) {
      const { from = "runtime" } = options || {
        from: "runtime"
      };
      const failOver = await this.hooks.lifecycle.errorLoadRemote.emit({
        id,
        error: error2,
        from,
        lifecycle: "onLoad",
        origin: host
      });
      if (!failOver) {
        throw error2;
      }
      return failOver;
    }
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  async preloadRemote(preloadOptions) {
    const { host } = this;
    await this.hooks.lifecycle.beforePreloadRemote.emit({
      preloadOps: preloadOptions,
      options: host.options,
      origin: host
    });
    const preloadOps = formatPreloadArgs(host.options.remotes, preloadOptions);
    await Promise.all(preloadOps.map(async (ops) => {
      const { remote } = ops;
      const remoteInfo = getRemoteInfo(remote);
      const { globalSnapshot, remoteSnapshot } = await host.snapshotHandler.loadRemoteSnapshotInfo({
        moduleInfo: remote
      });
      const assets = await this.hooks.lifecycle.generatePreloadAssets.emit({
        origin: host,
        preloadOptions: ops,
        remote,
        remoteInfo,
        globalSnapshot,
        remoteSnapshot
      });
      if (!assets) {
        return;
      }
      preloadAssets(remoteInfo, host, assets);
    }));
  }
  registerRemotes(remotes, options) {
    const { host } = this;
    remotes.forEach((remote) => {
      this.registerRemote(remote, host.options.remotes, {
        force: options == null ? void 0 : options.force
      });
    });
  }
  async getRemoteModuleAndOptions(options) {
    const { host } = this;
    const { id } = options;
    let loadRemoteArgs;
    try {
      loadRemoteArgs = await this.hooks.lifecycle.beforeRequest.emit({
        id,
        options: host.options,
        origin: host
      });
    } catch (error2) {
      loadRemoteArgs = await this.hooks.lifecycle.errorLoadRemote.emit({
        id,
        options: host.options,
        origin: host,
        from: "runtime",
        error: error2,
        lifecycle: "beforeRequest"
      });
      if (!loadRemoteArgs) {
        throw error2;
      }
    }
    const { id: idRes } = loadRemoteArgs;
    const remoteSplitInfo = matchRemoteWithNameAndExpose(host.options.remotes, idRes);
    assert(remoteSplitInfo, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_004, errorCodes.runtimeDescMap, {
      hostName: host.options.name,
      requestId: idRes
    }));
    const { remote: rawRemote } = remoteSplitInfo;
    const remoteInfo = getRemoteInfo(rawRemote);
    const matchInfo = await host.sharedHandler.hooks.lifecycle.afterResolve.emit(polyfills._extends({
      id: idRes
    }, remoteSplitInfo, {
      options: host.options,
      origin: host,
      remoteInfo
    }));
    const { remote, expose } = matchInfo;
    assert(remote && expose, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${idRes}.`);
    let module = host.moduleCache.get(remote.name);
    const moduleOptions = {
      host,
      remoteInfo
    };
    if (!module) {
      module = new Module(moduleOptions);
      host.moduleCache.set(remote.name, module);
    }
    return {
      module,
      moduleOptions,
      remoteMatchInfo: matchInfo
    };
  }
  registerRemote(remote, targetRemotes, options) {
    const { host } = this;
    const normalizeRemote = () => {
      if (remote.alias) {
        const findEqual = targetRemotes.find((item) => {
          var _item_alias;
          return remote.alias && (item.name.startsWith(remote.alias) || ((_item_alias = item.alias) == null ? void 0 : _item_alias.startsWith(remote.alias)));
        });
        assert(!findEqual, `The alias ${remote.alias} of remote ${remote.name} is not allowed to be the prefix of ${findEqual && findEqual.name} name or alias`);
      }
      if ("entry" in remote) {
        if (sdk.isBrowserEnv() && !remote.entry.startsWith("http")) {
          remote.entry = new URL(remote.entry, window.location.origin).href;
        }
      }
      if (!remote.shareScope) {
        remote.shareScope = DEFAULT_SCOPE;
      }
      if (!remote.type) {
        remote.type = DEFAULT_REMOTE_TYPE;
      }
    };
    this.hooks.lifecycle.beforeRegisterRemote.emit({
      remote,
      origin: host
    });
    const registeredRemote = targetRemotes.find((item) => item.name === remote.name);
    if (!registeredRemote) {
      normalizeRemote();
      targetRemotes.push(remote);
      this.hooks.lifecycle.registerRemote.emit({
        remote,
        origin: host
      });
    } else {
      const messages = [
        `The remote "${remote.name}" is already registered.`,
        "Please note that overriding it may cause unexpected errors."
      ];
      if (options == null ? void 0 : options.force) {
        this.removeRemote(registeredRemote);
        normalizeRemote();
        targetRemotes.push(remote);
        this.hooks.lifecycle.registerRemote.emit({
          remote,
          origin: host
        });
        sdk.warn(messages.join(" "));
      }
    }
  }
  removeRemote(remote) {
    try {
      const { host } = this;
      const { name } = remote;
      const remoteIndex = host.options.remotes.findIndex((item) => item.name === name);
      if (remoteIndex !== -1) {
        host.options.remotes.splice(remoteIndex, 1);
      }
      const loadedModule = host.moduleCache.get(remote.name);
      if (loadedModule) {
        const remoteInfo = loadedModule.remoteInfo;
        const key = remoteInfo.entryGlobalName;
        if (CurrentGlobal[key]) {
          var _Object_getOwnPropertyDescriptor;
          if ((_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(CurrentGlobal, key)) == null ? void 0 : _Object_getOwnPropertyDescriptor.configurable) {
            delete CurrentGlobal[key];
          } else {
            CurrentGlobal[key] = void 0;
          }
        }
        const remoteEntryUniqueKey = getRemoteEntryUniqueKey(loadedModule.remoteInfo);
        if (globalLoading[remoteEntryUniqueKey]) {
          delete globalLoading[remoteEntryUniqueKey];
        }
        host.snapshotHandler.manifestCache.delete(remoteInfo.entry);
        let remoteInsId = remoteInfo.buildVersion ? sdk.composeKeyWithSeparator(remoteInfo.name, remoteInfo.buildVersion) : remoteInfo.name;
        const remoteInsIndex = CurrentGlobal.__FEDERATION__.__INSTANCES__.findIndex((ins) => {
          if (remoteInfo.buildVersion) {
            return ins.options.id === remoteInsId;
          } else {
            return ins.name === remoteInsId;
          }
        });
        if (remoteInsIndex !== -1) {
          const remoteIns = CurrentGlobal.__FEDERATION__.__INSTANCES__[remoteInsIndex];
          remoteInsId = remoteIns.options.id || remoteInsId;
          const globalShareScopeMap = getGlobalShareScope();
          let isAllSharedNotUsed = true;
          const needDeleteKeys = [];
          Object.keys(globalShareScopeMap).forEach((instId) => {
            const shareScopeMap = globalShareScopeMap[instId];
            shareScopeMap && Object.keys(shareScopeMap).forEach((shareScope) => {
              const shareScopeVal = shareScopeMap[shareScope];
              shareScopeVal && Object.keys(shareScopeVal).forEach((shareName) => {
                const sharedPkgs = shareScopeVal[shareName];
                sharedPkgs && Object.keys(sharedPkgs).forEach((shareVersion) => {
                  const shared = sharedPkgs[shareVersion];
                  if (shared && typeof shared === "object" && shared.from === remoteInfo.name) {
                    if (shared.loaded || shared.loading) {
                      shared.useIn = shared.useIn.filter((usedHostName) => usedHostName !== remoteInfo.name);
                      if (shared.useIn.length) {
                        isAllSharedNotUsed = false;
                      } else {
                        needDeleteKeys.push([
                          instId,
                          shareScope,
                          shareName,
                          shareVersion
                        ]);
                      }
                    } else {
                      needDeleteKeys.push([
                        instId,
                        shareScope,
                        shareName,
                        shareVersion
                      ]);
                    }
                  }
                });
              });
            });
          });
          if (isAllSharedNotUsed) {
            remoteIns.shareScopeMap = {};
            delete globalShareScopeMap[remoteInsId];
          }
          needDeleteKeys.forEach(([insId, shareScope, shareName, shareVersion]) => {
            var _globalShareScopeMap_insId_shareScope_shareName, _globalShareScopeMap_insId_shareScope, _globalShareScopeMap_insId;
            (_globalShareScopeMap_insId = globalShareScopeMap[insId]) == null ? true : (_globalShareScopeMap_insId_shareScope = _globalShareScopeMap_insId[shareScope]) == null ? true : (_globalShareScopeMap_insId_shareScope_shareName = _globalShareScopeMap_insId_shareScope[shareName]) == null ? true : delete _globalShareScopeMap_insId_shareScope_shareName[shareVersion];
          });
          CurrentGlobal.__FEDERATION__.__INSTANCES__.splice(remoteInsIndex, 1);
        }
        const { hostGlobalSnapshot } = getGlobalRemoteInfo(remote, host);
        if (hostGlobalSnapshot) {
          const remoteKey = hostGlobalSnapshot && "remotesInfo" in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, remote.name).key;
          if (remoteKey) {
            delete hostGlobalSnapshot.remotesInfo[remoteKey];
            if (
              //eslint-disable-next-line no-extra-boolean-cast
              Boolean(Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey])
            ) {
              delete Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey];
            }
          }
        }
        host.moduleCache.delete(remote.name);
      }
    } catch (err) {
      logger.log("removeRemote fail: ", err);
    }
  }
  constructor(host) {
    this.hooks = new PluginSystem({
      beforeRegisterRemote: new SyncWaterfallHook("beforeRegisterRemote"),
      registerRemote: new SyncWaterfallHook("registerRemote"),
      beforeRequest: new AsyncWaterfallHook("beforeRequest"),
      onLoad: new AsyncHook("onLoad"),
      handlePreloadModule: new SyncHook("handlePreloadModule"),
      errorLoadRemote: new AsyncHook("errorLoadRemote"),
      beforePreloadRemote: new AsyncHook("beforePreloadRemote"),
      generatePreloadAssets: new AsyncHook("generatePreloadAssets"),
      // not used yet
      afterPreloadRemote: new AsyncHook(),
      loadEntry: new AsyncHook()
    });
    this.host = host;
    this.idToRemoteMap = {};
  }
}
const USE_SNAPSHOT = typeof FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN === "boolean" ? !FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN : true;
class FederationHost {
  initOptions(userOptions) {
    this.registerPlugins(userOptions.plugins);
    const options = this.formatOptions(this.options, userOptions);
    this.options = options;
    return options;
  }
  async loadShare(pkgName, extraOptions) {
    return this.sharedHandler.loadShare(pkgName, extraOptions);
  }
  // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
  // 1. If the loaded shared already exists globally, then it will be reused
  // 2. If lib exists in local shared, it will be used directly
  // 3. If the local get returns something other than Promise, then it will be used directly
  loadShareSync(pkgName, extraOptions) {
    return this.sharedHandler.loadShareSync(pkgName, extraOptions);
  }
  initializeSharing(shareScopeName = DEFAULT_SCOPE, extraOptions) {
    return this.sharedHandler.initializeSharing(shareScopeName, extraOptions);
  }
  initRawContainer(name, url2, container) {
    const remoteInfo = getRemoteInfo({
      name,
      entry: url2
    });
    const module = new Module({
      host: this,
      remoteInfo
    });
    module.remoteEntryExports = container;
    this.moduleCache.set(name, module);
    return module;
  }
  // eslint-disable-next-line max-lines-per-function
  // eslint-disable-next-line @typescript-eslint/member-ordering
  async loadRemote(id, options) {
    return this.remoteHandler.loadRemote(id, options);
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  async preloadRemote(preloadOptions) {
    return this.remoteHandler.preloadRemote(preloadOptions);
  }
  initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
    this.sharedHandler.initShareScopeMap(scopeName, shareScope, extraOptions);
  }
  formatOptions(globalOptions, userOptions) {
    const { shared } = formatShareConfigs(globalOptions, userOptions);
    const { userOptions: userOptionsRes, options: globalOptionsRes } = this.hooks.lifecycle.beforeInit.emit({
      origin: this,
      userOptions,
      options: globalOptions,
      shareInfo: shared
    });
    const remotes = this.remoteHandler.formatAndRegisterRemote(globalOptionsRes, userOptionsRes);
    const { shared: handledShared } = this.sharedHandler.registerShared(globalOptionsRes, userOptionsRes);
    const plugins = [
      ...globalOptionsRes.plugins
    ];
    if (userOptionsRes.plugins) {
      userOptionsRes.plugins.forEach((plugin) => {
        if (!plugins.includes(plugin)) {
          plugins.push(plugin);
        }
      });
    }
    const optionsRes = polyfills._extends({}, globalOptions, userOptions, {
      plugins,
      remotes,
      shared: handledShared
    });
    this.hooks.lifecycle.init.emit({
      origin: this,
      options: optionsRes
    });
    return optionsRes;
  }
  registerPlugins(plugins) {
    const pluginRes = registerPlugins$1(plugins, [
      this.hooks,
      this.remoteHandler.hooks,
      this.sharedHandler.hooks,
      this.snapshotHandler.hooks,
      this.loaderHook,
      this.bridgeHook
    ]);
    this.options.plugins = this.options.plugins.reduce((res2, plugin) => {
      if (!plugin)
        return res2;
      if (res2 && !res2.find((item) => item.name === plugin.name)) {
        res2.push(plugin);
      }
      return res2;
    }, pluginRes || []);
  }
  registerRemotes(remotes, options) {
    return this.remoteHandler.registerRemotes(remotes, options);
  }
  constructor(userOptions) {
    this.hooks = new PluginSystem({
      beforeInit: new SyncWaterfallHook("beforeInit"),
      init: new SyncHook(),
      // maybe will change, temporarily for internal use only
      beforeInitContainer: new AsyncWaterfallHook("beforeInitContainer"),
      // maybe will change, temporarily for internal use only
      initContainer: new AsyncWaterfallHook("initContainer")
    });
    this.version = "0.16.0";
    this.moduleCache = /* @__PURE__ */ new Map();
    this.loaderHook = new PluginSystem({
      // FIXME: may not be suitable , not open to the public yet
      getModuleInfo: new SyncHook(),
      createScript: new SyncHook(),
      createLink: new SyncHook(),
      fetch: new AsyncHook(),
      loadEntryError: new AsyncHook(),
      getModuleFactory: new AsyncHook()
    });
    this.bridgeHook = new PluginSystem({
      beforeBridgeRender: new SyncHook(),
      afterBridgeRender: new SyncHook(),
      beforeBridgeDestroy: new SyncHook(),
      afterBridgeDestroy: new SyncHook()
    });
    const plugins = USE_SNAPSHOT ? [
      snapshotPlugin(),
      generatePreloadAssetsPlugin()
    ] : [];
    const defaultOptions = {
      id: getBuilderId$1(),
      name: userOptions.name,
      plugins,
      remotes: [],
      shared: {},
      inBrowser: sdk.isBrowserEnv()
    };
    this.name = userOptions.name;
    this.options = defaultOptions;
    this.snapshotHandler = new SnapshotHandler(this);
    this.sharedHandler = new SharedHandler(this);
    this.remoteHandler = new RemoteHandler(this);
    this.shareScopeMap = this.sharedHandler.shareScopeMap;
    this.registerPlugins([
      ...defaultOptions.plugins,
      ...userOptions.plugins || []
    ]);
    this.options = this.formatOptions(defaultOptions, userOptions);
  }
}
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
index_cjs$2.loadScript = sdk.loadScript;
index_cjs$2.loadScriptNode = sdk.loadScriptNode;
index_cjs$2.CurrentGlobal = CurrentGlobal;
index_cjs$2.FederationHost = FederationHost;
index_cjs$2.Global = Global;
index_cjs$2.Module = Module;
index_cjs$2.addGlobalSnapshot = addGlobalSnapshot;
index_cjs$2.assert = assert;
index_cjs$2.getGlobalFederationConstructor = getGlobalFederationConstructor;
index_cjs$2.getGlobalSnapshot = getGlobalSnapshot;
index_cjs$2.getInfoWithoutType = getInfoWithoutType;
index_cjs$2.getRegisteredShare = getRegisteredShare;
index_cjs$2.getRemoteEntry = getRemoteEntry;
index_cjs$2.getRemoteInfo = getRemoteInfo;
index_cjs$2.helpers = helpers;
index_cjs$2.isStaticResourcesEqual = isStaticResourcesEqual;
index_cjs$2.matchRemoteWithNameAndExpose = matchRemoteWithNameAndExpose;
index_cjs$2.registerGlobalPlugins = registerGlobalPlugins;
index_cjs$2.resetFederationGlobalInfo = resetFederationGlobalInfo;
index_cjs$2.safeWrapper = safeWrapper;
index_cjs$2.satisfy = satisfy;
index_cjs$2.setGlobalFederationConstructor = setGlobalFederationConstructor;
index_cjs$2.setGlobalFederationInstance = setGlobalFederationInstance;
index_cjs$2.types = index;
var utils_cjs = {};
var runtimeCore$1 = index_cjs$2;
function getBuilderId() {
  return typeof FEDERATION_BUILD_IDENTIFIER !== "undefined" ? FEDERATION_BUILD_IDENTIFIER : "";
}
function getGlobalFederationInstance(name, version) {
  const buildId = getBuilderId();
  return runtimeCore$1.CurrentGlobal.__FEDERATION__.__INSTANCES__.find((GMInstance) => {
    if (buildId && GMInstance.options.id === getBuilderId()) {
      return true;
    }
    if (GMInstance.options.name === name && !GMInstance.options.version && !version) {
      return true;
    }
    if (GMInstance.options.name === name && version && GMInstance.options.version === version) {
      return true;
    }
    return false;
  });
}
utils_cjs.getGlobalFederationInstance = getGlobalFederationInstance;
var runtimeCore = index_cjs$2;
var utils = utils_cjs;
let FederationInstance = null;
function init(options) {
  const instance = utils.getGlobalFederationInstance(options.name, options.version);
  if (!instance) {
    const FederationConstructor = runtimeCore.getGlobalFederationConstructor() || runtimeCore.FederationHost;
    FederationInstance = new FederationConstructor(options);
    runtimeCore.setGlobalFederationInstance(FederationInstance);
    return FederationInstance;
  } else {
    instance.initOptions(options);
    if (!FederationInstance) {
      FederationInstance = instance;
    }
    return instance;
  }
}
function loadRemote(...args) {
  runtimeCore.assert(FederationInstance, "Please call init first");
  const loadRemote1 = FederationInstance.loadRemote;
  return loadRemote1.apply(FederationInstance, args);
}
function loadShare(...args) {
  runtimeCore.assert(FederationInstance, "Please call init first");
  const loadShare1 = FederationInstance.loadShare;
  return loadShare1.apply(FederationInstance, args);
}
function loadShareSync(...args) {
  runtimeCore.assert(FederationInstance, "Please call init first");
  const loadShareSync1 = FederationInstance.loadShareSync;
  return loadShareSync1.apply(FederationInstance, args);
}
function preloadRemote(...args) {
  runtimeCore.assert(FederationInstance, "Please call init first");
  return FederationInstance.preloadRemote.apply(FederationInstance, args);
}
function registerRemotes(...args) {
  runtimeCore.assert(FederationInstance, "Please call init first");
  return FederationInstance.registerRemotes.apply(FederationInstance, args);
}
function registerPlugins(...args) {
  runtimeCore.assert(FederationInstance, "Please call init first");
  return FederationInstance.registerPlugins.apply(FederationInstance, args);
}
function getInstance() {
  return FederationInstance;
}
runtimeCore.setGlobalFederationConstructor(runtimeCore.FederationHost);
index_cjs$3.FederationHost = runtimeCore.FederationHost;
index_cjs$3.Module = runtimeCore.Module;
index_cjs$3.getRemoteEntry = runtimeCore.getRemoteEntry;
index_cjs$3.getRemoteInfo = runtimeCore.getRemoteInfo;
index_cjs$3.loadScript = runtimeCore.loadScript;
index_cjs$3.loadScriptNode = runtimeCore.loadScriptNode;
index_cjs$3.registerGlobalPlugins = runtimeCore.registerGlobalPlugins;
index_cjs$3.getInstance = getInstance;
index_cjs$3.init = init;
index_cjs$3.loadRemote = loadRemote;
index_cjs$3.loadShare = loadShare;
index_cjs$3.loadShareSync = loadShareSync;
index_cjs$3.preloadRemote = preloadRemote;
index_cjs$3.registerPlugins = registerPlugins;
index_cjs$3.registerRemotes = registerRemotes;
(function(exports) {
  var runtime2 = index_cjs$3;
  Object.prototype.hasOwnProperty.call(runtime2, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: true,
    value: runtime2["__proto__"]
  });
  Object.keys(runtime2).forEach(function(k) {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
      exports[k] = runtime2[k];
  });
})(runtime_cjs);
(function(exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(runtime_cjs, exports);
})(runtime);
async function loadRemoteModule({
  remoteUrl,
  remoteName,
  exposedModule
}) {
  runtime.init({
    name: "shell",
    remotes: []
  });
  runtime.registerRemotes([
    {
      name: remoteName,
      type: "esm",
      entry: remoteUrl.startsWith("http") ? remoteUrl : window.location.origin + "/remotes" + remoteUrl
    }
  ]);
  let module = await runtime.loadRemote(exposedModule.replace(".", remoteName)).then((m) => {
    return m;
  });
  return module;
}
const _hoisted_1$1 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "RemoteModuleComponentLoader",
  props: {
    pathToModule: {},
    remoteName: {},
    exposeModule: {}
  },
  setup(__props) {
    const remoteComponent = user_mf_2_management__loadShare__vue__loadShare__.shallowRef();
    const props = __props;
    const loadComponent = async () => {
      remoteComponent.value = user_mf_2_management__loadShare__vue__loadShare__.defineAsyncComponent(async () => await loadRemoteModule({
        remoteUrl: props.pathToModule,
        remoteName: props.remoteName,
        exposedModule: props.exposeModule
      }));
    };
    user_mf_2_management__loadShare__vue__loadShare__.onMounted(loadComponent);
    return (_ctx, _cache) => {
      return remoteComponent.value ? (user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createBlock(user_mf_2_management__loadShare__vue__loadShare__.resolveDynamicComponent(remoteComponent.value), { key: 0 })) : (user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createElementBlock("p", _hoisted_1$1, "Loading remote module..."));
    };
  }
});
function GetImageUrl(imageUrl) {
  return "/figures/" + imageUrl;
}
const GetDataSourceQueryDTOCoreListResponseFields = {
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id"
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name"
  }
};
const GetPagesQueryDTOCoreListResponseFields = {
  id: {
    _field: "id",
    _type: "number",
    _caption: "s:id"
  },
  path: {
    _field: "path",
    _type: "string",
    _caption: "s:path"
  },
  pageComponent: {
    _field: "pageComponent",
    _type: "string",
    _caption: "s:pageComponent"
  },
  name: {
    _field: "name",
    _type: "string",
    _caption: "s:name"
  },
  iconUrl: {
    _field: "iconUrl",
    _type: "string",
    _caption: "s:iconUrl"
  },
  module: {
    _field: "module",
    _type: "ModuleClass",
    _caption: "s:module",
    id: {
      _field: "id",
      _type: "number",
      _caption: "s:id"
    },
    moduleName: {
      _field: "moduleName",
      _type: "string",
      _caption: "s:moduleName"
    },
    pathToModue: {
      _field: "pathToModue",
      _type: "string",
      _caption: "s:pathToModue"
    }
  },
  navigationGroup: {
    _field: "navigationGroup",
    _type: "NavigationGroupClass",
    _caption: "s:navigationGroup",
    id: {
      _field: "id",
      _type: "number",
      _caption: "s:id"
    },
    parentGroupId: {
      _field: "parentGroupId",
      _type: "number",
      _caption: "s:parentGroupId"
    },
    name: {
      _field: "name",
      _type: "string",
      _caption: "s:name"
    },
    iconUrl: {
      _field: "iconUrl",
      _type: "string",
      _caption: "s:iconUrl"
    }
  }
};
const pagesDataSource = new DataSource({
  name: "pages",
  method: "GET",
  translatableResponseFields: ["data.name"]
});
const dataSourcesDataSource = new DataSource({
  name: "dataSources",
  method: "GET",
  translatableResponseFields: ["data.name"]
});
const _hoisted_1 = { class: "flex items-start gap-3 p-5" };
const _hoisted_2 = { class: "text-red-700 whitespace-pre-wrap break-words" };
const _sfc_main = /* @__PURE__ */ user_mf_2_management__loadShare__vue__loadShare__.defineComponent({
  __name: "ErrorPopupContainer",
  setup(__props) {
    const popups = user_mf_2_management__loadShare__vue__loadShare__.reactive([]);
    function show(message) {
      popups.push({ id: Date.now() + Math.random(), message });
    }
    function remove(id) {
      const idx = popups.findIndex((p) => p.id === id);
      if (idx !== -1)
        popups.splice(idx, 1);
    }
    user_mf_2_management__loadShare__vue__loadShare__.onMounted(() => errorBus.on("error", show));
    user_mf_2_management__loadShare__vue__loadShare__.onUnmounted(() => errorBus.off("error", show));
    return (_ctx, _cache) => {
      return user_mf_2_management__loadShare__vue__loadShare__.openBlock(true), user_mf_2_management__loadShare__vue__loadShare__.createElementBlock(user_mf_2_management__loadShare__vue__loadShare__.Fragment, null, user_mf_2_management__loadShare__vue__loadShare__.renderList(popups, (p, i) => {
        return user_mf_2_management__loadShare__vue__loadShare__.openBlock(), user_mf_2_management__loadShare__vue__loadShare__.createBlock(user_mf_2_management__loadShare__vue__loadShare__.unref(user_mf_2_management__loadShare___mf_0_metronik_mf_1_devextreme__loadShare__.DxPopup), {
          key: p.id,
          visible: true,
          "drag-enabled": true,
          "show-title": false,
          width: 420,
          height: "auto",
          wrapperAttr: { class: "error-popup" },
          position: {
            my: "center center",
            at: "center center",
            offset: { y: i * 30 }
            // 30‑px vertical stagger
          },
          onHiding: ($event) => remove(p.id)
        }, {
          default: user_mf_2_management__loadShare__vue__loadShare__.withCtx(() => [
            user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("div", _hoisted_1, [
              user_mf_2_management__loadShare__vue__loadShare__.createElementVNode("div", _hoisted_2, user_mf_2_management__loadShare__vue__loadShare__.toDisplayString(p.message), 1)
            ])
          ]),
          _: 2
        }, 1032, ["position", "onHiding"]);
      }), 128);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const ErrorPopupContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-527c8346"]]);

export { CrossTabLock, DataSource, EndPointAction, Entity, ErrorPopupContainer, GetDataSourceQueryDTOCoreListResponseFields, GetImageUrl, GetPagesQueryDTOCoreListResponseFields, Module$1 as Module, _sfc_main$1 as RemoteModuleComponentLoader, View, VisualizationType, authService, dataSourcesDataSource, loadRemoteModule, pagesDataSource, routingService, settingsService, signalRService, translationService };
//# sourceMappingURL=index.es-0035ddd2.js.map
