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
            const response = await FeedbackService.sendFeedback(user?.email, inputValue);
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
                <Typography  modifier={'H1'}>Пользовательские <br/>свойства: <br/>CSS-переменные</Typography>
                <Typography modifier={['Text1', 'justify']}>В мире программирования, переменные неотъемлемая часть и трудно представить как бы мы разрабатывали приложения без них. К удивление переменные в css  появились относительно недавно, хотя потребность в них была всегда. В этом видео мы поговорим не только об очевидных достоинствах “пользовательских свойств”, но и о том как они изменили разработку.</Typography>
            </div>
            <div className={styles.Lesson}>
                <div className={styles.Video}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://play.boomstream.com/n02XXHVR?title=0"
                        title="Переменные"
                        frameBorder="0"
                        scrolling="no"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
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
