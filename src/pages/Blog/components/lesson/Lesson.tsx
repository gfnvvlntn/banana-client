import React from 'react';
import Typography from "../../../../components/typography/Typography";
import styles from './styles.module.scss'
import Selector from "../../../../components/selector/Selector";
import Button from "../../../../components/button/Button";
const Lesson = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.LessonTitle}>
                <Typography  modifier={'H1'}>Пользовательские <br/>CSS-свойства: <br/>CSS-переменные</Typography>
                <Typography modifier={'Text1'}>В JavaScript-мире препроцессоры CSS (вроде Sass, Less и Stylus) — это очень полезные и популярные технологии. Препроцессоры расширяют возможности CSS, позволяя пользоваться, например, переменными и функциями. Но современным веб-дизайнерам доступны мощные стандартные возможности CSS, известные как пользовательские CSS-свойства или CSS-переменные.</Typography>
            </div>
            <div className={styles.Lesson}>
                <div className={styles.Video}/>
                <Typography modifier={'H1'}>Как тебе этот урок?</Typography>
                <Typography modifier={'Text1'}>Поделись своими эмоциями - так я смогу улучшить свою работу. Что ты <br/> чувствуешь после урока?</Typography>
                <div className={styles.FidBackList}>
                    <Selector iconVariant={'emoji-anxiety'} isSelected={false}>Вдохновение и идеи</Selector>
                    <Selector iconVariant={'emoji-anxiety'} isSelected={false}>Удовлетворение</Selector>
                    <Selector iconVariant={'emoji-anxiety'} isSelected={false}>Уверенность</Selector>
                    <Selector iconVariant={'emoji-anxiety'} isSelected={true}>Разочарование</Selector>
                    <Selector iconVariant={'emoji-anxiety'} isSelected={false}>Замешательство</Selector>
                    <Selector iconVariant={'emoji-anxiety'} isSelected={false}>Беспокойство</Selector>

                </div>
                <Button modifier={'yellow'} className={styles.Button}>Отправить фидбек</Button>
            </div>
        </div>
    );
};

export default Lesson;
