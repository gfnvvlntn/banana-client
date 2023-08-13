import React, {useState} from 'react';
import Typography from "../../../../components/base/typography/Typography";
import styles from './styles.module.scss'
import Button from "../../../../components/base/button/Button";
import Input from "../../../../components/base/input/Input";
import toast from "react-hot-toast";
import useLocalStorage from "../../../../hooks/use-localStorage";
import FeedbackService from "../../../../sevices/feedbackService";

const Lesson = () => {
    const [inputValue, setInputValue] = useState('')
    const [user, setUser] = useLocalStorage('user');

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const sendFeedback = async () => {
        if (!inputValue) {
            toast.error('Напишите отзыв')
            return
        }
        try {
            const response = await FeedbackService.sendFeedback(user?.id, inputValue);
            if (response.data.error) {
                toast.error(response.data.message)
                return;
            }
            setUser(response.data.user)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={styles.Container}>
            <div className={styles.LessonTitle}>
                <Typography  modifier={'H1'}>Пользовательские <br/>CSS-свойства: <br/>CSS-переменные</Typography>
                <Typography modifier={'Text1'}>В JavaScript-мире препроцессоры CSS (вроде Sass, Less и Stylus) — это очень полезные и популярные технологии. Препроцессоры расширяют возможности CSS, позволяя пользоваться, например, переменными и функциями. Но современным веб-дизайнерам доступны мощные стандартные возможности CSS, известные как пользовательские CSS-свойства или CSS-переменные.</Typography>
            </div>
            <div className={styles.Lesson}>
                <div className={styles.Video}/>
                {user.feedback ?
                    <>
                        <Typography modifier={'H1'}>Ты просто супер!</Typography>
                        <Typography modifier={'Text1'}>Отслеживание эмоций в процессе обучения очень помогает. Спасибо, что не <br/> пропускаешь этот этап!</Typography>
                    </>
                    :
                    <>
                        <Typography modifier={'H1'}>Как тебе этот урок?</Typography>
                        <Typography modifier={'Text1'}>Поделись своими эмоциями - так я смогу улучшить свою работу. Что ты <br/> чувствуешь после урока?</Typography>
                        <div className={styles.FeedbackForm}>
                            <Input placeholder={'Напишите свой отзыв'} value={inputValue} onChange={onChangeInput}/>
                            <Button onClick={sendFeedback} modifier={'yellow'}>Отправить отзыв</Button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Lesson;
