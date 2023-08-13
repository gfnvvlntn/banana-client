import React from 'react';
import Typography from "../../components/typography/Typography";
import styles from './styles.module.scss'
import Icon from "../../components/icon/Icon";
import Photo from '../../assets/icons/Photo.png'
import { infoList} from "./common";


const Home = ():React.ReactElement => {
    return (
        <div className={styles.Container}>
            <Typography modifier={'H1'}>
                Привет! Меня зовут Валентин. <br/>
                Моё любимое занятие — программирование. <br/>
                И вот несколько ответов на вопрос почему:
            </Typography>
            <div className={styles.Content}>
                <div className={styles.Description}>
                    {infoList.map((info, index) => (
                        <div key={index} className={styles.DescriptionItem}>
                        <Icon variant={'chevron-circle-right'} modifier={"size24"}/>
                        <Typography modifier={'Text2'}>{info}</Typography>
                        </div>
                    ))}
                </div>
                <div className={styles.Photos}>
                    <img className={styles.Photo} src={Photo} alt=""/>
                    <img className={styles.Photo} src={Photo} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Home;
