import api from "../hooks/use-api";


export default class FeedbackService {
    static async sendFeedback(id: string, text: string) {
        return api.post("/send-feedback", { id, text });
    }
}
