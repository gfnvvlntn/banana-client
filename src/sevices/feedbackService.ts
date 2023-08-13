import api from "../hooks/use-api";


export default class FeedbackService {
    static async sendFeedback(email: string, feedback: string) {
        return api.post("/send-feedback", { email, feedback });
    }
}
