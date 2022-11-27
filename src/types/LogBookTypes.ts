import IEntries from './LogBookEntries';

export default interface ILogBookTypes {
    type: string;
    name: string;
    heading : string,
    latest_entry : IEntries
  }
  