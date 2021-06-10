export default interface IDatabase {
  start(): Promise<void>;
  close(): Promise<void>;
}
