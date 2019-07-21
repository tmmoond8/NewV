import {
  GetMessagesResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import ChatData from '../ChatData';


const resolvers: Resolvers = {
  Query: {
    GetMessages: (): GetMessagesResponse => {
      return {
        ok: true,
        error: null,
        messages: ChatData.getMessages()
      }
    }
  }
}

export default resolvers;