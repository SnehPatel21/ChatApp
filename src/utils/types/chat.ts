export interface Message {
    id: string;
    content: string;
    timestamp: string;
    sender: {
      id: string;
      name: string;
      avatar?: string;
    };
  }